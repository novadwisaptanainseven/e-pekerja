import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

export const login = (values, dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });

  axiosInstance
    .post("login", values)
    .then((res) => {
      localStorage.token = res.data.token;
      localStorage.level = res.data.user.level;
      localStorage.id_user = res.data.user.id;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.user,
      });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response.data.message,
      });
      console.log(err.response.data);
    });
};
