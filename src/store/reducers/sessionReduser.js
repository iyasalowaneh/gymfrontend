//actions
import * as actionTypes from "../actions/types";

const initialState = {
  sessions: [],
  loading: true,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_SESSION:
      return {
        ...state,
        sessions: [...state.sessions, action.payload.newSession],
      };
    case actionTypes.FETCH_SESSION:
      return {
        ...state,
        sessions: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default sessionReducer;
