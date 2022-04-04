import { useBoolean } from '../Hooks';
import useRenderCount from '../Hooks/useRenderCount';

export const UseRenderCount = () => {

  const { value, toggle } = useBoolean(false);
  const renderCount = useRenderCount();

  return (
    <>
      <div>RenderCount : {renderCount}</div>
      <div>Value : {value.toString()}</div>
      <button onClick={toggle}>Toggle</button>
    </>
  )
}
