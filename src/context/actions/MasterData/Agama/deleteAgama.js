import axiosInstance from "src/helpers/axios";
import { getAgama } from "./getAgama";

export const deleteAgama = (id, dispatch) => {
  axiosInstance
    .delete(`admin/master-data/agama/${id}`)
    .then((res) => {
      console.log(res.data);
      getAgama(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

