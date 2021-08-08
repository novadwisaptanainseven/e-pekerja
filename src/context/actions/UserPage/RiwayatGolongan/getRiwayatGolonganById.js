import axiosInstance from "src/helpers/axios";

export const getRiwayatGolonganById = (
  id_pegawai,
  id_riwayat_golongan,
  setData
) => {
  axiosInstance
    .get(
      `user/data-kepegawaian/riwayat-golongan/${id_riwayat_golongan}`
    )
    .then((res) => {
      setData(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
