import axiosInstance from "src/helpers/axios";

export const insertAbsensi = (
  idPegawai,
  setLoading,
  values,
  setModal,
  setRiwayatAbsen
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
      setRiwayatAbsen(res.data.data);
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
