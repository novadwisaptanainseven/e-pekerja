import axiosInstance from "src/helpers/axios";

const getBerkasKp = (idPegawai, setData, setLoading) => {
  setLoading(true);

  axiosInstance
    .get(`admin/pegawai/${idPegawai}/berkas-kp`)
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

export default getBerkasKp;