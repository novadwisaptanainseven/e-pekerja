import React, { useCallback, useEffect, useState } from "react";
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
import * as Yup from "yup";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getAgamaById } from "src/context/actions/Agama/getAgamaById";
import { LoadAnimationWhite } from "src/assets";
import { editAgama } from "src/context/actions/Agama/editAgama";

const MySwal = withReactContent(swal2);

const EditAgama = ({ match }) => {
  const params = match.params;
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [agama, setAgama] = useState(null);

  useEffect(() => {
    // Get Agama By ID
    getAgamaById(params.id, setAgama);

    return () => setAgama(null);
  }, [params]);

  // Kembali ke menu agama
  const goBackToParent = () => {
    history.goBack();
  };

  // Inisialisasi State Formik
  const initState = {
    agama: agama ? agama.agama : "",
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = useCallback(() => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/master-data/agama");
    });
  }, [history, MySwal]);

  // Fungsi untuk menampilkan alert error Edit data
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

  const handleFormSubmit = (values) => {
    editAgama(params.id, values, setLoading, showAlertSuccess, showAlertError);
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Ubah Data Agama</h3>
        </CCardHeader>
        <Formik
          initialValues={initState}
          validationSchema={validationSchema}
          enableReinitialize={true}
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

export default EditAgama;
