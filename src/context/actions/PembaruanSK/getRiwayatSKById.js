import axiosInstance from "src/helpers/axios";

export const getRiwayatSKById = (id_pegawai, id_kgb, setData) => {
  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/pembaruan-sk/${id_kgb}`)
    .then((res) => {
      setData(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
