import {combineReducers, createStore} from "redux";
import playerReducer from "./player_reducer";
import worldReducer from "./world_reducer";
import screenReducer from "./screen_reducer";
import battleReducer from "./battle_reducer";

const rootReducer = combineReducers({
  screen: screenReducer,
  player: playerReducer,
  world: worldReducer,
  battle: battleReducer,
})

const app_state = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default app_state;