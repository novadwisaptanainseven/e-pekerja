import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  id_pegawai: Yup.string().required("Pegawai harus diisi"),
  tgl_berhenti: Yup.string().required("Tgl. berhenti harus diisi"),
  keterangan: Yup.string().required("Keterangan / alasan berhenti harus diisi"),
});

export default validationSchema;
