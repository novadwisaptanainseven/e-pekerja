import axiosInstance from "src/helpers/axios";

export const getRiwayatMasaKerjaTerbaru = (idPegawai, setData) => {
  axiosInstance
    .get(`admin/pegawai/${idPegawai}/masa-kerja/riwayat-terakhir`)
    .then((res) => {
      setData(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
