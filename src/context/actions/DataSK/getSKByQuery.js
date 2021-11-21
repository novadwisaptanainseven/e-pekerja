import { ERROR, LOADING, SUCCESS } from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

const getSKByQuery = (dispatch, query) => {
  const dari = query?.dariTanggal;
  const ke = query?.keTanggal;

  dispatch({
    type: LOADING,
  });

  axiosInstance
    .get(`admin/sk?dariTanggal=${dari}&keTanggal=${ke}`)
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

export default getSKByQuery;
