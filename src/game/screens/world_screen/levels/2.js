import Background from '../../../../assets/mountains-clipart-transparent-background-22.png';

import {EVENTS_TYPES, TILE_SIZE, UPGRADE_TYPES} from "../world_constants";

const level = {
  start_position: {
    character_horizontal_position: 5*TILE_SIZE,
    character_vertical_position: 11*TILE_SIZE,
    player_face_direction: 'right',
    map_scroll: 0,
  },
  width: 80, // in tiles
  background: {
    backgroundImage: `url(${Background})`
  },
  events:[
    // The first enemy protecting the upgrade
    {
      type: EVENTS_TYPES.ENEMY,
      level: 2,
      horizontal_position: 1,
      vertical_position: 11,
      starting_text: "It's protecting the wheels with its life.",
      return_horizontal_position:3,
      return_vertical_position:11,
    },
    {
      type: EVENTS_TYPES.UPGRADE,
      upgrade_type: UPGRADE_TYPES.WHEELS,
      level: 2,
      horizontal_position: 0,
      vertical_position: 11,
    },

    {
      type: EVENTS_TYPES.ENEMY,
      level: 2,
      horizontal_position: 35,
      vertical_position: 10,
      starting_text: "This dog it's just watching the birds.",
      return_horizontal_position:32,
      return_vertical_position:10,
    },

    // floating upgrade
    {
      type: EVENTS_TYPES.ENEMY,
      level: 2,
      horizontal_position: 54,
      vertical_position: 2,
      starting_text: "This dog can't believe that its friend is floating.",
      return_horizontal_position: 54,
      return_vertical_position: 0,
    },
    {
      type: EVENTS_TYPES.ENEMY,
      level: 2,
      horizontal_position: 54,
      vertical_position: 7,
      starting_text: "It just wanted to see the floating chasis. Never expected to be floating too.",
      return_horizontal_position: 53,
      return_vertical_position: 6,
    },
    {
      type: EVENTS_TYPES.UPGRADE,
      upgrade_type: UPGRADE_TYPES.CHASIS,
      level: 2,
      horizontal_position: 54,
      vertical_position: 8,
    },


    // End of the level
    {
      type: EVENTS_TYPES.ENEMY,
      level: 2,
      horizontal_position: 65,
      vertical_position: 0,
      starting_text: "Doesn't want to fight, but it will do it if forces to.",
      return_horizontal_position: 65,
      return_vertical_position: 2,
    },
    {
      type: EVENTS_TYPES.ENEMY,
      level: 2,
      horizontal_position: 72,
      vertical_position: 2,
      starting_text: "It was hoping for you to approach.",
      return_horizontal_position: 72,
      return_vertical_position: 0,
    },
    {
      type: EVENTS_TYPES.ENEMY,
      level: 3,
      horizontal_position: 78,
      vertical_position: 1,
      starting_text: "This dog's sacred duty is to put an  end to you.",
      return_horizontal_position: 76,
      return_vertical_position: 1,
    },



    {
      type: EVENTS_TYPES.NEXT_LEVEL,
      level: 3,
      horizontal_position: 79,
      vertical_position: 1,
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
    2: { // Cement
      traversable: false,
      background: {
        background: "#cecdcb",
      }
    },
    3: { // birds
      traversable: true,
      sprite: {
        form: "bird",
        fill: "#303030",
      }
    },
    4: { // solid air
      traversable: false,
    },
  },
  tiles: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 2, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 2, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0,],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
  ]
}

export default level;