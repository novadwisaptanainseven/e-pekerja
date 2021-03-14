import axiosInstance from "src/helpers/axios";
import { getDiklat } from "./getDiklat";

export const insertDiklat = (
  id_pegawai,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  setLoadingDiklat,
  setDataDiklat
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/pegawai/${id_pegawai}/diklat`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      // console.log(res.data);
      setLoading(false);
      getDiklat(id_pegawai, setDataDiklat, setLoadingDiklat);
      showAlertSuccess();
    })
    .catch((err) => {
      // console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
