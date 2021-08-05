import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CButton,
  CLabel,
  CInput,
  CFormGroup,
  CForm,
  CSelect,
  CRow,
  CCol,
  CFormText,
  CModalTitle,
} from "@coreui/react";
import { Formik } from "formik";
import React, { memo, useEffect, useState } from "react";
import { getSelectGolongan } from "src/context/actions/MasterData/PangkatGolongan/getSelectGolongan";
import LoadingSubmit from "src/reusable/LoadingSubmit";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { insertGolongan } from "src/context/actions/RiwayatGolongan";
import { getPNSById } from "src/context/actions/Pegawai/PNS/getPNSById";

const MySwal = withReactContent(swal2);

const ModalTambah = ({
  idPegawai,
  modal,
  setModal,
  setDataGolongan,
  setLoadingGolongan,
  setPegawai,
}) => {
  const [loading, setLoading] = useState(false);
  const [pangkat, setPangkat] = useState([]);

  // Get All Pangkat Golongan
  useEffect(() => {
    if (modal) {
      getSelectGolongan(setPangkat);
      console.log(idPegawai);
    }
  }, [modal, idPegawai]);

  // Inisialisasi state formik
  const initState = {
    jenis_kp: "",
    no_sk: "",
    tanggal: "",
    mk_tahun: "",
    mk_bulan: "",
    pejabat_penetap: "",
    pangkat_terkini: "",
    tmt_kenaikan_pangkat: "",
    file: undefined,
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Tambah Kenaikan Pangkat Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModal(false);
      getPNSById(idPegawai, setPegawai);
    });
  };

  // Fungsi untuk menampilkan alert error tambah data
  const showAlertError = (message) => {
    let err_message = "";

    for (const key in message) {
      err_message += `${message[key]}, `;
    }

    MySwal.fire({
      icon: "error",
      title: "Tambah Kenaikan Pangkat Gagal",
      text: err_message,
    }).then((result) => {
      setLoading(false);
    });
  };

  // Setting validasi form menggunakan YUP & FORMIK
  const FILE_SIZE = 5048000; // Bytes => 5 mb x 1000 kb x 1000 bytes
  const FILE_SUPPORTED_FORMATS = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const validationSchema = Yup.object().shape({
    jenis_kp: Yup.string().required("Jenis kenaikan pangkat harus diisi"),
    pangkat_baru: Yup.string().required("Pangkat golongan harus diisi"),
    no_sk: Yup.string().required("No. SK harus diisi"),
    tanggal: Yup.string().required("Tanggal kenaikan pangkat harus diisi"),
    tmt_kenaikan_pangkat: Yup.string().required("TMT. Golongan harus diisi"),
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
          if (value)
            return value && FILE_SUPPORTED_FORMATS.includes(value.type);
          else return true;
        }
      ),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    const arrPangkatBaru = values.pangkat_baru.split("-");
    const idPangkatBaru = arrPangkatBaru[0];
    const strPangkatBaru = arrPangkatBaru[1];
    const mkGolongan = values.mk_tahun + " Tahun " + values.mk_bulan + " Bulan";
    const pangkatTerkini = values.pangkat_terkini[0] === "on" ? 1 : 0;

    formData.append("id_golongan", idPangkatBaru);
    formData.append("pangkat_baru", strPangkatBaru);
    formData.append("jenis_kp", values.jenis_kp);
    formData.append("no_sk", values.no_sk);
    formData.append("tanggal", values.tanggal);
    formData.append("tmt_kenaikan_pangkat", values.tmt_kenaikan_pangkat);
    formData.append("pejabat_penetap", values.pejabat_penetap);
    formData.append("pangkat_terkini", pangkatTerkini);
    formData.append("masa_kerja", mkGolongan);
    if (values.file) {
      formData.append("file", values.file);
    }

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // Tambah data kenaikan pangkat
    insertGolongan(
      idPegawai,
      formData,
      setLoading,
      showAlertSuccess,
      showAlertError,
      setLoadingGolongan,
      setDataGolongan
    );
  };

  // Component Input Checkbox Memo
  const InputCheckbox = memo(({ values, handleChange, handleBlur }) => {
    return (
      <>
        <input
          type="checkbox"
          name="pangkat_terkini"
          checked={
            values.pangkat_terkini === 1 || values.pangkat_terkini[0] === "on"
              ? true
              : false
          }
          className="ml-2"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </>
    );
  });

  return (
    <CModal show={modal} onClose={() => setModal(false)}>
      <CModalHeader closeButton>
        <CModalTitle>Tambah Golongan</CModalTitle>
      </CModalHeader>
      <Formik
        initialValues={initState}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
          <CForm onSubmit={handleSubmit}>
            <CModalBody>
              <CFormGroup>
                <CLabel>Jenis Kenaikan Pangkat</CLabel>
                <CSelect
                  name="jenis_kp"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.jenis_kp && touched.jenis_kp ? "is-invalid" : null
                  }
                >
                  <option value={values.jenis_kp}>
                    -- Pilih Jenis Kenaikan Pangkat --
                  </option>
                  <option value="Reguler">Reguler</option>
                  <option value="Jabatan Struktural">Jabatan Struktural</option>
                  <option value="Jabatan Fungsional">Jabatan Fungsional</option>
                  <option value="Penyesuaian Ijazah">Penyesuaian Ijazah</option>
                </CSelect>
                {errors.jenis_kp && touched.jenis_kp && (
                  <div className="invalid-feedback">{errors.jenis_kp}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel>Pangkat / Golongan Baru</CLabel>
                <CSelect
                  name="pangkat_baru"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.pangkat_baru && touched.pangkat_baru
                      ? "is-invalid"
                      : null
                  }
                >
                  <option value={values.pangkat_baru}>
                    -- Pilih Pangkat --
                  </option>
                  {pangkat.map((item, index) => (
                    <option
                      key={index}
                      value={`${item.id_pangkat_golongan}-${item.keterangan} (${item.golongan})`}
                    >
                      {item.keterangan} ({item.golongan})
                    </option>
                  ))}
                </CSelect>
                {errors.pangkat_baru && touched.pangkat_baru && (
                  <div className="invalid-feedback">{errors.pangkat_baru}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CRow>
                  <CCol>
                    <CLabel>No. SK</CLabel>
                    <CInput
                      type="text"
                      name="no_sk"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.no_sk && touched.no_sk ? "is-invalid" : null
                      }
                    />
                    {errors.no_sk && touched.no_sk && (
                      <div className="invalid-feedback">{errors.no_sk}</div>
                    )}
                  </CCol>
                  <CCol>
                    <CLabel>Tgl. Kenaikan Pangkat</CLabel>
                    <CInput
                      type="date"
                      name="tanggal"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.tanggal && touched.tanggal ? "is-invalid" : null
                      }
                    />
                    {errors.tanggal && touched.tanggal && (
                      <div className="invalid-feedback">{errors.tanggal}</div>
                    )}
                  </CCol>
                </CRow>
              </CFormGroup>
              <CFormGroup>
                <CLabel>TMT. Golongan</CLabel>
                <CInput
                  type="date"
                  name="tmt_kenaikan_pangkat"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.tmt_kenaikan_pangkat && touched.tmt_kenaikan_pangkat
                      ? "is-invalid"
                      : null
                  }
                />
                {errors.tmt_kenaikan_pangkat &&
                  touched.tmt_kenaikan_pangkat && (
                    <div className="invalid-feedback">
                      {errors.tmt_kenaikan_pangkat}
                    </div>
                  )}
              </CFormGroup>
              <CFormGroup>
                <CLabel>Pejabat Penetap</CLabel>
                <CInput
                  type="text"
                  name="pejabat_penetap"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.pejabat_penetap && touched.pejabat_penetap
                      ? "is-invalid"
                      : null
                  }
                />
                {errors.pejabat_penetap && touched.pejabat_penetap && (
                  <div className="invalid-feedback">
                    {errors.pejabat_penetap}
                  </div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CRow>
                  <CCol>
                    <CLabel>Masa Kerja Golongan</CLabel>
                    <CInput
                      type="number"
                      name="mk_tahun"
                      min="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tahun"
                      className={
                        errors.mk_tahun && touched.mk_tahun
                          ? "is-invalid"
                          : null
                      }
                    />
                    <CFormText>Tahun</CFormText>
                    {errors.mk_tahun && touched.mk_tahun && (
                      <div className="invalid-feedback">{errors.mk_tahun}</div>
                    )}
                  </CCol>
                  <CCol
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                    }}
                  >
                    <CInput
                      type="number"
                      name="mk_bulan"
                      min="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Bulan"
                      className={
                        errors.mk_bulan && touched.mk_bulan
                          ? "is-invalid"
                          : null
                      }
                    />
                    <CFormText>Bulan</CFormText>
                    {errors.mk_bulan && touched.mk_bulan && (
                      <div className="invalid-feedback">{errors.mk_bulan}</div>
                    )}
                  </CCol>
                </CRow>
              </CFormGroup>
              <CFormGroup>
                <CLabel>Pangkat Terkini</CLabel>
                <InputCheckbox
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <CFormText>
                  Cek apabila merupakan pangkat Anda saat ini
                </CFormText>
                {errors.pejabat_penetap && touched.pejabat_penetap && (
                  <div className="invalid-feedback">
                    {errors.pejabat_penetap}
                  </div>
                )}
              </CFormGroup>

              <CFormGroup>
                <CLabel>File</CLabel>
                <CInput
                  type="file"
                  name="file"
                  onChange={(e) => setFieldValue("file", e.target.files[0])}
                  onBlur={handleBlur}
                  className={errors.file && touched.file ? "is-invalid" : null}
                />
                {errors.file && touched.file && (
                  <div className="invalid-feedback">{errors.file}</div>
                )}
              </CFormGroup>
            </CModalBody>
            <CModalFooter>
              <CButton
                type="submit"
                color="primary"
                disabled={loading ? true : false}
              >
                {loading ? <LoadingSubmit /> : "Simpan"}
              </CButton>
              <CButton color="secondary" onClick={() => setModal(false)}>
                Close
              </CButton>
            </CModalFooter>
          </CForm>
        )}
      </Formik>
    </CModal>
  );
};

export default ModalTambah;
