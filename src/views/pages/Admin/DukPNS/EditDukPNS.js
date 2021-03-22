import React, { useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadAnimationBlue, LoadAnimationWhite } from "src/assets";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CRow,
  CForm,
  CLabel,
  CFormGroup,
  CInput,
  CButton,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import { getDUKById } from "src/context/actions/DUK/getDUKById";
import { editDUK } from "src/context/actions/DUK/editDUK";

const MySwal = withReactContent(swal2);

const EditDukPNS = ({ match }) => {
  const params = match.params;
  const history = useHistory();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const goBackToParent = () => {
    history.goBack();
  };

  useEffect(() => {
    // Get DUK By Id
    getDUKById(params.id, setData);
  }, [params]);

  const initState = {
    catatan_mutasi: data ? data.catatan_mutasi : "",
  };

  // Fungsi untuk menampilkan alert success Edit data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/duk");
    });
  };

  // Fungsi untuk menampilkan alert error Edit data
  const showAlertError = (message) => {
    let err_message = "";

    for (const key in message) {
      err_message += `${message[key]}, `;
    }

    MySwal.fire({
      icon: "error",
      title: "Edit Data Gagal",
      text: err_message,
    }).then((result) => {
      setLoading(false);
    });
  };

  // Setting validasi form menggunakan YUP & FORMIK
  const validationSchema = Yup.object().shape({
    catatan_mutasi: Yup.string().required("Catatan mutasi harus diisi"),
  });

  const handleFormSubmit = (values) => {
    editDUK(params.id, values, setLoading, showAlertSuccess, showAlertError);
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Edit DUK PNS</h3>
          <CButton
            type="button"
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>

        {data ? (
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
            }) => (
              <CForm onSubmit={handleSubmit} className="form-horizontal">
                <CCardBody>
                  <CRow>
                    <CCol md="8" sm="12">
                      <CFormGroup row>
                        <CCol>
                          <CLabel>Catatan Mutasi Kepegawaian</CLabel>
                        </CCol>
                        <CCol md="9" sm="12">
                          <CInput
                            type="text"
                            name="catatan_mutasi"
                            id="catatan_mutasi"
                            placeholder="Masukkan catatan mutasi kepegawaian"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.catatan_mutasi}
                            className={
                              errors.catatan_mutasi && touched.catatan_mutasi
                                ? "is-invalid"
                                : null
                            }
                          />
                          {errors.catatan_mutasi && touched.catatan_mutasi && (
                            <div className="invalid-feedback">
                              {errors.catatan_mutasi}
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
                  <CButton color="danger" type="reset" className="mr-1">
                    Reset
                  </CButton>
                </CCardFooter>
              </CForm>
            )}
          </Formik>
        ) : (
          <div className="mb-3">
            <CRow>
              <CCol className="text-center">
                <img
                  className="mt-4 ml-3"
                  width={30}
                  src={LoadAnimationBlue}
                  alt="load-animation"
                />
              </CCol>
            </CRow>
          </div>
        )}
      </CCard>
    </>
  );
};

export default EditDukPNS;
