import { useRef } from "react";
import styled, { css } from "styled-components";
import { BottomSheetBodyBox, Wrapper } from "./bottomSheetStyles";
import { useRecoilState } from "recoil";
import { favBusStopList } from "@recoil/favorites";
import Skeleton from "../../common/Skeleton";
import media from "@lib/styles/media";

const BottomSheetBodySkeleton = () => {
  const [favoriteBusStopList, setFavoriteBusStopList] =
    useRecoilState(favBusStopList);
  const bottomBody = useRef(null);

  return (
    <Wrapper>
      <BottomSheetBodyBox ref={bottomBody}>
        {favoriteBusStopList &&
          favoriteBusStopList.map((list, index) => (
            <FavList key={index}>
              <FavoriteListBox onlyBusStop={!list.bus ? true : ""}>
                <Skeleton className='title-skeleton' marginRight='4rem' />
                <Skeleton className='button-skeleton' />
                <Skeleton className='sub-title-skeleton' />
                {list.bus && <Skeleton className='contents-box-skeleton' />}
              </FavoriteListBox>
            </FavList>
          ))}
      </BottomSheetBodyBox>
    </Wrapper>
  );
};

const FavList = styled.div`
  padding: 0.5rem;
`;

const FavoriteListBox = styled.div`
  width: 100%;
  height: 20vh;
  box-shadow: 0px 4px 15px rgba(65, 97, 119, 0.2);
  border-radius: 10px;
  position: relative;
  padding: 0.8rem;
  ${(props) =>
    props.onlyBusStop &&
    css`
      height: 10vh;
      }
    `}

  .title-skeleton {
    width: 46vw;
    height: 3.5vh;
    ${media.small} {
      width: 43vw;
    }
  }

  .sub-title-skeleton {
    width: 55vw;
    height: 2.5vh;
    margin: 0;
    margin-top: 0.1rem;
  }

  .button-skeleton {
    width: 15vw;
    height: 4vh;
  }

  .contents-box-skeleton {
    margin: 0;
    margin-top: 0.5rem;
    width: 80vw;
    height: 8vh;
  }
`;

export default BottomSheetBodySkeleton;
