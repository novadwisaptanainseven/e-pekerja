import axiosInstance from "src/helpers/axios";
import { getPTTH } from "./getPTTH";

export const deletePTTH = (id, dispatch) => {
  axiosInstance
    .get(`admin/pegawai/ptth/${id}/delete`)
    .then((res) => {
      // console.log(res.data);
      getPTTH(dispatch);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
