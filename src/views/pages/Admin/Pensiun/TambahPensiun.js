import React, { useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";

import {
  CFormGroup,
  CInput,
  CLabel,
  CCol,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CButton,
  CForm,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { getSelectPegawai } from "src/context/actions/Pegawai/SemuaPegawai/getSelectPegawai";
import { Formik } from "formik";
import { LoadAnimationWhite } from "src/assets";
import { insertPensiun } from "src/context/actions/Pensiun.js/insertPensiun";

const MySwal = withReactContent(swal2);

const TambahPensiun = () => {
  const history = useHistory();
  const [pegawai, setPegawai] = useState([]);
  const [loading, setLoading] = useState(false);
  const [touchedSelect, setTouchedSelect] = useState(false);

  const goBackToParent = () => {
    history.goBack();
  };

  useEffect(() => {
    // Get select pegawai
    getSelectPegawai(setPegawai);
  }, []);

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

  // Inisialisasi state formik
  const initState = {
    id_pegawai: "",
    tgl_pensiun: "",
    keterangan: "",
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Tambah Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/pensiun");
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
    id_pegawai: Yup.string().required("Pegawai harus diisi"),
    tgl_pensiun: Yup.string().required("Tanggal pensiun harus diisi"),
    keterangan: Yup.string().required("Keterangan / alasan harus diisi"),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("id_pegawai", values.id_pegawai);
    formData.append("tgl_pensiun", values.tgl_pensiun);
    formData.append("keterangan", values.keterangan);

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // Tambah data pensiun
    insertPensiun(formData, setLoading, showAlertSuccess, showAlertError);
  };

  // Custom Styling for React Select
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: !touchedSelect ? provided.border : "1px solid #e55353",
    }),
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Tambah Data Pensiun</h3>
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
            <CForm onSubmit={handleSubmit}>
              <CCardBody>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel>Nama Pegawai</CLabel>
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
                      onBlur={() =>
                        values.id_pegawai
                          ? setTouchedSelect(false)
                          : setTouchedSelect(true)
                      }
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
                  <CCol md="2">
                    <CLabel>Tgl. Pensiun</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="date"
                      name="tgl_pensiun"
                      id="tgl_pensiun"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.tgl_pensiun || ""}
                      placeholder="Masukkan tgl. pensiun"
                      className={
                        errors.tgl_pensiun && touched.tgl_pensiun
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.tgl_pensiun && touched.tgl_pensiun && (
                      <div className="invalid-feedback">
                        {errors.tgl_pensiun}
                      </div>
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel>Keterangan</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="text"
                      name="keterangan"
                      id="keterangan"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.keterangan || ""}
                      placeholder="Masukkan keterangan / alasan pensiun"
                      className={
                        errors.keterangan && touched.keterangan
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.keterangan && touched.keterangan && (
                      <div className="invalid-feedback">
                        {errors.keterangan}
                      </div>
                    )}
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
              </CCardFooter>
            </CForm>
          )}
        </Formik>
      </CCard>
    </>
  );
};

export default TambahPensiun;
