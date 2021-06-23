import React, { useEffect, useState } from "react";
import {
  CFormGroup,
  CInput,
  CLabel,
  CCol,
  CSelect,
  CForm,
  CModalBody,
  CModalFooter,
  CButton,
  CFormText,
} from "@coreui/react";
import { useHistory } from "react-router";
import { getCutiById } from "src/context/actions/Cuti/getCutiById";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadAnimationWhite } from "src/assets";
import { editCuti } from "src/context/actions/Cuti/editCuti";

const MySwal = withReactContent(swal2);

const EditCuti = ({ modalEdit, setModalEdit, id_pegawai }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    // Get Cuti by ID
    if (modalEdit.id) {
      getCutiById(id_pegawai, modalEdit.id, setData);
    }

    return () => {
      setData(null);
    };
  }, [modalEdit, id_pegawai]);

  // Inisialisasi State Formik
  const initState = {
    tgl_mulai: data ? data.tgl_mulai : "",
    tgl_selesai: data ? data.tgl_selesai : "",
    jenis_cuti: data ? data.jenis_cuti : "",
    keterangan: data ? data.keterangan : "",
  };

  // Fungsi untuk menampilkan alert success edit data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Cuti Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModalEdit({
        ...modalEdit,
        modal: !modalEdit.modal,
        id: null,
      });
      history.push(`/epekerja/admin/cuti/riwayat/${id_pegawai}`);
    });
  };

  // Fungsi untuk menampilkan alert error edit data
  const showAlertError = (message) => {
    let err_message = "";

    for (const key in message) {
      err_message += `${message[key]}, `;
    }

    MySwal.fire({
      icon: "error",
      title: "Edit Cuti Gagal",
      text: err_message,
    }).then((result) => {
      setLoading(false);
    });
  };

  // Setting validasi form menggunakan YUP & FORMIK
  const validationSchema = Yup.object().shape({
    tgl_mulai: Yup.string().required("Tanggal mulai cuti harus diisi!"),
    tgl_selesai: Yup.string().required("Tanggal selesai cuti harus diisi!"),
    jenis_cuti: Yup.string().required("Jenis cuti harus dipilih!"),
    keterangan: Yup.string().required("Keterangan/alasan cuti harus diisi!"),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    editCuti(
      id_pegawai,
      modalEdit.id,
      values,
      setLoading,
      showAlertSuccess,
      showAlertError
    );
  };

  return (
    <>
      <Formik
        initialValues={initState}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <CForm onSubmit={handleSubmit}>
            <CModalBody>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Jenis Cuti</CLabel>
                </CCol>
                <CCol>
                  <CSelect
                    name="jenis_cuti"
                    value={values.jenis_cuti || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.jenis_cuti && touched.jenis_cuti
                        ? "is-invalid"
                        : null
                    }
                  >
                    <option value="">-- Jenis Cuti --</option>
                    <option value="Cuti Tahunan">Cuti Tahunan</option>
                    <option value="Cuti Bulanan">Cuti Bulanan</option>
                    <option value="Cuti Harian">Cuti Harian</option>
                  </CSelect>
                  {errors.jenis_cuti && touched.jenis_cuti && (
                    <div className="invalid-feedback">{errors.jenis_cuti}</div>
                  )}
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Tgl. Mulai</CLabel>
                </CCol>
                <CCol>
                  <CInput
                    type="date"
                    name="tgl_mulai"
                    id="tgl_mulai"
                    placeholder="Masukkan tgl mulai cuti"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tgl_mulai}
                    className={
                      errors.tgl_mulai && touched.tgl_mulai
                        ? "is-invalid"
                        : null
                    }
                  />
                  {errors.tgl_mulai && touched.tgl_mulai && (
                    <div className="invalid-feedback">{errors.tgl_mulai}</div>
                  )}
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Tgl. Selesai</CLabel>
                </CCol>
                <CCol>
                  <CInput
                    type="date"
                    name="tgl_selesai"
                    id="tgl_selesai"
                    placeholder="Masukkan tgl selesai cuti"
                    min={values.tgl_mulai}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tgl_selesai}
                    className={
                      errors.tgl_selesai && touched.tgl_selesai
                        ? "is-invalid"
                        : null
                    }
                  />
                  <CFormText>
                    <b>Format: </b> Bulan / Tanggal / Tahun
                  </CFormText>
                  {errors.tgl_selesai && touched.tgl_selesai && (
                    <div className="invalid-feedback">{errors.tgl_selesai}</div>
                  )}
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Keterangan</CLabel>
                </CCol>
                <CCol>
                  <CInput
                    type="text"
                    name="keterangan"
                    id="keterangan"
                    placeholder="Masukkan keterangan / alasan cuti"
                    onBlur={handleBlur}
                    value={values.keterangan}
                    disabled={!values.tgl_mulai ? true : false}
                    onChange={handleChange}
                    className={
                      errors.keterangan && touched.keterangan
                        ? "is-invalid"
                        : null
                    }
                  />
                  {errors.keterangan && touched.keterangan && (
                    <div className="invalid-feedback">{errors.keterangan}</div>
                  )}
                </CCol>
              </CFormGroup>
            </CModalBody>
            <CModalFooter>
              <CButton
                type="submit"
                color="primary"
                disabled={loading ? true : false}
              >
                {loading ? (
                  <img
                    width={21}
                    src={LoadAnimationWhite}
                    alt="load-animation"
                  />
                ) : (
                  "Simpan"
                )}
              </CButton>{" "}
              <CButton
                type="button"
                color="secondary"
                onClick={() =>
                  setModalEdit({
                    ...modalEdit,
                    modal: !modalEdit.modal,
                    id: null,
                  })
                }
              >
                Batal
              </CButton>
            </CModalFooter>
          </CForm>
        )}
      </Formik>
    </>
  );
};

export default EditCuti;
