import axiosInstance from "src/helpers/axios";
import { getBidang } from "./getBidang";

export const deleteBidang = (id, dispatch) => {
  axiosInstance
    .get(`admin/master-data/bidang/${id}/delete`)
    .then((res) => {
      // console.log(res.data);
      getBidang(dispatch);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
