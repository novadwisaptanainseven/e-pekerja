import axiosInstance from "src/helpers/axios";
import { getSubBidang } from "./getSubBidang";

export const deleteSubBidang = (id, dispatch) => {
  axiosInstance
    .get(`admin/master-data/sub-bidang/${id}/delete`)
    .then((res) => {
      // console.log(res.data);
      getSubBidang(dispatch);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
