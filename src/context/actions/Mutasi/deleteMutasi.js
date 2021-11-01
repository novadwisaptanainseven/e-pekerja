import axiosInstance from "src/helpers/axios";
import { getMutasi } from "./getMutasi";

export const deleteMutasi = (id, dispatch) => {
  axiosInstance
    .get(`admin/mutasi/${id}/delete`)
    .then((res) => {
      console.log(res.data);
      getMutasi(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
