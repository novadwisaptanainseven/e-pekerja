import {
  CButton,
  CCardBody,
  CCard,
  CCardFooter,
  CCardHeader,
  CForm,
  CCol,
  CInput,
  CFormGroup,
  CLabel,
} from "@coreui/react";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import LoadingSubmit from "src/reusable/LoadingSubmit";
import validationSchema from "../../User/DataKepegawaian/RiwayatGolongan/Formik/validationSchema";
import initStateEdit from "./Formik/initStateEdit";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(swal2);

const EditPegawaiBerhenti = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const { params } = match;
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const goBackToParent = () => {
    history.goBack();
  };

  useEffect(() => {
    console.log(params);
  }, [params]);

  // Fungsi untuk menampilkan alert success Edit data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/pegawai-berhenti");
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

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Edit Data Pensiun</h3>
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
          initialValues={initStateEdit(data)}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={handleFormSubmit}
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
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel>Nama Pegawai</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="text"
                      name="nama"
                      value={data.nama}
                      readOnly
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="2">
                    <CLabel>Tgl. Berhenti</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="date"
                      name="tgl_berhenti"
                      id="tgl_berhenti"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.tgl_berhenti || ""}
                      placeholder="Masukkan tgl. berhenti"
                      className={
                        errors.tgl_berhenti && touched.tgl_berhenti
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.tgl_berhenti && touched.tgl_berhenti && (
                      <div className="invalid-feedback">
                        {errors.tgl_berhenti}
                      </div>
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel>Keterangan</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="text"
                      name="keterangan"
                      id="keterangan"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.keterangan || ""}
                      placeholder="Masukkan keterangan / alasan berhenti"
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
                  </CCol>
                </CFormGroup>
              </CCardBody>
              <CCardFooter>
                <CButton
                  color="primary"
                  type="submit"
                  className="mr-1"
                  disabled={loading ? true : false}
                >
                  {loading ? <LoadingSubmit /> : "Simpan"}
                </CButton>
              </CCardFooter>
            </CForm>
          )}
        </Formik>
      </CCard>
    </div>
  );
};

export default EditPegawaiBerhenti;
