import React from "react";
import PropTypes from "prop-types";

import { PLAYER_HEIGHT } from "../../world_constants";

import {ReactComponent as Tree} from "./tile_sprites/Tree.svg"

const TILE_SIZE = PLAYER_HEIGHT;

const sprites = {
  "tree":  Tree// Taken from here https://www.flaticon.com/free-icon/pine-tree_483683
}

function MapTile(props) {
  const { tile_info } = props;
  let Sprite;
  if (tile_info.sprite){
    Sprite = sprites[tile_info.sprite.form]
  }
  return(
    <div
      style={{
        height: TILE_SIZE,
        width: TILE_SIZE,
        display: "inline-flex",
        ...tile_info.background,
      }}
    >
      {
        Sprite &&
        <Sprite
          style={{
            fill: tile_info.sprite.fill,
          }}
        />
      }
    </div>
  )
}

MapTile.propTypes = {
  tile_info: PropTypes.object,
  sprite: PropTypes.object,
};

MapTile.defaultProps = {
  tile_info: {
    background: {
      backgroundColor: "transparent"
    }
  },
  sprite: undefined,
}

export default MapTile;