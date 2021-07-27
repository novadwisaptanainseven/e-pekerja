import React, { useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadAnimationWhite } from "src/assets";

import {
  CFormGroup,
  CCol,
  CLabel,
  CInput,
  CModalBody,
  CModalFooter,
  CForm,
  CButton,
} from "@coreui/react";
import Select from "react-select";

import { getSelectJabatan } from "src/context/actions/MasterData/Jabatan/getSelectJabatan";
import { insertPembaruanSK } from "src/context/actions/PembaruanSK/insertPembaruanSK";

const MySwal = withReactContent(swal2);

const PerbaruiSK = ({ modalTambah, setModalTambah, id_pegawai, setData }) => {
  // const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [formatGaji, setFormatGaji] = useState("");
  const [jabatan, setJabatan] = useState([]);
  const [touchedSelect, setTouchedSelect] = useState(false);

  // Get All Jabatan
  useEffect(() => {
    if (modalTambah) {
      getSelectJabatan(setJabatan);
    }
  }, [modalTambah]);

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

  // Inisialisasi State Formik
  const initState = {
    no_sk: "",
    penetap_sk: "",
    tgl_penetapan_sk: "",
    tgl_mulai_tugas: "",
    tugas: "",
    gaji_pokok: "",
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
      title: "SK Berhasil Diperbarui",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModalTambah(!modalTambah);
      // history.push(`/epekerja/admin/pembaruan-sk/ptth/${id_pegawai}`);
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
      title: "SK Gagal Diperbarui",
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
    gaji_pokok: Yup.number()
      .typeError("Gaji pokok baru harus berupa bilangan")
      .integer()
      .required("Gaji pokok baru harus diisi!"),
    file: Yup.mixed()
      .required("File SK belum dipilih")
      .test(
        "size",
        "Kapasitas file maksimal 2 mb",
        (value) => value && value.size <= FILE_SK_SIZE
      )
      .test(
        "type",
        "Ekstensi yang diperbolehkan hanya pdf, docx, atau doc",
        (value) => value && FILE_SK_SUPPORTED_FORMATS.includes(value.type)
      ),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();

    for (const item in values) {
      formData.append(item, values[item]);
    }

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // Memanggil method Insert Pembaruan SK untuk menambah data SK ke database
    insertPembaruanSK(
      id_pegawai,
      formData,
      setLoading,
      setData,
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
                    <div className="invalid-feedback">{errors.penetap_sk}</div>
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
                    placeholder="Contoh: 4 JAN s/d 31 DES 2021"
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
                    <div className="invalid-feedback">{errors.gaji_pokok}</div>
                  )}
                </CCol>
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
                onClick={() => setModalTambah(!modalTambah)}
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

export default PerbaruiSK;
