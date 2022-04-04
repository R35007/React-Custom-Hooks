import { useRef } from 'react';
import { useResizeObserver } from '../Hooks';

export const UseResizeObserver = () => {

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const entry = useResizeObserver(textAreaRef);

  const borderBoxSize = {
    inlineSize: entry?.borderBoxSize?.[0]?.inlineSize,
    blockSize: entry?.borderBoxSize?.[0]?.blockSize,
  }

  const contentBoxSize = {
    inlineSize: entry?.contentBoxSize?.[0]?.inlineSize,
    blockSize: entry?.contentBoxSize?.[0]?.blockSize,
  }

  const devicePixelContentBoxSize = {
    inlineSize: entry?.devicePixelContentBoxSize?.[0]?.inlineSize,
    blockSize: entry?.devicePixelContentBoxSize?.[0]?.blockSize,
  }

  return (
    <div style={{ textAlign: "left", fontSize: "1.2rem" }}>
      <div><label>BorderBoxSize: </label> <span>{JSON.stringify(borderBoxSize)}</span></div><br />
      <div><label>ContentBoxSize: </label> <span>{JSON.stringify(contentBoxSize)}</span></div><br />
      <div><label>ContentRect: </label> <span>{JSON.stringify(entry?.contentRect)}</span></div><br />
      <div><label>DevicePixelContentBoxSize: </label> <span>{JSON.stringify(devicePixelContentBoxSize)}</span></div><br />
      <textarea ref={textAreaRef}></textarea>
      <div>Adjust the size of the TextArea to see the effect</div>
    </div>
  )
}
