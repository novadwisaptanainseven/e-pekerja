import axiosInstance from "src/helpers/axios";

export const getDiklatById = (id_pegawai, id_diklat, setData) => {
  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/diklat/${id_diklat}`)
    .then((res) => {
      setData(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
