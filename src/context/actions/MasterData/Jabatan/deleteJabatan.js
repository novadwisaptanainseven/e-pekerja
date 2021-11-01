import axiosInstance from "src/helpers/axios";
import { getJabatan } from "./getJabatan";

export const deleteJabatan = (id, dispatch) => {
  axiosInstance
    .get(`admin/master-data/jabatan/${id}/delete`)
    .then((res) => {
      // console.log(res.data);
      getJabatan(dispatch);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
