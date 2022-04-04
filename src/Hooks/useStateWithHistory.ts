import { useCallback, useRef, useState } from 'react';

export const useStateWithHistory = (defaultValue: any, { capacity = 10 }: { capacity?: number } = {}) => {
  const [value, setValue] = useState(defaultValue);
  const historyRef = useRef([value]);
  const pointerRef = useRef(0);

  const set = useCallback((v) => {
    const resolvedValue = typeof v === "function" ? v(value) : v;

    if (historyRef.current[pointerRef.current] !== resolvedValue) {
      // If current pointer is not pointing to last index of the history
      // then clear all the preceeding index values from the pointer
      // Ex : history = [ 1,2,3,4,5,6,7 ], pointer = 3, value = 10, then make history = [ 1,2,3,4 ]
      if (pointerRef.current < historyRef.current.length - 1) {
        historyRef.current.splice(pointerRef.current + 1)
      }

      // injecting new value
      // history = [ 1,2,3,4,10 ]
      historyRef.current.push(resolvedValue);

      // If the histroy lenght exceeds the capacity then clear the old values
      // Ex: history = [ 1,2,3,4,5,6,7,8,9,10 ], capacity = 5, then make history = [ 6,7,8,9,10 ] 
      while (historyRef.current.length > capacity) {
        historyRef.current.shift();
      }

      // set pointer to the last index of the history
      pointerRef.current = historyRef.current.length - 1
    };

    setValue(resolvedValue);
  }, [capacity, value]);

  const backward = useCallback(() => {
    if (pointerRef.current === 0) return;
    pointerRef.current--;
    setValue(historyRef.current[pointerRef.current])
  }, [])

  const forward = useCallback(() => {
    if (pointerRef.current === historyRef.current.length - 1) return;
    pointerRef.current++;
    setValue(historyRef.current[pointerRef.current])
  }, [])

  const go = useCallback((index) => {
    if (index < 0 || index > historyRef.current.length - 1) return;
    pointerRef.current = index;
    setValue(historyRef.current[pointerRef.current]);
  }, [])

  return [value, set, { history: historyRef.current, pointer: pointerRef.current, forward, backward, go }]

}
