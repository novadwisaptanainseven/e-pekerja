import axiosInstance from "src/helpers/axios";
import { getSubBidang } from "./getSubBidang";

export const deleteSubBidang = (id, dispatch) => {
  axiosInstance
    .delete(`admin/master-data/sub-bidang/${id}`)
    .then((res) => {
      // console.log(res.data);
      getSubBidang(dispatch);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
