import axiosInstance from "src/helpers/axios";
import { getEselon } from "./getEselon";

export const deleteEselon = (id, dispatch) => {
  axiosInstance
    .get(`admin/master-data/pangkat-eselon/${id}/delete`)
    .then((res) => {
      console.log(res.data);
      getEselon(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
