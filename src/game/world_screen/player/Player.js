import React from "react";
import PropTypes from 'prop-types';

import {PLAYER_HEIGHT, PLAYER_HEIGHT_WIDTH_RATIO} from "../world_constants"

import CarSprite from "../../../general_components/CarSprite";
import {LEVEL_COLORS} from "../general_constants";

function Player(props) {
  const {
    character_horizontal_position,
    character_vertical_position,
    player_face_direction,
    equipped_chasis,
    equipped_wheels,
  } = props;

  const chasis_color = LEVEL_COLORS[equipped_chasis];
  const wheels_color = LEVEL_COLORS[equipped_wheels];

  const sprite_style = {
    height: `${PLAYER_HEIGHT}px`,
    width: `${PLAYER_HEIGHT * PLAYER_HEIGHT_WIDTH_RATIO}px`,
    face_direction: player_face_direction,
    chasis_color,
    wheels_color,
  }

  return (
    <div
      style={{
        position: "absolute",
        left: `${character_horizontal_position}px`,
        top: `${character_vertical_position}px`,
      }}
    >
      <CarSprite
        {...sprite_style}
      />
    </div>
  );
}

Player.propTypes = {
  character_horizontal_position: PropTypes.number.isRequired,
  character_vertical_position: PropTypes.number.isRequired,
  player_face_direction: PropTypes.string.isRequired,

  equipped_chasis: PropTypes.number,
  equipped_wheels: PropTypes.number,
};

Player.defaultProps = {
  equipped_chasis: 0,
  equipped_wheels: 0,
};

export default Player;