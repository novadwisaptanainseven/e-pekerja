import axiosInstance from "src/helpers/axios";
import { getPendidikan } from "./getPendidikan";

export const insertPendidikan = (
  id_pegawai,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  setLoadingPendidikan,
  setDataPendidikan
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/pegawai/${id_pegawai}/pendidikan`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      // console.log(res.data);
      setLoading(false);
      getPendidikan(id_pegawai, setDataPendidikan, setLoadingPendidikan);
      showAlertSuccess();
    })
    .catch((err) => {
      // console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
