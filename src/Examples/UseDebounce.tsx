import React, { ChangeEvent, useState } from 'react';
import { useDebounce } from '../Hooks';

export const UseDebounce = () => {
  const [value, setValue] = useState('Siva');
  const [_debouncedValue, setDebouncedValue] = useState(value);

  const debouncedValue = useDebounce<string>(() => {
    setDebouncedValue(value);
  }, value, 1000)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <p>Value real-time: {value}</p>
      <p>Debounced value: {debouncedValue}</p>
      <p>Callback Debounced value: {_debouncedValue}</p>

      <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}
