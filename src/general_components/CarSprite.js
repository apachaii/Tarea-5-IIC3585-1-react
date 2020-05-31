import React from "react";
import PropTypes from "prop-types";

import {ReactComponent as Chasis} from "../assets/chasis.svg";
import {ReactComponent as Wheels} from "../assets/wheels.svg";

const faces_direction = {
  "right": "scaleX(-1)",
  "left": "scaleX(1)",
}

// TODO car colors

function CarSprite(props) {
  const {
    height,
    width,
    face_direction,
  } = props;

  const sprite_style = {
    height,
    width,
  }
  return(
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
          fill: "#000000",
        }}
      />
      <Wheels
        style={{
          position: "absolute",
          ...sprite_style,
          fill: "#000000",
        }}
      />
    </div>
  );
}

CarSprite.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  face_direction: PropTypes.string.isRequired,

  /*equipped_chasis: PropTypes.number,
  equipped_wheels: PropTypes.number,*/
};
/*
Car.defaultProps = {
  equipped_chasis: 0,
  equipped_wheels: 0,
};
*/

export default CarSprite;