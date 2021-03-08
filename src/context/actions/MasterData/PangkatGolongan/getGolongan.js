import { ERROR, LOADING, SUCCESS } from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

export const getGolongan = (dispatch) => {
  dispatch({
    type: LOADING,
  });

  axiosInstance
    .get("admin/master-data/pangkat-golongan")
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err.response.data.message,
      });
      console.log(err.response.data);
    });
};
