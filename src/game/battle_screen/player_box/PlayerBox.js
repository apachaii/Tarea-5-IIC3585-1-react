import PropTypes from "prop-types";
import React from "react";

import LifeBox from "../LifeBox";
import {
  BATTLE_BOX_HEIGHT,
  BATTLE_BOX_VERTICAL_POSITION,
  BATTLE_BOX_WIDTH,
  PLAYER_VERTICAL_POSITION
} from "../battle_constants";

import CarSprite from "../../../general_components/CarSprite";
import {LEVEL_COLORS} from "../../general_constants";

const battleFaceDirection = "right";

function PlayerBox(props) {
  const {
    equipped_chasis,
    equipped_wheels,
  } = props;

  const chasis_color = LEVEL_COLORS[equipped_chasis];
  const wheels_color = LEVEL_COLORS[equipped_wheels];

  return (
    <div
      style={{
        width: BATTLE_BOX_WIDTH,
        height: BATTLE_BOX_HEIGHT,

        position: "absolute",
        marginTop: BATTLE_BOX_VERTICAL_POSITION,
        marginLeft: PLAYER_VERTICAL_POSITION,
      }}
    >
      <CarSprite
        height={"100%"}
        width={"100%"}
        face_direction={battleFaceDirection}
        {...{chasis_color, wheels_color}}
      />
      <LifeBox current_life={props.current_life} total_life={props.max_life}/>
    </div>
  );
}

PlayerBox.propTypes = {
  max_life: PropTypes.number.isRequired,
  current_life: PropTypes.number.isRequired,
  equipped_chasis: PropTypes.number,
  equipped_wheels: PropTypes.number,
};

PlayerBox.defaultProps = {
  equipped_chasis: 0,
  equipped_wheels: 0,
};


export default PlayerBox;