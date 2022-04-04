import React, { useRef } from 'react';
import { useSize } from '../Hooks';

export const UseSize = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const size = useSize(textAreaRef);

  return (
    <>
      <h3>Size : {JSON.stringify(size)}</h3><br />
      <textarea ref={textAreaRef}></textarea>
      <p>Adjust the size of the TextArea to see the effect</p>
    </>
  )
}
