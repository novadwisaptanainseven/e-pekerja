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

const TambahKGB = ({ modalTambah, setModalTambah, id_pegawai }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [kgbTerbaru, setKgbTerbaru] = useState("");
  const [formatGaji, setFormatGaji] = useState("");
  const [formatGaji2, setFormatGaji2] = useState("");

  useEffect(() => {
    if (modalTambah) {
      // Get KGB Terbaru
      getKGBTerbaru(id_pegawai, setKgbTerbaru, setLoading);
    }
  }, [id_pegawai, modalTambah]);

  // Inisialisasi State Formik
  const initState = {
    gaji_pokok_lama: kgbTerbaru ? kgbTerbaru : "",
    gaji_pokok_baru: "",
    tmt_kenaikan_gaji: "",
    kenaikan_gaji_yad: "",
    peraturan: "",
  };

  // Mengubah format gaji dari number ke currency
  const convertToCurrency = (gaji, setFormatGaji) => {
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
      title: "Berhasil Melakukan Kenaikan Gaji",
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
      title: "Gagal Melakukan Kenaikan Gaji",
      text: err_message,
    }).then((result) => {
      setLoading(false);
    });
  };

  // Setting validasi form menggunakan YUP & FORMIK
  const validationSchema = Yup.object().shape({
    gaji_pokok_lama: Yup.number()
      .typeError("Gaji pokok baru harus berupa bilangan")
      .integer()
      .required("Gaji pokok lama harus diisi!"),
    gaji_pokok_baru: Yup.number()
      .typeError("Gaji pokok baru harus berupa bilangan")
      .integer()
      .required("Gaji pokok baru harus diisi!"),
    tmt_kenaikan_gaji: Yup.string().required("TMT kenaikan gaji harus diisi!"),
    kenaikan_gaji_yad: Yup.string().required(
      "Kenaikan gaji yang akan datand harus diisi!"
    ),
    peraturan: Yup.string().required("Peraturan harus diisi!"),
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
    insertKGB(
      id_pegawai,
      formData,
      setLoading,
      showAlertSuccess,
      showAlertError
    );

    setFormatGaji("");
    setKgbTerbaru("");
  };

  return (
    <>
      {!loading ? (
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
                    <CLabel>Gaji Pokok Lama</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      readOnly={kgbTerbaru ? true : false}
                      type="text"
                      name="gaji_pokok_lama"
                      id="gaji_pokok_lama"
                      placeholder="Masukkan gaji pokok lama"
                      onChange={handleChange}
                      onKeyUp={(e) =>
                        convertToCurrency(e.target.value, setFormatGaji2)
                      }
                      onBlur={handleBlur}
                      value={values.gaji_pokok_lama}
                      className={
                        errors.gaji_pokok_lama && touched.gaji_pokok_lama
                          ? "is-invalid"
                          : null
                      }
                    />
                    {!kgbTerbaru ? (
                      <div className="mt-1">{formatGaji2}</div>
                    ) : (
                      <div className="mt-1">
                        {values.gaji_pokok_lama.toLocaleString("id", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </div>
                    )}
                    {errors.gaji_pokok_lama && touched.gaji_pokok_lama && (
                      <div className="invalid-feedback">
                        {errors.gaji_pokok_lama}
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
                      name="gaji_pokok_baru"
                      id="gaji_pokok_baru"
                      placeholder="Masukkan gaji pokok baru"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onKeyUp={(e) =>
                        convertToCurrency(e.target.value, setFormatGaji)
                      }
                      value={values.gaji_pokok_baru}
                      className={
                        errors.gaji_pokok_baru && touched.gaji_pokok_baru
                          ? "is-invalid"
                          : null
                      }
                    />
                    <div className="mt-1">{formatGaji}</div>
                    {errors.gaji_pokok_baru && touched.gaji_pokok_baru && (
                      <div className="invalid-feedback">
                        {errors.gaji_pokok_baru}
                      </div>
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>TMT. Kenaikan Gaji</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="date"
                      name="tmt_kenaikan_gaji"
                      id="tmt_kenaikan_gaji"
                      placeholder="Masukkan tmt kenaikan gaji"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.tmt_kenaikan_gaji}
                      className={
                        errors.tmt_kenaikan_gaji && touched.tmt_kenaikan_gaji
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.tmt_kenaikan_gaji && touched.tmt_kenaikan_gaji && (
                      <div className="invalid-feedback">
                        {errors.tmt_kenaikan_gaji}
                      </div>
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Kenaikan Gaji YAD</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="date"
                      name="kenaikan_gaji_yad"
                      id="kenaikan_gaji_yad"
                      placeholder="Masukkan tanggal gaji yang akan datang"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.kenaikan_gaji_yad}
                      className={
                        errors.kenaikan_gaji_yad && touched.kenaikan_gaji_yad
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.kenaikan_gaji_yad && touched.kenaikan_gaji_yad && (
                      <div className="invalid-feedback">
                        {errors.kenaikan_gaji_yad}
                      </div>
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Peraturan</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="text"
                      name="peraturan"
                      id="peraturan"
                      placeholder="Masukkan peraturan yang mengatur sistem penggajian"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.peraturan}
                      className={
                        errors.peraturan && touched.peraturan
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.peraturan && touched.peraturan && (
                      <div className="invalid-feedback">{errors.peraturan}</div>
                    )}
                  </CCol>
                </CFormGroup>
              </CModalBody>
              <CModalFooter>
                <CButton
                  type="submit"
                  color="primary"
                  // onClick={() => handleFormSubmit(values)}
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

export default TambahKGB;
