import { useRef } from 'react';

export const usePrevious = <T>(value: T, initialPreviousValue?: T): T | undefined => {
  const currentValueRef = useRef<T>(value);
  const previousValueRef = useRef<T | undefined>(initialPreviousValue);

  if (currentValueRef.current !== value) {
    previousValueRef.current = currentValueRef.current;
    currentValueRef.current = value;
  }

  return previousValueRef.current
}
