import axiosInstance from "src/helpers/axios";

export const getPenghargaanById = (id_pegawai, id_penghargaan, setData) => {
  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/penghargaan/${id_penghargaan}`)
    .then((res) => {
      setData(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
