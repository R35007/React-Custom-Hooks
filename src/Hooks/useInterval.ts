import { useCallback, useEffect, useRef } from 'react';

type Clear = () => void;
type Reset = () => void;

export const useInterval = (callback: () => void, delay: number | null): [Clear, Reset] => {
  const callbackRef = useRef(callback);
  const intervalRef = useRef<any>();

  // Remember the latest callback if it changes.
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    intervalRef.current = setInterval(() => callbackRef.current(), delay || 0)
  }, [delay])

  const clear = useCallback(() => {
    intervalRef.current && clearInterval(intervalRef.current)
  }, [])

  // Set up the timeout.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) return;
    set();
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return [clear, reset]
}