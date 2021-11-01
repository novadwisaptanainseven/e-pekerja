import axiosInstance from "src/helpers/axios";
import { getKGB } from "./getKGB";

export const deleteKGB = (id_pegawai, id_kgb, setLoading, setKGB) => {
  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/kgb/${id_kgb}/delete`)
    .then((res) => {
      getKGB(id_pegawai, setLoading, setKGB);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
