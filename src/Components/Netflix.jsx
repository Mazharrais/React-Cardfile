
import dataSeries from '../Api/seriesData.json';
import Cardfile from './Cardfile';

function Netflix(){
    return(
        <>
       
        <ul className='grid grid-three--cols'>
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