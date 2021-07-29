import axiosInstance from "src/helpers/axios";
import { getStruktur } from ".";

const insertGambarStruktur = (
  id,
  values,
  dispatch,
  showAlertSuccess,
  showAlertError,
  setLoading
) => {
  setLoading(true);
  axiosInstance
    .post(`admin/struktur/${id}`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      getStruktur(dispatch);
      showAlertSuccess();
      setLoading(false);
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(err.response.data.errors);
      setLoading(false);
    });
};

export default insertGambarStruktur;
