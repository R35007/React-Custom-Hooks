import { useState } from 'react'
import { useTimeout } from '../Hooks'


export const UseTimeout = () => {
  const [visible, setVisible] = useState(true);

  const hide = () => setVisible(false);

  const [clear, reset] = useTimeout(hide, 5000);

  return (
    <div>
      <p>
        {visible
          ? "I'm visible for 5000ms"
          : 'You can no longer see this content'}
      </p>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  )
}
