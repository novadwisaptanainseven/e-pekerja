import axiosInstance from "src/helpers/axios";
import { getRiwayatGolongan } from ".";

const updatePangkatTerkini = (idPegawai, idRiwayat, setData, setLoading) => {
  axiosInstance
    .put(
      `admin/pegawai/${idPegawai}/riwayat-golongan/${idRiwayat}/status-terkini`
    )
    .then((res) => {
      getRiwayatGolongan(idPegawai, setData, setLoading);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export default updatePangkatTerkini;
