import Background from '../../../../assets/sunrise-1756274_640.jpg';

import {EVENTS_TYPES, TILE_SIZE, UPGRADE_TYPES} from "../world_constants";

const level = {
  start_position: {
    character_horizontal_position: 6*TILE_SIZE,
    character_vertical_position: 6*TILE_SIZE,
    player_face_direction: 'right',
    map_scroll: 0,
  },
  width: 40, // in tiles
  background: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
  },
  tiles: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, ],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, ],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, ],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, ],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, ],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, ],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, ],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, ],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, ],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, ],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  ],
  events:[
    // The first enemy protecting the upgrade
    {
      type: EVENTS_TYPES.ENEMY,
      level: 1,
      horizontal_position: 2,
      vertical_position: 2,
      starting_text: "This dog may be weak, but, it will do everything to prevent you from becoming more powerful.",
      return_horizontal_position:4,
      return_vertical_position:4,
    },
    {
      type: EVENTS_TYPES.UPGRADE,
      upgrade_type: UPGRADE_TYPES.CHASIS,
      level: 3,
      horizontal_position: 1,
      vertical_position: 1,
    },

    // Two enemies protecting the second upgrade
    {
      type: EVENTS_TYPES.ENEMY,
      level: 2,
      horizontal_position: 35,
      vertical_position: 10,
      starting_text: "The dog is crying in fear.",
      return_horizontal_position:32,
      return_vertical_position:10,
    },
    {
      type: EVENTS_TYPES.ENEMY,
      level: 3,
      horizontal_position: 35,
      vertical_position: 2,
      starting_text: "The dog is excited to beat you.",
      return_horizontal_position:32,
      return_vertical_position:2,
    },
    {
      type: EVENTS_TYPES.UPGRADE,
      upgrade_type: UPGRADE_TYPES.WHEELS,
      level: 3,
      horizontal_position: 37,
      vertical_position: 6,
    },

    // Level Boss
    {
      type: EVENTS_TYPES.ENEMY,
      level: 3,
      horizontal_position: 21,
      vertical_position: 3,
      starting_text: "You will stop hurting my kind.",
      return_horizontal_position: 21,
      return_vertical_position: 4,
    },
    {
      type: EVENTS_TYPES.ENEMY,
      level: 3,
      horizontal_position: 21,
      vertical_position: 1,
      starting_text: "Your dog killing rampage ends here.",
      return_horizontal_position: 21,
      return_vertical_position: 2,
    },
    {
      type: EVENTS_TYPES.NEXT_LEVEL,
      level: 4,
      horizontal_position: 21,
      vertical_position: 0,
    },
  ],
  used_tiles: {
    0: { // Void
      traversable: false,
    }, // nothing
    1: { // Road
      traversable: true,
      background: {
        background: "white",
        opacity: .5,
      }
    },
  },
}

export default level;