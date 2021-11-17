import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  no_sk: Yup.string().required("No. SK harus diisi"),
  id_pegawai: Yup.string().required("Penerima harus diisi"),
});

export default validationSchema;
