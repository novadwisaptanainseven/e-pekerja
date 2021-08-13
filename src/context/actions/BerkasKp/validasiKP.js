import axiosInstance from "src/helpers/axios";
import getBerkasKp from "./getBerkasKp";

const validasiKP = (idPegawai, idKp, values, setData, setLoading, Swal) => {
  let message = "";

  if (values.status_validasi === 1) {
    message = "Berkas Kenaikan Pangkat Tervalidasi";
  } else {
    message = "Berkas Kenaikan Pangkat Tidak Disetujui";
  }

  axiosInstance
    .put(`admin/kenaikan-pangkat/${idKp}/validasi`, values)
    .then((res) => {
      console.log(res.data);
      getBerkasKp(idPegawai, setData, setLoading);
      Swal.fire({
        icon: "success",
        title: "Sukses",
        text: message,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Berkas Kenaikan Pangkat Gagal Tervalidasi. Ada Kesalahan Server",
      });
    });
};

export default validasiKP;
