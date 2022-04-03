import { useCountdown } from '../Hooks'

export const UseCountdown = () => {

  const [count, setCount, isPlaying, { start, stop, reset, toggle }] = useCountdown({
    seconds: 5,
    interval: 300,
  })

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={toggle}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setCount(10)}>Set Count By 10</button>
    </div>
  )
}
