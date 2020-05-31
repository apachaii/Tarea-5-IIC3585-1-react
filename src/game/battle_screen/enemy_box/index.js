import React from "react";
import {
  BATTLE_BOX_HEIGHT,
  BATTLE_BOX_WIDTH,
  BATTLE_BOX_VERTICAL_POSITION,
  ENEMY_VERTICAL_POSITION
} from "../battle_constants";

function EnemyBox() {
  return (
    <div
      style={{
        width: BATTLE_BOX_WIDTH,
        height: BATTLE_BOX_HEIGHT,

        marginTop: BATTLE_BOX_VERTICAL_POSITION,
        marginLeft: ENEMY_VERTICAL_POSITION,

        position:"absolute",

        background: "blue",
      }}
    >

    </div>
  );
}

export default EnemyBox;