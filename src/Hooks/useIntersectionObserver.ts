import { RefObject, useEffect, useState } from 'react';

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  }: Args = {},
): IntersectionObserverEntry => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>({} as IntersectionObserverEntry)

  const frozen = entry?.isIntersecting && freezeOnceVisible

  useEffect(() => {
    const node = elementRef?.current // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen || !node) return

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(([entry]) => { setEntry(entry) }, observerParams)

    observer.observe(node)

    return () => observer.disconnect()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen])

  return entry
}