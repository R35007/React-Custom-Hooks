import { useState } from 'react';
import { usePrevious } from '../Hooks';

export const UsePrevious = () => {
  const [count, setCount] = useState(1);

  const previousCount = usePrevious(count, 1);

  return (
    <>
      <div>Current Count : {count}</div>
      <div>Previous Count : {previousCount}</div>

      <div>Fibonacci Sum: {previousCount}</div>

      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={() => setCount(count => count - 1)}>Decrement</button>
      <button onClick={() => setCount(count => count + (previousCount || 0))}>Fibonacci</button>
    </>
  )
}
