import React, { useCallback, useState } from "react";
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
import { LoadAnimationWhite } from "src/assets";
import { insertAgama } from "src/context/actions/MasterData/Agama/insertAgama";

const MySwal = withReactContent(swal2);

const TambahAgama = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  // Kembali ke menu Agama
  const goBackToParent = () => {
    history.goBack();
  };

  // Inisialisasi State Formik
  const initState = {
    agama: "",
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = useCallback(() => {
    MySwal.fire({
      icon: "success",
      title: "Tambah Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/master-data/agama");
    });
  }, [history, MySwal]);

  // Fungsi untuk menampilkan alert error tambah data
  const showAlertError = useCallback(
    (message) => {
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
    },
    [MySwal]
  );

  // Setting validasi form menggunakan YUP & FORMIK
  const validationSchema = Yup.object().shape({
    agama: Yup.string().required("Agama harus diisi!"),
  });

  // Handle form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("agama", values.agama);

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // Insert Agama
    insertAgama(formData, setLoading, showAlertSuccess, showAlertError);
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Tambah Agama</h3>
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
                      <CLabel htmlFor="agama">Agama</CLabel>
                      <CInput
                        type="text"
                        id="agama"
                        placeholder="Masukkan agama"
                        name="agama"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.agama}
                        className={
                          errors.agama && touched.agama ? "is-invalid" : null
                        }
                      />
                      {errors.agama && touched.agama && (
                        <div className="invalid-feedback">{errors.agama}</div>
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

export default TambahAgama;
