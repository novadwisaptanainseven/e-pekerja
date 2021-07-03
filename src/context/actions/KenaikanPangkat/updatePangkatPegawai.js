import axiosInstance from "src/helpers/axios";
import { getKenaikanPangkat } from "./getKenaikanPangkat";

export const updatePangkatPegawai = (id, dispatch) => {
  axiosInstance
    .put(`admin/kenaikan-pangkat-update/${id}`)
    .then((res) => {
      console.log(res.data);
      getKenaikanPangkat(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
