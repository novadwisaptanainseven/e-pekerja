import axiosInstance from "src/helpers/axios";
import { getKenaikanPangkat } from "./getKenaikanPangkat";

export const insertKenaikanPangkat = (
  id,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  dispatch
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/kenaikan-pangkat/${id}`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setLoading(false);
      showAlertSuccess();
      getKenaikanPangkat(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
