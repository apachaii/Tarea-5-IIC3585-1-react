import React from "react";
import {BATTLE_SCREEN_WIDTH} from "../battle_constants";

function ControlsBar() {
  return (
    <div
      style={{
        width: BATTLE_SCREEN_WIDTH,
        margin: "0px auto",
      }}
    >
      <p
        style={{
          margin: "0px"
        }}
      >
        [z] for attack; [x] for scape;
      </p>
    </div>
  );

}

export default ControlsBar;