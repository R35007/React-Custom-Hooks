import { useLocalStorage } from '../Hooks'

export const UseLocalStorage = () => {

  const [name, setName] = useLocalStorage("name", "")

  return (
    <>
      <label>Name: </label> <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </>
  )
}
