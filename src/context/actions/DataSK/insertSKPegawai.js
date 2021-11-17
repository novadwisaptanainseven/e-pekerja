import axiosInstance from "src/helpers/axios";
import { getSKPegawai } from ".";

const insertSKPegawai = (
  values,
  setLoading,
  showAlertSuccess,
  showAlertError,
  dispatch
) => {
  setLoading(true);

  axiosInstance
    .post("admin/pegawai/upload-sk", values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setLoading(false);
      showAlertSuccess();
      getSKPegawai(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};

export default insertSKPegawai;
