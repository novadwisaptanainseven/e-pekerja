import React, { useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadAnimationBlue, LoadAnimationWhite } from "src/assets";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CRow,
  CForm,
  CLabel,
  CFormGroup,
  CInput,
  CButton,
  CFormText,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import { getMasaKerjaById } from "src/context/actions/MasaKerja/getMasaKerjaById";
import { editMasaKerja } from "src/context/actions/MasaKerja/editMasaKerja";

const MySwal = withReactContent(swal2);

const EditMasaKerja = ({ match }) => {
  const params = match.params;
  const history = useHistory();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const goBackToParent = () => {
    history.goBack();
  };

  useEffect(() => {
    // Get masa kerja by id
    getMasaKerjaById(params.id, setData);
  }, [params]);

  // Fungsi untuk memecahkan string masa kerja ke dalam bentuk array
  // Tujuannya adalah untuk mengambil nilai numeriknya saja karena 'tahun' dan 'bulan' tidak dibutuhkan
  const splitMasaKerja = (mk) => {
    let arr_mk = mk.split(" ");
    let tahun = arr_mk[0];
    let bulan = arr_mk[2];

    return { tahun: tahun, bulan: bulan };
  };

  const initState = {
    nama: data ? data.nama : "",
    tahun_golongan: data ? splitMasaKerja(data.mk_golongan).tahun : "",
    bulan_golongan: data ? splitMasaKerja(data.mk_golongan).bulan : "",
    tahun_jabatan: data ? splitMasaKerja(data.mk_jabatan).tahun : "",
    bulan_jabatan: data ? splitMasaKerja(data.mk_jabatan).bulan : "",
    tahun_cpns: data ? splitMasaKerja(data.mk_sebelum_cpns).tahun : "",
    bulan_cpns: data ? splitMasaKerja(data.mk_sebelum_cpns).bulan : "",
    tahun_seluruhnya: data ? splitMasaKerja(data.mk_seluruhnya).tahun : "",
    bulan_seluruhnya: data ? splitMasaKerja(data.mk_seluruhnya).bulan : "",
  };

  // Fungsi untuk menampilkan alert success Edit data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/masa-kerja");
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
    tahun_golongan: Yup.string().required("Tahun harus diisi"),
    bulan_golongan: Yup.string().required("bulan mutasi harus diisi"),
    tahun_jabatan: Yup.string().required("Tahun harus diisi"),
    bulan_jabatan: Yup.string().required("bulan mutasi harus diisi"),
    tahun_cpns: Yup.string().required("Tahun harus diisi"),
    bulan_cpns: Yup.string().required("bulan mutasi harus diisi"),
    tahun_seluruhnya: Yup.string().required("Tahun harus diisi"),
    bulan_seluruhnya: Yup.string().required("bulan mutasi harus diisi"),
  });

  const handleFormSubmit = (values) => {
    let mk_golongan = `${values.tahun_golongan} Tahun ${values.bulan_golongan} Bulan`;
    let mk_jabatan = `${values.tahun_jabatan} Tahun ${values.bulan_jabatan} Bulan`;
    let mk_sebelum_cpns = `${values.tahun_cpns} Tahun ${values.bulan_cpns} Bulan`;
    let mk_seluruhnya = `${values.tahun_seluruhnya} Tahun ${values.bulan_seluruhnya} Bulan`;

    const newValues = {
      mk_golongan: mk_golongan,
      mk_jabatan: mk_jabatan,
      mk_sebelum_cpns: mk_sebelum_cpns,
      mk_seluruhnya: mk_seluruhnya,
    };

    // console.log(newValues);

    editMasaKerja(
      params.id,
      newValues,
      setLoading,
      showAlertSuccess,
      showAlertError
    );
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Edit Masa Kerja</h3>
          <CButton
            type="button"
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        {data ? (
          <Formik
            initialValues={initState}
            enableReinitialize={true}
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
              <CForm onSubmit={handleSubmit} className="form-horizontal">
                <CCardBody>
                  <CRow>
                    <CCol md="7" sm="12">
                      <CFormGroup row>
                        <CCol md="4">
                          <CLabel>Nama</CLabel>
                        </CCol>
                        <CCol>
                          <CInput
                            type="text"
                            name="nama"
                            id="nama"
                            value={values.nama}
                            disabled
                          />
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="4">
                          <CLabel>Masa Kerja Golongan</CLabel>
                        </CCol>
                        <CCol>
                          <CInput
                            type="number"
                            name="tahun_golongan"
                            id="tahun_golongan"
                            placeholder="Tahun"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tahun_golongan}
                            className={
                              errors.tahun_golongan && touched.tahun_golongan
                                ? "is-invalid"
                                : null
                            }
                          />
                          {errors.tahun_golongan && touched.tahun_golongan && (
                            <div className="invalid-feedback">
                              {errors.tahun_golongan}
                            </div>
                          )}
                          <CFormText>Tahun</CFormText>
                        </CCol>
                        <CCol>
                          <CInput
                            type="number"
                            name="bulan_golongan"
                            id="bulan_golongan"
                            placeholder="Bulan"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.bulan_golongan}
                            className={
                              errors.bulan_golongan && touched.bulan_golongan
                                ? "is-invalid"
                                : null
                            }
                          />
                          {errors.bulan_golongan && touched.bulan_golongan && (
                            <div className="invalid-feedback">
                              {errors.bulan_golongan}
                            </div>
                          )}
                          <CFormText>Bulan</CFormText>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="4">
                          <CLabel>Masa Kerja Jabatan</CLabel>
                        </CCol>
                        <CCol>
                          <CInput
                            type="number"
                            name="tahun_jabatan"
                            id="tahun_jabatan"
                            placeholder="Tahun"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tahun_jabatan}
                            className={
                              errors.tahun_jabatan && touched.tahun_jabatan
                                ? "is-invalid"
                                : null
                            }
                          />
                          {errors.tahun_jabatan && touched.tahun_jabatan && (
                            <div className="invalid-feedback">
                              {errors.tahun_jabatan}
                            </div>
                          )}
                          <CFormText>Tahun</CFormText>
                        </CCol>
                        <CCol>
                          <CInput
                            type="number"
                            name="bulan_jabatan"
                            id="bulan_jabatan"
                            placeholder="Bulan"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.bulan_jabatan}
                            className={
                              errors.bulan_jabatan && touched.bulan_jabatan
                                ? "is-invalid"
                                : null
                            }
                          />
                          {errors.bulan_jabatan && touched.bulan_jabatan && (
                            <div className="invalid-feedback">
                              {errors.bulan_jabatan}
                            </div>
                          )}
                          <CFormText>Bulan</CFormText>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="4">
                          <CLabel>Masa Kerja Sebelum CPNS</CLabel>
                        </CCol>
                        <CCol>
                          <CInput
                            type="number"
                            name="tahun_cpns"
                            id="tahun_cpns"
                            placeholder="Tahun"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tahun_cpns}
                            className={
                              errors.tahun_cpns && touched.tahun_cpns
                                ? "is-invalid"
                                : null
                            }
                          />
                          {errors.tahun_cpns && touched.tahun_cpns && (
                            <div className="invalid-feedback">
                              {errors.tahun_cpns}
                            </div>
                          )}
                          <CFormText>Tahun</CFormText>
                        </CCol>
                        <CCol>
                          <CInput
                            type="number"
                            name="bulan_cpns"
                            id="bulan_cpns"
                            placeholder="Bulan"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.bulan_cpns}
                            className={
                              errors.bulan_cpns && touched.bulan_cpns
                                ? "is-invalid"
                                : null
                            }
                          />
                          {errors.bulan_cpns && touched.bulan_cpns && (
                            <div className="invalid-feedback">
                              {errors.bulan_cpns}
                            </div>
                          )}
                          <CFormText>Bulan</CFormText>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="4">
                          <CLabel>Masa Kerja Seluruhnya</CLabel>
                        </CCol>
                        <CCol>
                          <CInput
                            type="number"
                            name="tahun_seluruhnya"
                            id="tahun_seluruhnya"
                            placeholder="Tahun"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tahun_seluruhnya}
                            className={
                              errors.tahun_seluruhnya &&
                              touched.tahun_seluruhnya
                                ? "is-invalid"
                                : null
                            }
                          />
                          {errors.tahun_seluruhnya &&
                            touched.tahun_seluruhnya && (
                              <div className="invalid-feedback">
                                {errors.tahun_seluruhnya}
                              </div>
                            )}
                          <CFormText>Tahun</CFormText>
                        </CCol>
                        <CCol>
                          <CInput
                            type="number"
                            name="bulan_seluruhnya"
                            id="bulan_seluruhnya"
                            placeholder="Bulan"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.bulan_seluruhnya}
                            className={
                              errors.bulan_seluruhnya &&
                              touched.bulan_seluruhnya
                                ? "is-invalid"
                                : null
                            }
                          />
                          {errors.bulan_seluruhnya &&
                            touched.bulan_seluruhnya && (
                              <div className="invalid-feedback">
                                {errors.bulan_seluruhnya}
                              </div>
                            )}
                          <CFormText>Bulan</CFormText>
                        </CCol>
                      </CFormGroup>
                    </CCol>
                  </CRow>
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
                  <CButton color="danger" type="reset" className="mr-1">
                    Reset
                  </CButton>
                </CCardFooter>
              </CForm>
            )}
          </Formik>
        ) : (
          <div className="mb-3">
            <CRow>
              <CCol className="text-center">
                <img
                  className="mt-4 ml-3"
                  width={30}
                  src={LoadAnimationBlue}
                  alt="load-animation"
                />
              </CCol>
            </CRow>
          </div>
        )}
      </CCard>
    </>
  );
};

export default EditMasaKerja;
