import React from "react";
import PropTypes from "prop-types";

import EnemyEvent from "./EnemyEvent";

import get_level from "../levels";
import {TILE_SIZE} from "../world_constants";

function Events(props) {
  const { level, map_scroll, events_active_state } = props;
  const current_level_info = get_level(level);
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        left: map_scroll,
        width: TILE_SIZE*current_level_info.width,
      }}
    >
      {
        current_level_info.events.map((event, index)=>{
          console.log(events_active_state)
          if (events_active_state[index]){
            switch (event.type) {
              case "enemy":
                return <EnemyEvent key={index} {...event}/>;
              default:
                return null;
            }
          }
          return null;
        })
      }
    </div>
  )
}

Events.propTypes = {
  level: PropTypes.number.isRequired,
  map_scroll: PropTypes.number,
  events_active_state: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

Events.defaultProps = {
  map_scroll: 0
}

export default Events;