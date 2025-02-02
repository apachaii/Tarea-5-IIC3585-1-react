import {ATTACK_IN_BATTLE, DEFEND_IN_BATTLE, LOST_BATTLE, START_BATTLE, WIN_BATTLE} from "./action_types";
import {BATTLE_STATUS, ENEMY_STATS} from "../game/screens/battle_screen/battle_constants";

const initialState = {
  enemy_level: 1,

  enemy_life: 100,
  enemy_total_life: 100,
  battle_text: [],

  battle_state: BATTLE_STATUS.ACTIVE,
}

const battleReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {

    case (START_BATTLE):{

      const {enemy_level, starting_text} = action.payload;
      const {starting_life} = ENEMY_STATS[enemy_level];

      return {
        enemy_level,
        enemy_life: starting_life,
        enemy_total_life: starting_life,
        battle_text: [starting_text],
        battle_state: BATTLE_STATUS.ACTIVE,
      };
    }

    case (ATTACK_IN_BATTLE): {
      const {enemy_life, battle_text} = state;
      const {damage_done} = action.payload;

      const added_battle_text = [
        ...battle_text,
        `You did ${damage_done} of damage, the enemy have ${enemy_life - damage_done} left.`,
      ]

      return {
        ...state,
        enemy_life: enemy_life - damage_done,
        battle_text: added_battle_text,
      }
    }

    case (DEFEND_IN_BATTLE): {
      const {battle_text} = state;
      const {damage_received, current_life} = action.payload;

      const added_battle_text = [
        ...battle_text,
        `You received ${damage_received} damage, you have ${current_life-damage_received} left.`,
      ];

      return {
        ...state,
        battle_text: added_battle_text,
      }
    }

    case (WIN_BATTLE):{
      const {battle_text} = state;

      const added_battle_text = [
        ...battle_text,
        `You defeated your enemy, press [z] or [x] to return to the map`,
      ];

      return {
        ...state,
        battle_state: BATTLE_STATUS.WON,
        enemy_life: 0,
        battle_text: added_battle_text,
      }
    }

    case (LOST_BATTLE):{
      const {battle_text} = state;

      const added_battle_text = [
        ...battle_text,
        `You lost the battle, press [z] or [x] to return to the title screen`,
      ];

      return {
        ...state,
        battle_state: BATTLE_STATUS.LOST,
        battle_text: added_battle_text,
      }
    }

    default:
      return state;
  }
}

export default battleReducer;