
import dataSeries from '../Api/seriesData.json';
import Cardfile from './Cardfile';
import Event from './Event';
import Eventprops from './Eventprops';

function Netflix(){
    return(
        <>
       
        <ul className='grid grid-three--cols'>
{dataSeries.map((currEle)=>{
    return (
        <>
        
        <Cardfile key={currEle.id} currEle={currEle} />
         {/* <Event />
         <Eventprops /> */}
        </>
        
    )
})

}
        </ul>
        </>
    )
}

export default Netflix;