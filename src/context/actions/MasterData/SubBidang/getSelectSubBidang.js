import axiosInstance from "src/helpers/axios";

export const getSelectSubBidang = (setSubBidang) => {
  axiosInstance
    .get("admin/master-data/sub-bidang")
    .then((res) => {
      setSubBidang(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
