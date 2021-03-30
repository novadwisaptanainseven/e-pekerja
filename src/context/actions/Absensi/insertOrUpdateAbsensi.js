import axiosInstance from "src/helpers/axios";

export const insertOrUpdateAbsensi = (
  idPegawai,
  setLoading,
  values,
  trigger,
  setModal
) => {
  setLoading(true);

  axiosInstance
    .post(`admin/pegawai/${idPegawai}/absensi/insert-update`, values, {
      header: {
        "Content-Type": `multipart/form-data; boundary=${values._boundary}`,
      },
    })
    .then((res) => {
      setLoading(false);
      trigger((prevState) => !prevState);
      setModal((prevState) => {
        return {
          ...prevState,
          modal: !prevState.modal,
        };
      });
      console.log(res.data);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err.response.data);
    });
};
