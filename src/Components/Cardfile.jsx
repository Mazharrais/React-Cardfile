

import React from 'react'

function Cardfile({currEle}) {

  const btn_style ={
    padding : "1.2rem 2.4rem",
    border : "none",
    fontSize : "1.6rem",
    backgroundColor : "var( --bnt-hover-bg-color)",
    color : "var(--bg-color)",
  }

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
                <button style={btn_style}>Watch Now</button>
            </a>
            </div>
        </li>
  )
}

export default Cardfile;
