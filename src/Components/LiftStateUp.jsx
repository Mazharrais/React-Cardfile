

import React from 'react'
import ChildtoParent from './ChildtoParent';

const LiftStateUp = () => {

    function sayHello(n){
        document.write(n);
        
    }

  return (
    <>
      <h1>Lifting State Up concept here...!</h1>
      <ChildtoParent func={sayHello}/>
    </>
  )
}

export default LiftStateUp;
