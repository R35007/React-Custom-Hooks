import { RefObject, useCallback, useEffect, useRef } from 'react';
import { useEventListener } from './useEventListener';

type Listener = (event: MouseEvent) => void

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  target: RefObject<T>,
  listener: Listener,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
) => {

  const savedListner = useRef(listener);

  useEffect(() => {
    savedListner.current = listener;
  }, [listener])

  const eventHandler = useCallback((event: any) => {
    if (event.defaultPrevented) {
      return;
    }

    // Checks if the mouse is clicked outside the target container
    if (target.current && !target.current.contains(event.target)) {
      savedListner.current(event)
    }
  }, [target]);


  useEventListener(mouseEvent, eventHandler);
}