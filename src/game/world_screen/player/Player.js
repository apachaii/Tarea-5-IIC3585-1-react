import React from "react";
import PropTypes from 'prop-types';

import { ReactComponent as Chasis } from "./chasis.svg"
import { ReactComponent as Wheels } from "./wheels.svg"

const equipment_color = [
  "black",
  "white",
]

const PLAYER_HEIGHT = 40;
const PLAYER_HEIGHT_WIDTH_RATIO = 1.6;

function Player(props) {
  const {
    character_horizontal_position,
    character_vertical_position,
    player_face_direction,
    equipped_chasis,
    equipped_wheels,
  } = props;

  const face_direction = {
    "right": -1,
    "left": 1,
  }[player_face_direction];

  const sprite_style = {
    position: "absolute",
    height: PLAYER_HEIGHT,
    width: PLAYER_HEIGHT*PLAYER_HEIGHT_WIDTH_RATIO,
    transform: `scaleX(${face_direction})`,
  }

  const chasis_color = equipment_color[equipped_chasis];
  const wheels_color = equipment_color[equipped_wheels];

  return (
    <div
      style={{
        position: "absolute",
        left: `${character_horizontal_position}px`,
        top: `${character_vertical_position}px`,
      }}
    >
      <Chasis
        style={{
          ...sprite_style,
          fill: chasis_color,
        }}
      />
      <Wheels
        style={{
          ...sprite_style,
          fill: wheels_color,
        }}
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