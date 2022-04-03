import { useLocalStorage, useUpdateLogger } from '../Hooks'

export const UseUpdateLogger = () => {

  const [name, setName] = useLocalStorage("name", "");
  const [age, setAge] = useLocalStorage("age", 0);

  useUpdateLogger(name); // Logs only when name changes
  // console.log(age); // Logs every time whenever any state variable changes. Logs age even on name change

  return (
    <>
      <label>Name: </label> <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
      <label>Age: </label><input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
    </>
  )
}
