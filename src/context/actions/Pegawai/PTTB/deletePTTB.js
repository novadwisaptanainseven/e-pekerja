import axiosInstance from "src/helpers/axios";
import { getPTTB } from "./getPTTB";

export const deletePTTB = (id, dispatch) => {
  axiosInstance
    .delete(`admin/pegawai/pttb/${id}`)
    .then((res) => {
      // console.log(res.data);
      getPTTB(dispatch);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
