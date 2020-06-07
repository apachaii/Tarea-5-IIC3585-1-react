import { connect } from 'react-redux';
import Map from "./Map";

function mapStateToProps(state) {
  return {
    ...state.world,
  }
}

export default connect(mapStateToProps)(Map);