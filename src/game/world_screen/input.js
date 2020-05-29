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

// return the squares in [width location]
function get_occupied_tiles(horizontal_position, vertical_position,) {
  const upper_coord = Math.floor(vertical_position / TILE_SIZE);
  const lower_coord = Math.ceil((vertical_position+PLAYER_HEIGHT) / TILE_SIZE) - 1;

  const left_coord = Math.floor(horizontal_position / TILE_SIZE);
  const right_coord = Math.ceil((horizontal_position+PLAYER_WIDTH) / TILE_SIZE) - 1;

  return {
    upper_coord,
    lower_coord,
    left_coord,
    right_coord,
  }
}
function find_tile_traversablility(used_tiles,tile_type) {
  if (used_tiles[tile_type]){
    return used_tiles[tile_type]?.traversable;
  }
  return true;
}

/*
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
*/
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

    // if the new location is out of boundaries change the location
    if (new_horizontal_position <= 0)
      new_horizontal_position = 0;
    else if (new_horizontal_position >= MAP_SCREEN_WIDTH - PLAYER_WIDTH)
      new_horizontal_position = MAP_SCREEN_WIDTH - PLAYER_WIDTH;

    if (new_vertical_position <= 0)
      new_vertical_position = 0;
    else if (new_vertical_position >= MAP_SCREEN_HEIGHT - PLAYER_HEIGHT)
      new_vertical_position = MAP_SCREEN_HEIGHT - PLAYER_HEIGHT;


    // if the new location is in an invalid tile, change location
    // Assumes that the movement is lower than the size of one tile
    const real_new_horizontal_position = new_horizontal_position - map_scroll;
    const new_tiles = get_occupied_tiles(real_new_horizontal_position, new_vertical_position)

    const real_old_horizontal_position = old_horizontal_position - map_scroll;
    const old_tiles = get_occupied_tiles(real_old_horizontal_position, old_vertical_position);

    if (new_tiles.left_coord < old_tiles.left_coord) { // going to the left
      for (let vertical_i = new_tiles.upper_coord; vertical_i <= new_tiles.lower_coord; vertical_i++) {
        const new_tile_type = level_info.tiles[vertical_i][new_tiles.left_coord];
        const is_tile_traversable = find_tile_traversablility(level_info.used_tiles, new_tile_type);
        if (! is_tile_traversable) {
          new_horizontal_position = (old_tiles.left_coord)*TILE_SIZE + map_scroll;
          break;
        }
      }
    } else if (new_tiles.right_coord > old_tiles.right_coord){ // going to the right
      for (let vertical_i = new_tiles.upper_coord; vertical_i <= new_tiles.lower_coord; vertical_i++) {
        const new_tile_type = level_info.tiles[vertical_i][new_tiles.right_coord];
        const is_tile_traversable = find_tile_traversablility(level_info.used_tiles, new_tile_type);
        if (!is_tile_traversable) {
          new_horizontal_position = (old_tiles.right_coord+1)*TILE_SIZE-PLAYER_WIDTH + map_scroll;
          break;
        }
      }
    }

    if (new_tiles.upper_coord < old_tiles.upper_coord){ // going upwards
      for (let horizontal_i = new_tiles.left_coord; horizontal_i <= new_tiles.right_coord; horizontal_i++) {
        const new_tile_type = level_info.tiles[new_tiles.upper_coord][horizontal_i];
        const is_tile_traversable = find_tile_traversablility(level_info.used_tiles, new_tile_type);
        if (!is_tile_traversable) {
          new_vertical_position = old_tiles.upper_coord*TILE_SIZE;
          break;
        }
      }
    } else if (new_tiles.lower_coord > old_tiles.lower_coord){ // going downwards
      for (let horizontal_i = new_tiles.left_coord; horizontal_i <= new_tiles.right_coord; horizontal_i++) {
        const new_tile_type = level_info.tiles[new_tiles.lower_coord][horizontal_i];
        const is_tile_traversable = find_tile_traversablility(level_info.used_tiles, new_tile_type);
        if (!is_tile_traversable) {
          new_vertical_position = (old_tiles.upper_coord+1)*TILE_SIZE-PLAYER_HEIGHT;
          break;
        }
      }

    }

    // if the new location is out of scroll change the scroll
    const level_width = level_info.width

    const passed_right_scroll_point = new_horizontal_position > RIGHT_SCROLL_START_POINT;
    if (passed_right_scroll_point) {
      const left_stop_scrolling_point = level_width * TILE_SIZE - MAP_SCREEN_WIDTH * SCROLL_DISTANCE;
      if (real_new_horizontal_position <= left_stop_scrolling_point) {
        map_scroll -= new_horizontal_position - old_horizontal_position;
        new_horizontal_position = old_horizontal_position;
      }
    }

    const passed_left_scroll_point = new_horizontal_position < LEFT_SCROLL_START_POINT;
    if (passed_left_scroll_point) {
      const right_stop_scrolling_point = MAP_SCREEN_WIDTH * SCROLL_DISTANCE;
      if (real_new_horizontal_position >= right_stop_scrolling_point) {
        map_scroll += old_horizontal_position - new_horizontal_position;
        new_horizontal_position = old_horizontal_position;
      }
    }



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