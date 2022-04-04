import { Dispatch, SetStateAction, useCallback, useState } from 'react'

type CounterHelpers = {
  increment: (step?: any) => void
  decrement: (step?: any) => void
  multiply: (step?: any) => void
  reset: () => void
}

type Count = number;
type SetCount = Dispatch<SetStateAction<number>>;

type ReturnType = [Count, SetCount, CounterHelpers];

export const useCounter = (initialValue?: number): ReturnType => {
  const [count, setCount] = useState(initialValue || 0);

  const getInt = useCallback((step: any) => (isNaN(parseInt(step)) ? 1 : parseInt(step)), []);

  const increment = useCallback((step: any = 1) => setCount(x => x + getInt(step)), [getInt]);
  const decrement = useCallback((step: any = 1) => setCount(x => x - getInt(step)), [getInt]);
  const multiply = useCallback((step: any = 2) => setCount(x => x * getInt(step)), [getInt]);
  const reset = useCallback(() => setCount(initialValue || 0), [initialValue]);

  return [count, setCount, { increment, decrement, multiply, reset }]
}