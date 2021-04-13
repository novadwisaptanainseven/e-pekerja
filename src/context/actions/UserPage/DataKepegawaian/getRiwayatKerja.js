import { LOADING, SUCCESS, ERROR } from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

export const getRiwayatKerja = (dispatch) => {
  dispatch({
    type: LOADING,
  });

  axiosInstance
    .get(`user/data-kepegawaian/riwayat-kerja`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err.response.data,
      });
      console.log(err.response.data);
    });
};
