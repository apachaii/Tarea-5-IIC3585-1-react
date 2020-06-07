import {connect} from "react-redux";
import PlayerBox from "./PlayerBox";

function mapStateToProps(state) {
  return {
    ...state.player,
  }
}

export default connect(mapStateToProps)(PlayerBox);

