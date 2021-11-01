import axiosInstance from "src/helpers/axios";
import { getPendidikan } from "./getPendidikan";

export const deletePendidikan = (
  id_pegawai,
  id_pendidikan,
  setData,
  setLoading
) => {
  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/pendidikan/${id_pendidikan}/delete`)
    .then((res) => {
      getPendidikan(id_pegawai, setData, setLoading);
      console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
