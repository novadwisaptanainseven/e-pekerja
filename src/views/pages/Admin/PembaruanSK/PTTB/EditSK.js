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
  CFormText,
} from "@coreui/react";
import Select from "react-select";

import { getSelectJabatan } from "src/context/actions/MasterData/Jabatan/getSelectJabatan";
import { getRiwayatSKById } from "src/context/actions/PembaruanSK/getRiwayatSKById";
import { editRiwayatSK } from "src/context/actions/PembaruanSK/editRiwayatSK";

const MySwal = withReactContent(swal2);

const EditSK = ({
  modalEdit,
  setModalEdit,
  id_pegawai,
  id_riwayat_sk,
  setDataRiwayat,
}) => {
  const [loading, setLoading] = useState(false);
  const [formatGaji, setFormatGaji] = useState("");
  const [jabatan, setJabatan] = useState([]);
  const [touchedSelect, setTouchedSelect] = useState(false);
  const [data, setData] = useState("");

  // Get Riwayat SK By ID
  useEffect(() => {
    if (id_riwayat_sk) {
      getRiwayatSKById(id_pegawai, id_riwayat_sk, setData);
    }

    return () => setData("");
  }, [id_pegawai, id_riwayat_sk]);

  // Get All Jabatan
  useEffect(() => {
    if (modalEdit.modal) {
      getSelectJabatan(setJabatan);
    }
  }, [modalEdit]);

  useEffect(() => {
    if (data) {
      convertToCurrency(data.gaji_pokok);
    }
  }, [data]);

  const getDataOptions = (jabatan) => {
    let options = [];

    jabatan.forEach((item) => {
      options.push({
        value: item.id_jabatan,
        label: item.nama_jabatan,
      });
    });
    return options;
  };

  const optionsData = React.useMemo(() => getDataOptions(jabatan), [jabatan]);

  // Get masa kerja tahun dan bulan
  const getMasaKerja = (val) => {
    let val2 = val.split(" ");
    let tahun = val2[0];
    let bulan = val2[2];

    return { tahun: tahun, bulan: bulan };
  };

  // Inisialisasi State Formik
  const initState = {
    no_sk: data ? data.no_sk : "",
    penetap_sk: data ? data.penetap_sk : "",
    tgl_penetapan_sk: data ? data.tgl_penetapan_sk : "",
    tgl_mulai_tugas: data ? data.tgl_mulai_tugas : "",
    tugas: data ? data.tugas : "",
    kontrak_ke: data ? data.kontrak_ke : "",
    masa_kerja_tahun: data ? getMasaKerja(data.masa_kerja).tahun : "",
    masa_kerja_bulan: data ? getMasaKerja(data.masa_kerja).bulan : "",
    gaji_pokok: data ? data.gaji_pokok : "",
    sk_terkini: data ? data.sk_terkini : "",
    file: undefined,
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
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModalEdit({
        ...modalEdit,
        modal: !modalEdit.modal,
        id: null,
      });
      // history.push(`/epekerja/admin/pembaruan-sk/ptth/${id_pegawai}`);
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
  const FILE_SK_SIZE = 1048000; // Bytes => 2 mb x 1000 kb x 1000 bytes
  const FILE_SK_SUPPORTED_FORMATS = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const validationSchema = Yup.object().shape({
    no_sk: Yup.string().required("No. SK baru harus diisi!"),
    penetap_sk: Yup.string().required("Penetap SK"),
    tgl_penetapan_sk: Yup.string().required("Tgl penatapan harus diisi!"),
    tgl_mulai_tugas: Yup.string().required("Tgl mulai tugas harus diisi!"),
    tugas: Yup.string().required("Tugas pokok (jabatan) harus diisi!"),
    kontrak_ke: Yup.string().required("Kontrak ke harus diisi!"),
    masa_kerja_tahun: Yup.string().required("Tahun harus diisi!"),
    masa_kerja_bulan: Yup.string().required("Bulan harus diisi!"),
    gaji_pokok: Yup.number()
      .typeError("Gaji pokok baru harus berupa bilangan")
      .integer()
      .required("Gaji pokok baru harus diisi!"),
    file: Yup.mixed()
      .test("size", "Kapasitas file maksimal 2 mb", (value) => {
        if (value) {
          return value && value.size <= FILE_SK_SIZE;
        }
        return true;
      })
      .test(
        "type",
        "Ekstensi yang diperbolehkan hanya pdf, docx, atau doc",
        (value) => {
          if (value) {
            return value && FILE_SK_SUPPORTED_FORMATS.includes(value.type);
          }
          return true;
        }
      ),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    const masaKerja = `${values.masa_kerja_tahun} Tahun ${values.masa_kerja_bulan} Bulan`;
    const skTerkini =
      values.sk_terkini === 1 || values.sk_terkini[0] === "on" ? 1 : 0;

    formData.append("no_sk", values.no_sk);
    formData.append("penetap_sk", values.penetap_sk);
    formData.append("tgl_penetapan_sk", values.tgl_penetapan_sk);
    formData.append("tgl_mulai_tugas", values.tgl_mulai_tugas);
    formData.append("tugas", values.tugas);
    formData.append("kontrak_ke", values.kontrak_ke);
    formData.append("masa_kerja", masaKerja);
    formData.append("gaji_pokok", values.gaji_pokok);
    formData.append("sk_terkini", skTerkini);
    if (values.file) {
      formData.append("file", values.file);
    }

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // Memanggil method Edit Riwayat SK untuk menambah data SK ke database
    editRiwayatSK(
      id_pegawai,
      id_riwayat_sk,
      formData,
      setLoading,
      setDataRiwayat,
      showAlertSuccess,
      showAlertError
    );

    setFormatGaji("");
  };

  // Costum Styles for Select Data
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: !touchedSelect ? provided.border : "1px solid #e55353",
    }),
  };

  // Component Input Checkbox Memo
  const InputCheckbox = React.memo(({ values, handleChange, handleBlur }) => {
    return (
      <>
        <input
          type="checkbox"
          name="sk_terkini"
          checked={
            values.sk_terkini === 1 || values.sk_terkini[0] === "on"
              ? true
              : false
          }
          className="ml-2"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </>
    );
  });

  return (
    <>
      {data ? (
        <Formik
          initialValues={initState}
          validationSchema={validationSchema}
          enableReinitialize={true}
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
            setFieldValue,
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
                      type="text"
                      name="tgl_mulai_tugas"
                      id="tgl_mulai_tugas"
                      placeholder="Contoh: 01 Januari s/d 31 Desember 2021"
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
                    <CLabel>Tugas Pokok (Jabatan)</CLabel>
                  </CCol>
                  <CCol>
                    <Select
                      styles={customStyles}
                      name="tugas"
                      id="tugas"
                      onChange={(opt) => {
                        setTouchedSelect(false);
                        setFieldValue("tugas", opt ? opt.value : "");
                      }}
                      onFocus={() => setTouchedSelect(true)}
                      placeholder="-- Pilih Tugas --"
                      isSearchable
                      isClearable
                      options={optionsData}
                      defaultValue={{
                        value: data ? data.id_jabatan : "",
                        label: data ? data.nama_jabatan : "",
                      }}
                    />
                    {!values.tugas && touchedSelect && (
                      <div
                        className="text-danger mt-1"
                        style={{ fontSize: "0.8em" }}
                      >
                        Tugas pokok (jabatan) harus diisi
                      </div>
                    )}
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Kontrak Ke</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="kontrak_ke"
                      id="kontrak_ke"
                      placeholder="Masukkan kontrak baru"
                      min="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.kontrak_ke || 0}
                      className={
                        errors.kontrak_ke && touched.kontrak_ke
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.kontrak_ke && touched.kontrak_ke && (
                      <div className="invalid-feedback">
                        {errors.kontrak_ke}
                      </div>
                    )}
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Masa Kerja</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="masa_kerja_tahun"
                      id="masa_kerja_tahun"
                      min="0"
                      placeholder="Masukkan tahun"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.masa_kerja_tahun || 0}
                      className={
                        errors.masa_kerja_tahun && touched.masa_kerja_tahun
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.masa_kerja_tahun && touched.masa_kerja_tahun && (
                      <div className="invalid-feedback">
                        {errors.masa_kerja_tahun}
                      </div>
                    )}
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="masa_kerja_bulan"
                      id="masa_kerja_bulan"
                      min="0"
                      placeholder="Masukkan bulan"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.masa_kerja_bulan || 0}
                      className={
                        errors.masa_kerja_bulan && touched.masa_kerja_bulan
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.masa_kerja_bulan && touched.masa_kerja_bulan && (
                      <div className="invalid-feedback">
                        {errors.masa_kerja_bulan}
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
                <CFormGroup>
                  <CLabel>SK Terkini</CLabel>
                  <InputCheckbox
                    values={values}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  <CFormText>Cek apabila merupakan SK Anda saat ini</CFormText>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>File SK Baru</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="file"
                      name="file"
                      id="file"
                      placeholder="Masukkan file SK baru"
                      onChange={(e) => setFieldValue("file", e.target.files[0])}
                      onBlur={handleBlur}
                      className={
                        errors.file && touched.file ? "is-invalid" : null
                      }
                    />
                    {errors.file && touched.file && (
                      <div className="invalid-feedback">{errors.file}</div>
                    )}
                  </CCol>
                </CFormGroup>
              </CModalBody>
              <CModalFooter>
                <CButton
                  type="submit"
                  color="primary"
                  disabled={loading ? true : false}
                  onClick={() => {
                    !values.tugas
                      ? setTouchedSelect(true)
                      : setTouchedSelect(false);
                  }}
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
                  type="submit"
                  color="warning"
                  onClick={(e) => {
                    handleReset(e);
                    setFieldValue("tugas", "");
                  }}
                >
                  Reset
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
      )}
    </>
  );
};

export default EditSK;
