import axiosInstance from "src/helpers/axios";

export const getAbsensiByPegawai = (idPegawai, setLoading, setData, values) => {
  setLoading(true);

  axiosInstance
    .get(
      `admin/pegawai/${idPegawai}/absensi-params?tahun=${values.tahun}&bulan=${values.bulan}`
    )
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
