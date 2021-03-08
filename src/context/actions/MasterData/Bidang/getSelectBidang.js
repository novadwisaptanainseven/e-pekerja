import { ERROR, LOADING, SUCCESS } from "src/context/actionTypes";
import axiosInstance from "src/helpers/axios";

export const getSelectBidang = (setBidang) => {
  axiosInstance
    .get("admin/master-data/bidang")
    .then((res) => {
      setBidang(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
