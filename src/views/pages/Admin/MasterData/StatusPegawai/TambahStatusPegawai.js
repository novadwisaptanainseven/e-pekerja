import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
} from "@coreui/react";
import { Formik } from "formik";
import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { LoadAnimationWhite } from "src/assets";
import { insertStatusPegawai } from "src/context/actions/StatusPegawai/insertStatusPegawai";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";

const MySwal = withReactContent(swal2);

const TambahStatusPegawai = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  // Kembali ke menu utama
  const goBackToParent = () => {
    history.goBack();
  };

  // Inisialisasi State Formik
  const initState = {
    status_pegawai: "",
    keterangan: "",
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = useCallback(() => {
    MySwal.fire({
      icon: "success",
      title: "Tambah Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/master-data/status-pegawai");
    });
  }, [history]);

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
    []
  );

  // Setting validasi form menggunakan YUP & FORMIK
  const validationSchema = Yup.object().shape({
    status_pegawai: Yup.string().required("Status pegawai harus diisi!"),
    keterangan: Yup.string().required("Keterangan harus diisi"),
  });

  // Handle form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("status_pegawai", values.status_pegawai);
    formData.append("keterangan", values.keterangan);

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // Insert StatusPegawai
    insertStatusPegawai(formData, setLoading, showAlertSuccess, showAlertError);
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Tambah Status Pegawai</h3>
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
                      <CLabel htmlFor="status_pegawai">Status Pegawai</CLabel>
                      <CInput
                        type="text"
                        id="status_pegawai"
                        placeholder="Masukkan Status Pegawai"
                        name="status_pegawai"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.status_pegawai}
                        className={
                          errors.status_pegawai && touched.status_pegawai
                            ? "is-invalid"
                            : null
                        }
                        maxLength={10}
                      />
                      {errors.status_pegawai && touched.status_pegawai && (
                        <div className="invalid-feedback">
                          {errors.status_pegawai}
                        </div>
                      )}
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="keterangan">Keterangan</CLabel>
                      <CInput
                        type="text"
                        id="keterangan"
                        placeholder="Masukkan Keterangan"
                        name="keterangan"
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

export default TambahStatusPegawai;
