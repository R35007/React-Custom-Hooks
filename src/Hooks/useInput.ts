import { ChangeEvent, Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react';

type value<T> = T;
type setValue<T> = Dispatch<SetStateAction<T>>;
type bind<T> = {
  value: T,
  onChange: (e: ChangeEvent<any>) => void
}
type error = any;
type reset = () => void;

type ReturnType<T> = [value<T>, setValue<T>, bind<T>, error, reset]


export const useInput = <T>(initialValue: T, validation: (value: T) => boolean = () => true): ReturnType<T> => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(() => validation(value));

  const _setValue = useCallback(v => {
    const resolvedValue = typeof v === "function" ? v(value) : v;
    setValue(resolvedValue);
    setError(validation(resolvedValue));
  }, [value, validation]);

  const onChange = useCallback(e => {
    const resolvedValue = e?.target?.value;
    setValue(resolvedValue);
    setError(validation(resolvedValue));
  }, [validation])

  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  const bind = useMemo(() => ({ value, onChange }), [value, onChange]);

  return [value, _setValue, bind, error, reset]
}
