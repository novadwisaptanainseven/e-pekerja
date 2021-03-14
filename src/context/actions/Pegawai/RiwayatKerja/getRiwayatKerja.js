import axiosInstance from "src/helpers/axios";

export const getRiwayatKerja = (id_pegawai, setData, setLoading) => {
  setLoading(true);

  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/riwayat-kerja`)
    .then((res) => {
      setData(res.data.data);
      setLoading(false);
      // console.log(res.data);
    })
    .catch((err) => {
      setLoading(false);
      // console.log(err.response.data);
    });
};
