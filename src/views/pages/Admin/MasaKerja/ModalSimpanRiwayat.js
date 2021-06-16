import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CFormGroup,
  CCol,
  CLabel,
  CForm,
  CInput,
  CModalFooter,
  CButton,
  CAlert,
} from "@coreui/react";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadAnimationWhite } from "src/assets";
import { format } from "date-fns";
import formatTanggal from "src/helpers/formatTanggal";
import { insertRiwayatMKFile } from "src/context/actions/MasaKerja/insertRiwayatMKFile";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useHistory } from "react-router-dom";

const MySwal = withReactContent(swal2);

const ModalSimpanRiwayat = ({ modal, setModal, setAlertSuccess }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const getKeadaan = (date) => {
    const formattedDate = format(date, "y-MM-dd");
    const val1 = formatTanggal(formattedDate);
    const val2 = val1.split(" ");

    return `${val2[1]} ${val2[2]}`;
  };

  const initState = {
    tanggal: format(new Date(), "y-MM-d"),
    nama_file: "",
    keadaan: getKeadaan(new Date()),
  };

  const validationSchema = Yup.object().shape({
    tanggal: Yup.string().required("Tanggal harus diisi"),
    nama_file: Yup.string().required("Nama file harus diisi"),
    keadaan: Yup.string().required("Keadaan harus diisi"),
  });

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Berhasil Menyimpan Riwayat",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModal(false);
      history.push(`/epekerja/admin/masa-kerja`);
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
      title: "Gagal Menyimpan Riwayat",
      text: err_message,
    }).then((result) => {
      setLoading(false);
    });
  };

  const handleFormSubmit = (values) => {
    console.log(values);

    insertRiwayatMKFile(
      values,
      setLoading,
      showAlertSuccess,
      showAlertError,
      setAlertSuccess
    );
  };

  return (
    <div>
      <CModal show={modal} onClose={() => setModal(false)} size="md">
        <CModalHeader closeButton>
          <CModalTitle>Simpan Riwayat Masa Kerja</CModalTitle>
        </CModalHeader>

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
                {/* Informasi Tambahan */}
                <CAlert color="info" closeButton>
                  <h4>Info</h4>
                  <p>
                    Form ini akan menyimpan data berupa format Excel yang akan
                    tersimpan di menu{" "}
                    <b>
                      <a
                        href="."
                        onClick={(e) => {
                          e.preventDefault();
                          history.push("/epekerja/admin/masa-kerja/riwayat");
                        }}
                      >
                        daftar riwayat pegawai berdasarkan masa kerja
                      </a>
                    </b>
                  </p>
                </CAlert>
                {/* End of Informasi Tambahan */}

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Tanggal</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      readOnly
                      type="date"
                      name="tanggal"
                      id="tanggal"
                      placeholder="Masukkan tanggal riwayat"
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
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Nama File</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="text"
                      name="nama_file"
                      id="nama_file"
                      placeholder="Masukkan nama file riwayat"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nama_file}
                      className={
                        errors.nama_file && touched.nama_file
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.nama_file && touched.nama_file && (
                      <div className="invalid-feedback">{errors.nama_file}</div>
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Keadaan</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      readOnly
                      type="text"
                      name="keadaan"
                      id="Keadaan"
                      placeholder="Masukkan keadaan"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.keadaan}
                      className={
                        errors.keadaan && touched.keadaan ? "is-invalid" : null
                      }
                    />
                    {errors.keadaan && touched.keadaan && (
                      <div className="invalid-feedback">{errors.keadaan}</div>
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
                  onClick={() => setModal(false)}
                >
                  Batal
                </CButton>
              </CModalFooter>
            </CForm>
          )}
        </Formik>
      </CModal>
    </div>
  );
};

export default ModalSimpanRiwayat;
