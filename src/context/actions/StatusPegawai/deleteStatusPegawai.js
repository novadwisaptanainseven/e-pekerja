import axiosInstance from "src/helpers/axios";
import { getStatusPegawai } from "./getStatusPegawai";

export const deleteStatusPegawai = (id, dispatch) => {
  axiosInstance
    .get(`admin/master-data/status-pegawai/${id}/delete`)
    .then((res) => {
      console.log(res.data);
      getStatusPegawai(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
