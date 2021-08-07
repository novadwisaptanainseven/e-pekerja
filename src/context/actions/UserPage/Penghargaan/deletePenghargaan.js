import axiosInstance from "src/helpers/axios";
import { getPenghargaan } from "../DataKepegawaian/getPenghargaan";

export const deletePenghargaan = (
  id_pegawai,
  id_penghargaan,
  dispatch,
  Swal
) => {
  axiosInstance
    .delete(`user/data-kepegawaian/${id_pegawai}/penghargaan/${id_penghargaan}`)
    .then((res) => {
      Swal.fire({
        icon: "success",
        title: "Terhapus",
        text: "Data berhasil dihapus",
      }).then((res) => {
        getPenghargaan(dispatch);
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
