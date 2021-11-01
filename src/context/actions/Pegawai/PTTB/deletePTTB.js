import axiosInstance from "src/helpers/axios";
import { getPTTB } from "./getPTTB";

export const deletePTTB = (id, dispatch) => {
  axiosInstance
    .get(`admin/pegawai/pttb/${id}/delete`)
    .then((res) => {
      // console.log(res.data);
      getPTTB(dispatch);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
