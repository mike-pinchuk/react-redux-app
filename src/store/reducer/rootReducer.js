import { combineReducers } from "redux";
import countReducer from './reducer_counter'
import loadReducer from './reducer_loader'

const rootReducer = combineReducers({
  counter: countReducer,
  loading: loadReducer,
});

export default rootReducer;
