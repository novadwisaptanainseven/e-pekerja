import axiosInstance from "src/helpers/axios";

export const getCutiById = (id_pegawai, id_cuti, setCuti) => {
  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/cuti/${id_cuti}`)
    .then((res) => {
      setCuti(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
