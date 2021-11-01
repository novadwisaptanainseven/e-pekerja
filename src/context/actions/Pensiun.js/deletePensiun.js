import axiosInstance from "src/helpers/axios";
import { getPensiun } from "./getPensiun";

export const deletePensiun = (id, dispatch) => {
  axiosInstance
    .get(`admin/pensiun/${id}/delete`)
    .then((res) => {
      console.log(res.data);
      getPensiun(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
