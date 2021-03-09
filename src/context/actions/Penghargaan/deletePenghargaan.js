import axiosInstance from "src/helpers/axios";
import { getPenghargaan } from "./getPenghargaan";

export const deletePenghargaan = (id, dispatch) => {
  axiosInstance
    .delete(`admin/penghargaan/${id}`)
    .then((res) => {
      console.log(res.data);
      getPenghargaan(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
