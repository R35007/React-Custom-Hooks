import { FormEvent } from 'react';
import { useInput } from '../Hooks';

export const UseInput = () => {

  const [name, setName, bindName, isValidName, resetName] = useInput("", (value) => value.length <= 5);
  const [age, setAge, bindAge, isValidAge, resetAge] = useInput(0, (value) => value >= 0 && value <= 25);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Name : ${name}, age : ${age}`);
    resetName();
    resetAge();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label><input type="text" {...bindName} /> <span>isValid: {isValidName.toString()}</span> <br />
      <label>Age: </label><input type="number" {...bindAge} /> <span>isValid: {isValidAge.toString()}</span> <br />
      <button type="submit">Submit</button>
    </form>
  )
}
