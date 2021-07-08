//actions
import * as actionTypes from "../actions/types";

const initialState = {
  gyms: [],
  loading: true,
};

const gymReduser = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_GYM:
      return {
        ...state,
        gyms: [...state.gyms, action.payload.newGym],
      };

    case actionTypes.FETCH_GYMS:
      return {
        ...state,
        gyms: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default gymReduser;
