import { RefObject, useEffect, useRef } from 'react';

export const useEventListener = <T extends HTMLElement = HTMLDivElement>(
  eventType: keyof DocumentEventMap,
  listner: Function = () => { },
  target?: RefObject<T>,
  options: object = {}
) => {

  const savedListner = useRef(listner);

  useEffect(() => {
    savedListner.current = listner;
  }, [listner])

  useEffect(() => {

    const targetElement = target?.current || window;

    if (!targetElement?.addEventListener) return;

    const eventListner = (event: Event) => savedListner.current(event);

    targetElement.addEventListener(eventType, eventListner, options);

    return () => { targetElement.removeEventListener(eventType, eventListner, options) };

  }, [eventType, target, options])

}