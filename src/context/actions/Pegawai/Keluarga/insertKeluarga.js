import axiosInstance from "src/helpers/axios";
import { getKeluarga } from "./getKeluarga";

export const insertKeluarga = (
  id_pegawai,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  setLoadingKeluarga,
  setDataKeluarga
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/pegawai/${id_pegawai}/keluarga`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      // console.log(res.data);
      setLoading(false);
      getKeluarga(id_pegawai, setDataKeluarga, setLoadingKeluarga);
      showAlertSuccess();
    })
    .catch((err) => {
      // console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
