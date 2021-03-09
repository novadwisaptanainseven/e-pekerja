import axiosInstance from "src/helpers/axios";
import { getPensiun } from "./getPensiun";

export const deletePensiun = (id, dispatch) => {
  axiosInstance
    .delete(`admin/pensiun/${id}`)
    .then((res) => {
      console.log(res.data);
      getPensiun(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
