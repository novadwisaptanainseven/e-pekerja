import axiosInstance from "src/helpers/axios";
import { getRiwayatGolongan } from "../DataKepegawaian/getRiwayatGolongan";

export const editRiwayatGolongan = (
  id_pegawai,
  id_riwayat_golongan,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  dispatch
) => {
  setLoading(true);

  axiosInstance
    .post(
      `user/data-kepegawaian/riwayat-golongan/${id_riwayat_golongan}`,
      values,
      {
        header: {
          "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
        },
      }
    )
    .then((res) => {
      console.log(res.data);
      getRiwayatGolongan(id_pegawai, dispatch);
      setLoading(false);
      showAlertSuccess();
    })
    .catch((err) => {
      setLoading(false);
      console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
