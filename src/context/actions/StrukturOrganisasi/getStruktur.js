import { ERROR, LOADING, SUCCESS } from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

const getStruktur = (dispatch) => {
  dispatch({
    type: LOADING,
  });

  axiosInstance
    .get("admin/struktur")
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
        payload: err.response.data.message,
      });
      console.log(err.response.data);
    });
};

export default getStruktur;
