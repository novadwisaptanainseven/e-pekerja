import React, { useEffect, useState } from "react";
import {
  CFormGroup,
  CCol,
  CLabel,
  CInput,
  CForm,
  CModalBody,
  CModalFooter,
  CButton,
  CRow,
} from "@coreui/react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadAnimationBlue, LoadAnimationWhite } from "src/assets";
import { useHistory } from "react-router";
import { getKGBById } from "src/context/actions/KGB/getKGBById";
import { editKGB } from "src/context/actions/KGB/editKGB";

const MySwal = withReactContent(swal2);

const EditKGB = ({ id_pegawai, id_kgb, modalEdit, setModalEdit }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [formatGaji, setFormatGaji] = useState("");

  useEffect(() => {
    if (id_kgb) {
      // Get KGB By ID
      getKGBById(id_pegawai, id_kgb, setData);
    }

    return () => {
      setData("");
    };
  }, [id_pegawai, id_kgb]);

  useEffect(() => {
    if (data) {
      convertToCurrency(data.gaji_pokok_baru);
    }
  }, [data]);

  // Inisialisasi State Formik
  const initState = {
    gaji_pokok_lama: data ? data.gaji_pokok_lama : "",
    gaji_pokok_baru: data ? data.gaji_pokok_baru : "",
    tmt_kenaikan_gaji: data ? data.tmt_kenaikan_gaji : "",
    kenaikan_gaji_yad: data ? data.kenaikan_gaji_yad : "",
    peraturan: data ? data.peraturan : "",
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

  // Fungsi untuk menampilkan alert success Edit data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModalEdit({
        ...modalEdit,
        modal: !modalEdit.modal,
        id: null,
      });
      history.push(`/epekerja/admin/kgb/${id_pegawai}/daftar`);
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
    gaji_pokok_lama: Yup.string().required("Gaji pokok lama harus diisi!"),
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
    editKGB(
      id_pegawai,
      id_kgb,
      values,
      setLoading,
      showAlertSuccess,
      showAlertError
    );

    setFormatGaji("");
  };

  return (
    <>
      {data ? (
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
                      type="text"
                      name="gaji_pokok_lama"
                      id="gaji_pokok_lama"
                      placeholder="Masukkan gaji pokok lama"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.gaji_pokok_lama}
                      className={
                        errors.gaji_pokok_lama && touched.gaji_pokok_lama
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.gaji_pokok_lama && touched.gaji_pokok_lama && (
                      <div className="invalid-feedback">
                        {errors.gaji_pokok_lama}
                      </div>
                    )}
                    <div className="mt-1">
                      {values.gaji_pokok_lama.toLocaleString("id", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </div>
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
                      onKeyUp={(e) => convertToCurrency(e.target.value)}
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
                  onClick={() =>
                    setModalEdit({
                      ...modalEdit,
                      modal: false,
                      id: null,
                    })
                  }
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

export default EditKGB;
