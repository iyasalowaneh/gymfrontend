import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { fetchGyms } from "./actions/gymActions";
import rootReducer from "./reducers/index";
import { checkForToken } from "./actions/authActions";
import { fetchClasses } from "./actions/classAction";
import { fetchSessions } from "./actions/sessionAction";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, // reducer function
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchGyms());
store.dispatch(checkForToken());
store.dispatch(fetchClasses());
store.dispatch(fetchSessions());

export default store;
