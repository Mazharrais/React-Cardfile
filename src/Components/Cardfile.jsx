

import React from 'react'

function Cardfile({currEle}) {
  return (
    <li className='card'>
            <div>
                <img src={currEle.img_url} alt="qot.jpg" width='40%' height='40%' />
            </div>
            <div className='card-content'>

            <h2>Name: {currEle.name}</h2>
            <h3>Rating: {currEle.rating}</h3>
            <p>Summary: {currEle.description}</p>
            <p>Genre: {currEle.genre}</p>
            <p>Cast: {currEle.cast}</p>
            <a href={currEle.watch_url} target='blank'>
                <button>Watch Now</button>
            </a>
            </div>
        </li>
  )
}

export default Cardfile;
