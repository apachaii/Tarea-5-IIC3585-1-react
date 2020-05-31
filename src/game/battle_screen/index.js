import React from "react";
import {BATTLE_SCREEN_HEIGHT, BATTLE_SCREEN_WIDTH} from "./battle_constants";

import EnemyBox from "./enemy_box";

function BattleScreen() {
  return (
    <div
      style={{

        height: BATTLE_SCREEN_HEIGHT,
        width: BATTLE_SCREEN_WIDTH,
        margin: "0px auto",

        position: "relative",

        background: "grey", // for debuging TODO delete
      }}
    >
      <EnemyBox/>
    </div>
  )
}

export default BattleScreen;