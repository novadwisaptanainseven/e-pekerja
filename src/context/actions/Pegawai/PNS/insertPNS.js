import axiosInstance from "src/helpers/axios";

export const insertPNS = (
  values,
  setLoading,
  showAlertSuccess,
  showAlertError
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/pegawai/pns`, values, {
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
