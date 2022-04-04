import React from 'react';
import { useWindowSize } from '../Hooks';

export const UseWindowSize = () => {

  const windowSize = useWindowSize();

  return (
    <div>WindowSize : {JSON.stringify(windowSize)}</div>
  )
}
