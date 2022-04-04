import { useMediaQuery } from '../Hooks'

export const UseMediaQuery = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <h2>
      {`The view port is ${matches ? 'at least' : 'less than'} 768 pixels wide`}
    </h2>
  )
}
