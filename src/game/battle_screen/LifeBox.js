import React from "react";
import PropTypes from "prop-types";


function LifeBox(props) {
  return (
    <div
      style={{
        bottom: 0,
        background: "white",
        position: "absolute",
      }}
    >
      <p style={{margin: 0}}>
        {`${props.current_life}/${props.total_life}`}
      </p>
    </div>
  );
}

LifeBox.propTypes = {
  current_life: PropTypes.number.isRequired,
  total_life: PropTypes.number.isRequired,
};

export default LifeBox