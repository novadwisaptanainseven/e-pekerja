import axiosInstance from "src/helpers/axios";

export const getRiwayatMKFile = (setLoading, setData) => {
  setLoading(true);

  axiosInstance
    .get(`riwayat-mk-file`)
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
