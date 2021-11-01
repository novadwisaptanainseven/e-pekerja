import axiosInstance from "src/helpers/axios";
import { getPNS } from "./getPNS";

export const deletePNS = (id, dispatch) => {
  axiosInstance
    .get(`admin/pegawai/pns/${id}/delete`)
    .then((res) => {
      // console.log(res.data);
      getPNS(dispatch);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
