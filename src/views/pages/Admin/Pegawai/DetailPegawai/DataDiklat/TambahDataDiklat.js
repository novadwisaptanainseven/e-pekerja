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
  CForm,
  CModalBody,
  CModalFooter,
  CButton,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import { insertDiklat } from "src/context/actions/Pegawai/Diklat/insertDiklat";

const MySwal = withReactContent(swal2);

const TambahDataDiklat = ({ id, modalTambah, setModalTambah, diklat }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  // Inisialisasi State Formik
  const initState = {
    nama_diklat: "",
    jenis_diklat: "",
    penyelenggara: "",
    tahun_diklat: "",
    jumlah_jam: "",
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
      setModalTambah(!modalTambah);
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
    nama_diklat: Yup.string().required("Nama diklat harus diisi!"),
    jenis_diklat: Yup.string().required("Jenis diklat harus diisi!"),
    penyelenggara: Yup.string().required("Penyelenggara harus diisi!"),
    tahun_diklat: Yup.string().required("Tahun diklat harus diisi!"),
    jumlah_jam: Yup.string().required("Jumlah jam harus diisi!"),
    dokumentasi: Yup.mixed()
      // .required("File dokumentasi diklat belum dipilih")
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
    console.log(values);

    const formData = new FormData();
    formData.append("nama_diklat", values.nama_diklat);
    formData.append("jenis_diklat", values.jenis_diklat);
    formData.append("penyelenggara", values.penyelenggara);
    formData.append("tahun_diklat", values.tahun_diklat);
    formData.append("jumlah_jam", values.jumlah_jam);
    if (values.dokumentasi) {
      formData.append("dokumentasi", values.dokumentasi);
    }

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // Memanggil method Insert Diklat untuk menambah data Diklat ke database
    insertDiklat(
      id,
      formData,
      setLoading,
      showAlertSuccess,
      showAlertError,
      diklat.setLoadingDiklat,
      diklat.setData
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
              <CFormGroup>
                <CLabel htmlFor="nama_diklat">Nama Diklat</CLabel>
                <CInput
                  type="text"
                  placeholder="Masukkan nama diklat"
                  id="nama_diklat"
                  name="nama_diklat"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nama_diklat}
                  className={
                    errors.nama_diklat && touched.nama_diklat
                      ? "is-invalid"
                      : null
                  }
                />
                {errors.nama_diklat && touched.nama_diklat && (
                  <div className="invalid-feedback">{errors.nama_diklat}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="jenis_diklat">Jenis Diklat</CLabel>
                <CInput
                  type="text"
                  id="jenis_diklat"
                  placeholder="Masukkan jenis diklat"
                  name="jenis_diklat"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.jenis_diklat}
                  className={
                    errors.jenis_diklat && touched.jenis_diklat
                      ? "is-invalid"
                      : null
                  }
                />
                {errors.jenis_diklat && touched.jenis_diklat && (
                  <div className="invalid-feedback">{errors.jenis_diklat}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="penyelenggara">Penyelenggara</CLabel>
                <CInput
                  type="text"
                  id="penyelenggara"
                  placeholder="Masukkan penyelenggara"
                  name="penyelenggara"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.penyelenggara}
                  className={
                    errors.penyelenggara && touched.penyelenggara
                      ? "is-invalid"
                      : null
                  }
                />
                {errors.penyelenggara && touched.penyelenggara && (
                  <div className="invalid-feedback">{errors.penyelenggara}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="tahun_diklat">Tahun Diklat</CLabel>
                <CInput
                  type="number"
                  id="tahun_diklat"
                  placeholder="Masukkan tahun diklat"
                  name="tahun_diklat"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tahun_diklat}
                  className={
                    errors.tahun_diklat && touched.tahun_diklat
                      ? "is-invalid"
                      : null
                  }
                />
                {errors.tahun_diklat && touched.tahun_diklat && (
                  <div className="invalid-feedback">{errors.tahun_diklat}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="jml_jam">Jumlah Jam</CLabel>
                <CInput
                  type="number"
                  id="jml_jam"
                  placeholder="Masukkan jumlah jam"
                  name="jumlah_jam"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.jumlah_jam}
                  className={
                    errors.jumlah_jam && touched.jumlah_jam
                      ? "is-invalid"
                      : null
                  }
                />
                {errors.jumlah_jam && touched.jumlah_jam && (
                  <div className="invalid-feedback">{errors.jumlah_jam}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="dokumentasi_diklat">Dokumentasi Diklat</CLabel>
                <CInput
                  type="file"
                  id="dokumentasi"
                  placeholder="Masukkan dokumentasi diklat"
                  name="dokumentasi"
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
                <CFormText>Upload file dokumentasi diklat jika ada</CFormText>
              </CFormGroup>
            </CModalBody>
            <CModalFooter>
              <CButton
                type="submit"
                color="primary"
                // onClick={() => handleFormSubmit(values)}
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
                onClick={() => setModalTambah(!modalTambah)}
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

export default TambahDataDiklat;
