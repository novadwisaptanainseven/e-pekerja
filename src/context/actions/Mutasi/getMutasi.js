import { ERROR, LOADING, SUCCESS } from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

export const getMutasi = (dispatch, params = null) => {
  dispatch({
    type: LOADING,
  });

  let urlAPI = "";

  if (params) {
    urlAPI = `admin/mutasi?bulan=${params.bulan}&tahun=${params.tahun}`;
  } else {
    urlAPI = `admin/mutasi`;
  }

  axiosInstance
    .get(urlAPI)
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
