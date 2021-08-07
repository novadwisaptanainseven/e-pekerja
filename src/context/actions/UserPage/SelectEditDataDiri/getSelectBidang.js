import axiosInstance from "src/helpers/axios";

export const getSelectBidang = (setBidang) => {
  axiosInstance
    .get("user/master-data/bidang")
    .then((res) => {
      setBidang(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
