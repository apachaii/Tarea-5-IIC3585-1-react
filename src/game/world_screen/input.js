import store from "../../redux/app_state";
import { CHANGE_POSITION } from "../../redux/action_types";

import { REGULAR_SPEED } from "./world_constants";

export default function handle_input (world) {

  const valid_keys = [
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
    "ArrowLeft",
  ]

  window.addEventListener('keydown', (keydown_event)=>{
    if (valid_keys.includes(keydown_event.key)){
      keydown_event.preventDefault();
      const {
        character_horizontal_position,
        character_vertical_position,
        //map_scroll,
      } = store.getState().world;

      console.log(CHANGE_POSITION)


      let payload = {};
      switch (keydown_event.key) {
        case "ArrowUp":
          payload = {
            character_vertical_position: character_vertical_position - REGULAR_SPEED,
          };
          break;

        case "ArrowRight":
          payload = {
            character_horizontal_position: character_horizontal_position + REGULAR_SPEED,
            player_face_direction: 'right'
          };
          break;

        case "ArrowDown":
          payload = {
            character_vertical_position: character_vertical_position + REGULAR_SPEED,
          };
          break;


        case "ArrowLeft":
          payload = {
            character_horizontal_position: character_horizontal_position - REGULAR_SPEED,
            player_face_direction: 'left'
          };
          break;

        default:
          break;
      }

      const action = {type:CHANGE_POSITION, payload};
      store.dispatch(action);
    }
  })

  return world
}