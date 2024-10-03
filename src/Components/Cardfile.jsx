

import React from 'react'

function Cardfile({currEle}) {
  return (
    <li>
            <div>
                <img src={currEle.img_url} alt="qot.jpg" width='40%' height='40%' />
            </div>
            <h2>Name: {currEle.name}</h2>
            <h3>Rating: {currEle.rating}</h3>
            <p>Summary: {currEle.description}</p>
            <p>Genre: {currEle.genre}</p>
            <p>Cast: {currEle.cast}</p>
            <a href={currEle.watch_url} target='blank'>
                <button>Watch Now</button>
            </a>
        </li>
  )
}

export default Cardfile;
