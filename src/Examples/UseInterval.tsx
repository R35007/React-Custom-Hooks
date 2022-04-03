import { useState } from 'react';
import { useInterval } from '../Hooks';

export const UseInterval = () => {
  const [count, setCount] = useState<number>(0)
  const [isPlaying, setPlaying] = useState<boolean>(false);

  const incrementCount = () => { setCount(count + 1) };

  const [clear, reset] = useInterval(incrementCount, isPlaying ? 1000 : null);

  return (
    <>
      <h1>Count changes for every 1000ms</h1>
      <h2>{count}</h2>
      <button onClick={() => setPlaying(!isPlaying)}>
        {isPlaying ? 'pause' : 'play'}
      </button>
      <button onClick={clear}>Clear</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}
