import axiosInstance from "src/helpers/axios";
import { getPendidikan } from "./getPendidikan";

export const deletePendidikan = (
  id_pegawai,
  id_pendidikan,
  setData,
  setLoading
) => {
  axiosInstance
    .delete(`admin/pegawai/${id_pegawai}/pendidikan/${id_pendidikan}`)
    .then((res) => {
      getPendidikan(id_pegawai, setData, setLoading);
      console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
