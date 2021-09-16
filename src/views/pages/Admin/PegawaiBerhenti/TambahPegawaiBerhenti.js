import {
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormGroup,
  CCol,
  CLabel,
  CInput,
  CCardFooter,
} from "@coreui/react";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import initState from "./Formik/initState";
import validationSchema from "./Formik/validationSchema";
import Select from "react-select";
import customStylesSelect from "src/reusable/customStylesSelect";
import { getSelectPegawai } from "src/context/actions/Pegawai/SemuaPegawai/getSelectPegawai";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import LoadingSubmit from "src/reusable/LoadingSubmit";
import { insertPegawaiBerhenti } from "src/context/actions/PegawaiBerhenti";

const MySwal = withReactContent(swal2);

const TambahPegawaiBerhenti = () => {
  const history = useHistory();
  const [touchedSelect, setTouchedSelect] = useState(false);
  const [pegawai, setPegawai] = useState([]);
  const [loading, setLoading] = useState(false);

  const goBackToParent = () => {
    history.goBack();
  };

  // Get Select Pegawai
  useEffect(() => {
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

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Tambah Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/pegawai-berhenti");
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

  const handleFormSubmit = (values) => {
    const formData = new FormData();

    for (const key in values) {
      formData.append(key, values[key]);
    }

    for (let pair of formData.entries()) {
      console.log(pair);
    }

    insertPegawaiBerhenti(
      formData,
      setLoading,
      showAlertSuccess,
      showAlertError
    );
  };

  return (
    <div>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Tambah Pegawai Berhenti</h3>
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
          onSubmit={handleFormSubmit}
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
                      styles={customStylesSelect(touchedSelect)}
                      name="id_pegawai"
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
                    <CLabel>Tgl. Berhenti</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="date"
                      name="tgl_berhenti"
                      id="tgl_berhenti"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.tgl_berhenti || ""}
                      placeholder="Masukkan tgl. berhenti"
                      className={
                        errors.tgl_berhenti && touched.tgl_berhenti
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.tgl_berhenti && touched.tgl_berhenti && (
                      <div className="invalid-feedback">
                        {errors.tgl_berhenti}
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
                  {loading ? <LoadingSubmit /> : "Simpan"}
                </CButton>
              </CCardFooter>
            </CForm>
          )}
        </Formik>
      </CCard>
    </div>
  );
};

export default TambahPegawaiBerhenti;
