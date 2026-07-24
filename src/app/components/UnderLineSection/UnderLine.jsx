import colors from "@/app/utils/color";
import React from "react";

const UnderLine = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1850PX",
        minHeight: "2px",
        height: "2px",
        backgroundColor: colors.whitesmoke,
        margin: "10px auto 0 auto",
        borderRadius: "10px",
      }}
    />
  );
};

export default UnderLine;
