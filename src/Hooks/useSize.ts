import { RefObject } from 'react';
import { useResizeObserver } from './useResizeObserver';

export const useSize = (ref: RefObject<Element>): DOMRectReadOnly => {
  const entry = useResizeObserver(ref);
  return entry.contentRect
}
