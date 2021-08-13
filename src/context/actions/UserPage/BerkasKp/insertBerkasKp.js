import axiosInstance from "src/helpers/axios";
import getBerkasKp from "./getBerkasKp";

const insertBerkasKp = (idPegawai, values, dispatch, setLoading, Swal) => {
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
    })
    .catch((err) => {
      console.log(err.response.data);
      setLoading(false);
    });
};

export default insertBerkasKp;
