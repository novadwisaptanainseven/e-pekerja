import { ERROR, LOADING, SUCCESS } from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

export const getAllRekapAbsensiByDate = (dispatch, values) => {
  dispatch({
    type: LOADING,
  });

  axiosInstance
    .get(
      `admin/pegawai/rekap-absensi-tanggal?first_date=${values.startDate}&last_date=${values.endDate}`
    )
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
