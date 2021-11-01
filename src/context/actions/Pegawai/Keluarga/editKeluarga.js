import axiosInstance from "src/helpers/axios";
import { getKeluarga } from "./getKeluarga";

export const editKeluarga = (
  id_pegawai,
  id_keluarga,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  setDataKeluarga,
  setLoadingKeluarga
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/pegawai/${id_pegawai}/keluarga/${id_keluarga}`, values)
    .then((res) => {
      // console.log(res.data);
      setLoading(false);
      getKeluarga(id_pegawai, setDataKeluarga, setLoadingKeluarga);
      showAlertSuccess();
    })
    .catch((err) => {
      setLoading(false);
      // console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
