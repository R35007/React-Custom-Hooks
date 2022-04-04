import React from 'react'
import { useWindowSize } from '../Hooks'

export default function UseWindowSize() {

  const windowSize = useWindowSize();

  return (
    <div>WindowSize : {JSON.stringify(windowSize)}</div>
  )
}
