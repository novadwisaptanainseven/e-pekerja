import axiosInstance from "src/helpers/axios";

export const getBerkas = (id_pegawai, setData, setLoading) => {
  setLoading(true);

  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/berkas`)
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
