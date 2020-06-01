import { connect } from 'react-redux';

import Game from "./Game";

function mapStateToProps(state) {
  return {
    ...state.screen,
  }
}

export default connect(mapStateToProps)(Game);