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
} from "@coreui/react";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { getSelectGolongan } from "src/context/actions/MasterData/PangkatGolongan/getSelectGolongan";
import LoadingSubmit from "src/reusable/LoadingSubmit";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { getKenaikanPangkatById } from "src/context/actions/KenaikanPangkat/getKenaikanPangkatById";
import { updatePangkatPegawai } from "src/context/actions/KenaikanPangkat/updatePangkatPegawai";

const MySwal = withReactContent(swal2);

const ModalKenaikanPangkat = ({ modal, setModal, dispatch }) => {
  const [loading, setLoading] = useState(false);
  const [pangkat, setPangkat] = useState([]);
  const [data, setData] = useState("");

  // Get All Pangkat Golongan
  useEffect(() => {
    if (modal.modal) {
      getSelectGolongan(setPangkat);
      console.log(modal.data);
    }
  }, [modal]);

  // Get Kenaikan Pangkat By ID
  useEffect(() => {
    if (modal.modal) {
      getKenaikanPangkatById(modal.id, setData);
    }
  }, [modal]);

  //

  // Inisialisasi state formik
  const initState = {
    jenis_kp: data ? data.jenis_kp : "",
    pangkat_baru: data ? data.id_golongan : "",
    no_sk: data ? data.no_sk : "",
    tanggal: data ? data.tanggal : "",
    mk_tahun: "",
    mk_bulan: "",
    pejabat_penetap: "",
    tmt_kenaikan_pangkat: "",
    file: undefined,
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Update Pangkat Golongan Pegawai di Sistem Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      // history.push("/epekerja/admin/kenaikan-pangkat");
      setModal({ ...modal, modal: false });
    });
  };

  // Fungsi untuk menampilkan alert error tambah data
  const showAlertError = (message) => {
    MySwal.fire({
      icon: "error",
      title: "Update Pangkat Golongan Pegawai di Sistem Gagal",
      text: message,
    }).then((result) => {});
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
          if (value)
            return value && FILE_SUPPORTED_FORMATS.includes(value.type);
          else return true;
        }
      ),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    const mkGolongan = values.mk_tahun + " Tahun " + values.mk_bulan + " Bulan";

    formData.append("id_golongan", values.pangkat_baru);
    formData.append("jenis_kp", values.jenis_kp);
    formData.append("no_sk", values.no_sk);
    formData.append("tanggal", values.tanggal);
    formData.append("tmt_kenaikan_pangkat", values.tmt_kenaikan_pangkat);
    formData.append("pejabat_penetap", values.pejabat_penetap);
    formData.append("masa_kerja", mkGolongan);
    if (values.file) {
      formData.append("file", values.file);
    }

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    updatePangkatPegawai(
      modal.id,
      formData,
      dispatch,
      setLoading,
      showAlertSuccess,
      showAlertError
    );
  };

  return (
    <CModal
      show={modal.modal}
      onClose={() => setModal({ ...modal, modal: false, id: null })}
    >
      <CModalHeader closeButton>
        <div>
          <h4>{modal.data && modal.data.nama}</h4>
          <h5 className="font-weight-normal">{modal.data && modal.data.nip}</h5>
        </div>
      </CModalHeader>
      <Formik
        initialValues={initState}
        validationSchema={validationSchema}
        enableReinitialize={true}
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
                  disabled
                  name="jenis_kp"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.jenis_kp}
                  className={
                    errors.jenis_kp && touched.jenis_kp ? "is-invalid" : null
                  }
                >
                  <option>-- Pilih Jenis Kenaikan Pangkat --</option>
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
                  disabled
                  name="pangkat_baru"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pangkat_baru}
                  className={
                    errors.pangkat_baru && touched.pangkat_baru
                      ? "is-invalid"
                      : null
                  }
                >
                  <option>-- Pilih Pangkat --</option>
                  {pangkat.map((item, index) => (
                    <option key={index} value={item.id_pangkat_golongan}>
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
                      value={values.no_sk}
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
                      value={values.tanggal}
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
                <CLabel>TMT. Kenaikan Pangkat</CLabel>
                <CInput
                  type="date"
                  name="tmt_kenaikan_pangkat"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  min={values.tanggal}
                  value={values.tmt_kenaikan_pangkat}
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
                  value={values.pejabat_penetap}
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
                      value={values.mk_tahun}
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
                      value={values.mk_bulan}
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
              {/* <CFormGroup>
                <CLabel>Pangkat Terkini</CLabel>
                <input type="checkbox" className="ml-2" />
                <CFormText>Cek apabila merupakan pangkat Anda saat ini</CFormText>
                {errors.pejabat_penetap && touched.pejabat_penetap && (
                  <div className="invalid-feedback">
                    {errors.pejabat_penetap}
                  </div>
                )}
              </CFormGroup> */}

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
              <CButton
                color="secondary"
                onClick={() => setModal({ ...modal, modal: false, id: null })}
              >
                Close
              </CButton>
            </CModalFooter>
          </CForm>
        )}
      </Formik>
    </CModal>
  );
};

export default ModalKenaikanPangkat;
