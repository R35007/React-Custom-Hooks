import { useRef } from 'react'
import { useHover } from '../Hooks'

export const UseHover = () => {
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)

  return (
    <div ref={hoverRef}>
      {`The current div is ${isHover ? `hovered` : `unhovered`}`}
    </div>
  )
}
