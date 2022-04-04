import { useStateWithHistory } from '../Hooks'

export const UseStateWithHistory = () => {

  const [value, setValue, { history, pointer, go, forward, backward }] = useStateWithHistory(0);

  return (
    <>
      <div>history : {history.join(", ")}</div>
      <div>current Value: {value}</div>
      <div>Pointer: {pointer}</div>

      <button onClick={() => setValue((value: any) => value + 1)}>Increment</button>
      <button onClick={forward}>Forward</button>
      <button onClick={backward}>Backward</button>
      <button onClick={() => go(3)}>Go to Index 3</button>
    </>
  )
}
