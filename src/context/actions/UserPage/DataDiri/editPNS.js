import axiosInstance from "src/helpers/axios";

export const editPNS = (
  id,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
) => {
  setLoading(true);

  axiosInstance
    .post(`user/pegawai/pns/${id}`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      // console.log(res.data);
      setLoading(false);
      showAlertSuccess();
    })
    .catch((err) => {
      // console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
