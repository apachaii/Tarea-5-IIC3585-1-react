import React from "react";
import PropTypes from "prop-types";

import WorldScreen from "./world_screen";
import BattleScreen from "./battle_screen";
import {BATTLE_SCREEN, WORLD_SCREEN} from "./screen_constants";
import {CHANGE_SCREEN} from "../redux/action_types";
import store from "../redux/app_state";

function Game(props) {
  const {screen} = props;

  let CurrentScreen;
  switch(screen){
    case (WORLD_SCREEN):
      CurrentScreen = WorldScreen;
      break
    case (BATTLE_SCREEN):
      CurrentScreen = BattleScreen;
      break;
    default:
      CurrentScreen = WorldScreen;
  }

  return (
    <React.Fragment>
      <button // for testing, TODO delete
        onClick={
          ()=>{
            const action = {
              type: CHANGE_SCREEN,
              payload: {
                screen: screen===WORLD_SCREEN ? BATTLE_SCREEN : WORLD_SCREEN,
              },
            };

            store.dispatch(action);
          }
        }
      />
      <CurrentScreen/>
    </React.Fragment>
  );
}

Game.propTypes = {
  screen: PropTypes.string,
};

export default Game;