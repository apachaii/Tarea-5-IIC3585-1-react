import {combineReducers, createStore} from "redux";
import playerReducer from "./player_reducer";
import worldReducer from "./world_reducer";

const rootReducer = combineReducers({
  player: playerReducer,
  world: worldReducer,
})

const app_state = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default app_state;