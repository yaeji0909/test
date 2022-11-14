import React from "react";
import Skeleton from "./Skeleton";

const SkeletonTexts = ({ wordLengths, useFlex }) => {
  return (
    <>
      {wordLengths.map((length, index) => {
        const props = {
          [useFlex ? "flex" : "width"]: useFlex ? length : `${length}rem`,
        };
        return <Skeleton key={index} {...props} />;
      })}
    </>
  );
};

export default SkeletonTexts;
