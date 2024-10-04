import React from 'react'
import Welcome from './Welcome'

function Eventprops() {

    function handleEventClick (user){
      alert(`Hey, ${user}`)
    }

    function handleHover(){
        alert('Thanks for Hovering me...!')
    }

  return (
    <>
      
    <Welcome onClick={()=>handleEventClick('Mazhar')}
    onMouseEnter={handleHover} />

    </>
  )
}

export default Eventprops

