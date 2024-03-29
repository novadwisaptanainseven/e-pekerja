import axiosInstance from "src/helpers/axios";
import { getDashboardInformation } from "../Dashboard/getDashboardInformation";
import { getKeluarga } from "../DataKepegawaian/getKeluarga";

export const insertKeluarga = (
  id_pegawai,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  dispatch,
  dashboardDispatch
) => {
  setLoading(true);

  axiosInstance
    .post(`user/data-kepegawaian/${id_pegawai}/keluarga`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setLoading(false);
      getKeluarga(dispatch);
      getDashboardInformation(dashboardDispatch);
      showAlertSuccess();
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
