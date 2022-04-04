import { useLocalStorage, useSessionStorage } from '../Hooks';

export const UseStorage = () => {

  const [name, setName, removeName] = useLocalStorage("name", "");
  const [age, setAge, removeAge] = useSessionStorage("age", 0);

  return (
    <>
      <label>Name: </label> <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
      <label>Age: </label> <input type="number" value={age} onChange={(e) => setAge(e.target.value)} /> <br />
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </>
  )
}
