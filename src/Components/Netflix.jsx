
import dataSeries from '../Api/seriesData.json';
import Cardfile from './Cardfile';

function Netflix(){
    return(
        <>
        <h1>NetFlix Top 10 Rating series...!</h1>
        <ul>
{dataSeries.map((currEle)=>{
    return (
        <Cardfile key={currEle.id} currEle={currEle} />
    )
})

}
        </ul>
        </>
    )
}

export default Netflix;