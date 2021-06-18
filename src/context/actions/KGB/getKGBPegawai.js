import axiosInstance from "src/helpers/axios";

export const getKGBPegawai = (setLoading, setData) => {
  setLoading(true);

  axiosInstance
    .get(`admin/pegawai/kgb`)
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
