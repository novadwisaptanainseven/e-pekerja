import * as Yup from "yup";

const FILE_SIZE = 2048000; // Bytes => 2 mb x 1000 kb x 1000 bytes
const FILE_SUPPORTED_FORMATS = [
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/pdf",
];

const validationSchema = Yup.object().shape({
  no_sk: Yup.string().required("No. SK harus diisi"),
  id_pegawai: Yup.string().required("Penerima harus diisi"),
  file: Yup.mixed()
    .required("File SK harus diisi")
    .test("size", "Kapasitas file maksimal 2 mb", (value) => {
      if (value) {
        return value && value.size <= FILE_SIZE;
      }
      return true;
    })
    .test(
      "type",
      "Eksistensi yang diperbolehkan hanya PDF, DOC, dan DOCX",
      (value) => {
        if (value) {
          return value && FILE_SUPPORTED_FORMATS.includes(value.type);
        }
        return true;
      }
    ),
});

export default validationSchema;
