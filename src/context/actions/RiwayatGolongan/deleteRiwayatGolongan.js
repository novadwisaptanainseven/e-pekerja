import axiosInstance from "src/helpers/axios";
import { getRiwayatGolongan } from ".";

const deleteRiwayatGolongan = (idPegawai, idRiwayat, setData, setLoading) => {
  axiosInstance
    .delete(`admin/riwayat-golongan/${idRiwayat}`)
    .then((res) => {
      getRiwayatGolongan(idPegawai, setData, setLoading);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export default deleteRiwayatGolongan;
