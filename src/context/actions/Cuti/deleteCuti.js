import axiosInstance from "src/helpers/axios";
import { getCuti } from "./getCuti";

export const deleteCuti = (id_pegawai, id_cuti, setLoading, setCuti) => {
  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/cuti/${id_cuti}/delete`)
    .then((res) => {
      getCuti(id_pegawai, setLoading, setCuti);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
