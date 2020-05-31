import {connect} from "react-redux";
import EnemyBox from "./EnemyBox";

function mapStateToProps(state) {
  return {
    ...state.battle,
  }
}

export default connect(mapStateToProps)(EnemyBox);
