import axiosInstance from "src/helpers/axios";
import { getPNS } from "./getPNS";

export const deletePNS = (id, dispatch) => {
  axiosInstance
    .delete(`admin/pegawai/pns/${id}`)
    .then((res) => {
      // console.log(res.data);
      getPNS(dispatch);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
