import axiosInstance from "src/helpers/axios";
import { getJabatan } from "./getJabatan";

export const deleteJabatan = (id, dispatch) => {
  axiosInstance
    .delete(`admin/master-data/jabatan/${id}`)
    .then((res) => {
      // console.log(res.data);
      getJabatan(dispatch);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
