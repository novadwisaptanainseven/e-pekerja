import axiosInstance from "src/helpers/axios";
import { getAgama } from "./getAgama";

export const deleteAgama = (id, dispatch) => {
  axiosInstance
    .get(`admin/master-data/agama/${id}/delete`)
    .then((res) => {
      console.log(res.data);
      getAgama(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

