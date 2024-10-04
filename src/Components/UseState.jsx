
import React, { useState } from 'react'

function UseState() {

  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Wel Come to Use State Hook in React JS...!</h1>
      <h2>{count}</h2>
      <button onClick={()=> setCount(count +1)}>Imcrement</button>
    </>
  )
}

export default UseState;
