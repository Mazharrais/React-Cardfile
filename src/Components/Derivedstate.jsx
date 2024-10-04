

import React, { useState } from 'react'

function Derivedstate() {
 
    const [users, setUsers] = useState([
        {name : "mazhar", age : 29},
        {name : "azhar", age: 32},
        {name : "shani", age : 37},
        {name : "Danish", age : 40},
        {name : "Samra", age : 27},
        {name : "Fareen", age : 42}
    ])

    const userCount = users.length;

    const averageAge = users.reduce(((acc,currEle)=>{
      return acc + currEle.age
    }),0)/ userCount;


  return (
    <>
<p>Total User : {userCount}</p>
<p>Average Age : {averageAge}</p>      

    </>
  )
}

export default Derivedstate;
