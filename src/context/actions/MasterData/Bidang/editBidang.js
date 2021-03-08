import axiosInstance from "src/helpers/axios";

export const editBidang = (
  id,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError
) => {
  setLoading(true);

  axiosInstance
    .put(`admin/master-data/bidang/${id}`, values)
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
