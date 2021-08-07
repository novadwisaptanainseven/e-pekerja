import axiosInstance from "src/helpers/axios";
import { getPendidikan } from "../DataKepegawaian/getPendidikan";

export const deletePendidikan = (id_pegawai, id_pendidikan, dispatch, Swal) => {
  axiosInstance
    .delete(`user/data-kepegawaian/${id_pegawai}/pendidikan/${id_pendidikan}`)
    .then((res) => {
      Swal.fire({
        icon: "success",
        title: "Terhapus",
        text: "Data berhasil dihapus",
      }).then((res) => {
        getPendidikan(dispatch);
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
