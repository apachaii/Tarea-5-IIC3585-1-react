import {
  INFO_BOX_HEIGHT,
  INFO_BOX_HORIZONTAL_POSITION,
  INFO_BOX_VERTICAL_POSITION,
  INFO_BOX_WIDTH
} from "../battle_constants";
import PropTypes from "prop-types";
import React from "react";

export function InfoBox(props) {
  const {battle_info} = props;
  return (
    <div
      style={{
        width: INFO_BOX_WIDTH,
        height: INFO_BOX_HEIGHT,

        position: "absolute",
        marginLeft: INFO_BOX_HORIZONTAL_POSITION,
        marginTop: INFO_BOX_VERTICAL_POSITION,

        border: "solid black 1px",

        overflowY: 'scroll',
      }}
    >
      {
        battle_info.map(
          (info, index) => {
            console.log(info)
            return <p key={index}>{info}</p>
          }
        )
      }
    </div>
  );
}

InfoBox.propTypes = {
  battle_info: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InfoBox;