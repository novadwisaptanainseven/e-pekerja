import axiosInstance from "src/helpers/axios";
import { getBerkas } from "./getBerkas";

export const deleteBerkas = (
  id_pegawai,
  id_berkas,
  setData,
  setLoading
) => {
  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/berkas/${id_berkas}/delete`)
    .then((res) => {
      getBerkas(id_pegawai, setData, setLoading);
      console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
