import { Dispatch, useEffect, useState } from 'react';

const getSavedValue = (key: any, initialValue: any) => {
  const savedValue = JSON.parse(localStorage.getItem(key) || '""');
  return savedValue ?? (initialValue instanceof Function ? initialValue() : initialValue);
}

export const useLocalStorage = (key: string, initialValue: any): [any, Dispatch<any>] => {
  const [value = "", setvalue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return [value, setvalue];
}
