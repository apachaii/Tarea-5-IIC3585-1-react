import { connect } from 'react-redux';
import DataBar from "./DataBar";

function mapStateToProps(state) {
  return {
    ...state.player,
  }
}

export default connect(mapStateToProps)(DataBar);