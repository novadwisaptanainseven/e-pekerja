import axiosInstance from "src/helpers/axios";
import { getBerkas } from "./getBerkas";

export const insertBerkas = (
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  dispatch
) => {
  setLoading(true);

  axiosInstance
    .post(`user/data-kepegawaian/berkas`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      // console.log(res.data);
      setLoading(false);
      getBerkas(dispatch);
      showAlertSuccess();
    })
    .catch((err) => {
      // console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
