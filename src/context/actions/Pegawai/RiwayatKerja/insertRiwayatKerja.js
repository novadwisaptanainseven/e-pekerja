import axiosInstance from "src/helpers/axios";
import { getRiwayatKerja } from "./getRiwayatKerja";

export const insertRiwayatKerja = (
  id_pegawai,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  setLoadingRiwayatKerja,
  setDataRiwayatKerja
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/pegawai/${id_pegawai}/riwayat-kerja`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      // console.log(res.data);
      setLoading(false);
      getRiwayatKerja(id_pegawai, setDataRiwayatKerja, setLoadingRiwayatKerja);
      showAlertSuccess();
    })
    .catch((err) => {
      // console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
