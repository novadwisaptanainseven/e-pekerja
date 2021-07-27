import axiosInstance from "src/helpers/axios";
import { getKGBPegawai } from "./getKGBPegawai";

export const updateGaji = (id_pegawai, values, setLoading, setData) => {
  axiosInstance
    .put(`admin/pegawai/${id_pegawai}/update-gaji`, {
      gaji_pokok: values.gaji_pokok_baru,
      id_kgb: values.id_kgb,
    })
    .then((res) => {
      console.log(res.data);
      getKGBPegawai(setLoading, setData);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
