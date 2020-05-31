import {EVENTS_TYPES, TILE_SIZE} from "../world_constants";

const level = {
  start_position: {
    character_horizontal_position: 0,
    character_vertical_position: 6*TILE_SIZE,
    player_face_direction: 'right',
    map_scroll: 0,
  },
  width: 40, // in tiles
  background: {
    background: "Chartreuse",
  },
  events:[
    {
      type: EVENTS_TYPES.ENEMY,
      level: 1,
      horizontal_position: 10,
      vertical_position: 6,
    },
    {
      type: EVENTS_TYPES.ENEMY,
      level: 1,
      horizontal_position: 8,
      vertical_position: 4,
    },
    {
      type: EVENTS_TYPES.ENEMY,
      level: 1,
      horizontal_position: 11,
      vertical_position: 3,
    },
    {
      type: EVENTS_TYPES.ENEMY,
      level: 1,
      horizontal_position: 25,
      vertical_position: 10,
    },
  ],
  used_tiles: {
    0: undefined, // nothing
    1: { // Road
      traversable: true,
      background: {
        background: "#555555",
      }
    },
    2: { // High grass
      traversable: true,
      background: {
        background: "#388004",
      }
    },
    3: { // Trees
      traversable: false,
      background: {
        background: "#388004",
      },
      sprite: {
        form: "tree",
        fill: "#003000",
      }
    }
  },
  tiles: [
    [2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2,],
    [0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 2,],
    [0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 3, 3, 2, 1, 2, 2, 2, 2, 1, 2, 3, 3, 3, 3,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 3, 3, 3, 3,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 2, 1, 2, 3, 3, 2, 1, 2, 3, 3, 2, 2,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 2, 1, 2, 3, 2, 2, 1, 2, 3, 2, 2, 2,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 2, 3, 2, 1, 2, 3, 3, 2, 1, 2, 3, 2, 1, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 3, 2, 1, 2, 3, 3, 2, 1, 2, 2, 1, 1, 2,],
    [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 2, 3, 2, 1, 2, 3, 3, 2, 1, 2, 2, 1, 2, 2,],
    [2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 1, 1, 2, 2,],
    [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0, 0, 1, 1, 2, 2, 2, 1, 2, 3, 3, 2, 1, 2, 1, 2, 2, 3,],
    [3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 3, 3, 2, 1, 1, 1, 2, 2, 3,],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 3, 3,],
  ]
}

export default level;