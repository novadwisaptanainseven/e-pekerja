import axiosInstance from "src/helpers/axios";

export const editSubBidang = (
  id,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError
) => {
  setLoading(true);

  axiosInstance
    .put(`admin/master-data/sub-bidang/${id}`, values)
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
