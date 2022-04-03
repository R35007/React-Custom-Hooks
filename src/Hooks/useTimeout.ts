import { useCallback, useEffect, useRef } from 'react';

type Clear = () => void;
type Reset = () => void;

export const useTimeout = (callback: () => void, delay?: number): [Clear, Reset] => {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<any>();

  // Remember the latest callback if it changes.
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
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