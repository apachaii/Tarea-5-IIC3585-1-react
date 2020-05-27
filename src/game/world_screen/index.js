import React from "react";

import handle_input from "./input";

import Map from "./map"
import Player from "./player"

function World_Screen() {
  return (
    <div
      style={{
        background: "purple",

        position: "relative",
        width: 800,
        height: 400,
        margin: "100px auto"
      }}
    >
      <Map/>
      <Player/>
    </div>
  )
}

export default handle_input(World_Screen)