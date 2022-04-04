import { useIsOnline } from '../Hooks';

export const UseIsOnline = () => {

  const isOnline = useIsOnline();

  return (
    <>
      <h2>isOnline : {isOnline.toString()}</h2>
      <p>Change the Network to Online or Offline in developer tools to see the effect</p>
    </>
  )
}
