import React from "react";
import {BATTLE_SCREEN_HEIGHT, BATTLE_SCREEN_WIDTH} from "./battle_constants";

import ControlsBar from "./controls_bar";
import InfoBox from "./info_box";
import EnemyBox from "./enemy_box";
import PlayerBox from "./player_box";
import handle_battle from "./battle";

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
        }}
      >
        <EnemyBox/>
        <PlayerBox/>
        <InfoBox/>
      </div>
    </React.Fragment>
  )
}


export default handle_battle(BattleScreen);