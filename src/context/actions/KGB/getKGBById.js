import axiosInstance from "src/helpers/axios";

export const getKGBById = (id_pegawai, id_kgb, setKGB) => {
  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/kgb/${id_kgb}`)
    .then((res) => {
      setKGB(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
