import { connect } from 'react-redux';
import Player from "./Player";

function mapStateToProps(state) {
  return {
    ...state.world,
    ...state.player,
  }
}

export default connect(mapStateToProps)(Player);