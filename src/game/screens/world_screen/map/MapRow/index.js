import React from "react";
import PropTypes from "prop-types";

import MapTile from "./MapTile";
import {TILE_SIZE} from "../../world_constants";

function MapRow(props) {
  const { row, current_level_info } = props;
  return(
    <div style={{height: TILE_SIZE}}>
      {
        row.map(
          (tile, index) => {
            const tile_info = current_level_info.used_tiles[tile];
            return <MapTile key={index} tile_info={tile_info}/>
          }
        )
      }
    </div>
  )
}

MapRow.propTypes = {
  row: PropTypes.arrayOf(PropTypes.number).isRequired,
  current_level_info: PropTypes.object.isRequired,
};


export default MapRow;