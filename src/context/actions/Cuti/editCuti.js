import axiosInstance from "src/helpers/axios";

export const editCuti = (
  id_pegawai,
  id_cuti,
  values,
  setLoading,
  showAlertSuccess,
  showAlertError
) => {
  setLoading(true);

  axiosInstance
    .put(`admin/pegawai/${id_pegawai}/cuti/${id_cuti}`, {
      tgl_mulai: values.tgl_mulai,
      tgl_selesai: values.tgl_selesai,
      lama_cuti: values.lama_cuti + " " + values.satuan,
      keterangan: values.keterangan,
    })
    .then((res) => {
      console.log(res.data);
      setLoading(false);
      showAlertSuccess();
    })
    .catch((err) => {
      console.log(err.response.data);
      showAlertError(err.response.data.errors);
    });
};
