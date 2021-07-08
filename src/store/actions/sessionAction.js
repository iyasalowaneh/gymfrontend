import * as actionTypes from "./types";
import instance from "./instance";

export const createSession = (newSession) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newSession) {
        formData.append(key, newSession[key]);
      }
      const res = await instance.post(
        `/classes/${newSession.classId}/sessions`,
        formData
      );
      dispatch({
        type: actionTypes.CREATE_SESSION,
        payload: {
          newSession: res.data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchSessions = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/sessions");
      console.log(res.data);

      dispatch({
        type: actionTypes.FETCH_SESSION,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
