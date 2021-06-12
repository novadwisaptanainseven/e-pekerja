import axiosInstance from "src/helpers/axios";
import { getRiwayatSK } from "./getRiwayatSK";

export const deleteRiwayatSK = (
  id_pegawai,
  id_riwayat_sk,
  setLoading,
  setData
) => {
  axiosInstance
    .delete(`admin/pegawai/${id_pegawai}/pembaruan-sk/${id_riwayat_sk}`)
    .then((res) => {
      getRiwayatSK(id_pegawai, setLoading, setData);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
