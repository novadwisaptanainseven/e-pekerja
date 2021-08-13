import axiosInstance from "src/helpers/axios";
import getBerkasKp from "./getBerkasKp";

const deleteBerkasKp = (idPegawai, idBerkasKp, dispatch, Swal) => {
  axiosInstance
    .delete(`user/pegawai/${idPegawai}/berkas-kp/${idBerkasKp}`)
    .then((res) => {
      console.log(res.data);
      getBerkasKp(idPegawai, dispatch);
      Swal.fire({
        icon: "success",
        title: "Sukses",
        text: "Berhasil Menghapus Berkas",
      });
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Gagal Menghapus Berkas. Terjadi Kesalahan Server",
      });
    });
};

export default deleteBerkasKp;
