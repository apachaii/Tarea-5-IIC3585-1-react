import React from "react";

import handle_movement from "./movement";

import DataBar from "./data_bar";
import Map from "./map"
import Player from "./player"


import {MAP_SCREEN_HEIGHT, MAP_SCREEN_WIDTH} from "./world_constants"
import Events from "./events";

function WorldScreen() {
  return (
    <React.Fragment>
      <DataBar/>
      <div
        style={{

          position: "relative",
          height: MAP_SCREEN_HEIGHT,
          width: MAP_SCREEN_WIDTH,
          margin: "0px auto",

          overflow: "hidden",
        }}
      >
        <Map/>
        <Player/>
        <Events/>
      </div>
    </React.Fragment>
  )
}

export default handle_movement(WorldScreen)