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
  CSelect,
} from "@coreui/react";
import { insertPendidikan } from "src/context/actions/UserPage/Pendidikan";

const MySwal = withReactContent(swal2);

const TambahDataPendidikan = ({
  id,
  modalTambah,
  setModalTambah,
  dispatch,
}) => {
  const [loading, setLoading] = useState(false);

  // Inisialisasi State Formik
  const initState = {
    nama_akademi: "",
    jenjang: "",
    jurusan: "",
    tahun_lulus: "",
    no_ijazah: "",
    foto_ijazah: undefined,
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
  const IJAZAH_SIZE = 2048000; // Bytes => 2 mb x 1000 kb x 1000 bytes
  const IJAZAH_SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "application/pdf",
  ];

  const validationSchema = Yup.object().shape({
    nama_akademi: Yup.string().required("Nama akademi harus diisi!"),
    jenjang: Yup.string().required("Jenjang harus diisi!"),
    jurusan: Yup.string().required("Jurusan harus diisi!"),
    tahun_lulus: Yup.string().required("Tahun lulus harus diisi!"),
    no_ijazah: Yup.string().required("No. Ijazah harus diisi!"),
    foto_ijazah: Yup.mixed()
      // .required("File ijazah belum dipilih")
      .test("size", "Kapasitas file maksimal 2 mb", (value) => {
        if (value) {
          return value && value.size <= IJAZAH_SIZE;
        } else {
          return true;
        }
      })
      .test(
        "type",
        "Ekstensi yang diperbolehkan hanya jpg, jpeg, png dan pdf",
        (value) => {
          if (value) {
            return value && IJAZAH_SUPPORTED_FORMATS.includes(value.type);
          } else {
            return true;
          }
        }
      ),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("nama_akademi", values.nama_akademi);
    formData.append("jenjang", values.jenjang);
    formData.append("jurusan", values.jurusan);
    formData.append("tahun_lulus", values.tahun_lulus);
    formData.append("no_ijazah", values.no_ijazah);
    if (values.foto_ijazah) {
      formData.append("foto_ijazah", values.foto_ijazah);
    }

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // Memanggil method Insert Pendidikan untuk menambah data Pendidikan ke database
    insertPendidikan(
      id,
      formData,
      setLoading,
      showAlertSuccess,
      showAlertError,
      dispatch
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
          handleReset,
        }) => (
          <CForm onSubmit={handleSubmit}>
            <CModalBody>
              <CFormGroup>
                <CLabel htmlFor="nama_akademi">Nama Akademi</CLabel>
                <CInput
                  type="text"
                  id="nama_akademi"
                  name="nama_akademi"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nama_akademi}
                  placeholder="Masukkan nama akademi"
                  className={
                    errors.nama_akademi && touched.nama_akademi
                      ? "is-invalid"
                      : null
                  }
                />
                {errors.nama_akademi && touched.nama_akademi && (
                  <div className="invalid-feedback">{errors.nama_akademi}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="jenjang">Jenjang</CLabel>
                <CSelect
                  custom
                  name="jenjang"
                  id="jenjang"
                  value={values.jenjang}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.jenjang && touched.jenjang ? "is-invalid" : null
                  }
                >
                  <option value="">-- Pilih Jenjang --</option>
                  <option value="-">-</option>
                  <option value="sd">SD</option>
                  <option value="smp">SMP</option>
                  <option value="sma/ma/smk">SMA/MA/SMK</option>
                  <option value="D3">D3</option>
                  <option value="D4">D4</option>
                  <option value="S1">S1</option>
                  <option value="S2">S2</option>
                  <option value="S3">S3</option>
                </CSelect>
                {errors.jenjang && touched.jenjang && (
                  <div className="invalid-feedback">{errors.jenjang}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="jurusan">Jurusan</CLabel>
                <CInput
                  type="text"
                  id="jurusan"
                  name="jurusan"
                  placeholder="Masukkan jurusan"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.jurusan}
                  className={
                    errors.jurusan && touched.jurusan ? "is-invalid" : null
                  }
                />
                {errors.jurusan && touched.jurusan && (
                  <div className="invalid-feedback">{errors.jurusan}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="tahun lulus">Tahun Lulus</CLabel>
                <CInput
                  type="number"
                  id="tahun_lulus"
                  name="tahun_lulus"
                  placeholder="Masukkan tahun lulus"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tahun_lulus}
                  className={
                    errors.tahun_lulus && touched.tahun_lulus
                      ? "is-invalid"
                      : null
                  }
                />
                {errors.tahun_lulus && touched.tahun_lulus && (
                  <div className="invalid-feedback">{errors.tahun_lulus}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="no_ijazah">No. Ijazah</CLabel>
                <CInput
                  type="text"
                  id="no_ijazah"
                  name="no_ijazah"
                  placeholder="Masukkan no. ijazah"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.no_ijazah}
                  className={
                    errors.no_ijazah && touched.no_ijazah ? "is-invalid" : null
                  }
                />
                {errors.no_ijazah && touched.no_ijazah && (
                  <div className="invalid-feedback">{errors.no_ijazah}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="foto_ijazah">Foto Ijazah</CLabel>
                <CInput
                  type="file"
                  id="foto_ijazah"
                  name="foto_ijazah"
                  placeholder="Masukkan foto ijazah"
                  onChange={(e) =>
                    setFieldValue("foto_ijazah", e.target.files[0])
                  }
                  onBlur={handleBlur}
                  className={
                    errors.foto_ijazah && touched.foto_ijazah
                      ? "is-invalid"
                      : null
                  }
                />
                {errors.foto_ijazah && touched.foto_ijazah && (
                  <div className="invalid-feedback">{errors.foto_ijazah}</div>
                )}
                <CFormText>
                  File harus bertipe jpg, jpeg, atau png dan sizenya kurang dari
                  2 MB
                </CFormText>
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
                onClick={() => {
                  setModalTambah(!modalTambah);
                }}
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

export default TambahDataPendidikan;
