import {CHANGE_POSITION, GET_UPGRADE, NEXT_LEVEL, START_BATTLE, START_GAME, WIN_BATTLE} from "./action_types";
import get_level from "../game/screens/world_screen/levels";

const initialState = {
  level: 1,

  character_horizontal_position: 0,
  character_vertical_position: 0,
  player_face_direction: 'right',

  map_scroll: 0,

  events_active_state:[],

  current_battle_index: null,
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

    case START_GAME:{
      const level_one = get_level(1);
      const events_active_state = new Array(level_one.events.length).fill(true);
      return {
        level: 1,
        ...level_one.start_position,
        events_active_state,
      }
    }

    case NEXT_LEVEL:{
      const {level} = action.payload;
      const current_level = get_level(level);
      const events_active_state = new Array(current_level.events.length).fill(true);
      return {
        level,
        ...current_level.start_position,
        events_active_state,
      }
    }

    case START_BATTLE:
      return {
        ...state,
        current_battle_index: action.payload.current_battle_index,
        character_horizontal_position: action.payload.character_horizontal_position + state.map_scroll,
        character_vertical_position: action.payload.character_vertical_position,
      }

    case WIN_BATTLE:{
      const { events_active_state, current_battle_index } = state;
      const new_events_active_state = [...events_active_state];
      new_events_active_state[current_battle_index] = false;
      return {
        ...state,
        events_active_state: new_events_active_state
      }
    }

    case GET_UPGRADE:{
      const { index } = action.payload;
      const { events_active_state } = state;
      const new_events_active_state = [...events_active_state];
      new_events_active_state[index] = false;
      return {
        ...state,
        events_active_state: new_events_active_state,
      }
    }

    default:
      return state
  }
}
export default worldReducer;