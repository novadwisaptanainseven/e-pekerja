import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as Yup from "yup";
import { Formik } from "formik";
import { GlobalContext } from "src/context/Provider";
import { login } from "src/context/actions/Auth/login";
import { cilInfo } from "@coreui/icons";
import { LoadAnimationBlue } from "src/assets";
import { LOGIN_CLEAN_UP } from "src/context/actionTypes";

const Login = () => {
  const history = useHistory();
  const [formLogin, setFormLogin] = useState(null);
  const { loginState, loginDispatch } = useContext(GlobalContext);
  const { loading, data, error } = loginState;

  // Inisialisasi state untuk handle login
  const initState = {
    username: "",
    password: "",
  };

  // Jika login berhasil, redirect ke dashboard
  useEffect(() => {
    if (data) {
      // Jika level user adalah admin, maka redirect ke dashboard admin
      if (data.level === 1) {
        window.location.href = "/epekerja/admin/";
      }
      // Jika tidak, maka rediret ke dashboard user
      else {
        window.location.href = "/epekerja/user";
      }
    }

    return () => {
      loginDispatch({
        type: LOGIN_CLEAN_UP,
      });
    };
  }, [data]);

  // Set rules of form validation using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username harus diisi"),
    password: Yup.string().required("Password harus diisi"),
  });

  const handleFormSubmit = (values) => {
    // Lakukan proses login
    login(values, loginDispatch);
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <h1>Login</h1>
                  <p className="text-muted">Login ke akun Anda</p>
                  {error && (
                    <CAlert closeButton className="alert-danger" fade>
                      <span className="alert-inner--icon">
                        <CIcon content={cilInfo} color="white" />
                      </span>{" "}
                      <span className="alert-inner--text ml-2">{error} !</span>
                    </CAlert>
                  )}
                  <Formik
                    initialValues={initState}
                    validationSchema={validationSchema}
                    onSubmit={(values) => handleFormSubmit(values)}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleSubmit,
                      handleChange,
                      handleBlur,
                    }) => (
                      <CForm onSubmit={handleSubmit}>
                        <CInputGroup
                          className={`mb-1 ${
                            errors.username && touched.username
                              ? "input-error"
                              : null
                          }`}
                        >
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon
                                name="cil-user"
                                className={
                                  errors.username && touched.username
                                    ? "text-danger"
                                    : null
                                }
                              />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            autoComplete="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username || ""}
                          />
                        </CInputGroup>
                        {errors.username && touched.username && (
                          <div className="text-danger text-error">
                            {errors.username}
                          </div>
                        )}
                        <CInputGroup
                          className={`mt-3 mb-1 ${
                            errors.password && touched.password
                              ? "input-error"
                              : null
                          }`}
                        >
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon
                                name="cil-lock-locked"
                                className={
                                  errors.password && touched.password
                                    ? "text-danger"
                                    : null
                                }
                              />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password || ""}
                          />
                        </CInputGroup>
                        {errors.password && touched.password && (
                          <div className="text-danger text-error">
                            {errors.password}
                          </div>
                        )}
                        <CRow>
                          <CCol xs="6">
                            <CButton
                              color="primary"
                              className="px-4 mt-4"
                              type="submit"
                              disabled={loading ? true : false}
                            >
                              Login
                            </CButton>

                            {loading && (
                              <img
                                className="mt-4 ml-3"
                                width={30}
                                src={LoadAnimationBlue}
                                alt="load-animation"
                              />
                            )}
                          </CCol>
                        </CRow>
                      </CForm>
                    )}
                  </Formik>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Registrasi</h2>
                    <p>
                      Buat akun kepegawaian sebagai user pegawai DISPERKIM untuk
                      melihat data diri Anda
                    </p>
                    <Link to="/epekerja/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Buat Akun!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
