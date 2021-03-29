import axiosInstance from "src/helpers/axios";

export const getPegawaiCuti = (setLoading, setData) => {
  setLoading(true);

  axiosInstance
    .get(`admin/pegawai/pegawai-cuti`)
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
