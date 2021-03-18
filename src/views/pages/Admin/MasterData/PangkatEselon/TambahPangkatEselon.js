import React, { useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CCardFooter,
  CButton,
  CForm,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { insertEselon } from "src/context/actions/MasterData/PangkatEselon/insertEselon";
import { LoadAnimationWhite } from "src/assets";

const MySwal = withReactContent(swal2);

const TambahPangkatEselon = ({ match }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  // Kembali ke menu agama
  const goBackToParent = () => {
    history.goBack();
  };

  // Inisialisasi state formik
  const initState = {
    eselon: "",
    // keterangan: "",
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Tambah Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/master-data/pangkat-eselon");
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
  const validationSchema = Yup.object().shape({
    eselon: Yup.string()
      .required("Eselon harus diisi!")
      .max(4, "Panjang karakter tidak boleh lebih dari 4 karakter"),
    // keterangan: Yup.string().required("Keterangan harus diisi!"),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("eselon", values.eselon);
    // formData.append("keterangan", values.keterangan);

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // Memanggil method Insert Eselon untuk menambah data eselon ke database
    insertEselon(formData, setLoading, showAlertSuccess, showAlertError);
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Tambah Pangkat Eselon</h3>
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
          }) => (
            <CForm onSubmit={handleSubmit}>
              <CCardBody>
                <CRow>
                  <CCol xs="12" md="6">
                    <CFormGroup>
                      <CLabel htmlFor="name">Tingkat Eselon</CLabel>
                      <CInput
                        id="eselon"
                        name="eselon"
                        placeholder="Masukkan tingkat eselon"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.eselon}
                        className={
                          errors.eselon && touched.eselon ? "is-invalid" : null
                        }
                      />
                      {errors.eselon && touched.eselon && (
                        <div className="invalid-feedback">{errors.eselon}</div>
                      )}
                    </CFormGroup>
                    {/* <CFormGroup>
                      <CLabel htmlFor="name">Keterangan</CLabel>
                      <CInput
                        id="keterangan"
                        name="keterangan"
                        placeholder="Masukkan keterangan"
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
                    </CFormGroup> */}
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
                <CButton type="button" color="danger" onClick={goBackToParent}>
                  Kembali
                </CButton>
              </CCardFooter>
            </CForm>
          )}
        </Formik>
      </CCard>
    </>
  );
};

export default TambahPangkatEselon;
