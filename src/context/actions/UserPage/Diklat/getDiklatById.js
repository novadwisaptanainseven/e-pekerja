import axiosInstance from "src/helpers/axios";

export const getDiklatById = (id_pegawai, id_diklat, setData) => {
  axiosInstance
    .get(`user/data-kepegawaian/${id_pegawai}/diklat/${id_diklat}`)
    .then((res) => {
      setData(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
