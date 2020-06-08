import Background from '../../../../assets/atom-1222516_640.jpg';

import {EVENTS_TYPES, TILE_SIZE, UPGRADE_TYPES} from "../world_constants";

const level = {
  start_position: {
    character_horizontal_position: 2*TILE_SIZE,
    character_vertical_position: 6*TILE_SIZE,
    player_face_direction: 'right',
    map_scroll: 0,
  },
  width: 44, // in tiles
  background: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
  },
  tiles: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 0, 0, ],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, ],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0, 2, 2, 0, 2, 2, 2, 0, ],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, ],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 0, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, ],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 0, 2, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, ],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, ],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0 ,2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 0, ],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 0, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, ],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 0, 0, ],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
  ],
  events:[
    // Free Heal
    {
      type: EVENTS_TYPES.UPGRADE,
      upgrade_type: UPGRADE_TYPES.CHASIS,
      level: 0,
      horizontal_position: 2,
      vertical_position: 6,
    },

    // Final  Boss
    {
      type: EVENTS_TYPES.ENEMY,
      level: 5,
      horizontal_position: 10,
      vertical_position: 6,
      starting_text: 'God in dog form appears in front of you: "This is the end, you can\'t  scape this battle".',
      return_horizontal_position: 10,
      return_vertical_position: 6,
    },
  ],
  used_tiles: {
    0: { // Void
      traversable: false,
    }, // nothing
    1: { // Road
      traversable: true,
      background: {
        background: "blue",
        opacity: .8,
      },
    },
    2:{ // End
      traversable: false,
      background: {
        background: "black",
      },
    }
  },
}

export default level;