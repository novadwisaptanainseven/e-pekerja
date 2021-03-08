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
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { LoadAnimationWhite } from "src/assets";
import { editStatusPegawai } from "src/context/actions/StatusPegawai/editStatusPegawai";
import { getStatusPegawaiById } from "src/context/actions/StatusPegawai/getStatusPegawaiById";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";

const MySwal = withReactContent(swal2);

const EditStatusPegawai = ({ match }) => {
  const history = useHistory();
  const params = match.params;
  const [loading, setLoading] = useState(false);
  const [statusPegawai, setStatusPegawai] = useState(null);

  // Kembali ke menu sebelumnya
  const goBackToParent = () => {
    history.goBack();
  };

  useEffect(() => {
    // Get Data By ID
    getStatusPegawaiById(params.id, setStatusPegawai);

    return () => setStatusPegawai(null);
  }, [params]);

  // Inisialisasi State Formik
  const initState = {
    status_pegawai: statusPegawai ? statusPegawai.status_pegawai : "",
    keterangan: statusPegawai ? statusPegawai.keterangan : "",
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = useCallback(() => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/master-data/status-pegawai");
    });
  }, [history]);

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
    []
  );

  // Setting validasi form menggunakan YUP & FORMIK
  const validationSchema = Yup.object().shape({
    status_pegawai: Yup.string().required("Status pegawai harus diisi!"),
    keterangan: Yup.string().required("Keterangan harus diisi"),
  });

  // Menangani value form submit
  const handleFormSubmit = (values) => {
    editStatusPegawai(
      params.id,
      values,
      setLoading,
      showAlertSuccess,
      showAlertError
    );
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Ubah Data Status Pegawai</h3>
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
                      <CLabel htmlFor="name">Status Pegawai</CLabel>
                      <CInput
                        id="status_pegawai"
                        name="status_pegawai"
                        placeholder="Masukkan status pegawai"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.status_pegawai}
                        className={
                          errors.status_pegawai && touched.status_pegawai
                            ? "is-invalid"
                            : null
                        }
                      />
                      {errors.status_pegawai && touched.status_pegawai && (
                        <div className="invalid-feedback">
                          {errors.status_pegawai}
                        </div>
                      )}
                    </CFormGroup>
                    <CFormGroup>
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

export default EditStatusPegawai;
