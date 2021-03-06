import axiosInstance from "src/helpers/axios";

export const getKGBTerbaru = (id_pegawai, setData, setLoading) => {
  setLoading(true);
  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/kgb-terbaru`)
    .then((res) => {
      console.log(res.data);
      setData(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err.response.data);
      setLoading(false);
    });
};
