import * as Yup from "yup";

// Setting validasi form menggunakan YUP & FORMIK
const FILE_SIZE = 5048000; // Bytes => 5 mb x 1000 kb x 1000 bytes
const FILE_SUPPORTED_FORMATS = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const validationSchema = Yup.object().shape({
  jenis_kp: Yup.string().required("Jenis kenaikan pangkat harus diisi"),
  no_sk: Yup.string().required("No. SK harus diisi"),
  tanggal: Yup.string().required("Tanggal kenaikan pangkat harus diisi"),
  tmt_kenaikan_pangkat: Yup.string().required(
    "TMT. Kenaikan pangkat harus diisi"
  ),
  pejabat_penetap: Yup.string().required("Pejabata penetap harus diisi"),
  mk_tahun: Yup.string().required("Tahun harus diisi"),
  mk_bulan: Yup.string().required("Bulan harus diisi"),
  file: Yup.mixed()
    .test("size", "Kapasitas file maksimal 5 mb", (value) => {
      if (value) {
        return value && value.size <= FILE_SIZE;
      } else {
        return true;
      }
    })
    .test(
      "type",
      "Ekstensi yang diperbolehkan hanya pdf, doc, dan docx",
      (value) => {
        if (value) return value && FILE_SUPPORTED_FORMATS.includes(value.type);
        else return true;
      }
    ),
});

export default validationSchema;
