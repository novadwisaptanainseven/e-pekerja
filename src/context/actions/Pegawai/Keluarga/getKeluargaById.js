import axiosInstance from "src/helpers/axios";

export const getKeluargaById = (id_pegawai, id_keluarga, setData) => {
  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/keluarga/${id_keluarga}`)
    .then((res) => {
      setData(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
