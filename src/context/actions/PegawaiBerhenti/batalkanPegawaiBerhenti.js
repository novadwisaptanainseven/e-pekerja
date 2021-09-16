import axiosInstance from "src/helpers/axios";
import { getPegawaiBerhenti } from ".";

const batalkanPegawaiBerhenti = (id, dispatch, Swal) => {
  axiosInstance
    .delete(`admin/pegawai-berhenti-batal/${id}`)
    .then((res) => {
      console.log(res.data);
      getPegawaiBerhenti(dispatch);
      Swal.fire({
        icon: "success",
        title: "Sukses",
        text: "Status Berhenti Kerja Berhasil Dibatalkan",
      });
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: err.response.data.message,
      });
    });
};

export default batalkanPegawaiBerhenti;
