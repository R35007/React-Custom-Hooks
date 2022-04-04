import React, { ChangeEvent, useState } from 'react';
import { useThrottle } from '../Hooks';

export const UseThrottle = () => {
  const [value, setValue] = useState("");
  const [_throttledValue, setThrottledValue] = useState(value);

  const throttledValue = useThrottle<string>(() => {
    setThrottledValue(value);
  }, value, 1000)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <p>Value real-time: {value}</p>
      <p>Throttled value: {throttledValue}</p>
      <p>Callback Throttled value: {_throttledValue}</p>

      <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}
