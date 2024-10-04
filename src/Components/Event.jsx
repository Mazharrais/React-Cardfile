

import React from 'react'

function handleButtonClick(event){
    console.log(`${event} this is react js series for beginer...!`);
    
    alert(`Hi, ${event} WelCome to React JS series` )
}


function Event() {


  return (
    <>
      <button onClick={()=>handleButtonClick('mazhar')}>Click Me...!</button>
    </>
  )
}

export default Event;
