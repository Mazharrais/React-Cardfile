import dataSeries from '../Api/seriesData.json';

function Netflix(){
    return(
        <>
        <ul>
{dataSeries.map((currEle)=>{
    return (
        <li key={currEle.id}>
            <div>
                <img src={currEle.img_url} alt="qot.jpg" width='40%' height='40%' />
            </div>
            <h2>Name: {currEle.name}</h2>
            <h3>Rating: {currEle.rating}</h3>
            <p>Summary: {currEle.summary}</p>
            <p>Genre: {currEle.genre}</p>
            <p>Cast: {currEle.cast}</p>
            <a href={currEle.watch_url} target='blank'>
                <button>Watch Now</button>
            </a>
        </li>
    )
})

}
        </ul>
        </>
    )
}

export default Netflix;