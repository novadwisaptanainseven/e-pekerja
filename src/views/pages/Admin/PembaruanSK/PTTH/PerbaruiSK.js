import React, { useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadAnimationBlue, LoadAnimationWhite } from "src/assets";

import {
  CFormGroup,
  CCol,
  CLabel,
  CInput,
  CModalBody,
  CModalFooter,
  CForm,
  CButton,
  CRow,
} from "@coreui/react";
import { useHistory } from "react-router";
import { insertKGB } from "src/context/actions/KGB/insertKGB";
import { getKGBTerbaru } from "src/context/actions/KGB/getKGBTerbaru";

const MySwal = withReactContent(swal2);

const PerbaruiSK = ({ modalTambah, setModalTambah, id_pegawai }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [formatGaji, setFormatGaji] = useState("");
  const [skTerbaru, setSkTerbaru] = useState(true);

  // Inisialisasi State Formik
  const initState = {
    no_sk: "",
    penetap_sk: "",
    tgl_penetapan_sk: "",
    tgl_mulai_tugas: "",
    gaji_pokok: "",
  };

  // Mengubah format gaji dari number ke currency
  const convertToCurrency = (gaji) => {
    let formattedGaji = parseInt(gaji).toLocaleString("id", {
      style: "currency",
      currency: "IDR",
    });

    if (formattedGaji !== "RpNaN") {
      setFormatGaji(formattedGaji);
    } else {
      setFormatGaji("");
    }
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Tambah Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModalTambah(!modalTambah);
      history.push(`/epekerja/admin/kgb/${id_pegawai}/daftar`);
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

  // Setting validasi form menggunakan YUP & FORMIK
  const validationSchema = Yup.object().shape({
    no_sk: Yup.string().required("No. SK baru harus diisi!"),
    penetap_sk: Yup.string().required("Penetap SK"),
    tgl_penetapan_sk: Yup.string().required("Tgl penatapan harus diisi!"),
    tgl_mulai_tugas: Yup.string().required("Tgl mulai tugas harus diisi!"),
    gaji_pokok: Yup.number()
      .typeError("Gaji pokok baru harus berupa bilangan")
      .integer()
      .required("Gaji pokok baru harus diisi!"),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("gaji_pokok_lama", values.gaji_pokok_lama);
    formData.append("gaji_pokok_baru", values.gaji_pokok_baru);
    formData.append("tmt_kenaikan_gaji", values.tmt_kenaikan_gaji);
    formData.append("kenaikan_gaji_yad", values.kenaikan_gaji_yad);
    formData.append("peraturan", values.peraturan);

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // Memanggil method Insert KGB untuk menambah data KGB ke database
    // insertKGB(
    //   id_pegawai,
    //   formData,
    //   setLoading,
    //   showAlertSuccess,
    //   showAlertError
    // );

    setFormatGaji("");
  };

  return (
    <>
      {skTerbaru ? (
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
              <CModalBody>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>No. SK Baru</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="text"
                      name="no_sk"
                      id="no_sk"
                      placeholder="Masukkan No. SK baru"
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
                    {/* <div className="mt-1">
                      {values.gaji_pokok_lama.toLocaleString("id", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </div> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Penetap SK</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="text"
                      name="penetap_sk"
                      id="penetap_sk"
                      placeholder="Masukkan penetap SK"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.penetap_sk}
                      className={
                        errors.penetap_sk && touched.penetap_sk
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.penetap_sk && touched.penetap_sk && (
                      <div className="invalid-feedback">
                        {errors.penetap_sk}
                      </div>
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Tgl. Penetapan SK</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="date"
                      name="tgl_penetapan_sk"
                      id="tgl_penetapan_sk"
                      placeholder="Masukkan tgl penetapan SK"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.tgl_penetapan_sk}
                      className={
                        errors.tgl_penetapan_sk && touched.tgl_penetapan_sk
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.tgl_penetapan_sk && touched.tgl_penetapan_sk && (
                      <div className="invalid-feedback">
                        {errors.tgl_penetapan_sk}
                      </div>
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Tgl. Mulai Tugas</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="date"
                      name="tgl_mulai_tugas"
                      id="tgl_mulai_tugas"
                      placeholder="Masukkan tanggal gaji yang akan datang"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.tgl_mulai_tugas}
                      className={
                        errors.tgl_mulai_tugas && touched.tgl_mulai_tugas
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.tgl_mulai_tugas && touched.tgl_mulai_tugas && (
                      <div className="invalid-feedback">
                        {errors.tgl_mulai_tugas}
                      </div>
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Gaji Pokok Baru</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="text"
                      name="gaji_pokok"
                      id="gaji_pokok"
                      placeholder="Masukkan gaji pokok"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onKeyUp={(e) => convertToCurrency(e.target.value)}
                      value={values.gaji_pokok}
                      className={
                        errors.gaji_pokok && touched.gaji_pokok
                          ? "is-invalid"
                          : null
                      }
                    />
                    <div className="mt-1">{formatGaji}</div>
                    {errors.gaji_pokok && touched.gaji_pokok && (
                      <div className="invalid-feedback">
                        {errors.gaji_pokok}
                      </div>
                    )}
                  </CCol>
                </CFormGroup>
              </CModalBody>
              <CModalFooter>
                <CButton
                  type="submit"
                  color="primary"
                  onClick={() => handleFormSubmit(values)}
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
                </CButton>{" "}
                <CButton
                  type="button"
                  color="secondary"
                  onClick={() => setModalTambah(!modalTambah)}
                >
                  Batal
                </CButton>
              </CModalFooter>
            </CForm>
          )}
        </Formik>
      ) : (
        <div>
          <CRow>
            <CCol className="text-center">
              <img
                className="mt-4 ml-3 mb-4"
                width={30}
                src={LoadAnimationBlue}
                alt="load-animation"
              />
            </CCol>
          </CRow>
        </div>
      )}
    </>
  );
};

export default PerbaruiSK;
