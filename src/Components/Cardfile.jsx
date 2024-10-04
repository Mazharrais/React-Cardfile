

import React from 'react'

function Cardfile({currEle}) {

  const btn_style ={
    padding : "1.2rem 2.4rem",
    border : "none",
    fontSize : "1.6rem",
    backgroundColor : `${currEle.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color : "var(--btn-color)",
    fontWeight: 'bold',
    cursor: 'pointer',
  }

  const ratingClass = currEle.rating >= 8.5 ? "super_hit" : "average";

  return (
    <li className='card'>
            <div>
                <img src={currEle.img_url} alt="qot.jpg" width='40%' height='40%' />
            </div>
            <div className='card-content'>

            <h2>Name: {currEle.name}</h2>
            <h3>Rating: <span className={`rating ${ratingClass}`}>{currEle.rating} </span></h3>
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
