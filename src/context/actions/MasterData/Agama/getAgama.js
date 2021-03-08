import {
  AGAMA_ERROR,
  AGAMA_LOADING,
  AGAMA_SUCCESS,
} from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

export const getAgama = (dispatch) => {
  dispatch({
    type: AGAMA_LOADING,
  });

  axiosInstance
    .get("admin/master-data/agama")
    .then((res) => {
      dispatch({
        type: AGAMA_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: AGAMA_ERROR,
        payload: err.response.data.message,
      });
      console.log(err.response.data);
    });
};
