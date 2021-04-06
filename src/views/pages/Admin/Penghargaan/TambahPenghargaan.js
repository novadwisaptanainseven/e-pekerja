import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CInputFile,
  CLabel,
  CSelect,
} from "@coreui/react";
import { Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { getSelectPNS } from "src/context/actions/Pegawai/PNS/getSelectPNS";
import { insertPenghargaan } from "src/context/actions/Penghargaan/insertPengharaan";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";

const MySwal = withReactContent(swal2);

const TambahPenghargaan = () => {
  const history = useHistory();

  const goBackToParent = () => {
    history.goBack();
  };

  const [pegawai, setPegawai] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState();
  const [touchedSelect, setTouchedSelect] = useState(false);

  useEffect(() => {
    // Get Sub Bidang
    getSelectPNS(setPegawai);
  }, []);

  // useEffect(() => {
  //   if (pegawai.length > 0) {
  //     console.log(pegawai);
  //   }
  // }, [pegawai]);

  const getDataOptions = (pegawai) => {
    let options = [];

    pegawai.forEach((item) => {
      options.push({
        value: item.id_pegawai,
        label: item.nama,
      });
    });
    return options;
  };

  const optionsData = React.useMemo(() => getDataOptions(pegawai), [pegawai]);

  // Menangani preview input gambar setelah dipilih
  const handleSelectedFile = useCallback(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const filename = selectedFile.name;
    setPreview(filename);
  }, [selectedFile]);

  useEffect(() => {
    handleSelectedFile();
  }, [handleSelectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  // Inisialisasi State Formik
  const initState = {
    id_pegawai: "",
    nama_penerima: "",
    nama_penghargaan: "",
    pemberi: "",
    tgl_penghargaan: "",
    dokumentasi: undefined,
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Tambah Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/penghargaan");
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
  const DOKUMENTASI_SIZE = 2048000; // Bytes => 2 mb x 1000 kb x 1000 bytes
  const DOKUMENTASI_SUPPORTED_FORMATS = [
    "application/pdf",
    "image/jpg",
    "image/jpeg",
    "image/png",
  ];

  const validationSchema = Yup.object().shape({
    id_pegawai: Yup.string().required("Penerima harus diisi"),
    nama_penghargaan: Yup.string().required("Nama penghargaan harus diisi!"),
    pemberi: Yup.string().required("Pemberi harus diisi!"),
    tgl_penghargaan: Yup.string().required("Tanggal penghargaan harus diisi!"),
    dokumentasi: Yup.mixed()
      .required("File belum dipilih")
      .test(
        "size",
        "Kapasitas file maksimal 2 mb",
        (value) => value && value.size <= DOKUMENTASI_SIZE
      )
      .test(
        "type",
        "Ekstensi yang diperbolehkan hanya pdf, jpg, jpeg, dan png",
        (value) => value && DOKUMENTASI_SUPPORTED_FORMATS.includes(value.type)
      ),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("id_pegawai", values.id_pegawai);
    formData.append("nama_penghargaan", values.nama_penghargaan);
    formData.append("pemberi", values.pemberi);
    formData.append("tgl_penghargaan", values.tgl_penghargaan);
    formData.append("dokumentasi", values.dokumentasi);

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // insertPenghargaan(formData, setLoading, showAlertSuccess, showAlertError);
  };

  const customStyles = {
    control: (provided, state) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      border: !touchedSelect ? provided.border : "1px solid #e55353",
    }),
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Tambah Penghargaan</h3>
          <CButton
            type="button"
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <Formik
          initialValues={initState}
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
            setFieldValue,
          }) => (
            <CForm onSubmit={handleSubmit} className="form-horizontal">
              <CCardBody>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Nama penerima</CLabel>
                  </CCol>
                  <CCol>
                    {/* <CSelect
                      custom
                      name="id_pegawai"
                      id="id_pegawai"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.id_pegawai}
                      className={
                        errors.id_pegawai && touched.id_pegawai
                          ? "is-invalid"
                          : null
                      }
                    >
                      <option value="">-- Pilih Pegawai --</option>
                      {pegawai.map((item, index) => (
                        <option key={index} value={item.id_pegawai}>
                          {item.nama}
                        </option>
                      ))}
                    </CSelect> */}
                    <Select
                      styles={customStyles}
                      name="id_pegawai"
                      id="id_pegawai"
                      onChange={(opt) => {
                        console.log("render");
                        setTouchedSelect(false);
                        setFieldValue("id_pegawai", opt ? opt.value : "");
                      }}
                      onFocus={() => setTouchedSelect(true)}
                      placeholder="-- Pilih Pegawai --"
                      isSearchable
                      isClearable
                      options={optionsData}
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
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Nama Penghargaan</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="text"
                      name="nama_penghargaan"
                      id="nama_penghargaan"
                      placeholder="Masukkan nama penghargaan "
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nama_penghargaan}
                      className={
                        errors.nama_penghargaan && touched.nama_penghargaan
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.nama_penghargaan && touched.nama_penghargaan && (
                      <div className="invalid-feedback">
                        {errors.nama_penghargaan}
                      </div>
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Pemberi</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="text"
                      name="pemberi"
                      id="pemberi"
                      placeholder="Masukkan nama penghargaan "
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.pemberi}
                      className={
                        errors.pemberi && touched.pemberi ? "is-invalid" : null
                      }
                    />
                    {errors.pemberi && touched.pemberi && (
                      <div className="invalid-feedback">{errors.pemberi}</div>
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Tgl. Penghargaan</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="date"
                      id="tgl_penghargaan"
                      name="tgl_penghargaan"
                      placeholder="Masukkan tanggal penghargaan"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.tgl_penghargaan}
                      className={
                        errors.tgl_penghargaan && touched.tgl_penghargaan
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.tgl_penghargaan && touched.tgl_penghargaan && (
                      <div className="invalid-feedback">
                        {errors.tgl_penghargaan}
                      </div>
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>
                      File Dokumentasi Penghargaan <br />
                      {/* (Jika Ada) */}
                    </CLabel>
                  </CCol>
                  <CCol>
                    <CInputFile
                      name="dokumentasi"
                      id="dokumentasi"
                      custom
                      onChange={(e) => {
                        onSelectFile(e);
                        setFieldValue("dokumentasi", e.target.files[0]);
                      }}
                      onBlur={handleBlur}
                      className={
                        errors.dokumentasi && touched.dokumentasi
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.dokumentasi && touched.dokumentasi && (
                      <div className="invalid-feedback">
                        {errors.dokumentasi}
                      </div>
                    )}
                    <CLabel
                      style={{ width: "353px", left: 15 }}
                      htmlFor="dokumentasi"
                      variant="custom-file"
                    >
                      Pilih Foto
                    </CLabel>
                    {preview && <p className="mt-1">{preview}</p>}
                    <CFormText className="help-block">
                      File harus bertipe pdf, jpg, jpeg, atau png dengan ukuran
                      kurang dari 2 MB
                    </CFormText>
                  </CCol>
                </CFormGroup>
              </CCardBody>
              <CCardFooter>
                <CButton
                  color="primary"
                  type="submit"
                  className="mr-1"
                  disabled={loading ? true : false}
                  onClick={() => setTouchedSelect(true)}
                >
                  Simpan
                </CButton>
                <CButton color="danger" type="reset" className="mr-1">
                  Reset
                </CButton>
              </CCardFooter>
            </CForm>
          )}
        </Formik>
      </CCard>
    </>
  );
};

export default TambahPenghargaan;
