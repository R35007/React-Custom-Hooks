import { Dispatch, SetStateAction, useState } from 'react'

interface ReturnType {
  count: number
  increment: (step?: number) => void
  decrement: (step?: number) => void
  reset: () => void
  setCount: Dispatch<SetStateAction<number>>
}

export const useCounter = (initialValue?: number): ReturnType => {
  const [count, setCount] = useState(initialValue || 0)

  const increment = (step: number = 1) => setCount(x => x + step)
  const decrement = (step: number = 1) => setCount(x => x - step)
  const reset = () => setCount(initialValue || 0)

  return {
    count,
    setCount,
    increment,
    decrement,
    reset
  }
}