import axiosInstance from "src/helpers/axios";

export const editKGB = (
  id_pegawai,
  id_kgb,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError
) => {
  setLoading(true);

  axiosInstance
    .put(`admin/pegawai/${id_pegawai}/kgb/${id_kgb}`, values)
    .then((res) => {
      console.log(res.data);
      setLoading(false);
      showAlertSuccess();
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
