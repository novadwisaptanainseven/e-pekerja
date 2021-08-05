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
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Formik } from "formik";
import { insertUser } from "src/context/actions/User/insertUser";
import { LoadAnimationWhite } from "src/assets";
import { getSelectPegawai } from "src/context/actions/Pegawai/SemuaPegawai/getSelectPegawai";
import Select from "react-select";
import customStylesSelect from "src/reusable/customStylesSelect";

const MySwal = withReactContent(swal2);

const TambahAkunPegawai = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [pegawai, setPegawai] = useState([]);
  const [touchedSelect, setTouchedSelect] = useState(false);

  const goBackToParent = () => {
    history.goBack();
  };

  // Get select pegawai
  useEffect(() => {
    getSelectPegawai(setPegawai);
  }, []);

  // Get select options from pegawai
  const getDataOptions = (pegawai) => {
    let options = [];

    pegawai.forEach((item) => {
      options.push({
        value: item.id_pegawai,
        label: item.nama,
      });
    });

    return options;
  };

  const optionsData = React.useMemo(() => getDataOptions(pegawai), [pegawai]);

  // Inisialisasi State Formik
  const initState = {
    id_pegawai: "",
    username: "",
    password: "",
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

  const validationSchema = Yup.object().shape({
    id_pegawai: Yup.string().required("Pegawai harus diisi"),
    username: Yup.string().required("Username harus diisi"),
    password: Yup.string().required("Password harus diisi"),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("id_pegawai", values.id_pegawai);
    formData.append("username", values.username);
    formData.append("password", values.password);
    formData.append("level", 2);

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    insertUser(formData, setLoading, showAlertSuccess, showAlertError);
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Tambah Akun Pegawai</h3>
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
                      <CLabel>Pegawai</CLabel>
                      <Select
                        styles={customStylesSelect(touchedSelect)}
                        name="id_pegawai"
                        id="id_pegawai"
                        onChange={(opt) => {
                          setTouchedSelect(false);
                          setFieldValue("id_pegawai", opt ? opt.value : "");
                        }}
                        onBlur={() =>
                          values.id_pegawai
                            ? setTouchedSelect(false)
                            : setTouchedSelect(true)
                        }
                        // onFocus={() => setTouchedSelect(true)}
                        placeholder="-- Pilih Pegawai --"
                        isSearchable
                        isClearable
                        options={optionsData}
                      />
                      {!values.id_pegawai && touchedSelect && (
                        <div
                          className="text-danger mt-1"
                          style={{ fontSize: "0.8em" }}
                        >
                          Nama penerima harus diisi
                        </div>
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
                  </CCol>
                </CRow>
              </CCardBody>
              <CCardFooter>
                <CButton
                  type="submit"
                  color="primary"
                  className="mr-1"
                  disabled={loading ? true : false}
                  onClick={() => {
                    !values.id_pegawai
                      ? setTouchedSelect(true)
                      : setTouchedSelect(false);
                  }}
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

export default TambahAkunPegawai;
