import axiosInstance from "src/helpers/axios";
import { getPenghargaan } from "./getPenghargaan";

export const deletePenghargaan = (
  id_pegawai,
  id_penghargaan,
  setData,
  setLoading
) => {
  axiosInstance
    .delete(`admin/pegawai/${id_pegawai}/penghargaan/${id_penghargaan}`)
    .then((res) => {
      getPenghargaan(id_pegawai, setData, setLoading);
      console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
