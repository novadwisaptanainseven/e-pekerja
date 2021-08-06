import axiosInstance from "src/helpers/axios";
import { getKeluarga } from "../DataKepegawaian/getKeluarga";

export const deleteKeluarga = (id_pegawai, id_keluarga, dispatch, Swal) => {
  axiosInstance
    .delete(`user/data-kepegawaian/${id_pegawai}/keluarga/${id_keluarga}`)
    .then((res) => {
      Swal.fire({
        icon: "success",
        title: "Terhapus",
        text: "Data berhasil dihapus",
      }).then((res) => {
        getKeluarga(dispatch);
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
