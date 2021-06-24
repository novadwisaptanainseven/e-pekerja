import React, { useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadAnimationWhite } from "src/assets";

import {
  CFormGroup,
  CLabel,
  CInput,
  CFormText,
  CCol,
  CButton,
  CModalBody,
  CModalFooter,
  CForm,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import { insertPenghargaan } from "src/context/actions/Pegawai/Penghargaan/insertPenghargaan";

const MySwal = withReactContent(swal2);

const TambahPenghargaan = ({ id, modal, setModal, penghargaan }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  // Inisialisasi State Formik
  const initState = {
    nama_penghargaan: "",
    pemberi: "",
    tgl_penghargaan: "",
    dokumentasi: undefined,
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Tambah Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModal(!modal);
      history.push(`/epekerja/admin/pegawai-detail/${id}`);
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
      title: "Tambah Data Gagal",
      text: err_message,
    }).then((result) => {
      setLoading(false);
    });
  };

  // Setting validasi form menggunakan YUP & FORMIK
  const DOKUMENTASI_SIZE = 2048000; // Bytes => 2 mb x 1000 kb x 1000 bytes
  const DOKUMENTASI_SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "application/pdf",
  ];

  const validationSchema = Yup.object().shape({
    nama_penghargaan: Yup.string().required("Nama penghargaan harus diisi!"),
    pemberi: Yup.string().required("Pemberi penghargaan harus diisi!"),
    tgl_penghargaan: Yup.string().required("Tgl. penghargaan harus diisi!"),
    dokumentasi: Yup.mixed()
      // .required("File dokumentasi penghargaan belum dipilih")
      .test("size", "Kapasitas file maksimal 2 mb", (value) => {
        if (value) {
          return value && value.size <= DOKUMENTASI_SIZE;
        }
        return true;
      })
      .test(
        "type",
        "Ekstensi yang diperbolehkan hanya jpg, jpeg, png dan pdf",
        (value) => {
          if (value) {
            return value && DOKUMENTASI_SUPPORTED_FORMATS.includes(value.type);
          }
          return true;
        }
      ),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values, {resetForm}) => {
    const formData = new FormData();
    formData.append("nama_penghargaan", values.nama_penghargaan);
    formData.append("pemberi", values.pemberi);
    formData.append("tgl_penghargaan", values.tgl_penghargaan);
    if (values.dokumentasi) {
      formData.append("dokumentasi", values.dokumentasi);
    }

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // Memanggil method Insert Penghargaan untuk menambah data Penghargaan ke database
    insertPenghargaan(
      id,
      formData,
      setLoading,
      showAlertSuccess,
      showAlertError,
      penghargaan.setLoading,
      penghargaan.setData
    );

    resetForm({});
  };

  return (
    <>
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
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Nama Penghargaan</CLabel>
                </CCol>
                <CCol>
                  <CInput
                    type="text"
                    id="nama_penghargaan"
                    placeholder="Masukkan nama penghargaan"
                    name="nama_penghargaan"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nama_penghargaan}
                    className={
                      errors.nama_penghargaan && touched.nama_penghargaan
                        ? "is-invalid"
                        : null
                    }
                  />
                  {errors.nama_penghargaan && touched.nama_penghargaan && (
                    <div className="invalid-feedback">
                      {errors.nama_penghargaan}
                    </div>
                  )}
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Pemberi</CLabel>
                </CCol>
                <CCol>
                  <CInput
                    type="text"
                    name="pemberi"
                    id="pemberi"
                    placeholder="Masukkan nama pemberi penghargaan"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pemberi}
                    className={
                      errors.pemberi && touched.pemberi ? "is-invalid" : null
                    }
                  />
                  {errors.pemberi && touched.pemberi && (
                    <div className="invalid-feedback">{errors.pemberi}</div>
                  )}
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Tgl. Penghargaan</CLabel>
                </CCol>
                <CCol>
                  <CInput
                    type="date"
                    name="tgl_penghargaan"
                    id="tgl_penghargaan"
                    placeholder="Masukkan tgl. penghargaan"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tgl_penghargaan}
                    className={
                      errors.tgl_penghargaan && touched.tgl_penghargaan
                        ? "is-invalid"
                        : null
                    }
                  />
                  {errors.tgl_penghargaan && touched.tgl_penghargaan && (
                    <div className="invalid-feedback">
                      {errors.tgl_penghargaan}
                    </div>
                  )}
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>
                    File Dokumentasi Penghargaan <br />
                    (Jika Ada)
                  </CLabel>
                </CCol>
                <CCol>
                  <CInput
                    type="file"
                    name="dokumentasi"
                    id="dokumentasi"
                    placeholder="Masukkan file dokumentasi penghargaan"
                    onChange={(e) =>
                      setFieldValue("dokumentasi", e.target.files[0])
                    }
                    onBlur={handleBlur}
                    className={
                      errors.dokumentasi && touched.dokumentasi
                        ? "is-invalid"
                        : null
                    }
                  />
                  {errors.dokumentasi && touched.dokumentasi && (
                    <div className="invalid-feedback">{errors.dokumentasi}</div>
                  )}
                  <CFormText>
                    File bisa berupa pdf, jpg, jpeg, atau png
                  </CFormText>
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
                onClick={() => setModal(!modal)}
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

export default TambahPenghargaan;
