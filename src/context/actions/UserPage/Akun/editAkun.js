import axiosInstance from "src/helpers/axios";
import { cekUser } from "../../Auth/cekUser";

export const editAkun = (
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  userDispatch,
  setCurrentUser
) => {
  setLoading(true);

  axiosInstance
    .post(`user/akun`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      cekUser(setCurrentUser, userDispatch);
      setLoading(false);
      showAlertSuccess();
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
