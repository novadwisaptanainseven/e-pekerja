import axiosInstance from "src/helpers/axios";
import { getRiwayatSK } from "./getRiwayatSK";

export const editRiwayatSK = (
  id_pegawai,
  id_riwayat_sk,
  values,
  setLoading,
  setData,
  showAlertSuccess,
  showAlertError
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/pegawai/${id_pegawai}/pembaruan-sk/${id_riwayat_sk}`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      getRiwayatSK(id_pegawai, setLoading, setData);
      setLoading(false);
      showAlertSuccess();
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
