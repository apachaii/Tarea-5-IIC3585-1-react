import React from "react";
import {MAP_SCREEN_WIDTH} from "../world_constants";
import PropTypes from "prop-types";

function DataBar(props) {
  const {current_life, max_life} = props;
  return (
    <div
      style={{
        width: MAP_SCREEN_WIDTH,
        margin: "0px auto",
      }}
    >
      <p
        style={{
          margin: "0px"
        }}
      >
        {`Life: ${current_life}/${max_life}`}
      </p>
    </div>
  );
}

DataBar.propTypes = {
  max_life: PropTypes.number.isRequired,
  current_life: PropTypes.number.isRequired,
};

export default DataBar;