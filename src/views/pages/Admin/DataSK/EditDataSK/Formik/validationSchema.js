import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  no_sk: Yup.string().required("No. SK harus diisi"),
  nama_sk: Yup.string().required("Nama SK harus diisi"),
  tanggal: Yup.string().required("Tanggal harus diisi"),
});

export default validationSchema;
