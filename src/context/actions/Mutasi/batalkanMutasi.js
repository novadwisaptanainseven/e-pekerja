import axiosInstance from "src/helpers/axios";
import { getMutasi } from "./getMutasi";

export const batalkanMutasi = (id, dispatch) => {
  axiosInstance
    .delete(`admin/mutasi-batal/${id}`)
    .then((res) => {
      console.log(res.data);
      getMutasi(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
