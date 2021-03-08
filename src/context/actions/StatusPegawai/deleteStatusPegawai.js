import axiosInstance from "src/helpers/axios";
import { getStatusPegawai } from "./getStatusPegawai";

export const deleteStatusPegawai = (id, dispatch) => {
  axiosInstance
    .delete(`admin/master-data/status-pegawai/${id}`)
    .then((res) => {
      console.log(res.data);
      getStatusPegawai(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
