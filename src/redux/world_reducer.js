import { CHANGE_POSITION } from "./action_types";

const initialState = {
  level: 1,

  character_horizontal_position: 0,
  character_vertical_position: 6*40,
  player_face_direction: 'right',

  map_scroll: 0,
}

const worldReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CHANGE_POSITION:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default worldReducer;