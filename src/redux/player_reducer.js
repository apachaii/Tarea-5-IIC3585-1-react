import {DEFEND_IN_BATTLE} from "./action_types";

const initialState = {
  max_life: 100,
  current_life: 100,

  equipped_chasis: null,
  equipped_wheels: null,

  acquired_chasis: [],
  acquired_wheels: [],
}

const playerReducer = (
  state = initialState,
  action,
  ) => {
  switch (action.type) {

    case (DEFEND_IN_BATTLE): {
      const {damage_received} = action.payload;
      const {current_life} = state;


      return {
        ...state,
        current_life: current_life-damage_received,
      }
    }

    default:
      return state
  }
}

export default playerReducer;