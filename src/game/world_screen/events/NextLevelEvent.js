import React from "react";
import PropTypes from "prop-types";

import {TILE_SIZE} from "../world_constants";
import {ReactComponent as Next} from "../../../assets/next.svg";

function NextLevelEvent(props) {
  const {vertical_position, horizontal_position} = props;
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
      <Next
        style={{
          width: TILE_SIZE,
          height: TILE_SIZE,
          position: "absolute",
        }}
      />
    </div>
  );
}

NextLevelEvent.propTypes ={
  horizontal_position: PropTypes.number.isRequired,
  vertical_position: PropTypes.number.isRequired,
}

export default NextLevelEvent;