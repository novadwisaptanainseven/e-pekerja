import axiosInstance from "src/helpers/axios";
import { getPendidikan } from "../DataKepegawaian/getPendidikan";

export const editPendidikan = (
  id_pegawai,
  id_pendidikan,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  dispatch
) => {
  setLoading(true);

  axiosInstance
    .post(
      `user/data-kepegawaian/${id_pegawai}/pendidikan/${id_pendidikan}`,
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
      getPendidikan(dispatch);
      showAlertSuccess();
    })
    .catch((err) => {
      setLoading(false);
      // console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
