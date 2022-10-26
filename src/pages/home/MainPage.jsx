import { Helmet } from "react-helmet-async";
import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { selectedStation } from "@recoil/home";
import BusStopInfoPage from "@pages/home/BusStopInfoPage";
import { BottomSheet } from "react-spring-bottom-sheet";
import BottomTab from "@components/common/BottomTab";
import "react-spring-bottom-sheet/dist/style.css";
import useDebounce from "@components/home/hooks/useDebounce";
import BottomSheetHeader from "@components/home/BottomSheetHeader";
// import BottomSheetFooter from "@components/home/BottomSheetFooter";
import BottomSheetBody from "@components/home/BottomSheetBody";
import LargeSearchInput from "@components/search/LargeSearchInput";
import Map from "@components/base/map/Map";
import styled from "styled-components";

function MainPage() {
  const [clickedBusStop, setClickedStation] = useRecoilState(selectedStation);
  const [loadingOpen, setLoadingOpen] = useState(false);
  const sheetRef = useRef();
  const open = useDebounce(loadingOpen, 1000);

  function handleButtonSheet() {
    if (sheetRef.current.height > 120) {
      sheetRef.current.snapTo(({ snapPoints }) => snapPoints[0]);
    } else {
      sheetRef.current.snapTo(({ snapPoints }) => snapPoints[1]);
    }
  }

  return (
    <>
      <Helmet>
        <title>MainPage</title>
      </Helmet>
      {clickedBusStop ? (
        <BusStopInfoPage />
      ) : (
        <>
          <LargeSearchInput />
          <Map />
          <BottomSheet
            open
            blocking={false}
            ref={sheetRef}
            scrollLocking={false}
            snapPoints={({ headerHeight, maxHeight }) => [
              headerHeight,
              (maxHeight - 56) * 0.65,
              maxHeight - 56,
            ]}
            onSpringStart={(event) =>
              event.type === "SNAP" && setLoadingOpen(true)
            }
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
      )}
      <BottomTab />
    </>
  );
}

export default MainPage;
