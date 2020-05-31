import {connect} from "react-redux";
import InfoBox from "./InfoBox";

function mapStateToProps(state) {
  return {
    battle_info: state.battle.battle_text,
  }
}

export default connect(mapStateToProps)(InfoBox);