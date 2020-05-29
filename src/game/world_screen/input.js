import store from "../../redux/app_state";
import {CHANGE_POSITION} from "../../redux/action_types";

import {
  MAP_SCREEN_HEIGHT,
  MAP_SCREEN_WIDTH,
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
  REGULAR_SPEED,
  SCROLL_DISTANCE,
  TILE_SIZE,
} from "./world_constants";
import get_level from "./levels"


const RIGHT_SCROLL_START_POINT = MAP_SCREEN_WIDTH * (1 - SCROLL_DISTANCE);
const LEFT_SCROLL_START_POINT = MAP_SCREEN_WIDTH * SCROLL_DISTANCE;

function get_tile_position(coord_position) {
  return [~~(coord_position[0] / TILE_SIZE), ~~(coord_position[1] / TILE_SIZE)]
}

function is_tile_traversable(tile_position, level_info) {
  const tile_type = level_info.tiles[tile_position[1]][tile_position[0]];
  if (level_info.used_tiles[tile_type]){
    return level_info.used_tiles[tile_type]?.traversable;
  }
  return true;
}

export default function handle_input(world) {

  const move_keys = [
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
    "ArrowLeft",
  ]

  function movement(key) {

    let {
      level,
      character_horizontal_position: old_horizontal_position,
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
        new_vertical_position -= REGULAR_SPEED
        break;

      case "ArrowDown":
        new_vertical_position += REGULAR_SPEED
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

    // if the new location is in an invalid tile, change location
    // Assumes that the movement is lower than the size of one tile
    const real_horizontal_position = new_horizontal_position - map_scroll;

    const upper_left_corner = [real_horizontal_position, new_vertical_position];
    const upper_right_corner = [real_horizontal_position + PLAYER_WIDTH, new_vertical_position];
    const lower_left_corner = [real_horizontal_position, new_vertical_position + PLAYER_HEIGHT];
    const lower_right_corner = [real_horizontal_position + PLAYER_WIDTH, new_vertical_position + PLAYER_HEIGHT];

    const upper_left_tile = get_tile_position(upper_left_corner);
    const upper_right_tile = get_tile_position(upper_right_corner);
    const lower_left_tile = get_tile_position(lower_left_corner);
    const lower_right_tile = get_tile_position(lower_right_corner);

    const is_upper_left_traversable = is_tile_traversable(upper_left_tile, level_info);
    const is_upper_right_traversable = is_tile_traversable(upper_right_tile, level_info);
    const is_lower_left_traversable = is_tile_traversable(lower_left_tile, level_info);
    const is_lower_right_traversable = is_tile_traversable(lower_right_tile, level_info);

    if (!is_upper_left_traversable){
      const old_upper_left_corner = [old_horizontal_position, old_vertical_position];
      const old_upper_left_tile = get_tile_position(old_upper_left_corner);
      if (old_upper_left_tile[0] !== upper_left_tile[0]) {
        new_horizontal_position = old_upper_left_tile[0]*TILE_SIZE;
      }
      if (old_upper_left_tile[1] !== upper_left_tile[1]) {
        new_vertical_position = old_upper_left_tile[1]*TILE_SIZE;
      }
    }
    else if (!is_upper_right_traversable){
      const old_upper_right_corner = [old_horizontal_position + PLAYER_WIDTH, old_vertical_position];
      const old_upper_right_tile = get_tile_position(old_upper_right_corner);
      if (old_upper_right_corner[0] !== upper_right_corner[0]){
        new_horizontal_position = (upper_right_tile[0])*TILE_SIZE - PLAYER_WIDTH;
      }
      if (old_upper_right_tile[1] !== upper_right_tile[1]) {
        new_vertical_position = old_upper_right_tile[1]*TILE_SIZE;
      }
    }
    else if (!is_lower_left_traversable){
      const old_lower_left_corner = [old_horizontal_position, old_vertical_position + PLAYER_HEIGHT];

      if (old_lower_left_corner[0] !== lower_left_corner[0]){
        new_horizontal_position = (lower_left_tile[0]+1)*TILE_SIZE;
      }

      if (old_lower_left_corner[1] !== lower_left_corner[1]){
        new_vertical_position = (lower_left_tile[1]-1)*TILE_SIZE;
      }
    }
    else if (!is_lower_right_traversable){
      const old_lower_right_corner = [old_horizontal_position + PLAYER_WIDTH, old_vertical_position + PLAYER_HEIGHT];

      console.log(old_lower_right_corner, lower_right_corner, lower_right_tile)

      if (old_lower_right_corner[0] !== lower_right_corner[0]){
        new_horizontal_position = (lower_right_tile[0])*TILE_SIZE - PLAYER_WIDTH;
      }

      if (old_lower_right_corner[1] !== lower_right_corner[1]){
        new_vertical_position = (lower_right_tile[1]-1)*TILE_SIZE;
      }
    }

    // if the new location is out of scroll change the scroll
    const level_width = level_info.width

    const passed_right_scroll_point = new_horizontal_position > RIGHT_SCROLL_START_POINT;
    if (passed_right_scroll_point) {
      const left_stop_scrolling_point = level_width * TILE_SIZE - MAP_SCREEN_WIDTH * SCROLL_DISTANCE;
      if (real_horizontal_position <= left_stop_scrolling_point) {
        map_scroll -= new_horizontal_position - old_horizontal_position;
        new_horizontal_position = old_horizontal_position;
      }
    }

    const passed_left_scroll_point = new_horizontal_position < LEFT_SCROLL_START_POINT;
    if (passed_left_scroll_point) {
      const right_stop_scrolling_point = MAP_SCREEN_WIDTH * SCROLL_DISTANCE;
      if (real_horizontal_position >= right_stop_scrolling_point) {
        map_scroll += old_horizontal_position - new_horizontal_position;
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

    const action = {type: CHANGE_POSITION, payload};

    store.dispatch(action);
  }

  window.addEventListener('keydown', (keydown_event) => {
    if (move_keys.includes(keydown_event.key)) {
      keydown_event.preventDefault();

      movement(keydown_event.key);
    }
  })

  return world
}