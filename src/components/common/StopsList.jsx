import { useRecoilValue } from "recoil";
import { favoritesState } from "../../atom";
import Stop from './Stop';

const StopList = () => {

const stopList = useRecoilValue(favoritesState)

    return(
     <>
  {
    stopList.map((stopItem)=>(
      <Stop key={stopItem.id} item={stopItem}  />
    ))
  }
     </>
    )
}

export default  StopList;
