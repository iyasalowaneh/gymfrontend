import * as actionTypes from "./types";
import instance from "./instance";

export const createClass = (newClass) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newClass) {
        formData.append(key, newClass[key]);
      }
      const res = await instance.post(
        `/gyms/${newClass.gymId}/classes`,
        formData
      );
      dispatch({
        type: actionTypes.CREATE_CLASS,
        payload: {
          newClass: res.data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchClasses = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/classes");
      console.log(res.data);

      dispatch({
        type: actionTypes.FETCH_CLASS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
