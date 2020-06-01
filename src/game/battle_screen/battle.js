import store from "../../redux/app_state";
import {BATTLE_SCREEN} from "../screen_constants";
import {BATTLE_STATUS, ENEMY_STATS} from "./battle_constants";
import {
  ATTACK_IN_BATTLE,
  DEFEND_IN_BATTLE,
  GO_TO_MAP,
  GO_TO_TITLE,
  LOST_BATTLE,
  WIN_BATTLE
} from "../../redux/action_types";

export default function handle_battle(battle) {

  const battle_keys = [
    "z",
    "x",
  ];

  window.addEventListener('keydown', (keydown_event) => {
    if (battle_keys.includes(keydown_event.key)) {
      keydown_event.preventDefault();

      const state = store.getState()
      if (state.screen.screen !== BATTLE_SCREEN) {
        return;
      }

      switch (state.battle.battle_state) {
        case (BATTLE_STATUS.WON):
          store.dispatch({type:GO_TO_MAP});
          return;

        case (BATTLE_STATUS.LOST):
          store.dispatch({type:GO_TO_TITLE});
          return;

        default:
          if (keydown_event.key === "z") {
            battle_turn(state);
          } else if (keydown_event.key === "x") {
            store.dispatch({type:GO_TO_MAP});
          }
      }
    }
  })

  function battle_turn(state) {

    // Attack
    const {
      enemy_level,
      enemy_life,
    } = state.battle;

    const {defense} = ENEMY_STATS[enemy_level];

    const {
      equipped_wheels,
    } = state.player;

    const damage_done = 50 + equipped_wheels ?? 0 - defense;

    const battle_won = damage_done >= enemy_life;
    if (battle_won) {
      const won_action ={
        type: WIN_BATTLE,
        payload: {},
      }

      store.dispatch(won_action);
      return;
    }

    const attack_action = {
      type: ATTACK_IN_BATTLE,
      payload: {
        damage_done
      }
    };

    store.dispatch(attack_action);


    // Defend
    const {attack} = ENEMY_STATS[enemy_level];

    const {
      current_life,
      equipped_chasis,
    } = state.player;

    const damage_received = attack - equipped_chasis ?? 0;

    const battle_lost = current_life <= damage_received;
    if (battle_lost){
      const lost_action ={
        type: LOST_BATTLE,
        payload: {},
      }

      store.dispatch(lost_action);
      return;
    }

    const defend_action = {
      type: DEFEND_IN_BATTLE,
      payload: {
        damage_received,
        current_life,
      }
    };

    store.dispatch(defend_action);
  }

  return battle;
}