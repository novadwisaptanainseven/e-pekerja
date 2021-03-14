import axiosInstance from "src/helpers/axios";
import { getRiwayatKerja } from "./getRiwayatKerja";

export const deleteRiwayatKerja = (
  id_pegawai,
  id_riwayat_kerja,
  setData,
  setLoading
) => {
  axiosInstance
    .delete(`admin/pegawai/${id_pegawai}/riwayat-kerja/${id_riwayat_kerja}`)
    .then((res) => {
      getRiwayatKerja(id_pegawai, setData, setLoading);
      console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
