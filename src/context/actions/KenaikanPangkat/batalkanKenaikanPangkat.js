import axiosInstance from "src/helpers/axios";
import { getKenaikanPangkat } from "./getKenaikanPangkat";

export const batalkanKenaikanPangkat = (id, dispatch) => {
  axiosInstance
    .delete(`admin/kenaikan-pangkat-batal/${id}`)
    .then((res) => {
      console.log(res.data);
      getKenaikanPangkat(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
