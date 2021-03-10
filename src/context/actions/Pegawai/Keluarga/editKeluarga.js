import axiosInstance from "src/helpers/axios";

export const editKeluarga = (
  id_pegawai,
  id_keluarga,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/pegawai/${id_pegawai}/keluarga/${id_keluarga}`, values, {
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
