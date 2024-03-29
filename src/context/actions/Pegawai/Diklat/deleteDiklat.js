import axiosInstance from "src/helpers/axios";
import { getDiklat } from "./getDiklat";

export const deleteDiklat = (id_pegawai, id_diklat, setData, setLoading) => {
  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/diklat/${id_diklat}/delete`)
    .then((res) => {
      getDiklat(id_pegawai, setData, setLoading);
      console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
