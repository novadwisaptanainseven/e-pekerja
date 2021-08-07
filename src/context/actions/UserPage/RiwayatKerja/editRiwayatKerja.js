import axiosInstance from "src/helpers/axios";
import { getRiwayatKerja } from "../DataKepegawaian/getRiwayatKerja";

export const editRiwayatKerja = (
  id_pegawai,
  id_riwayat_kerja,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  dispatch
) => {
  setLoading(true);

  axiosInstance
    .put(
      `user/data-kepegawaian/${id_pegawai}/riwayat-kerja/${id_riwayat_kerja}`,
      values
    )
    .then((res) => {
      // console.log(res.data);
      setLoading(false);
      getRiwayatKerja(dispatch);
      showAlertSuccess();
    })
    .catch((err) => {
      setLoading(false);
      // console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
