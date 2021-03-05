import {
  DASHBOARD_ERROR,
  DASHBOARD_LOADING,
  DASHBOARD_SUCCESS,
} from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

export const getDashboardInformation = (dispatch) => {
  dispatch({
    type: DASHBOARD_LOADING,
  });

  axiosInstance
    .get("admin/dashboard")
    .then((res) => {
      dispatch({
        type: DASHBOARD_SUCCESS,
        payload: res.data.data,
      });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({
        type: DASHBOARD_ERROR,
        payload: err.response.data.message,
      });
      console.log(err.response.data);
    });
};
