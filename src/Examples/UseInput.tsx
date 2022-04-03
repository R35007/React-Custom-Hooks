import { FormEvent } from 'react';
import { useInput } from '../Hooks';

export const UseInput = () => {

  const [name, bindName, resetName] = useInput("");
  const [age, bindAge, resetAge] = useInput(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Name : ${name}, age : ${age}`);
    resetName();
    resetAge();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label><input type="text" {...bindName} /> <br />
      <label>Age: </label><input type="number" {...bindAge} /> <br />
      <button type="submit">Submit</button>
    </form>
  )
}
