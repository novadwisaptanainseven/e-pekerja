import axiosInstance from "src/helpers/axios";
import getBerkasKp from "./getBerkasKp";

const insertBerkasKp = (idPegawai, values, dispatch, setLoading, Swal) => {
  setLoading(true);
  axiosInstance
    .post(`user/pegawai/${idPegawai}/berkas-kp`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      getBerkasKp(idPegawai, dispatch);
      setLoading(false);
      Swal.fire({
        icon: "success",
        title: "Sukses",
        text: "Upload Berkas Berhasil",
      });
    })
    .catch((err) => {
      console.log(err.response.data);
      setLoading(false);

      let errMessage = err.response.data.errors;

      Swal.fire({
        icon: "error",
        title: "Upload Gagal",
        text: errMessage,
      });
    });
};

export default insertBerkasKp;
