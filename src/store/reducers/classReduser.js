//actions
import * as actionTypes from "../actions/types";

const initialState = {
  classes: [],
  loading: true,
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_CLASS:
      return {
        ...state,
        classes: [...state.classes, action.payload.newClass],
      };
    case actionTypes.FETCH_CLASS:
      return {
        ...state,
        classes: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default classReducer;
