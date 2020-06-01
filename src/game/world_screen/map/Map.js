import React from "react";
import PropTypes from "prop-types";
import MapRow from "./MapRow";

import get_level from "../levels";

import { TILE_SIZE } from "../world_constants";

function Map(props) {
  const { level, map_scroll } = props;
  const current_level_info = get_level(level);
  console.log(current_level_info.background);
  return (
    <React.Fragment>
      <div // Background
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          ...current_level_info.background,
        }}
      />
      <div
        style={{
          position: "absolute",
          height: "100%",
          left: map_scroll,
          width: TILE_SIZE*current_level_info.width,
        }}
      >
        {
          current_level_info.tiles.map(
            (row,index) => {
              return <MapRow
                key={index}
                {...{row, current_level_info}}
              />
            }
          )
        }
      </div>

    </React.Fragment>
  )
}

Map.propTypes = {
  level: PropTypes.number.isRequired,
  map_scroll: PropTypes.number,
};

Map.defaultProps = {
  map_scroll: 0
}

export default Map;