import React, { useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";

import {
  CFormGroup,
  CInput,
  CLabel,
  CCol,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CButton,
  CForm,
  CRow,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import { getPensiunById } from "src/context/actions/Pensiun.js/getPensiunById";
import { Formik } from "formik";
import { LoadAnimationBlue, LoadAnimationWhite } from "src/assets";
import { editPensiun } from "src/context/actions/Pensiun.js/editPensiun";

const MySwal = withReactContent(swal2);

const EditPensiun = ({ match }) => {
  const params = match.params;
  const history = useHistory();
  const [pensiun, setPensiun] = useState("");
  const [loading, setLoading] = useState(false);

  const goBackToParent = () => {
    history.goBack();
  };

  useEffect(() => {
    // Get pensiun by ID
    getPensiunById(params.id, setPensiun);
  }, [params]);

  // Inisialisasi state formik
  const initState = {
    id_pegawai: pensiun ? pensiun.id_pegawai : "",
    tgl_pensiun: pensiun ? pensiun.tgl_pensiun : "",
    keterangan: pensiun ? pensiun.keterangan : "",
  };

  // Fungsi untuk menampilkan alert success Edit data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/pensiun");
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
    id_pegawai: Yup.string().required("Pegawai harus diisi"),
    tgl_pensiun: Yup.string().required("Tanggal pensiun harus diisi"),
    keterangan: Yup.string().required("Keterangan / alasan harus diisi"),
  });

  const handleFormSubmit = (values) => {
    editPensiun(
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
        <CCardHeader className="d-flex justify-content-between">
          <h3>Edit Data Pensiun : {params.id}</h3>
          <CButton
            type="button"
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        {!pensiun ? (
          <div>
            <CRow>
              <CCol className="text-center">
                <img
                  className="my-4 ml-3"
                  width={30}
                  src={LoadAnimationBlue}
                  alt="load-animation"
                />
              </CCol>
            </CRow>
          </div>
        ) : (
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
              setFieldValue,
            }) => (
              <CForm onSubmit={handleSubmit}>
                <CCardBody>
                  {/* <CFormGroup row>
                  <CCol md="2">
                    <CLabel>Nama Pegawai</CLabel>
                  </CCol>
                  <CCol>
                    <Select
                      styles={customStyles}
                      name="id_pegawai"
                      id="id_pegawai"
                      onChange={(opt) => {
                        setTouchedSelect(false);
                        setFieldValue("id_pegawai", opt ? opt.value : "");
                      }}
                      onFocus={() => setTouchedSelect(true)}
                      placeholder="-- Pilih Pegawai --"
                      isSearchable
                      isClearable
                      options={optionsData}
                      defaultValue={{
                        value: pensiun ? pensiun.id_pegawai : "",
                        label: pensiun ? pensiun.nama : "",
                      }}
                    />
                    {!values.id_pegawai && touchedSelect && (
                      <div
                        className="text-danger mt-1"
                        style={{ fontSize: "0.8em" }}
                      >
                        Nama penerima harus diisi
                      </div>
                    )}
                  </CCol>
                </CFormGroup> */}

                  <CFormGroup row>
                    <CCol md="2">
                      <CLabel>Tgl. Pensiun</CLabel>
                    </CCol>
                    <CCol>
                      <CInput
                        type="date"
                        name="tgl_pensiun"
                        id="tgl_pensiun"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.tgl_pensiun || ""}
                        placeholder="Masukkan tgl. pensiun"
                        className={
                          errors.tgl_pensiun && touched.tgl_pensiun
                            ? "is-invalid"
                            : null
                        }
                      />
                      {errors.tgl_pensiun && touched.tgl_pensiun && (
                        <div className="invalid-feedback">
                          {errors.tgl_pensiun}
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
                        placeholder="Masukkan keterangan / alasan pensiun"
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
                </CCardFooter>
              </CForm>
            )}
          </Formik>
        )}
      </CCard>
    </>
  );
};

export default EditPensiun;
