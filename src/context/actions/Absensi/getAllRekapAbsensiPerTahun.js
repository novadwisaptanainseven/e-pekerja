import { ERROR, LOADING, SUCCESS } from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

export const getAllRekapAbsensiPerTahun = (dispatch, tahun) => {
  dispatch({
    type: LOADING,
  });

  axiosInstance
    .get(`admin/pegawai/rekap-absensi?tahun=${tahun}`)
    .then((res) => {
      dispatch({
        type: SUCCESS,
        payload: res.data.data,
      });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
      });
      console.log(err.response.data);
    });
};
