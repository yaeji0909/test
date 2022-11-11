import "react-spring-bottom-sheet/dist/style.css";
import { Helmet } from "react-helmet-async";
import { useState, useRef, useEffect } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { useRecoilState } from "recoil";
import { getFavoriteList } from "@api/favoriteApi";
import { favBusStopList } from "@recoil/favorite";
import { selectedCity } from "@recoil/home";
import { useQuery } from "react-query";
import useDebounce from "@components/home/hooks/useDebounce";
import BottomSheetHeader from "@components/home/BottomSheetHeader";
import BottomSheetBody from "@components/home/BottomSheetBody";
import LargeSearchInput from "@components/search/LargeSearchInput";
import Map from "@components/base/map/Map";

function MainPage() {
  const [loadingOpen, setLoadingOpen] = useState(false);
  const sheetRef = useRef();
  const open = useDebounce(loadingOpen, 1000);

  const [favoriteBusStopList, setFavoriteBusStopList] =
    useRecoilState(favBusStopList);
  const [city, setCity] = useRecoilState(selectedCity);

  const handleButtonSheet = () => {
    if (sheetRef.current.height > 120) {
      sheetRef.current.snapTo(({ snapPoints }) => snapPoints[0]);
    } else {
      sheetRef.current.snapTo(({ snapPoints }) => snapPoints[1]);
    }
  };

  const { data: favoriteList = "" } = useQuery(["favoriteList", 1], () =>
    getFavoriteList(city)
  );

  useEffect(() => {
    setFavoriteBusStopList(favoriteList);
  }, [favoriteList]);

  return (
    <>
      <Helmet>
        <title>main page</title>
      </Helmet>
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
        onSpringStart={(event) => event.type === "SNAP" && setLoadingOpen(true)}
        header={
          <BottomSheetHeader
            onClick={() => {
              handleButtonSheet();
            }}
          />
        }
      >
        {open ? (
          <BottomSheetBody favoriteList={favoriteBusStopList} />
        ) : (
          <div>loading...</div>
        )}
      </BottomSheet>
    </>
  );
}

export default MainPage;
