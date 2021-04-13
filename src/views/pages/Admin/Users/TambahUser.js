import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CForm,
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CFormText,
} from "@coreui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Formik } from "formik";
import { insertUser } from "src/context/actions/User/insertUser";
import { LoadAnimationWhite } from "src/assets";

const MySwal = withReactContent(swal2);

const TambahUser = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const goBackToParent = () => {
    history.goBack();
  };

  // Menangani preview input gambar setelah dipilih
  const handleSelectedFile = useCallback(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // Free memory when ever this component is unmounted
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedFile]);

  useEffect(() => {
    handleSelectedFile();
  }, [handleSelectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  // Inisialisasi State Formik
  const initState = {
    name: "",
    username: "",
    password: "",
    foto_profil: undefined,
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Tambah Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/users");
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
  const FOTO_PROFIL_SIZE = 2048000; // Bytes => 2 mb x 1000 kb x 1000 bytes
  const FOTO_PROFIL_SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
  ];
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nama harus diisi"),
    username: Yup.string().required("Username harus diisi"),
    password: Yup.string().required("Password harus diisi"),
    foto_profil: Yup.mixed()
      .required("File belum dipilih")
      .test(
        "size",
        "Kapasitas file maksimal 2 mb",
        (value) => value && value.size <= FOTO_PROFIL_SIZE
      )
      .test(
        "type",
        "Ekstensi yang diperbolehkan hanya jpg, jpeg, dan png",
        (value) => value && FOTO_PROFIL_SUPPORTED_FORMATS.includes(value.type)
      ),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("username", values.username);
    formData.append("password", values.password);
    formData.append("level", 1);
    formData.append("foto_profil", values.foto_profil);

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    insertUser(formData, setLoading, showAlertSuccess, showAlertError);
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Tambah Administrator</h3>
          <CButton
            type="button"
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
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
              <CCardBody>
                <CRow>
                  <CCol md="6">
                    <CFormGroup>
                      <CLabel>Nama</CLabel>
                      <CInput
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Masukkan nama user administrator"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name || ""}
                        className={
                          errors.name && touched.name ? "is-invalid" : null
                        }
                      />
                      {errors.name && touched.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel>Username</CLabel>
                      <CInput
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Masukkan username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username || ""}
                        className={
                          errors.username && touched.username
                            ? "is-invalid"
                            : null
                        }
                      />
                      {errors.username && touched.username && (
                        <div className="invalid-feedback">
                          {errors.username}
                        </div>
                      )}
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel>Password</CLabel>
                      <CInput
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Masukkan password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password || ""}
                        className={
                          errors.password && touched.password
                            ? "is-invalid"
                            : null
                        }
                      />
                      {errors.password && touched.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel>Foto Profil</CLabel>
                      <CInput
                        type="file"
                        id="foto_profil"
                        name="foto_profil"
                        placeholder="Masukkan foto profil"
                        onChange={(e) => {
                          onSelectFile(e);
                          setFieldValue("foto_profil", e.target.files[0]);
                        }}
                        onBlur={handleBlur}
                        className={
                          errors.foto_profil && touched.foto_profil
                            ? "is-invalid"
                            : null
                        }
                      />
                      {errors.foto_profil && touched.foto_profil && (
                        <div className="invalid-feedback">
                          {errors.foto_profil}
                        </div>
                      )}
                      {preview && (
                        <img
                          src={preview}
                          alt={preview}
                          className="img-thumbnail mt-2 mb-1"
                          width={200}
                        />
                      )}
                      <CFormText className="help-block">
                        File harus bertipe jpg, jpeg, atau png dengan ukuran
                        kurang dari 2 MB
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CCardBody>
              <CCardFooter>
                <CButton
                  type="submit"
                  color="primary"
                  type="submit"
                  className="mr-1"
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
                </CButton>
              </CCardFooter>
            </CForm>
          )}
        </Formik>
      </CCard>
    </>
  );
};

export default TambahUser;
