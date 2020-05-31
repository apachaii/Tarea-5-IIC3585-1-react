import React from "react";
import {
  INFO_BOX_HEIGHT,
  INFO_BOX_HORIZONTAL_POSITION,
  INFO_BOX_VERTICAL_POSITION,
  INFO_BOX_WIDTH
} from "../battle_constants";

function InfoBox() {
  return (
    <div
      style={{
        width: INFO_BOX_WIDTH,
        height: INFO_BOX_HEIGHT,

        marginLeft: INFO_BOX_HORIZONTAL_POSITION,
        marginTop: INFO_BOX_VERTICAL_POSITION,

        position:"absolute",

        background: "green",
      }}
    >

    </div>
  );
}

export default InfoBox;