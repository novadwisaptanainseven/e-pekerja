import axiosInstance from "src/helpers/axios";

export const getKGBTerbaru = (id_pegawai, setData) => {
  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/kgb-terbaru`)
    .then((res) => {
      console.log(res.data);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
