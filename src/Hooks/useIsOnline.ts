import { useState } from 'react';
import { useEventListener } from './useEventListener';

export const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  console.log(navigator);

  useEventListener("online", () => setIsOnline(navigator.onLine))
  useEventListener("offline", () => setIsOnline(navigator.onLine))

  return isOnline
}
