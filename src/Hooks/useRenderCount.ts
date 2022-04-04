import { useEffect, useRef } from 'react';

export default function useRenderCount(): number {
  const renderCountRef = useRef(0);
  useEffect(() => { renderCountRef.current++ })
  return renderCountRef.current
}
