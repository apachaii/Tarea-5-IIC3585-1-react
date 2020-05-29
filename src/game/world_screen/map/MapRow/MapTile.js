import React from "react";
import PropTypes from "prop-types";

import {PLAYER_HEIGHT} from "../../world_constants";
const TILE_SIZE = PLAYER_HEIGHT;


function MapTile(props) {
  const { tile_info } = props;
  return(
    <div
      style={{
        height: TILE_SIZE,
        width: TILE_SIZE,
        display: "inline-flex",
        ...tile_info.background,
      }}
    />
  )
}

MapTile.propTypes = {
  tile_info: PropTypes.object,
};

MapTile.defaultProps = {
  tile_info: {
    background: {
      backgroundColor: "transparent"
    }
  }
}

export default MapTile;