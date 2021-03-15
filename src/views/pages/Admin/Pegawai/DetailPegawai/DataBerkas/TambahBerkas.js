import React, { useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadAnimationWhite } from "src/assets";

import {
  CCol,
  CLabel,
  CInput,
  CFormGroup,
  CForm,
  CModalBody,
  CModalFooter,
  CButton,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import { insertBerkas } from "src/context/actions/Pegawai/Berkas/insertBerkas";

const MySwal = withReactContent(swal2);

const TambahBerkas = ({ id, modal, setModal, berkas }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  // Inisialisasi State Formik
  const initState = {
    nama_berkas: undefined,
    keterangan: "",
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
  const BERKAS_SIZE = 2048000; // Bytes => 2 mb x 1000 kb x 1000 bytes
  const BERKAS_SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];

  const validationSchema = Yup.object().shape({
    keterangan: Yup.string().required("Keterangan harus diisi!"),
    nama_berkas: Yup.mixed()
      .required("File belum dipilih")
      .test("size", "Kapasitas file maksimal 2 mb", (value) => {
        if (value) {
          return value && value.size <= BERKAS_SIZE;
        }
        return true;
      })
      .test(
        "type",
        "Ekstensi yang diperbolehkan hanya gambar (jpg, jpeg, png) dan dokumen (pdf, doc, docx, xls, xlsx)",
        (value) => {
          if (value) {
            return value && BERKAS_SUPPORTED_FORMATS.includes(value.type);
          }
          return true;
        }
      ),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("nama_berkas", values.nama_berkas);
    formData.append("keterangan", values.keterangan);

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // Memanggil method Insert Berkas untuk menambah data Berkas ke database
    insertBerkas(
      id,
      formData,
      setLoading,
      showAlertSuccess,
      showAlertError,
      berkas.setLoading,
      berkas.setData
    );
  };

  return (
    <>
      <Formik
        initialValues={initState}
        validationSchema={validationSchema}
        onSubmit={(values) => handleFormSubmit(values)}
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
                <CCol md="2">
                  <CLabel>Upload Berkas</CLabel>
                </CCol>
                <CCol>
                  <CInput
                    type="file"
                    name="nama_berkas"
                    id="nama_berkas"
                    onChange={(e) =>
                      setFieldValue("nama_berkas", e.target.files[0])
                    }
                    onBlur={handleBlur}
                    className={
                      errors.nama_berkas && touched.nama_berkas
                        ? "is-invalid"
                        : null
                    }
                  />
                  {errors.nama_berkas && touched.nama_berkas && (
                    <div className="invalid-feedback">{errors.nama_berkas}</div>
                  )}
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="2">
                  <CLabel>Keterangan</CLabel>
                </CCol>
                <CCol>
                  <CInput
                    type="text"
                    name="keterangan"
                    id="keterangan"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.keterangan}
                    className={
                      errors.keterangan && touched.keterangan
                        ? "is-invalid"
                        : null
                    }
                  />
                  {errors.keterangan && touched.keterangan && (
                    <div className="invalid-feedback">
                      {errors.keterangan}
                    </div>
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

export default TambahBerkas;
