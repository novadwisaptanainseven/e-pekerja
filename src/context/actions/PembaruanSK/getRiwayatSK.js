import axiosInstance from "src/helpers/axios";

export const getRiwayatSK = (id_pegawai, setLoading, setData) => {
  setLoading(true);

  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/pembaruan-sk`)
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
