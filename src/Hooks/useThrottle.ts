import { useEffect, useRef, useState } from 'react';
import { useBoolean } from './useBoolean';

export const useThrottle = <T>(callback: () => void, value: T, delay?: number): T | undefined => {
  const [throttledValue, setThrottledValue] = useState<T | undefined>(value);

  const callbackRef = useRef(callback);

  const waitingCallbackRef = useRef<any>(null);
  const newValueRef = useRef<any>("");

  // Remember the latest callback if it changes.
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const { value: shouldWait, setValue: setShouldWait } = useBoolean(false);

  useEffect(() => {
    newValueRef.current = value;

    const timeoutFunc = () => {
      if (waitingCallbackRef.current === null) {
        setShouldWait(false)
      } else {
        setThrottledValue(newValueRef.current);
        callbackRef.current();
        waitingCallbackRef.current = null;
        setTimeout(timeoutFunc, delay);
      }
    }


    if (shouldWait) {
      waitingCallbackRef.current = callbackRef.current;
      return
    };

    setThrottledValue(newValueRef.current);
    callbackRef.current();
    setShouldWait(true);

    setTimeout(timeoutFunc, delay);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return throttledValue
}