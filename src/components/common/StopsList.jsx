import { useRecoilValue } from "recoil";
import { favoriteStates } from "../../recoil/home";
import Stop from './Stop';

const StopList = () => {

const stopList = useRecoilValue(favoriteStates)

    return(
     <>
        {
        stopList.map((stopItem)=>{
         const {id,stops} = stopItem;
         return(
            <Stop id={id} stops={stops}/>
         )
        })
        }
     </>
    )
}

export default  StopList;
