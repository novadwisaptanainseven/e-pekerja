import axiosInstance from "src/helpers/axios";
import { getPenghargaan } from "../DataKepegawaian/getPenghargaan";

export const editPenghargaan = (
  id_pegawai,
  id_penghargaan,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  dispatch
) => {
  setLoading(true);

  axiosInstance
    .post(
      `user/data-kepegawaian/${id_pegawai}/penghargaan/${id_penghargaan}`,
      values,
      {
        header: {
          "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
        },
      }
    )
    .then((res) => {
      // console.log(res.data);
      setLoading(false);
      getPenghargaan(dispatch);
      showAlertSuccess();
    })
    .catch((err) => {
      setLoading(false);
      // console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
