import axiosInstance from "src/helpers/axios";
import { getDiklat } from "../DataKepegawaian/getDiklat";

export const deleteDiklat = (id_pegawai, id_diklat, dispatch, Swal) => {
  axiosInstance
    .delete(`user/data-kepegawaian/${id_pegawai}/diklat/${id_diklat}`)
    .then((res) => {
      Swal.fire({
        icon: "success",
        title: "Terhapus",
        text: "Data berhasil dihapus",
      }).then((res) => {
        getDiklat(dispatch);
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
