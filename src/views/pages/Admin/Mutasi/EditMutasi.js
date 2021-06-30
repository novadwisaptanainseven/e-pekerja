import {
  CCard,
  CCardHeader,
  CButton,
  CInput,
  CLabel,
  CCol,
  CCardFooter,
  CFormGroup,
  CCardBody,
  CForm,
} from "@coreui/react";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoadingSubmit from "src/reusable/LoadingSubmit";
import * as Yup from "yup";
import { Formik } from "formik";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getMutasiById } from "src/context/actions/Mutasi/getMutasiById";
import { editMutasi } from "src/context/actions/Mutasi/editMutasi";
import Loading from "src/reusable/Loading";
const MySwal = withReactContent(swal2);

const EditMutasi = ({ match }) => {
  const params = match.params;
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [mutasi, setMutasi] = useState("");

  const goBackToParent = () => {
    history.goBack();
  };

  // Get mutasi by id
  useEffect(() => {
    getMutasiById(params.id, setMutasi);
  }, [params]);

  // Inisialisasi state formik
  const initState = {
    id_pegawai: mutasi ? mutasi.id_pegawai : "",
    tgl_mutasi: mutasi ? mutasi.tgl_mutasi : "",
    keterangan: mutasi ? mutasi.keterangan : "",
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Mutasi Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/mutasi");
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
      title: "Edit Mutasi Gagal",
      text: err_message,
    }).then((result) => {
      setLoading(false);
    });
  };

  // Setting validasi form menggunakan YUP & FORMIK
  const validationSchema = Yup.object().shape({
    id_pegawai: Yup.string().required("Pegawai harus diisi"),
    tgl_mutasi: Yup.string().required("Tanggal mutasi harus diisi"),
    keterangan: Yup.string().required("Keterangan / alasan mutasi harus diisi"),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    editMutasi(params.id, values, setLoading, showAlertSuccess, showAlertError);
  };

  return (
    <CCard>
      <CCardHeader className="d-flex justify-content-between">
        <h3>Edit Data Mutasi</h3>
        <CButton
          type="button"
          color="warning"
          className="text-white"
          onClick={goBackToParent}
        >
          Kembali
        </CButton>
      </CCardHeader>
      {!mutasi ? (
        <Loading />
      ) : (
        <Formik
          initialValues={initState}
          enableReinitialize={true}
          validationSchema={validationSchema}
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
                      value={mutasi.nama}
                      readOnly
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel>Tgl. Mutasi</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="date"
                      name="tgl_mutasi"
                      id="tgl_mutasi"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.tgl_mutasi || ""}
                      placeholder="Masukkan tgl. mutasi"
                      className={
                        errors.tgl_mutasi && touched.tgl_mutasi
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.tgl_mutasi && touched.tgl_mutasi && (
                      <div className="invalid-feedback">
                        {errors.tgl_mutasi}
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
                      placeholder="Masukkan keterangan / alasan mutasi"
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
      )}
    </CCard>
  );
};

export default EditMutasi;
