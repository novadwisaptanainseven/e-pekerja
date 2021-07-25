import axiosInstance from "src/helpers/axios";
import {getRiwayatGolongan} from ".";

const insertGolongan = (
  id_pegawai,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  setLoadingGolongan,
  setDataGolongan
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/pegawai/${id_pegawai}/riwayat-golongan`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setLoading(false);
      getRiwayatGolongan(id_pegawai, setDataGolongan, setLoadingGolongan);
      showAlertSuccess();
    })
    .catch((err) => {
      console.log(err.response.data);
      setLoading(false);
      showAlertError(err.response.data.errors);
    });
};

export default insertGolongan;
