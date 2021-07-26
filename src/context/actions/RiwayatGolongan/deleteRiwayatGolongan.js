import axiosInstance from "src/helpers/axios";
import { getRiwayatGolongan } from ".";

const deleteRiwayatGolongan = (
  idPegawai,
  idRiwayat,
  setData,
  setLoading,
  MySwal
) => {
  axiosInstance
    .delete(`admin/riwayat-golongan/${idRiwayat}`)
    .then((res) => {
      getRiwayatGolongan(idPegawai, setData, setLoading);
      console.log(res.data);
      MySwal.fire({
        icon: "success",
        title: "Terhapus",
        text: "Data berhasil dihapus",
      });
    })
    .catch((err) => {
      console.log(err.response.data);
      MySwal.fire({
        icon: "error",
        title: "Gagal",
        text: "Data gagal dihapus. Terjadi kesalahan",
      });
    });
};

export default deleteRiwayatGolongan;
