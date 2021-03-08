import axiosInstance from "src/helpers/axios";
import { getBidang } from "./getBidang";

export const deleteBidang = (id, dispatch) => {
  axiosInstance
    .delete(`admin/master-data/bidang/${id}`)
    .then((res) => {
      // console.log(res.data);
      getBidang(dispatch);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
