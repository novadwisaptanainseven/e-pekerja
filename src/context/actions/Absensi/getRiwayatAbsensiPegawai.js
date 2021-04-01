import axiosInstance from "src/helpers/axios";

export const getRiwayatAbsensiPegawai = (
  idPegawai,
  setLoading,
  setData,
  values
) => {
  setLoading(true);

  console.log(values);

  axiosInstance
    .get(
      `admin/pegawai/${idPegawai}/absensi?first_date=${values.startDate}&last_date=${values.endDate}`
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
