import axiosInstance from "src/helpers/axios";
import { getKeluarga } from "../DataKepegawaian/getKeluarga";

export const editKeluarga = (
  id_pegawai,
  id_keluarga,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  dispatch
) => {
  setLoading(true);

  axiosInstance
    .post(`user/data-kepegawaian/${id_pegawai}/keluarga/${id_keluarga}`, values)
    .then((res) => {
      // console.log(res.data);
      setLoading(false);
      getKeluarga(dispatch);
      showAlertSuccess();
    })
    .catch((err) => {
      setLoading(false);
      // console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
