import { RefObject, useEffect, useState } from 'react';

export const useResizeObserver = (elementRef: RefObject<Element>): ResizeObserverEntry => {
  const [entry, setEntry] = useState({} as ResizeObserverEntry);

  useEffect(() => {
    const node = elementRef?.current // DOM Ref
    const hasIOSupport = !!window.ResizeObserver;

    if (!hasIOSupport || !node) return

    const observer = new ResizeObserver(([entry]) => { setEntry(entry) });

    observer.observe(elementRef.current);

    return () => observer.disconnect();

  }, [elementRef])

  return entry
}
