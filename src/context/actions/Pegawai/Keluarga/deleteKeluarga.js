import axiosInstance from "src/helpers/axios";
import { getKeluarga } from "./getKeluarga";

export const deleteKeluarga = (
  id_pegawai,
  id_keluarga,
  setData,
  setLoading
) => {
  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/keluarga/${id_keluarga}/delete`)
    .then((res) => {
      getKeluarga(id_pegawai, setData, setLoading);
      console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
