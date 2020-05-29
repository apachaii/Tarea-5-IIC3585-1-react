import React from "react";
import PropTypes from "prop-types";

import MapTile from "./MapTile";

function MapRow(props) {
  const { row, current_level_info } = props;
  return(
    <div style={{height: 40}}>
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
  row: PropTypes.object.isRequired,
  current_level_info: PropTypes.object.isRequired,
};


export default MapRow;