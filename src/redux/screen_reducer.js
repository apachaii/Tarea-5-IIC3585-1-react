import {GO_TO_MAP, START_BATTLE} from "./action_types";
import {BATTLE_SCREEN, WORLD_SCREEN} from "../game/screen_constants";

const initialState = {
  screen : WORLD_SCREEN,
}

const screenReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case START_BATTLE:
      return {
        ...state,
        screen: BATTLE_SCREEN,
      }
    case GO_TO_MAP:
      return {
        ...state,
        screen: WORLD_SCREEN,
      }
    default:
      return state
  }
}

export default screenReducer;