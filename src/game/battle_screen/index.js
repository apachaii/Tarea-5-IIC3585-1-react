import React from "react";
import {BATTLE_SCREEN_HEIGHT, BATTLE_SCREEN_WIDTH} from "./battle_constants";

import ControlsBar from "./controls_bar";
import PlayerBox from "./player_box";
import InfoBox from "./info_box";
import EnemyBox from "./enemy_box";

function BattleScreen() {
  return (
    <React.Fragment>
      <ControlsBar/>
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
        <PlayerBox/>
        <InfoBox/>
      </div>
    </React.Fragment>
  )
}

export default BattleScreen;