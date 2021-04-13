import React, { useState, useEffect, useContext } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";

import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CButton,
  CCardFooter,
  CForm,
  CFormText,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "src/context/Provider";
import { getImage } from "src/context/actions/DownloadFile";
import { Formik } from "formik";
import { LoadAnimationWhite } from "src/assets";
import { editUser } from "src/context/actions/User/editUser";

const MySwal = withReactContent(swal2);

const EditAkun = ({ match }) => {
  const params = match.params;
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const { userState, userDispatch } = useContext(GlobalContext);
  const { data } = userState;

  useEffect(() => {
    if (!selectedFile) {
      setPreview(data ? getImage(data.foto_profil) : "");
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // Free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, data]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const goBackToParent = () => {
    history.goBack();
  };

  // Inisialisasi State Formik
  const initState = {
    name: data ? data.name : "",
    username: data ? data.username : "",
    password: data ? data.password : "",
    foto_profil: undefined,
  };

  // Fungsi untuk menampilkan alert success edit data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Akun Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/akun");
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
      title: "Edit Akun Gagal",
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
    foto_profil: Yup.mixed()
      .test("size", "Kapasitas file maksimal 2 mb", (value) => {
        if (value) {
          return value && value.size <= FOTO_PROFIL_SIZE;
        }
        return true;
      })
      .test(
        "type",
        "Ekstensi yang diperbolehkan hanya jpg, jpeg, dan png",
        (value) => {
          if (value) {
            return value && FOTO_PROFIL_SUPPORTED_FORMATS.includes(value.type);
          }
          return true;
        }
      ),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("username", values.username);
    if (values.foto_profil) {
      formData.append("foto_profil", values.foto_profil);
    }

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    editUser(
      params.id,
      formData,
      setLoading,
      showAlertSuccess,
      showAlertError,
      userDispatch
    );
  };

  return (
    <div>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Edit Akun</h3>
          <CButton
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <Formik
          initialValues={initState}
          enableReinitialize={true}
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
    </div>
  );
};

export default EditAkun;
