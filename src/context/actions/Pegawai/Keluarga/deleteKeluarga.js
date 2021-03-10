import axiosInstance from "src/helpers/axios";
import { getKeluarga } from "./getKeluarga";

export const deleteKeluarga = (id_pegawai, id_keluarga, setData) => {
  axiosInstance
    .delete(`admin/pegawai/${id_pegawai}/keluarga/${id_keluarga}`)
    .then((res) => {
      // console.log(res.data);
      getKeluarga(id_pegawai, setData);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
