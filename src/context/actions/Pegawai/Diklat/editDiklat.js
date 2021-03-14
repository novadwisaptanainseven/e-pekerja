import axiosInstance from "src/helpers/axios";
import { getDiklat } from "./getDiklat";

export const editDiklat = (
  id_pegawai,
  id_diklat,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  setDataDiklat,
  setLoadingDiklat
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/pegawai/${id_pegawai}/diklat/${id_diklat}`, values, {
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
      setLoading(false);
      // console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
