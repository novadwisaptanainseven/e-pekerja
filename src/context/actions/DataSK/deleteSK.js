import axiosInstance from "src/helpers/axios";
import { getSK } from ".";

const deleteSK = (id, dispatch, Swal) => {
  axiosInstance
    .get(`admin/upload-sk/${id}/delete`)
    .then((res) => {
      console.log(res.data);
      getSK(dispatch);
      Swal.fire({
        icon: "success",
        title: "Terhapus",
        text: "Data berhasil dihapus",
      });
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Data gagal dihapus. Terjadi Kesalahan",
      });
    });
};

export default deleteSK;
