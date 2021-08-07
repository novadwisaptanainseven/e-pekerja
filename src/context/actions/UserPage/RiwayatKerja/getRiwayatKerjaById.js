import axiosInstance from "src/helpers/axios";

export const getRiwayatKerjaById = (id_pegawai, id_riwayat_kerja, setData) => {
  axiosInstance
    .get(
      `user/data-kepegawaian/${id_pegawai}/riwayat-kerja/${id_riwayat_kerja}`
    )
    .then((res) => {
      setData(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
