import axiosInstance from "src/helpers/axios";

const getRiwayatGolongan = (idPegawai, setData, setLoading) => {
  setLoading(true);

  axiosInstance
    .get(`admin/pegawai/${idPegawai}/riwayat-golongan`)
    .then((res) => {
      setData(res.data.data);
      setLoading(false);
      console.log(res.data);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err.response.data);
    });
};

export default getRiwayatGolongan;
