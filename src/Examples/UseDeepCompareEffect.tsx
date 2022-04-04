import { useEffect, useRef, useState } from 'react';
import { useCounter, useDeepCompareEffect } from '../Hooks';

export const UseDeepCompareEffect = () => {

  const [age, setAge] = useState(0);
  const [count, _, { increment }] = useCounter(1);

  const useEffectCount = useRef(1);
  const useDeepComparEffectCount = useRef(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const person = { name: "Siva", age };

  useEffect(() => {
    useEffectCount.current++;
  }, [person])

  useDeepCompareEffect(() => {
    useDeepComparEffectCount.current++;
  }, [person])

  return (
    <>
      <div>Person : {JSON.stringify(person)}</div><br />
      <div>Other Counter : {count}</div><br />
      <div>UseEffectCount : {useEffectCount.current}</div>
      <div>UseDeepComparEffectCount : {useDeepComparEffectCount.current}</div><br />
      <button onClick={() => setAge(age => age + 1)} > Increment Age</button>
      <button onClick={increment} >Set Other Counter</button>
    </>
  )
}
