import React from "react";
import PropTypes from "prop-types";

import {ReactComponent as Chasis} from "../../../assets/chasis.svg";
import {ReactComponent as Wheels} from "../../../assets/wheels.svg";

import {LEVEL_COLORS} from "../general_constants";
import {TILE_SIZE, UPGRADE_TYPES} from "../world_constants";

function UpgradeEvent(props) {
  const {level, upgrade_type, vertical_position, horizontal_position} = props;

  const upgrade_color = LEVEL_COLORS[level];
  let UpgradeSprite = null;
  if (upgrade_type === UPGRADE_TYPES.CHASIS)
    UpgradeSprite = Chasis;
  else if (upgrade_type === UPGRADE_TYPES.WHEELS)
    UpgradeSprite = Wheels;

  return (
    <div
      style={{
        position: "absolute",
        width:TILE_SIZE,
        height:TILE_SIZE,
        marginLeft: horizontal_position*TILE_SIZE,
        marginTop: vertical_position*TILE_SIZE,
      }}
    >
      < UpgradeSprite
        style={{
          width: TILE_SIZE,
          height: TILE_SIZE,
          position: "absolute",
          fill: upgrade_color,
        }}
      />
    </div>
  );
}

UpgradeEvent.propTypes ={
  level: PropTypes.number.isRequired,
  upgrade_type: PropTypes.string.isRequired,
  horizontal_position: PropTypes.number.isRequired,
  vertical_position: PropTypes.number.isRequired,
}

export default UpgradeEvent;