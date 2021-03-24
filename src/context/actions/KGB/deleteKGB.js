import axiosInstance from "src/helpers/axios";
import { getKGB } from "./getKGB";

export const deleteKGB = (id_pegawai, id_kgb, setLoading, setKGB) => {
  axiosInstance
    .delete(`admin/pegawai/${id_pegawai}/kgb/${id_kgb}`)
    .then((res) => {
      getKGB(id_pegawai, setLoading, setKGB);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
