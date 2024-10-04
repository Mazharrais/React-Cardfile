
import React from 'react'

function Welcome({onClick, onMouseEnter}) {
  return (
    <>
      <button onClick= {onClick}>Click Me Event</button>
      <button onMouseEnter={onMouseEnter}>Hover Me Hover</button>
    </>
  )
}

export default Welcome;
