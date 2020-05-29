import store from "../../redux/app_state";
import { CHANGE_POSITION } from "../../redux/action_types";

import {
  REGULAR_SPEED,
  PLAYER_HEIGHT,
  PLAYER_HEIGHT_WIDTH_RATIO,
  MAP_SCREEN_HEIGHT,
  MAP_SCREEN_WIDTH,
  TILE_SIZE,
  SCROLL_DISTANCE,
} from "./world_constants";
import get_level from "./levels"


const PLAYER_WIDTH = PLAYER_HEIGHT*PLAYER_HEIGHT_WIDTH_RATIO;
const RIGHT_SCROLL_START_POINT = MAP_SCREEN_WIDTH*(1-SCROLL_DISTANCE);
const LEFT_SCROLL_START_POINT = MAP_SCREEN_WIDTH*SCROLL_DISTANCE;

export default function handle_input (world) {

  const move_keys = [
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
    "ArrowLeft",
  ]

  function movement(key){

    let {
      level,
      character_horizontal_position: old_horizontal_position ,
      character_vertical_position: old_vertical_position,
      player_face_direction,
      map_scroll,
    } = store.getState().world;

    const level_info = get_level(level);

    // get the new location
    let new_horizontal_position = old_horizontal_position;
    let new_vertical_position = old_vertical_position;
    let new_player_face_direction = player_face_direction;

    switch (key) {

      case "ArrowUp":
        new_vertical_position -=  REGULAR_SPEED
        break;

      case "ArrowDown":
        new_vertical_position +=  REGULAR_SPEED
        break;

      case "ArrowRight":
        new_horizontal_position += REGULAR_SPEED;
        new_player_face_direction = 'right';
        break;

      case "ArrowLeft":
        new_horizontal_position -= REGULAR_SPEED;
        new_player_face_direction = 'left';
        break;

      default:
        break;
    }

    // if the new location is out of scroll change the scroll
    const level_width = level_info.width

    const passed_right_scroll_point = new_horizontal_position > RIGHT_SCROLL_START_POINT;
    if (passed_right_scroll_point) {
      const real_horizontal_position = new_horizontal_position - map_scroll;
      const left_stop_scrolling_point = level_width*TILE_SIZE-MAP_SCREEN_WIDTH*SCROLL_DISTANCE;
      if (real_horizontal_position <= left_stop_scrolling_point){
        map_scroll -= new_horizontal_position-old_horizontal_position;
        new_horizontal_position = old_horizontal_position;
      }
    }

    const passed_left_scroll_point = new_horizontal_position < LEFT_SCROLL_START_POINT;
    if (passed_left_scroll_point){
      const real_horizontal_position = new_horizontal_position - map_scroll;
      const right_stop_scrolling_point = MAP_SCREEN_WIDTH*SCROLL_DISTANCE;
      console.log(real_horizontal_position, right_stop_scrolling_point);
      if (real_horizontal_position >= right_stop_scrolling_point){
        map_scroll += old_horizontal_position-new_horizontal_position;
        new_horizontal_position = old_horizontal_position;
      }
    }


    // if the new location is out of boundaries change the location
    if (new_horizontal_position <= 0)
      new_horizontal_position = 0;
    else if (new_horizontal_position >= MAP_SCREEN_WIDTH - PLAYER_WIDTH)
      new_horizontal_position = MAP_SCREEN_WIDTH - PLAYER_WIDTH;

    if (new_vertical_position <= 0)
      new_vertical_position = 0;
    else if (new_vertical_position >= MAP_SCREEN_HEIGHT - PLAYER_HEIGHT)
      new_vertical_position = MAP_SCREEN_HEIGHT - PLAYER_HEIGHT;



    let payload = {
      map_scroll: map_scroll,
      character_horizontal_position: new_horizontal_position,
      character_vertical_position: new_vertical_position,
      player_face_direction: new_player_face_direction
    }

    const action = {type:CHANGE_POSITION, payload};

    store.dispatch(action);
  }

  window.addEventListener('keydown', (keydown_event)=>{
    if (move_keys.includes(keydown_event.key)){
      keydown_event.preventDefault();

      movement(keydown_event.key);
    }
  })

  return world
}