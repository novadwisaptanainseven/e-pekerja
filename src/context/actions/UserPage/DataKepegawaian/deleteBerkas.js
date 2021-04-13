import axiosInstance from "src/helpers/axios";
import { getBerkas } from "./getBerkas";

export const deleteBerkas = (id, dispatch) => {
  axiosInstance
    .delete(`user/data-kepegawaian/berkas/${id}`)
    .then((res) => {
      console.log(res.data);
      getBerkas(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
