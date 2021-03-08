import axiosInstance from "src/helpers/axios";
import { getEselon } from "./getEselon";

export const deleteEselon = (id, dispatch) => {
  axiosInstance
    .delete(`admin/master-data/pangkat-eselon/${id}`)
    .then((res) => {
      console.log(res.data);
      getEselon(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
