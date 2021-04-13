import axiosInstance from "src/helpers/axios";

export const editAkun = (
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  userDispatch
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
      userDispatch({
        type: "SAVE_USER",
        payload: res.data.edited_data,
      });
      setLoading(false);
      showAlertSuccess();
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
