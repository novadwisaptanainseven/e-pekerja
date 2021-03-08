import axiosInstance from "src/helpers/axios";

export const getStatusPegawaiById = (id, setStatusPegawai) => {
  axiosInstance
    .get(`admin/master-data/status-pegawai/${id}`)
    .then((res) => {
      setStatusPegawai(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
