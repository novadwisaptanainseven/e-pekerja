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
    .get(
      `admin/pegawai/${id_pegawai}/masa-kerja/riwayat/${idRiwayatMasaKerja}/delete`
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
