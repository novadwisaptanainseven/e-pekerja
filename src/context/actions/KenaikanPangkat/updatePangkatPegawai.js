import axiosInstance from "src/helpers/axios";
import { getKenaikanPangkat } from "./getKenaikanPangkat";

export const updatePangkatPegawai = (
  id,
  values,
  dispatch,
  setLoading,
  showAlertSuccess,
  showAlertError
) => {
  setLoading(true);
  axiosInstance
    .post(`admin/kenaikan-pangkat-update/${id}`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      getKenaikanPangkat(dispatch);
      showAlertSuccess();
      setLoading(false);
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(err.response.data.message);
      setLoading(false);
    });
};
