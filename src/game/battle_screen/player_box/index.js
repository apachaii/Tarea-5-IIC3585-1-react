import React from "react";
import {
  BATTLE_BOX_HEIGHT,
  BATTLE_BOX_WIDTH,
  BATTLE_BOX_VERTICAL_POSITION,
  PLAYER_VERTICAL_POSITION
} from "../battle_constants";

import CarSprite from "../../../general_components/CarSprite";

const battleFaceDirection = "right";

function PlayerBox() {
  return (
    <div
      style={{
        width: BATTLE_BOX_WIDTH,
        height: BATTLE_BOX_HEIGHT,

        position:"absolute",
        marginTop: BATTLE_BOX_VERTICAL_POSITION,
        marginLeft: PLAYER_VERTICAL_POSITION,
      }}
    >
      <CarSprite
        height={"100%"}
        width={"100%"}
        face_direction={battleFaceDirection}
      />
    </div>
  );
}

export default PlayerBox;