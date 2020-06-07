import store from "../../../redux/app_state";
import {START_GAME} from "../../../redux/action_types";
import {TITLE_SCREEN} from "../../screen_constants";

export default function handle_start(start) {

  const start_keys = [
    " ",
  ];

  window.addEventListener('keydown', (keydown_event) => {
    const state = store.getState()
    if (state.screen.screen !== TITLE_SCREEN){
      return;
    }

    keydown_event.preventDefault();

    if (start_keys.includes(keydown_event.key)) {
      store.dispatch(
        {
          type:START_GAME,
        }
      )
    }
  })

  return start;
}