import axiosInstance from "src/helpers/axios";
import { getPenghargaan } from "../DataKepegawaian/getPenghargaan";

export const insertPenghargaan = (
  id_pegawai,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  dispatch
) => {
  setLoading(true);

  axiosInstance
    .post(`user/data-kepegawaian/${id_pegawai}/penghargaan`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setLoading(false);
      getPenghargaan(dispatch);
      showAlertSuccess();
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
