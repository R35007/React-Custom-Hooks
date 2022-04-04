import { Dispatch, useCallback, useEffect, useState } from 'react';

export const useLocalStorage = (key: any, defaultValue: any) => {
  return useStorage(key, defaultValue, window.localStorage)
}

export const useSessionStorage = (key: any, defaultValue: any) => {
  return useStorage(key, defaultValue, window.sessionStorage)
}

const getStorageValue = (key: any, defaultValue: any, storage: Storage) => {
  const storageValue = storage.getItem(key);
  if (storageValue !== null) return JSON.parse(storageValue);

  return typeof defaultValue === "function" ? defaultValue() : defaultValue;
}

export const useStorage = (key: string, defaultValue: any, storage: Storage): [any, Dispatch<any>, () => void] => {
  const [value, setvalue] = useState(() => getStorageValue(key, defaultValue, storage));

  useEffect(() => {
    if (value === undefined) return storage.removeItem(key);
    storage.setItem(key, JSON.stringify(value))
  }, [key, value, storage])

  const remove = useCallback(() => {
    setvalue(undefined);
  }, [])

  return [value, setvalue, remove];
}
