import { START_BATTLE } from "./action_types";

const initialState = {
  enemy_level: 1,

  enemy_life: 100,
  enemy_total_life: 100,
  battle_text: [],
}

const battleReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {

    case (START_BATTLE):

      return {
        enemy_level: action.payload.enemy_level,
        enemy_life: action.payload.enemy_total_life,
        enemy_total_life: action.payload.enemy_total_life,
        battle_text: [action.payload.starting_text],
      };

    default:
      return state;
  }
}

export default battleReducer;