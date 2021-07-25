import axiosInstance from "src/helpers/axios";
import { getRiwayatGolongan } from ".";

const editGolongan = (
  idPegawai,
  idRiwayat,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  setLoadingGolongan,
  setDataGolongan
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/riwayat-golongan/${idRiwayat}`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setLoading(false);
      getRiwayatGolongan(idPegawai, setDataGolongan, setLoadingGolongan);
      showAlertSuccess();
    })
    .catch((err) => {
      console.log(err.response.data);
      setLoading(false);
      showAlertError(err.response.data.errors);
    });
};

export default editGolongan;
