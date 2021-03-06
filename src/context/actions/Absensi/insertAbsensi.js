import axiosInstance from "src/helpers/axios";
import { getRekapAbsensiPerTahun } from "./getRekapAbsensiPerTahun";
import { getRiwayatAbsensiPegawai } from "./getRiwayatAbsensiPegawai";

export const insertAbsensi = (
  idPegawai,
  setLoading,
  values,
  setModal,
  setRiwayatAbsen,
  setRekapAbsensi,
  setLoadingRiwayatAbsen,
  setLoadingRekapAbsensi,
  formattedDateRiwayatAbsen
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/pegawai/${idPegawai}/absensi`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      setLoading(false);
      setModal(false);
      getRiwayatAbsensiPegawai(
        idPegawai,
        setLoadingRiwayatAbsen,
        setRiwayatAbsen,
        formattedDateRiwayatAbsen
      );
      getRekapAbsensiPerTahun(
        idPegawai,
        setLoadingRekapAbsensi,
        setRekapAbsensi
      );
      console.log(res.data);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err.response.data);
    });
};
