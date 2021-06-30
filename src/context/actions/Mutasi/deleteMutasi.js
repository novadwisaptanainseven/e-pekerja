import axiosInstance from "src/helpers/axios";
import { getMutasi } from "./getMutasi";

export const deleteMutasi = (id, dispatch) => {
  axiosInstance
    .delete(`admin/mutasi/${id}`)
    .then((res) => {
      console.log(res.data);
      getMutasi(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
