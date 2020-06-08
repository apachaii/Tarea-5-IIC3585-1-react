import Background from '../../../../assets/universe-2742113_640.jpg';

import {EVENTS_TYPES, TILE_SIZE, UPGRADE_TYPES} from "../world_constants";

const level = {
  start_position: {
    character_horizontal_position: 3 * TILE_SIZE,
    character_vertical_position: 6 * TILE_SIZE,
    player_face_direction: 'right',
    map_scroll: 0,
  },
  width: 42, // in tiles
  background: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
  },
  tiles: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0,],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1,],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  ],
  events: [
    // The first enemy
    {
      type: EVENTS_TYPES.ENEMY,
      level: 1,
      horizontal_position: 6,
      vertical_position: 6,
      starting_text: "The first contact with an dog-like alien form.",
      return_horizontal_position: 4,
      return_vertical_position: 6,
    },
    {
      type: EVENTS_TYPES.UPGRADE,
      upgrade_type: UPGRADE_TYPES.CHASIS,
      level: 4,
      horizontal_position: 13,
      vertical_position: 6,
    },

    // First alien warrior
    {
      type: EVENTS_TYPES.ENEMY,
      level: 4,
      horizontal_position: 20,
      vertical_position: 6,
      starting_text: "Maybe killing your first contact wasn't a good idea.",
      return_horizontal_position: 18,
      return_vertical_position: 6,
    },

    // Aliens in the labyrinth
    {
      type: EVENTS_TYPES.ENEMY,
      level: 4,
      horizontal_position: 21,
      vertical_position: 8,
      starting_text: "It's protecting it's species.",
      return_horizontal_position: 21,
      return_vertical_position: 7,
    },
    {
      type: EVENTS_TYPES.ENEMY,
      level: 4,
      horizontal_position: 25,
      vertical_position: 4,
      starting_text: "You will never scape",
      return_horizontal_position: 24,
      return_vertical_position: 3,
    },
    {
      type: EVENTS_TYPES.ENEMY,
      level: 4,
      horizontal_position: 30,
      vertical_position: 6,
      starting_text: "You're kind is a danger for every world.",
      return_horizontal_position: 28,
      return_vertical_position: 6,
    },
    {
      type: EVENTS_TYPES.ENEMY,
      level: 1,
      horizontal_position: 34,
      vertical_position: 10,
      starting_text: "This must be an infirmary, the alien look's sick.",
      return_horizontal_position: 34,
      return_vertical_position: 9,
    },
    {
      type: EVENTS_TYPES.ENEMY,
      level: 4,
      horizontal_position: 37,
      vertical_position: 6,
      starting_text: "This teleporter leads towards where no one should go.",
      return_horizontal_position: 35,
      return_vertical_position: 6,
    },

    { // Final upgrade
      type: EVENTS_TYPES.UPGRADE,
      upgrade_type: UPGRADE_TYPES.WHEELS,
      level: 4,
      horizontal_position: 34,
      vertical_position: 2,
    },

    { // End
      type: EVENTS_TYPES.NEXT_LEVEL,
      level: 5,
      horizontal_position: 39,
      vertical_position: 6,
    },
  ],
  used_tiles: {
    0: { // Void
      traversable: false,
    }, // nothing
    1: { // Road
      traversable: true,
      background: {
        background: "purple",
        opacity: .4,
      }
    },
  },
}

export default level;