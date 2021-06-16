import axiosInstance from "src/helpers/axios";

export const getRiwayatMKFileByDate = (setLoading, setData, params) => {
  setLoading(true);

  axiosInstance
    .get(`riwayat-mk-file?bulan=${params.bulan}&tahun=${params.tahun}`)
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
