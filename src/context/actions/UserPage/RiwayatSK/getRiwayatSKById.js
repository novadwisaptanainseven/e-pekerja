import axiosInstance from "src/helpers/axios";

export const getRiwayatSKById = (id_pegawai, id_riwayat_sk, setData) => {
  axiosInstance
    .get(`user/data-kepegawaian/${id_pegawai}/riwayat-sk/${id_riwayat_sk}`)
    .then((res) => {
      setData(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
