import axiosInstance from "src/helpers/axios";

export const getRekapAbsensiPerTahun = (idPegawai, setLoading, setData) => {
  setLoading(true);

  axiosInstance
    .get(`admin/pegawai/${idPegawai}/rekap-absensi`)
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
