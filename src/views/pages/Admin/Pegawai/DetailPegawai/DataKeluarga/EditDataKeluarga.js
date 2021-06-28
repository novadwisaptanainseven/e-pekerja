import React, { useEffect, useState } from "react";

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
import { useHistory } from "react-router";
import { getKeluargaById } from "src/context/actions/Pegawai/Keluarga/getKeluargaById";
import { getSelectAgama } from "src/context/actions/MasterData/Agama/getSelectAgama";
import { editKeluarga } from "src/context/actions/Pegawai/Keluarga/editKeluarga";

const MySwal = withReactContent(swal2);

const EditDataKeluarga = ({
  idPegawai,
  idKeluarga,
  modalEdit,
  setModalEdit,
  keluarga,
}) => {
  const history = useHistory();
  const [agama, setAgama] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get Keluarga by Id
    if (idKeluarga) {
      getKeluargaById(idPegawai, idKeluarga, setData);
    }
    if (modalEdit) {
      // Get Agama
      getSelectAgama(setAgama);
    }

    return () => {
      setData(null);
    };
  }, [idPegawai, idKeluarga, modalEdit]);

  // Inisialisasi State Formik
  const initState = {
    nik_nip: data ? data.nik_nip : "",
    nama: data ? data.nama : "",
    hubungan: data ? data.hubungan : "",
    id_agama: data ? data.id_agama : "",
    jenis_kelamin: data ? data.jenis_kelamin : "",
    tgl_lahir: data ? data.tgl_lahir : "",
    tempat_lahir: data ? data.tempat_lahir : "",
    pekerjaan: data ? data.pekerjaan : "",
    telepon: data ? data.telepon : "",
    alamat: data ? data.alamat : "",
  };

  // Fungsi untuk menampilkan alert success Edit data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModalEdit(!modalEdit);
      history.push(`/epekerja/admin/pegawai-detail/${idPegawai}`);
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
  const handleFormSubmit = (values) => {
    // console.log(values);

    // Memanggil method Edit Keluarga untuk mengubah data Keluarga ke database
    editKeluarga(
      idPegawai,
      idKeluarga,
      values,
      setLoading,
      showAlertSuccess,
      showAlertError,
      keluarga.setData,
      keluarga.setLoadingKeluarga
    );
  };

  return (
    <>
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
                    id="jenis_kelamin"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="jenis_kelamin"
                    value="Laki - Laki"
                    checked={
                      values.jenis_kelamin === "Laki - Laki" ? true : false
                    }
                    required
                  />
                  <CLabel variant="custom-checkbox" htmlFor="jenis_kelamin">
                    Laki - Laki
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-radio">
                  <CInputRadio
                    custom
                    id="jenis_kelamin2"
                    name="jenis_kelamin"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value="Perempuan"
                    checked={
                      values.jenis_kelamin === "Perempuan" ? true : false
                    }
                    required
                  />
                  <CLabel variant="custom-checkbox" htmlFor="jenis_kelamin2">
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
                onClick={() => setModalEdit(!modalEdit)}
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

export default EditDataKeluarga;
