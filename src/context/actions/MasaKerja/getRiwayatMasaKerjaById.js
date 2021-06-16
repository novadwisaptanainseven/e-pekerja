import axiosInstance from "src/helpers/axios";

export const getRiwayatMasaKerjaById = (idPegawai, idRiwayatMK, setData) => {
  axiosInstance
    .get(`admin/pegawai/${idPegawai}masa-kerja/riwayat/${idRiwayatMK}`)
    .then((res) => {
      setData(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
