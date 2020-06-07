import React from "react";
import PropTypes from "prop-types";

import WorldScreen from "./screens/world_screen";
import BattleScreen from "./screens/battle_screen";
import {BATTLE_SCREEN, TITLE_SCREEN, WORLD_SCREEN} from "./screen_constants";
import TitleScreen from "./screens/title_screen";

function Game(props) {
  const {screen} = props;

  let CurrentScreen;
  switch(screen){
    case (TITLE_SCREEN):
      CurrentScreen = TitleScreen;
      break;
    case (WORLD_SCREEN):
      CurrentScreen = WorldScreen;
      break;
    case (BATTLE_SCREEN):
      CurrentScreen = BattleScreen;
      break;
    default:
      CurrentScreen = WorldScreen;
  }

  return (
    <React.Fragment>
      <CurrentScreen/>
    </React.Fragment>
  );
}

Game.propTypes = {
  screen: PropTypes.string,
};

export default Game;