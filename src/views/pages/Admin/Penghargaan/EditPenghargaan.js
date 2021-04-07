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
  CLabel,
  CRow,
} from "@coreui/react";
import { Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { LoadAnimationBlue, LoadAnimationWhite } from "src/assets";
import { getSelectPegawai } from "src/context/actions/Pegawai/SemuaPegawai/getSelectPegawai";
import { editPenghargaan } from "src/context/actions/Penghargaan/editPenghargaan";
import { getPenghargaanById } from "src/context/actions/Penghargaan/getPenghargaanById";
import { insertPenghargaan } from "src/context/actions/Penghargaan/insertPengharaan";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";

const MySwal = withReactContent(swal2);

const EditPenghargaan = ({ match }) => {
  const params = match.params;
  const history = useHistory();

  const goBackToParent = () => {
    history.goBack();
  };

  const [pegawai, setPegawai] = useState([]);
  const [penghargaan, setPenghargaan] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState();
  const [touchedSelect, setTouchedSelect] = useState(false);

  useEffect(() => {
    // Get Select Pegawai
    getSelectPegawai(setPegawai);
    // Get penghargaan by id
    getPenghargaanById(params.id, setPenghargaan);
  }, [params]);

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
    id_pegawai: penghargaan ? penghargaan.id_pegawai : "",
    // nama_penerima: penghargaan ? penghargaan.id_pegawai : "",
    nama_penghargaan: penghargaan ? penghargaan.nama_penghargaan : "",
    pemberi: penghargaan ? penghargaan.pemberi : "",
    tgl_penghargaan: penghargaan ? penghargaan.tgl_penghargaan : "",
    dokumentasi: undefined,
  };

  // Fungsi untuk menampilkan alert success Edit data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/penghargaan");
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
      // .required("File dokumentasi penghargaan belum dipilih")
      .test("size", "Kapasitas file maksimal 2 mb", (value) => {
        if (value) {
          return value && value.size <= DOKUMENTASI_SIZE;
        }
        return true;
      })
      .test(
        "type",
        "Ekstensi yang diperbolehkan hanya jpg, jpeg, png dan pdf",
        (value) => {
          if (value) {
            return value && DOKUMENTASI_SUPPORTED_FORMATS.includes(value.type);
          }
          return true;
        }
      ),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("id_pegawai", values.id_pegawai);
    formData.append("nama_penghargaan", values.nama_penghargaan);
    formData.append("pemberi", values.pemberi);
    formData.append("tgl_penghargaan", values.tgl_penghargaan);
    if (values.dokumentasi) {
      formData.append("dokumentasi", values.dokumentasi);
    }

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    editPenghargaan(
      params.id,
      formData,
      setLoading,
      showAlertSuccess,
      showAlertError
    );
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
          <h3>Edit Penghargaan</h3>
          <CButton
            type="button"
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        {!penghargaan ? (
          <div>
            <CRow>
              <CCol className="text-center">
                <img
                  className="my-4 ml-3"
                  width={30}
                  src={LoadAnimationBlue}
                  alt="load-animation"
                />
              </CCol>
            </CRow>
          </div>
        ) : (
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
              setFieldValue,
            }) => (
              <CForm onSubmit={handleSubmit} className="form-horizontal">
                <CCardBody>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Nama penerima</CLabel>
                    </CCol>
                    <CCol>
                      <Select
                        styles={customStyles}
                        name="id_pegawai"
                        id="id_pegawai"
                        onChange={(opt) => {
                          setTouchedSelect(false);
                          setFieldValue("id_pegawai", opt ? opt.value : "");
                        }}
                        onFocus={() => setTouchedSelect(true)}
                        placeholder="-- Pilih Pegawai --"
                        isSearchable
                        isClearable
                        defaultValue={{
                          value: penghargaan ? penghargaan.id_pegawai : "",
                          label: penghargaan ? penghargaan.nama : "",
                        }}
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
                          errors.pemberi && touched.pemberi
                            ? "is-invalid"
                            : null
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
                      <CInput
                        type="file"
                        name="dokumentasi"
                        id="dokumentasi"
                        // custom
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

                      {preview && <p className="mt-1">{preview}</p>}
                      <CFormText className="help-block">
                        File harus bertipe pdf, jpg, jpeg, atau png dengan
                        ukuran kurang dari 2 MB
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
                    onClick={() => {
                      !values.id_pegawai
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
                  </CButton>
                  <CButton color="danger" type="reset" className="mr-1">
                    Reset
                  </CButton>
                </CCardFooter>
              </CForm>
            )}
          </Formik>
        )}
      </CCard>
    </>
  );
};

export default EditPenghargaan;
