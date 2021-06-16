import axiosInstance from "src/helpers/axios";
import { getRiwayatMasaKerja } from "./getRiwayatMasaKerja";

export const deleteRiwayatMasaKerja = (
  id_pegawai,
  idRiwayatMasaKerja,
  setLoading,
  setData,
  setAlertSuccess
) => {
  axiosInstance
    .delete(
      `admin/pegawai/${id_pegawai}/masa-kerja/riwayat/${idRiwayatMasaKerja}`
    )
    .then((res) => {
      setAlertSuccess(true);
      getRiwayatMasaKerja(id_pegawai, setLoading, setData);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
