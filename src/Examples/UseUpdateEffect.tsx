import { useEffect, useState } from 'react';
import { useUpdateEffect } from '../Hooks';

export const UseUpdateEffect = () => {
  const [data, setData] = useState(0);


  useEffect(() => {
    // comes in also for a first render
    console.log('Normal useEffect', { data });
  }, [data])

  useUpdateEffect(() => {
    // avoids first render and comes in only on any update
    console.log('Update useEffect only', { data })
  }, [data]);

  return (
    <div>
      <p>Open your console </p>
      <button onClick={() => setData(Date.now())}> Update data </button>
    </div>
  )
}
