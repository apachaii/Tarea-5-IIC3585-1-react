import React from "react";

import handle_input from "./input";

import DataBar from "./data_bar";
import Map from "./map"
import Player from "./player"


import {MAP_SCREEN_HEIGHT, MAP_SCREEN_WIDTH} from "./world_constants"

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
      </div>
    </React.Fragment>
  )
}

export default handle_input(WorldScreen)