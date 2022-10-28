import { Helmet } from "react-helmet-async";
import { useState, useRef, useEffect } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import useDebounce from "@components/home/hooks/useDebounce";
import BottomSheetHeader from "@components/home/BottomSheetHeader";
// import BottomSheetFooter from "@components/home/BottomSheetFooter";
import BottomSheetBody from "@components/home/BottomSheetBody";
import LargeSearchInput from "@components/search/LargeSearchInput";
import Map from "@components/base/map/Map";
import { MdOutlineMyLocation } from "react-icons/md";
import styled from "styled-components";

function MainPage() {
  const [refreshToggle, setRefreshToggle] = useState(false);
  const [loadingOpen, setLoadingOpen] = useState(false);
  const sheetRef = useRef();
  const open = useDebounce(loadingOpen, 1000);

  const refreshPage = () => {
    setRefreshToggle(!refreshToggle);
  };

  function handleButtonSheet() {
    if (sheetRef.current.height > 120) {
      sheetRef.current.snapTo(({ snapPoints }) => snapPoints[0]);
    } else {
      sheetRef.current.snapTo(({ snapPoints }) => snapPoints[1]);
    }
  }

  useEffect(() => {
    return () => {};
  }, [refreshToggle]);

  return (
    <>
      <Helmet>
        <title>MainPage</title>
      </Helmet>
      <LargeSearchInput />
      <Map />
      <LocationBtn>
        <MdOutlineMyLocation onClick={refreshPage} />
      </LocationBtn>

      <BottomSheet
        open
        blocking={false}
        ref={sheetRef}
        scrollLocking={true}
        snapPoints={({ headerHeight, maxHeight }) => [
          headerHeight,
          (maxHeight - 56) * 0.65,
          maxHeight - 56,
        ]}
        onSpringStart={(event) => event.type === "SNAP" && setLoadingOpen(true)}
        header={
          <div>
            <BottomSheetHeader
              onClick={() => {
                handleButtonSheet();
              }}
            />
          </div>
        }
      >
        {open ? <BottomSheetBody /> : <div>loading...</div>}
      </BottomSheet>
    </>
  );
}

const LocationBtn = styled.div`
  border-radius: 50%;
  background-color: #ffffff;
  color: #006ffd;
  z-index: 7;
  position: absolute;
  bottom: 12%;
  display: flex;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  right: 5%;
  width: 3rem;
  height: 3rem;
  svg {
    font-size: 1.6rem;
  }
`;

export default MainPage;
