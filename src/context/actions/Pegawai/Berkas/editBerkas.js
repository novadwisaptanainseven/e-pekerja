import axiosInstance from "src/helpers/axios";
import { getBerkas } from "./getBerkas";

export const editBerkas = (
  id_pegawai,
  id_berkas,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  setLoadingBerkas,
  setDataBerkas
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/pegawai/${id_pegawai}/berkas/${id_berkas}`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      // console.log(res.data);
      setLoading(false);
      getBerkas(id_pegawai, setDataBerkas, setLoadingBerkas);
      showAlertSuccess();
    })
    .catch((err) => {
      setLoading(false);
      // console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
