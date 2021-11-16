import { CForm, CModalBody, CFormGroup, CLabel, CInput, CFormText, CButton, CModalFooter } from "@coreui/react";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Select from "react-select";
import { Formik } from "formik";
import initState from "./Formik/initState";
import validationSchema from "./Formik/validationSchema";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { LoadAnimationWhite } from "src/assets";
const MySwal = withReactContent(swal2);

const TambahDataSK = ({ modal, setModal, setLoading }) => {
  const history = useHistory();
  const [loadingTambah, setLoadingTambah] = useState(false);

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Tambah Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModal(!modal);
      // history.push(`/epekerja/admin/pegawai-detail/${id}`);
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

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("id_pegawai", values.id_pegawai);
    formData.append("no_sk", values.no_sk);
    formData.append("file", values.file);

    for (var pair of formData.entries()) {
      console.log(pair);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initState}
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
          setFieldValue,
        }) => (
          <CForm onSubmit={handleSubmit} className="form-horizontal">
            <CModalBody>
              <CFormGroup>
                <CLabel>Nama Pegawai</CLabel>
                <Select />
              </CFormGroup>
              <CFormGroup>
                <CLabel>No. SK</CLabel>
                <CInput
                  type="text"
                  name="no_sk"
                  placeholder="Masukkan No. SK"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.no_sk}
                  className={
                    errors.no_sk && touched.no_sk ? "is-invalid" : null
                  }
                />
                {errors.no_sk && touched.no_sk && (
                  <div className="invalid-feedback">{errors.no_sk}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel>File SK</CLabel>

                <CInput
                  type="file"
                  name="file"
                  placeholder="Masukkan file SK"
                  onChange={(e) => setFieldValue("file", e.target.files[0])}
                  onBlur={handleBlur}
                  className={errors.file && touched.file ? "is-invalid" : null}
                />
                {errors.file && touched.file && (
                  <div className="invalid-feedback">{errors.file}</div>
                )}
                <CFormText>File SK harus berekstensi PDF, DOC, DOCX</CFormText>
              </CFormGroup>
            </CModalBody>
            <CModalFooter>
              <CButton
                type="submit"
                color="primary"
                disabled={loadingTambah ? true : false}
              >
                {loadingTambah ? (
                  <img
                    width={21}
                    src={LoadAnimationWhite}
                    alt="load-animation"
                  />
                ) : (
                  "Simpan"
                )}
              </CButton>{" "}
              <CButton
                type="button"
                color="secondary"
                onClick={() => setModal(!modal)}
              >
                Batal
              </CButton>
            </CModalFooter>
          </CForm>
        )}
      </Formik>
    </div>
  );
};

export default TambahDataSK;
