import axiosInstance from "src/helpers/axios";
import { getPTTH } from "./getPTTH";

export const deletePTTH = (id, dispatch) => {
  axiosInstance
    .delete(`admin/pegawai/ptth/${id}`)
    .then((res) => {
      // console.log(res.data);
      getPTTH(dispatch);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
