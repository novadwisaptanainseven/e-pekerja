import {
  CButton,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { LoadAnimationWhite } from "src/assets";
import { getSKById, editSK } from "src/context/actions/DataSK";
import { getSelectPegawai } from "src/context/actions/Pegawai/SemuaPegawai/getSelectPegawai";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import initState from "./Formik/initState";
import validationSchema from "./Formik/validationSchema";
import Loading from "src/reusable/Loading";

const MySwal = withReactContent(swal2);

const EditDataSK = ({ modal, setModal, dispatch }) => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [pegawai, setPegawai] = useState([]);
  const [data, setData] = useState("");
  const [touchedSelect, setTouchedSelect] = useState(false);

  useEffect(() => {
    if (modal.id) {
      // Get Select Pegawai
      getSelectPegawai(setPegawai);

      // Get SK Pegawai By ID
      getSKById(modal.id, setData);

      return () => {
        setData("");
        setTouchedSelect(false);
      };
    }
  }, [modal]);

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

  // Fungsi untuk menampilkan alert success Edit Data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModal(!modal);
      // history.push(`/epekerja/admin/pegawai-detail/${id}`);
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
      setLoadingSubmit(false);
    });
  };

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("nama_sk", values.nama_sk);
    formData.append("no_sk", values.no_sk);
    formData.append("tanggal", values.tanggal);

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    editSK(
      modal.id,
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
      {!data ? (
        <Loading />
      ) : (
        <Formik
          initialValues={initState(data)}
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
      )}
    </div>
  );
};

export default EditDataSK;
