import axiosInstance from "src/helpers/axios";
import { getRiwayatGolongan } from "../DataKepegawaian/getRiwayatGolongan";

export const deleteRiwayatGolongan = (
  id_pegawai,
  id_riwayat_golongan,
  dispatch,
  Swal
) => {
  axiosInstance
    .delete(`user/data-kepegawaian/riwayat-golongan/${id_riwayat_golongan}`)
    .then((res) => {
      Swal.fire({
        icon: "success",
        title: "Terhapus",
        text: "Data berhasil dihapus",
      }).then((res) => {
        getRiwayatGolongan(id_pegawai, dispatch);
      });
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Data gagal dihapus. Terjadi kesalahan",
      });
    });
};
