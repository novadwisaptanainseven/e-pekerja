import React, { useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadAnimationWhite } from "src/assets";

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
import { getJabatanById } from "src/context/actions/MasterData/Jabatan/getJabatanById";
import { editJabatan } from "src/context/actions/MasterData/Jabatan/editJabatan";

const MySwal = withReactContent(swal2);

const EditJabatan = ({ match }) => {
  const history = useHistory();
  const params = match.params;
  const [loading, setLoading] = useState(false);
  const [jabatan, setJabatan] = useState(null);

  useEffect(() => {
    // Get jabatan by id
    getJabatanById(params.id, setJabatan);
  }, [params]);

  // Kembali ke menu agama
  const goBackToParent = () => {
    history.goBack();
  };

  // Inisialisasi state formik
  const initState = {
    nama_jabatan: jabatan ? jabatan.nama_jabatan : "",
  };

  // Fungsi untuk menampilkan alert success edit data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/master-data/jabatan");
    });
  };

  // Fungsi untuk menampilkan alert error edit data
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
    nama_jabatan: Yup.string().required("Jabatan harus diisi!"),
  });

  // Menangani value form submit
  const handleFormSubmit = (values) => {
    // Memanggil method editJabatan untuk mengubah data Jabatan
    editJabatan(
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
          <h3>Ubah Jabatan</h3>
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
                      <CLabel htmlFor="name">Jabatan</CLabel>
                      <CInput
                        id="nama_jabatan"
                        name="nama_jabatan"
                        placeholder="Masukkan jabatan"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nama_jabatan}
                        className={
                          errors.nama_jabatan && touched.nama_jabatan
                            ? "is-invalid"
                            : null
                        }
                      />
                      {errors.nama_jabatan && touched.nama_jabatan && (
                        <div className="invalid-feedback">
                          {errors.nama_jabatan}
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

export default EditJabatan;
