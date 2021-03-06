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
  CFormText,
  CRow,
} from "@coreui/react";

import { useHistory } from "react-router";
import { splitMasaKerja } from "./functions";
import { getMasaKerjaById } from "src/context/actions/MasaKerja/getMasaKerjaById";
import { editMasaKerja } from "src/context/actions/MasaKerja/editMasaKerja";
import { getMasaKerja } from "src/context/actions/MasaKerja/getMasaKerja";

const MySwal = withReactContent(swal2);

const PerbaruiMasaKerja = ({
  modalTambah,
  setModalTambah,
  id_pegawai,
  masaKerjaDispatch,
}) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  // Get Riwayat Terakhir Masa Kerja
  useEffect(() => {
    console.log(id_pegawai);
    if (id_pegawai && modalTambah.modal) {
      getMasaKerjaById(id_pegawai, setData);
    }

    return () => setData("");
  }, [id_pegawai, modalTambah]);

  // Inisialisasi State Formik
  const initState = {
    mk_golongan_tahun: data ? splitMasaKerja(data.mk_golongan).tahun : "",
    mk_golongan_bulan: data ? splitMasaKerja(data.mk_golongan).bulan : "",
    mk_jabatan_tahun: data ? splitMasaKerja(data.mk_jabatan).tahun : "",
    mk_jabatan_bulan: data ? splitMasaKerja(data.mk_jabatan).bulan : "",
    mk_cpns_tahun: data ? splitMasaKerja(data.mk_sebelum_cpns).tahun : "",
    mk_cpns_bulan: data ? splitMasaKerja(data.mk_sebelum_cpns).bulan : "",
    mk_seluruhnya_tahun: data ? splitMasaKerja(data.mk_seluruhnya).tahun : "",
    mk_seluruhnya_bulan: data ? splitMasaKerja(data.mk_seluruhnya).bulan : "",
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Masa Kerja Berhasil Diperbarui",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      getMasaKerja(masaKerjaDispatch);
      setModalTambah({ ...modalTambah, modal: false, id: null });
      history.push(`/epekerja/admin/masa-kerja`);
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
      title: "Masa Kerja Gagal Diperbarui",
      text: err_message,
    }).then((result) => {
      setLoading(false);
    });
  };

  const validationSchema = Yup.object().shape({
    mk_golongan_tahun: Yup.string().required("Tahun harus diisi!"),
    mk_golongan_bulan: Yup.string().required("Bulan harus diisi!"),
    mk_jabatan_tahun: Yup.string().required("Tahun harus diisi!"),
    mk_jabatan_bulan: Yup.string().required("Bulan harus diisi!"),
    mk_cpns_tahun: Yup.string().required("Tahun harus diisi!"),
    mk_cpns_bulan: Yup.string().required("Bulan harus diisi!"),
    mk_seluruhnya_tahun: Yup.string().required("Tahun harus diisi!"),
    mk_seluruhnya_bulan: Yup.string().required("Bulan harus diisi!"),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const mkGolongan = `${values.mk_golongan_tahun} Tahun ${values.mk_golongan_bulan} Bulan`;
    const mkJabatan = `${values.mk_jabatan_tahun} Tahun ${values.mk_jabatan_bulan} Bulan`;
    const mkCpns = `${values.mk_cpns_tahun} Tahun ${values.mk_cpns_bulan} Bulan`;
    const mkSeluruhnya = `${values.mk_seluruhnya_tahun} Tahun ${values.mk_seluruhnya_bulan} Bulan`;

    const newVal = {
      mk_golongan: mkGolongan,
      mk_jabatan: mkJabatan,
      mk_sebelum_cpns: mkCpns,
      mk_seluruhnya: mkSeluruhnya,
    };

    editMasaKerja(
      id_pegawai,
      newVal,
      setLoading,
      showAlertSuccess,
      showAlertError
    );
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
                    <CLabel>Masa Kerja Golongan</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="mk_golongan_tahun"
                      id="mk_golongan_tahun"
                      placeholder="Tahun"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mk_golongan_tahun}
                      className={
                        errors.mk_golongan_tahun && touched.mk_golongan_tahun
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.mk_golongan_tahun && touched.mk_golongan_tahun && (
                      <div className="invalid-feedback">
                        {errors.mk_golongan_tahun}
                      </div>
                    )}
                    <CFormText>Tahun</CFormText>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="mk_golongan_bulan"
                      id="mk_golongan_bulan"
                      placeholder="Bulan"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mk_golongan_bulan}
                      className={
                        errors.mk_golongan_bulan && touched.mk_golongan_bulan
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.mk_golongan_bulan && touched.mk_golongan_bulan && (
                      <div className="invalid-feedback">
                        {errors.mk_golongan_bulan}
                      </div>
                    )}
                    <CFormText>Bulan</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Masa Kerja Jabatan</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="mk_jabatan_tahun"
                      id="mk_jabatan_tahun"
                      placeholder="Tahun"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mk_jabatan_tahun}
                      className={
                        errors.mk_jabatan_tahun && touched.mk_jabatan_tahun
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.mk_jabatan_tahun && touched.mk_jabatan_tahun && (
                      <div className="invalid-feedback">
                        {errors.mk_jabatan_tahun}
                      </div>
                    )}
                    <CFormText>Tahun</CFormText>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="mk_jabatan_bulan"
                      id="mk_jabatan_bulan"
                      placeholder="Bulan"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mk_jabatan_bulan}
                      className={
                        errors.mk_jabatan_bulan && touched.mk_jabatan_bulan
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.mk_jabatan_bulan && touched.mk_jabatan_bulan && (
                      <div className="invalid-feedback">
                        {errors.mk_jabatan_bulan}
                      </div>
                    )}
                    <CFormText>Bulan</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Masa Kerja Sebelum CPNS</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="mk_cpns_tahun"
                      id="mk_cpns_tahun"
                      placeholder="Tahun"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mk_cpns_tahun}
                      className={
                        errors.mk_cpns_tahun && touched.mk_cpns_tahun
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.mk_cpns_tahun && touched.mk_cpns_tahun && (
                      <div className="invalid-feedback">
                        {errors.mk_cpns_tahun}
                      </div>
                    )}
                    <CFormText>Tahun</CFormText>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="mk_cpns_bulan"
                      id="mk_cpns_bulan"
                      placeholder="Bulan"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mk_cpns_bulan}
                      className={
                        errors.mk_cpns_bulan && touched.mk_cpns_bulan
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.mk_cpns_bulan && touched.mk_cpns_bulan && (
                      <div className="invalid-feedback">
                        {errors.mk_cpns_bulan}
                      </div>
                    )}
                    <CFormText>Bulan</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Masa Kerja Seluruhnya</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="mk_seluruhnya_tahun"
                      id="mk_seluruhnya_tahun"
                      placeholder="Tahun"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mk_seluruhnya_tahun}
                      className={
                        errors.mk_seluruhnya_tahun &&
                        touched.mk_seluruhnya_tahun
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.mk_seluruhnya_tahun &&
                      touched.mk_seluruhnya_tahun && (
                        <div className="invalid-feedback">
                          {errors.mk_seluruhnya_tahun}
                        </div>
                      )}
                    <CFormText>Tahun</CFormText>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="mk_seluruhnya_bulan"
                      id="mk_seluruhnya_bulan"
                      placeholder="Bulan"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mk_seluruhnya_bulan}
                      className={
                        errors.mk_seluruhnya_bulan &&
                        touched.mk_seluruhnya_bulan
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.mk_seluruhnya_bulan &&
                      touched.mk_seluruhnya_bulan && (
                        <div className="invalid-feedback">
                          {errors.mk_seluruhnya_bulan}
                        </div>
                      )}
                    <CFormText>Bulan</CFormText>
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
                {/* <CButton
                type="submit"
                color="warning"
                onClick={(e) => {
                  handleReset(e);
                  setFieldValue("tugas", "");
                }}
              >
                Reset
              </CButton>{" "} */}
                <CButton
                  type="button"
                  color="secondary"
                  onClick={() =>
                    setModalTambah({ ...modalTambah, modal: false })
                  }
                >
                  Batal
                </CButton>
              </CModalFooter>
            </CForm>
          )}
        </Formik>
      ) : (
        <CRow className="mb-3">
          <CCol className="text-center">
            <img
              className="mt-4 ml-3"
              width={30}
              src={LoadAnimationBlue}
              alt="load-animation"
            />
          </CCol>
        </CRow>
      )}
    </>
  );
};

export default PerbaruiMasaKerja;
