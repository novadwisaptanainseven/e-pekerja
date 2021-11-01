import axiosInstance from "src/helpers/axios";
import { getBerkas } from "./getBerkas";

export const deleteBerkas = (id, dispatch) => {
  axiosInstance
    .get(`user/data-kepegawaian/berkas/${id}/delete`)
    .then((res) => {
      console.log(res.data);
      getBerkas(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
