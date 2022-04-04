import { useCallback, useEffect, useRef } from 'react';

type Clear = () => void;
type Reset = () => void;

export const useInterval = (callback: () => void, delay?: number | null): [Clear, Reset] => {
  const callbackRef = useRef(callback);
  const intervalRef = useRef<any>();

  // Remember the latest callback if it changes.
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    if (!delay && delay !== 0) return;
    intervalRef.current = setInterval(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    intervalRef.current && clearInterval(intervalRef.current)
  }, [])

  // Set up the timeout.
  useEffect(() => {
    set();
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return [clear, reset]
}