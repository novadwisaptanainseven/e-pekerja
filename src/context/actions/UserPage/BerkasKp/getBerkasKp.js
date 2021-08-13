import { ERROR, LOADING, SUCCESS } from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

const getBerkasKp = (idPegawai, dispatch) => {
  dispatch({
    type: LOADING,
  });

  axiosInstance
    .get(`user/pegawai/${idPegawai}/berkas-kp`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({
        type: ERROR,
        payload: err.response.data,
      });
    });
};

export default getBerkasKp;
