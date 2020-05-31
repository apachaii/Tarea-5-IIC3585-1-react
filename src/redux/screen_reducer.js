import {GO_TO_TITLE, GO_TO_MAP, START_BATTLE, START_GAME} from "./action_types";
import {BATTLE_SCREEN, TITLE_SCREEN, WORLD_SCREEN} from "../game/screen_constants";

const initialState = {
  screen : TITLE_SCREEN,
}

const screenReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case GO_TO_TITLE:
      return {
        ...state,
        screen: TITLE_SCREEN,
      }
    case START_GAME:
      return {
        ...state,
        screen: WORLD_SCREEN,
      }
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