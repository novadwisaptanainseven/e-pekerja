import axiosInstance from "src/helpers/axios";
import { getRiwayatKerja } from "./getRiwayatKerja";

export const editRiwayatKerja = (
  id_pegawai,
  id_riwayat_kerja,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  setDataRiwayatKerja,
  setLoadingRiwayatKerja
) => {
  setLoading(true);

  axiosInstance
    .post(
      `admin/pegawai/${id_pegawai}/riwayat-kerja/${id_riwayat_kerja}`,
      values
    )
    .then((res) => {
      // console.log(res.data);
      setLoading(false);
      getRiwayatKerja(id_pegawai, setDataRiwayatKerja, setLoadingRiwayatKerja);
      showAlertSuccess();
    })
    .catch((err) => {
      setLoading(false);
      // console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
