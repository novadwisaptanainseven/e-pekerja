import {
  PENSIUN_ERROR,
  PENSIUN_LOADING,
  PENSIUN_SUCCESS,
} from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

export const getPensiun = (dispatch) => {
  dispatch({
    type: PENSIUN_LOADING,
  });

  axiosInstance
    .get("admin/pensiun")
    .then((res) => {
      dispatch({
        type: PENSIUN_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: PENSIUN_ERROR,
        payload: err.response.data.message,
      });
      console.log(err.response.data);
    });
};
