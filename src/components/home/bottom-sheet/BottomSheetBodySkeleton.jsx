import { useRef } from "react";
import styled, { css } from "styled-components";
import { BottomSheetBodyBox, Wrapper } from "./bottomSheetStyles";
import { useRecoilState } from "recoil";
import { favBusStopList } from "@recoil/favorites";
import Skeleton from "../../common/Skeleton";
import { Fragment } from "react";

const BottomSheetBodySkeleton = () => {
  const [favoriteBusStopList, setFavoriteBusStopList] =
    useRecoilState(favBusStopList);

  const bottomBody = useRef(null);

  return (
    <Wrapper>
      <BottomSheetBodyBox ref={bottomBody}>
        {favoriteBusStopList
          ? favoriteBusStopList.map((list, index) => (
              <Fragment key={index}>
                {list.bus ? (
                  <FavoriteListBox>
                    <div className='row'>
                      <Skeleton className='title-skeleton' marginRight='3rem' />
                      <Skeleton className='button-skeleton' />
                      <Skeleton className='sub-title-skeleton' />
                    </div>
                    <Skeleton className='contents-box-skeleton' />
                  </FavoriteListBox>
                ) : (
                  <FavoriteListBox onlyBusStop>
                    <div className='row'>
                      <Skeleton className='title-skeleton' marginRight='3rem' />
                      <Skeleton className='button-skeleton' />
                      <Skeleton className='sub-title-skeleton' />
                    </div>
                  </FavoriteListBox>
                )}
              </Fragment>
            ))
          : ""}
      </BottomSheetBodyBox>
    </Wrapper>
  );
};

const FavoriteListBox = styled.div`
  height: 20vh;
  margin: 0.5rem;
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
    width: 50vw;
    height: 3.5vh;
  }

  .button-skeleton {
    width: 15vw;
    height: 4vh;
  }

  .bus-list-skeleton {
    width: 20vw;
    height: 5vh;
  }
  .sub-title-skeleton {
    width: 55vw;
    height: 2.5vh;
    margin: 0;
  }

  .contents-box-skeleton {
    margin-top: 0.5rem;
    width: 80vw;
    height: 8vh;
  }
`;

export default BottomSheetBodySkeleton;
