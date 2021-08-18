import {
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CButton,
  CForm,
  CTextarea,
  CLabel,
  CFormGroup,
  CInput,
} from "@coreui/react";
import { Formik } from "formik";
import React from "react";
import { validasiKP } from "src/context/actions/BerkasKp";
import * as Yup from "yup";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Swal = withReactContent(swal2);

const KirimPesan = ({
  idPegawai,
  namaPegawai,
  modal,
  setModal,
  setData,
  setLoading,
  idKp,
}) => {
  // Initial State Formik
  const initState = {
    nama_pegawai: namaPegawai,
    pesan: "",
  };

  // Validation Formik
  const validationSchema = Yup.object().shape({
    nama_pegawai: Yup.string().required("Nama pegawai harus diisi"),
    pesan: Yup.string().required("Pesan tidak persetujuan harus diisi"),
  });

  // Handle form submit
  const handleFormSubmit = (values) => {
    const statusValidasi = {
      status_validasi: 2,
      pesan: values.pesan,
    };

    validasiKP(idPegawai, idKp, statusValidasi, setData, setLoading, Swal);

    // Close the modal
    setModal(false);
  };

  return (
    <div>
      <CModal show={modal} onClose={() => setModal(false)}>
        <CModalHeader closeButton>
          <CModalTitle>Dialog Pesan Tidak Persetujuan</CModalTitle>
        </CModalHeader>
        <Formik
          initialValues={initState}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
          enableReinitialize
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
                <CFormGroup>
                  <CLabel>Nama Pegawai</CLabel>
                  <CInput
                    readOnly
                    name="nama_pegawai"
                    placeholder="Nama Pegawai"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nama_pegawai}
                    className={
                      errors.nama_pegawai && touched.nama_pegawai
                        ? "is-invalid"
                        : null
                    }
                  />
                  {errors.nama_pegawai && touched.nama_pegawai && (
                    <div className="invalid-feedback">
                      {errors.nama_pegawai}
                    </div>
                  )}
                </CFormGroup>
                <CFormGroup>
                  <CLabel>Pesan</CLabel>
                  <CTextarea
                    name="pesan"
                    rows={5}
                    placeholder="Masukkan pesan tidak persetujuan"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pesan}
                    className={
                      errors.pesan && touched.pesan ? "is-invalid" : null
                    }
                  />
                  {errors.pesan && touched.pesan && (
                    <div className="invalid-feedback">{errors.pesan}</div>
                  )}
                </CFormGroup>
              </CModalBody>
              <CModalFooter>
                <CButton type="submit" color="primary">
                  Kirim
                </CButton>
                <CButton color="secondary" onClick={() => setModal(false)}>
                  Tutup
                </CButton>
              </CModalFooter>
            </CForm>
          )}
        </Formik>
      </CModal>
    </div>
  );
};

export default KirimPesan;
