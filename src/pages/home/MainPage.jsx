import { Helmet } from "react-helmet-async";
import { useState, useRef, useEffect } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import useDebounce from "@components/home/hooks/useDebounce";
import BottomSheetHeader from "@components/home/BottomSheetHeader";
import BottomSheetBody from "@components/home/BottomSheetBody";
import LargeSearchInput from "@components/search/LargeSearchInput";
import Map from "@components/base/map/Map";

function MainPage() {
  const [loadingOpen, setLoadingOpen] = useState(false);
  const sheetRef = useRef();
  const open = useDebounce(loadingOpen, 1000);

  const handleButtonSheet = () => {
    if (sheetRef.current.height > 120) {
      sheetRef.current.snapTo(({ snapPoints }) => snapPoints[0]);
    } else {
      sheetRef.current.snapTo(({ snapPoints }) => snapPoints[1]);
    }
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Helmet>
        <title>MainPage</title>
      </Helmet>
      <LargeSearchInput />
      <Map />

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
        defaultSnap={({ lastSnap, snapPoints }) =>
          console.log(lastSnap, snapPoints)
        }
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

export default MainPage;
