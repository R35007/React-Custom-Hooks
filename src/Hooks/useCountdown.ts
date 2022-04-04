import { Dispatch, SetStateAction } from 'react';
import { useBoolean } from './useBoolean';
import { useCounter } from './useCounter';
import { useInterval } from './useInterval';
import { useUpdateEffect } from './useUpdateEffect';

interface UseCountdownType {
  seconds: number;
  interval?: number;
  isIncrement?: boolean;
  min?: number;
  max?: number;
}
interface CountdownHelpers {
  start: () => void;
  stop: () => void;
  reset: () => void;
  toggle: () => void;
}

type Count = number;
type SetCount = Dispatch<SetStateAction<number>>;
type isPlaying = boolean;

type ReturnType = [Count, SetCount, isPlaying, CountdownHelpers];

/**
 *
 * @param seconds the countdown's number, generally time seconds
 * @param interval the countdown's interval, milliseconds
 * @param isIncrement determine the countdown is increment, otherwise is decrement
 * @param min determine minimum value of the counter
 * @param max determine the maximum value of the counter
 * The counter Stops if it reaches the min or max value if specified
 * @returns
 */
export const useCountdown = ({
  seconds,
  interval = 1000,
  isIncrement = true,
  min,
  max
}: UseCountdownType): ReturnType => {

  const [count, setCount, { increment, decrement, reset: resetCounter }] = useCounter(seconds);

  /**
   * Note: used to control the useInterval
   * running: If true, the interval is running
   * start: Should set running true to trigger interval
   * stop: Should set running false to remove interval
   */
  const { value: isPlaying, setTrue: startCountdown, setFalse: stopCountdown } = useBoolean(false);

  /**
   * Will set running false and reset the seconds to initial value
   */
  const start = () => {
    if (typeof min !== "undefined" && count <= min) return;
    if (typeof max !== "undefined" && count >= max) return;
    startCountdown();
  }

  const stop = stopCountdown;

  const reset = () => {
    stopCountdown()
    resetCounter()
  }

  const toggle = () => {
    isPlaying ? stop() : start();
  }

  useInterval(isIncrement ? increment : decrement, isPlaying ? interval : null);

  useUpdateEffect(() => {
    if (typeof min !== "undefined" && count <= min) {
      stopCountdown();
    }

    if (typeof max !== "undefined" && count >= max) {
      stopCountdown();
    }
  }, [count]);

  return [count, setCount, isPlaying, { start, stop, reset, toggle }]
}