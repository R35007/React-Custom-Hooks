import { useCounter } from '../Hooks'

export const UseCounter = () => {
  const { count, setCount, increment, decrement, reset } = useCounter(0);

  const multiplyBy2 = () => setCount(x => x * 2)

  return (
    <>
      <p>Count is {count}</p>
      <button onClick={() => increment()}>Increment By 1</button>
      <button onClick={() => increment(5)}>Increment By 5</button>
      <button onClick={() => decrement()}>Decrement By 1</button>
      <button onClick={() => decrement(5)}>Decrement By 5</button>
      <button onClick={reset}>Reset</button>
      <button onClick={multiplyBy2}>Multiply By 2</button>
    </>
  )
}
