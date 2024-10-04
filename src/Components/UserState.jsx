
import React, { useState } from 'react'

function UserState() {
    const  [users, setUsers] = useState([
        {name : "mazhar", age : 29},
        {name : "azhar", age: 32},
        {name : "shani", age : 37},
        {name : "Danish", age : 40},
        {name : "Samra", age : 27},
        {name : "Fareen", age : 42}
    ])
  return (
    <>
      <ul>
        {
            users.map((currEle, index)=>{
                return(
                    <li key={index}>
                        {currEle.name} - {currEle.age}
                        
                    </li>
                )
            })
        }
      </ul>
    </>
  )
}

export default UserState;
