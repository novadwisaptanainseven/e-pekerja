import axiosInstance from "src/helpers/axios";
import { getRiwayatMKFile } from "./getRiwayatMKFile";

export const deleteRiwayatMKFile = (idRiwayatMKFile, setLoading, setData) => {
  axiosInstance
    .delete(`riwayat-mk-file/${idRiwayatMKFile}`)
    .then((res) => {
      getRiwayatMKFile(setLoading, setData);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
