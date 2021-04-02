import axiosInstance from "src/helpers/axios";
import { getRekapAbsensiPerTahun } from "./getRekapAbsensiPerTahun";
import { getRiwayatAbsensiPegawai } from "./getRiwayatAbsensiPegawai";

export const deleteAbsensi = (
  id_pegawai,
  id_absensi,
  setLoading,
  setLoadingRekapAbsensi,
  setData,
  setRekapAbsensi,
  formattedDate
) => {
  axiosInstance
    .delete(`admin/pegawai/${id_pegawai}/absensi/${id_absensi}`)
    .then((res) => {
      getRiwayatAbsensiPegawai(id_pegawai, setLoading, setData, formattedDate);
      getRekapAbsensiPerTahun(
        id_pegawai,
        setLoadingRekapAbsensi,
        setRekapAbsensi
      );
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
