import { combineReducers } from "redux";
import gymReduser from "./gymReduser";
import authReduser from "./authReduser";
import classReducer from "./classReduser";
import sessionReduser from "./sessionReduser";
const rootReducer = combineReducers({
  gyms: gymReduser,
  users: authReduser,
  classes: classReducer,
  sessions: sessionReduser,
});
export default rootReducer;
