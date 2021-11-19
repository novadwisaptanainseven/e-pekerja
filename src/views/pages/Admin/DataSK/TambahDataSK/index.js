import {
  CButton,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { LoadAnimationWhite } from "src/assets";
import { insertSK } from "src/context/actions/DataSK";
import { getSelectPegawai } from "src/context/actions/Pegawai/SemuaPegawai/getSelectPegawai";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import initState from "./Formik/initState";
import validationSchema from "./Formik/validationSchema";

const MySwal = withReactContent(swal2);

const TambahDataSK = ({ modal, setModal, dispatch }) => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [pegawai, setPegawai] = useState([]);
  const [touchedSelect, setTouchedSelect] = useState(false);

  useEffect(() => {
    // Get Select Pegawai
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
      title: "Upload SK Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModal(!modal);
      // history.push(`/epekerja/admin/pegawai-detail/${id}`);
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
      title: "Upload SK Gagal",
      text: err_message,
    }).then((result) => {
      setLoadingSubmit(false);
    });
  };

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("no_sk", values.no_sk);
    formData.append("nama_sk", values.nama_sk);
    formData.append("tanggal", values.tanggal);
    formData.append("file", values.file);

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    insertSK(
      formData,
      setLoadingSubmit,
      showAlertSuccess,
      showAlertError,
      dispatch
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
    <div>
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
          <CForm onSubmit={handleSubmit} className="form-horizontal">
            <CModalBody>
              <CFormGroup>
                <CLabel>No. SK</CLabel>
                <CInput
                  type="text"
                  name="no_sk"
                  placeholder="Masukkan No. SK"
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
              </CFormGroup>
              <CFormGroup>
                <CLabel>Nama SK</CLabel>
                <CInput
                  type="text"
                  name="nama_sk"
                  placeholder="Masukkan Nama SK"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nama_sk}
                  className={
                    errors.nama_sk && touched.nama_sk ? "is-invalid" : null
                  }
                />
                {errors.nama_sk && touched.nama_sk && (
                  <div className="invalid-feedback">{errors.nama_sk}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel>Tanggal</CLabel>
                <CInput
                  type="date"
                  name="tanggal"
                  placeholder="Masukkan Tanggal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tanggal}
                  className={
                    errors.tanggal && touched.tanggal ? "is-invalid" : null
                  }
                />
                {errors.tanggal && touched.tanggal && (
                  <div className="invalid-feedback">{errors.tanggal}</div>
                )}
              </CFormGroup>

              <CFormGroup>
                <CLabel>File SK</CLabel>
                <CInput
                  type="file"
                  name="file"
                  placeholder="Masukkan file SK"
                  onChange={(e) => setFieldValue("file", e.target.files[0])}
                  onBlur={handleBlur}
                  className={errors.file && touched.file ? "is-invalid" : null}
                />
                {errors.file && touched.file && (
                  <div className="invalid-feedback">{errors.file}</div>
                )}
                <CFormText>File SK harus berekstensi PDF, DOC, DOCX</CFormText>
              </CFormGroup>
            </CModalBody>
            <CModalFooter>
              <CButton
                type="submit"
                color="primary"
                disabled={loadingSubmit ? true : false}
                onClick={() => {
                  !values.id_pegawai
                    ? setTouchedSelect(true)
                    : setTouchedSelect(false);
                }}
              >
                {loadingSubmit ? (
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
                onClick={() => setModal(!modal)}
              >
                Batal
              </CButton>
            </CModalFooter>
          </CForm>
        )}
      </Formik>
    </div>
  );
};

export default TambahDataSK;
