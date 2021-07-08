import axios from "axios";
import instance from "./instance";
import * as actionTypes from "./types";

export const fetchGyms = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/gyms");
      dispatch({
        type: actionTypes.FETCH_GYMS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createGym = (newGym) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newGym) {
        formData.append(key, newGym[key]);
      }
      const res = await instance.post("/gyms", formData);

      dispatch({
        type: actionTypes.CREATE_GYM,
        payload: {
          newGym: res.data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
