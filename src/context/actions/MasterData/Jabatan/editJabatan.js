import axiosInstance from "src/helpers/axios";

export const editJabatan = (
  id,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/master-data/jabatan/${id}`, values)
    .then((res) => {
      //console.log(res.data);
      setLoading(false);
      showAlertSuccess();
    })
    .catch((err) => {
      //console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
