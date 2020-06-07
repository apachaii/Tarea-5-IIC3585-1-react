import React from "react";
import PropTypes from "prop-types";

import {ReactComponent as Chasis} from "../../assets/chasis.svg";
import {ReactComponent as Wheels} from "../../assets/wheels.svg";

const faces_direction = {
  "right": "scaleX(-1)",
  "left": "scaleX(1)",
}

function CarSprite(props) {
  const {
    height,
    width,
    face_direction,
    chasis_color,
    wheels_color,
  } = props;

  const sprite_style = {
    height,
    width,
  }
  return (
    <div
      style={{
        height,
        width,
        transform: faces_direction[face_direction],
      }}
    >
      <Chasis
        style={{
          position: "absolute",
          ...sprite_style,
          fill: chasis_color,
        }}
      />
      <Wheels
        style={{
          position: "absolute",
          ...sprite_style,
          fill: wheels_color,
        }}
      />
    </div>
  );
}

CarSprite.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  face_direction: PropTypes.string.isRequired,

  chasis_color: PropTypes.string.isRequired,
  wheels_color: PropTypes.string.isRequired,
};

export default CarSprite;