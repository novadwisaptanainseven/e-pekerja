import axiosInstance from "src/helpers/axios";
import { getRiwayatKerja } from "../DataKepegawaian/getRiwayatKerja";

export const deleteRiwayatKerja = (
  id_pegawai,
  id_riwayat_kerja,
  dispatch,
  Swal
) => {
  axiosInstance
    .delete(
      `user/data-kepegawaian/${id_pegawai}/riwayat-kerja/${id_riwayat_kerja}`
    )
    .then((res) => {
      Swal.fire({
        icon: "success",
        title: "Terhapus",
        text: "Data berhasil dihapus",
      }).then((res) => {
        getRiwayatKerja(dispatch);
      });
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire({
        icon: "danger",
        title: "Gagal",
        text: "Data gagal dihapus. Terjadi kesalahan",
      });
    });
};
