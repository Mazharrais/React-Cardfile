

import React from 'react'

const ChildtoParent = (props) => {
    let user = ['Mazhar', 'Shani','Danish','Azhar'];
  return (
    <>
      <h2>Child To Parent Components Data Passing...!</h2>
      <button onClick={()=> props.func(user)}>Click Me</button>
    </>
  )
}

export default ChildtoParent;
