import React, { useState, useEffect } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadAnimationWhite } from "src/assets";

import {
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
  CInputRadio,
  CRow,
  CCol,
  CTextarea,
  CForm,
  CModalBody,
  CModalFooter,
  CButton,
} from "@coreui/react";
import { getSelectAgama } from "src/context/actions/MasterData/Agama/getSelectAgama";
import { useHistory } from "react-router";
import { insertKeluarga } from "src/context/actions/Pegawai/Keluarga/insertKeluarga";

const MySwal = withReactContent(swal2);

const TambahDataKeluarga = ({ id, modalTambah, setModalTambah, keluarga }) => {
  const history = useHistory();
  const [agama, setAgama] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (modalTambah) {
      // Get Agama
      getSelectAgama(setAgama);
    }
  }, [modalTambah]);

  // Inisialisasi State Formik
  const initState = {
    nik_nip: "",
    nama: "",
    hubungan: "",
    id_agama: "",
    jenis_kelamin: "",
    tgl_lahir: "",
    tempat_lahir: "",
    pekerjaan: "",
    telepon: "",
    alamat: "",
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
      history.push(`/epekerja/admin/pegawai-detail/${id}`);
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
    nik_nip: Yup.string().required("NIK/NIP harus diisi!"),
    nama: Yup.string().required("Nama harus diisi!"),
    hubungan: Yup.string().required("Hubungan harus diisi!"),
    id_agama: Yup.string().required("Agama harus diisi!"),
    jenis_kelamin: Yup.string().required("Jenis kelamin harus diisi!"),
    tgl_lahir: Yup.string().required("Tanggal lahir harus diisi!"),
    tempat_lahir: Yup.string().required("Tempat lahir harus diisi!"),
    pekerjaan: Yup.string().required("Pekerjaan harus diisi!"),
    telepon: Yup.string().required("Telepon harus diisi!"),
    alamat: Yup.string().required("Alamat harus diisi!"),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("nik_nip", values.nik_nip);
    formData.append("nama", values.nama);
    formData.append("hubungan", values.hubungan);
    formData.append("id_agama", values.id_agama);
    formData.append("jenis_kelamin", values.jenis_kelamin);
    formData.append("tgl_lahir", values.tgl_lahir);
    formData.append("tempat_lahir", values.tempat_lahir);
    formData.append("pekerjaan", values.pekerjaan);
    formData.append("telepon", values.telepon);
    formData.append("alamat", values.alamat);

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // Memanggil method Insert Keluarga untuk menambah data Keluarga ke database
    insertKeluarga(
      id,
      formData,
      setLoading,
      showAlertSuccess,
      showAlertError,
      keluarga.setLoadingKeluarga,
      keluarga.setData
    );

    resetForm({});
  };

  return (
    <>
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
          handleReset,
        }) => (
          <CForm onSubmit={handleSubmit}>
            <CModalBody>
              <CFormGroup>
                <CLabel htmlFor="nik_nip">NIK/NIP</CLabel>
                <CInput
                  id="nik_nip"
                  name="nik_nip"
                  placeholder="Masukkan NIP/NIK"
                  value={values.nik_nip}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.nik_nip && touched.nik_nip ? "is-invalid" : null
                  }
                />
                {errors.nik_nip && touched.nik_nip && (
                  <div className="invalid-feedback">{errors.nik_nip}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nama">Nama</CLabel>
                <CInput
                  id="nama"
                  name="nama"
                  placeholder="Masukkan nama"
                  value={values.nama}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.nama && touched.nama ? "is-invalid" : null}
                />
                {errors.nama && touched.nama && (
                  <div className="invalid-feedback">{errors.nama}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="hubungan">Hubungan</CLabel>
                <CSelect
                  custom
                  name="hubungan"
                  id="hubungan"
                  value={values.hubungan}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.hubungan && touched.hubungan ? "is-invalid" : null
                  }
                >
                  <option value="">-- Pilih Hubungan --</option>
                  <option value="Ayah">Ayah</option>
                  <option value="Ibu">Ibu</option>
                  <option value="Suami">Suami</option>
                  <option value="Istri">Istri</option>
                  <option value="Anak Kandung">Anak Kandung</option>
                  <option value="Anak Tiri">Anak Tiri</option>
                  <option value="Saudara">Saudara</option>
                  <option value="Saudari">Saudari</option>
                </CSelect>
                {errors.hubungan && touched.hubungan && (
                  <div className="invalid-feedback">{errors.hubungan}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="agama">Agama</CLabel>
                <CSelect
                  custom
                  name="id_agama"
                  id="id_agama"
                  value={values.id_agama}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.id_agama && touched.id_agama ? "is-invalid" : null
                  }
                >
                  <option value="">-- Pilih Agama --</option>
                  {agama.map((item, index) => (
                    <option key={index} value={item.id_agama}>
                      {item.agama}
                    </option>
                  ))}
                </CSelect>
                {errors.id_agama && touched.id_agama && (
                  <div className="invalid-feedback">{errors.id_agama}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel>Jenis Kelamin</CLabel>
                <CFormGroup variant="custom-radio">
                  <CInputRadio
                    custom
                    id="inline-radio1"
                    name="jenis_kelamin"
                    value="Laki - Laki"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-radio1">
                    Laki - Laki
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-radio">
                  <CInputRadio
                    custom
                    id="inline-radio2"
                    name="jenis_kelamin"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value="Perempuan"
                    required
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-radio2">
                    Perempuan
                  </CLabel>
                </CFormGroup>
              </CFormGroup>
              <CRow>
                <CCol>
                  <CFormGroup>
                    <CLabel htmlFor="tempat_lahir">Tempat Lahir</CLabel>
                    <CInput
                      type="text"
                      name="tempat_lahir"
                      id="tempat_lahir"
                      placeholder="Masukkan tempat lahir"
                      value={values.tempat_lahir}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.tempat_lahir && touched.tempat_lahir
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.tempat_lahir && touched.tempat_lahir && (
                      <div className="invalid-feedback">
                        {errors.tempat_lahir}
                      </div>
                    )}
                  </CFormGroup>
                </CCol>
                <CCol>
                  <CFormGroup>
                    <CLabel htmlFor="tempat_lahir">Tanggal Lahir</CLabel>
                    <CInput
                      type="date"
                      name="tgl_lahir"
                      id="tgl_lahir"
                      placeholder="Masukkan tanggal lahir"
                      value={values.tgl_lahir}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.tgl_lahir && touched.tgl_lahir
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.tgl_lahir && touched.tgl_lahir && (
                      <div className="invalid-feedback">{errors.tgl_lahir}</div>
                    )}
                  </CFormGroup>
                </CCol>
              </CRow>
              <CFormGroup>
                <CLabel htmlFor="pekerjaan">Pekerjaan</CLabel>
                <CInput
                  type="text"
                  name="pekerjaan"
                  id="pekerjaan"
                  placeholder="Masukkan pekerjaan"
                  value={values.pekerjaan}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.pekerjaan && touched.pekerjaan ? "is-invalid" : null
                  }
                />
                {errors.pekerjaan && touched.pekerjaan && (
                  <div className="invalid-feedback">{errors.pekerjaan}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="telepon">Telepon</CLabel>
                <CInput
                  type="text"
                  name="telepon"
                  id="telepon"
                  value={values.telepon}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Masukkan no. telepon"
                  className={
                    errors.telepon && touched.telepon ? "is-invalid" : null
                  }
                />
                {errors.telepon && touched.telepon && (
                  <div className="invalid-feedback">{errors.telepon}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="alamat">Alamat</CLabel>
                <CTextarea
                  name="alamat"
                  id="alamat"
                  rows="5"
                  placeholder="Masukkan alamat"
                  value={values.alamat}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.alamat && touched.alamat ? "is-invalid" : null
                  }
                />
                {errors.alamat && touched.alamat && (
                  <div className="invalid-feedback">{errors.alamat}</div>
                )}
              </CFormGroup>
            </CModalBody>
            <CModalFooter>
              <CButton
                type="submit"
                color="primary"
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
                onClick={() => {
                  setModalTambah(!modalTambah);
                }}
              >
                Batal
              </CButton>
            </CModalFooter>
          </CForm>
        )}
      </Formik>
    </>
  );
};

export default TambahDataKeluarga;
