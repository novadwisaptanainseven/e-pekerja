import axiosInstance from "src/helpers/axios";
import { getRiwayatKerja } from "../DataKepegawaian/getRiwayatKerja";

export const insertRiwayatKerja = (
  id_pegawai,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  dispatch
) => {
  setLoading(true);

  axiosInstance
    .post(`user/data-kepegawaian/${id_pegawai}/riwayat-kerja`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setLoading(false);
      getRiwayatKerja(dispatch);
      showAlertSuccess();
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
