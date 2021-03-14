import axiosInstance from "src/helpers/axios";
import { getPenghargaan } from "./getPenghargaan";

export const editPenghargaan = (
  id_pegawai,
  id_penghargaan,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  setLoadingPenghargaan,
  setDataPenghargaan
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/pegawai/${id_pegawai}/penghargaan/${id_penghargaan}`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      // console.log(res.data);
      setLoading(false);
      getPenghargaan(id_pegawai, setDataPenghargaan, setLoadingPenghargaan);
      showAlertSuccess();
    })
    .catch((err) => {
      setLoading(false);
      // console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
