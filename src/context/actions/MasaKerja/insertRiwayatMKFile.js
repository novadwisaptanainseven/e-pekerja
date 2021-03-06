import axiosInstance from "src/helpers/axios";

export const insertRiwayatMKFile = (
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  setAlertSuccess
) => {
  setLoading(true);

  axiosInstance
    .post(`riwayat-mk/save`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setLoading(false);
      showAlertSuccess();
      setAlertSuccess(true);
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
