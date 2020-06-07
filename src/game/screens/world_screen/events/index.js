import { connect } from 'react-redux';
import Events from "./Events";

function mapStateToProps(state) {
  return {
    ...state.world,
  }
}

export default connect(mapStateToProps)(Events);