import { useCopyToClipboard } from '../Hooks';

export const UseCopyToClipboard = () => {
  const [copy, isCpoied, value] = useCopyToClipboard();
  return (
    <>
      <h1>Click to copy:</h1>
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <button onClick={() => copy('A')}>A</button>
        <button onClick={() => copy('B')}>B</button>
        <button onClick={() => copy('C')}>C</button>
      </div>
      <p>Copied value: {value ?? 'Nothing is copied yet!'}</p>
      {isCpoied && <p>Successfully Copied !</p>}
    </>
  )
}
