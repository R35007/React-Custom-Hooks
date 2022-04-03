import { ChangeEvent, useState } from 'react';

export const useInput = (initialValue: any): [any, { value: any, onChange: (e: ChangeEvent<HTMLInputElement>) => void }, Function] => {
  const [value, setValue] = useState(initialValue);

  const reset = () => setValue(initialValue);

  const bind = { value, onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value) };

  return [value, bind, reset]
}
