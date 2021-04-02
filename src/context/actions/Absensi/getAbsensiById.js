import axiosInstance from "src/helpers/axios";

export const getAbsensiById = (id_pegawai, id_absensi, setAbsensi) => {
  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/absensi/${id_absensi}`)
    .then((res) => {
      setAbsensi(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
