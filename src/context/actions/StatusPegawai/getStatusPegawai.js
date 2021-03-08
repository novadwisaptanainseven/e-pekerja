import {
  STATUS_PEGAWAI_ERROR,
  STATUS_PEGAWAI_LOADING,
  STATUS_PEGAWAI_SUCCESS,
} from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

export const getStatusPegawai = (dispatch) => {
  dispatch({
    type: STATUS_PEGAWAI_LOADING,
  });

  axiosInstance
    .get("admin/master-data/status-pegawai")
    .then((res) => {
      dispatch({
        type: STATUS_PEGAWAI_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: STATUS_PEGAWAI_ERROR,
        payload: err.response.data.message,
      });
      console.log(err.response.data);
    });
};
