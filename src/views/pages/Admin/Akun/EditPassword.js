import React, { useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Formik } from "formik";
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
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import { LoadAnimationWhite } from "src/assets";
import { editPassword } from "src/context/actions/User/editPassword";

const MySwal = withReactContent(swal2);

const EditPassword = ({ match }) => {
  const params = match.params;
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const goBackToParent = () => {
    history.goBack();
  };

  const initState = {
    password_lama: "",
    password_baru: "",
    konfirmasi_password: "",
  };

  // Fungsi untuk menampilkan alert success edit data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Password Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/akun");
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
      title: "Edit Password Gagal",
      text: err_message,
    }).then((result) => {
      setLoading(false);
    });
  };

  const validationSchema = Yup.object().shape({
    password_lama: Yup.string().required("Password lama harus diisi"),
    password_baru: Yup.string().oneOf(
      [Yup.ref("konfirmasi_password"), null],
      "Konfirmasi password tidak sesuai"
    ),
    konfirmasi_password: Yup.string().oneOf(
      [Yup.ref("password_baru"), null],
      "Konfirmasi password tidak sesuai"
    ),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    editPassword(
      params.id,
      values,
      setLoading,
      showAlertSuccess,
      showAlertError
    );
  };

  return (
    <div>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Edit Password</h3>
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
                  <CCol md="7">
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel>Password lama</CLabel>
                      </CCol>
                      <CCol>
                        <CInput
                          type="password"
                          name="password_lama"
                          id="password_lama"
                          placeholder="Masukkan password lama"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password_lama}
                          className={
                            errors.password_lama && touched.password_lama
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.password_lama && touched.password_lama && (
                          <div className="invalid-feedback">
                            {errors.password_lama}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel>Password Baru</CLabel>
                      </CCol>
                      <CCol>
                        <CInput
                          type="password"
                          name="password_baru"
                          id="password_baru"
                          placeholder="Masukkan password baru"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password_baru}
                          className={
                            errors.password_baru && touched.password_baru
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.password_baru && touched.password_baru && (
                          <div className="invalid-feedback">
                            {errors.password_baru}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="4">
                        <CLabel>Konfirmasi Password</CLabel>
                      </CCol>
                      <CCol>
                        <CInput
                          type="password"
                          name="konfirmasi_password"
                          id="konfirmasi_password"
                          placeholder="Masukkan konfirmasi password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.konfirmasi_password}
                          className={
                            errors.konfirmasi_password &&
                            touched.konfirmasi_password
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.konfirmasi_password &&
                          touched.konfirmasi_password && (
                            <div className="invalid-feedback">
                              {errors.konfirmasi_password}
                            </div>
                          )}
                      </CCol>
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CCardBody>
              <CCardFooter>
                <CButton
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
    </div>
  );
};

export default EditPassword;
