import {DEFEND_IN_BATTLE, GET_UPGRADE, LOST_BATTLE, START_GAME} from "./action_types";
import {UPGRADE_TYPES} from "../game/world_screen/world_constants";

const initialState = {
  max_life: 100,
  current_life: 100,

  equipped_chasis: 0,
  equipped_wheels: 0,
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

    case (LOST_BATTLE):
      return {
        ...state,
        current_life: 0,
      }

    case (GET_UPGRADE):{
      const {level, upgrade_type} = action.payload;
      const upgrade = {}
      if (upgrade_type === UPGRADE_TYPES.CHASIS && state.equipped_chasis < level){
        upgrade.equipped_chasis = level;
      } else if (upgrade_type === UPGRADE_TYPES.WHEELS && state.equipped_wheels < level){
        upgrade.equipped_wheels = level;
      }
      return {
        ...state,
        ...upgrade,
        max_life: state.max_life + 10, // All upgrade increase health and restore damage
        current_life: state.max_life + 10,
      }
    }

    case (START_GAME):
      return {...initialState};

    default:
      return state
  }
}

export default playerReducer;