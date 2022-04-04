import { useEffect, useState } from 'react';
import { useEventListener } from './useEventListener';

export const useMediaQuery = (query: string, value: any = true, defaultValue: any = false): any => {

  const [isMatches, setIsMatches] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList>();

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMediaQueryList(mediaQueryList);
    setIsMatches(mediaQueryList.matches);
  }, [query]);


  useEventListener("change", (event: any) => setIsMatches(event.matches), mediaQueryList)

  return isMatches ? value : defaultValue
}