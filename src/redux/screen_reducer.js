import { CHANGE_SCREEN } from "./action_types";
import {BATTLE_SCREEN, WORLD_SCREEN} from "../game/screen_constants";

const initialState = {
  screen : BATTLE_SCREEN,
}

const screenReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CHANGE_SCREEN:
      return {
        ...state,
        screen: action.payload.screen,
      }
    default:
      return state
  }
}

export default screenReducer;