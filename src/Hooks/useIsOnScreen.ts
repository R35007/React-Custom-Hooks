import { RefObject } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export const useIsOnScreen = (elementRef: RefObject<Element>, args: Args = {}): boolean => {
  const entry = useIntersectionObserver(elementRef, args);
  return !!entry?.isIntersecting
}