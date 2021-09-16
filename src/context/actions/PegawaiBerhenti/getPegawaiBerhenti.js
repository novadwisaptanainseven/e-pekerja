import { ERROR, LOADING, SUCCESS } from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

const getPegawaiBerhenti = (dispatch) => {
  dispatch({
    type: LOADING,
  });

  let urlAPI = "admin/pegawai-berhenti";

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

export default getPegawaiBerhenti;
