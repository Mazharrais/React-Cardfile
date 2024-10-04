

import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const [step,setStep] = useState();

    function handleIncrement(){
        setCount(count + step);
    }

    function handleDecrement(){
        setCount(count - step);
    }

    function resetCount(){
        setCount(0);
    }

  return (
    <>
    <div style={{textAlign : "center"}}>

    <h1>Count : {count}</h1>
      <div>
        <input type="text" 
        value={step}
        onChange={(e)=> setStep(Number(e.target.value))}
        />
      </div>
      <br/>
      <br/>
      <br/>
      <button onClick={handleIncrement} disabled={count >= 100  }> Increment </button>
      <br/>
      <br/>
      <br/>
      <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
      <br/>
      <br/>
      <br/>
      <button onClick={resetCount}>Reset</button>
        </div>
    </>
  )
}

export default Counter;
