import axiosInstance from "src/helpers/axios";
import { getGolongan } from "./getGolongan";

export const deleteGolongan = (id, dispatch) => {
  axiosInstance
    .get(`admin/master-data/pangkat-golongan/${id}/delete`)
    .then((res) => {
      console.log(res.data);
      getGolongan(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
