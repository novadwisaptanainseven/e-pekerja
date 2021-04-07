import axiosInstance from "src/helpers/axios";
import { getPensiun } from "./getPensiun";

export const batalkanPensiun = (id, dispatch) => {
  axiosInstance
    .delete(`admin/pensiun-batal/${id}`)
    .then((res) => {
      console.log(res.data);
      getPensiun(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
