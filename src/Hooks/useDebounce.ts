import { useEffect, useRef, useState } from 'react'
import { useTimeout } from './useTimeout';

export const useDebounce = <T>(callback: () => void, value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  const callbackRef = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])


  const [clear, reset] = useTimeout(() => {
    setDebouncedValue(value);
    callbackRef.current();
  }, delay);


  useEffect(() => {
    reset();
  }, [value, reset]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(clear, []);

  return debouncedValue
}