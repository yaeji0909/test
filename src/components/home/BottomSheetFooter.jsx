import React from "react";
import { BottomSheetFooterBox } from "./bottomSheetStyles";

const BottomSheetFooter = ({
  chatFieldValue,
  setChatFieldValue,
  handleChatMessageSubmit,
}) => {
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <BottomSheetFooterBox>
        <input
          placeholder='a'
          value={chatFieldValue}
          onChange={(e) => setChatFieldValue(e.target.value)}
          onKeyDown={(e) => {
            if (
              (e.keyCode === 13 || e.which === 13) &&
              chatFieldValue.length > 0
            ) {
              handleChatMessageSubmit();
            }
          }}
        />
      </BottomSheetFooterBox>
    </div>
  );
};

export default BottomSheetFooter;
