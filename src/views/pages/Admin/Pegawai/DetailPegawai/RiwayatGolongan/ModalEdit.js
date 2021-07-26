import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CForm,
  CLabel,
  CInput,
  CFormGroup,
  CRow,
  CCol,
  CFormText,
} from "@coreui/react";
import { Formik } from "formik";
import React, { memo, useCallback, useEffect, useState } from "react";
import {
  editGolongan,
  getRiwayatGolonganById,
} from "src/context/actions/RiwayatGolongan";
import getFilename from "src/helpers/getFilename";
import LoadingSubmit from "src/reusable/LoadingSubmit";
import initState from "./Formik/initState";
import validationSchema from "./Formik/validationSchema";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(swal2);

const ModalEdit = ({
  modalEdit,
  setModalEdit,
  setLoadingGolongan,
  setDataGolongan,
}) => {
  const [preview, setPreview] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  console.log(loading);

  // Get riwayat golongan by id
  useEffect(() => {
    if (modalEdit.id) {
      getRiwayatGolonganById(modalEdit.id, setData, setLoading);
    }
  }, [modalEdit]);

  const handleSelectedFile = useCallback(() => {
    if (!selectedFile) {
      setPreview(modalEdit.data ? getFilename(modalEdit.data.file) : "");
      return;
    }

    const filename = selectedFile.name;
    setPreview(filename);
  }, [selectedFile, modalEdit]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    handleSelectedFile();
  }, [handleSelectedFile]);

  useEffect(() => {
    if (modalEdit.id) {
      modalEdit.data.mk_tahun = getMasaKerja(modalEdit.data.masa_kerja).tahun;
      modalEdit.data.mk_bulan = getMasaKerja(modalEdit.data.masa_kerja).bulan;
      modalEdit.data.file = data.file;

      console.log(modalEdit.data);
    }
  }, [modalEdit, data]);

  const getMasaKerja = (data) => {
    let arr = data.split(" ");
    let tahun = arr[0];
    let bulan = arr[2];

    return { tahun: tahun, bulan: bulan };
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      // history.push("/epekerja/admin/pegawai");
      setModalEdit({ ...modalEdit, id: "", modal: false, data: "" });
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
      title: "Edit Data Gagal",
      text: err_message,
    }).then((result) => {
      setLoading(false);
    });
  };

  // Handle form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    const masaKerja = `${values.mk_tahun} Tahun ${values.mk_bulan} Bulan`;
    const pangkatTerkini =
      values.pangkat_terkini === 1 || values.pangkat_terkini[0] === "on"
        ? 1
        : 0;

    formData.append("id_golongan", values.id_golongan);
    formData.append("jenis_kp", values.jenis_kp);
    formData.append("no_sk", values.no_sk);
    formData.append("tanggal", values.tanggal);
    formData.append("masa_kerja", masaKerja);
    formData.append("pejabat_penetap", values.pejabat_penetap);
    formData.append("pangkat_terkini", pangkatTerkini);
    formData.append("tmt_kenaikan_pangkat", values.tmt_kenaikan_pangkat);
    if (values.file) {
      formData.append("file", values.file);
    }

    for (let pair of formData.entries()) {
      console.log(pair);
    }

    editGolongan(
      data.id_pegawai,
      data.id_rw_golongan,
      formData,
      setLoadingSubmit,
      showAlertSuccess,
      showAlertError,
      setLoadingGolongan,
      setDataGolongan
    );
  };

  // Component Input Checkbox Memo
  const InputCheckbox = memo(({ values, handleChange, handleBlur }) => {
    return (
      <>
        <input
          type="checkbox"
          name="pangkat_terkini"
          checked={
            values.pangkat_terkini === 1 || values.pangkat_terkini[0] === "on"
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
    <CModal
      show={modalEdit.modal}
      onClose={() =>
        setModalEdit({ ...modalEdit, modal: false, id: "", data: "" })
      }
    >
      <CModalHeader closeButton>
        <CModalTitle>Edit Golongan</CModalTitle>
      </CModalHeader>
      <Formik
        initialValues={initState(modalEdit.data)}
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
          setFieldValue,
        }) => (
          <CForm onSubmit={handleSubmit}>
            <CModalBody>
              <CFormGroup>
                <CLabel>Jenis Kenaikan Pangkat</CLabel>
                <CInput readOnly type="text" value={values.jenis_kp} />
              </CFormGroup>
              <CFormGroup>
                <CLabel>Golongan</CLabel>
                <CInput
                  readOnly
                  type="text"
                  value={`${values.keterangan} (${values.golongan})`}
                />
              </CFormGroup>
              <CFormGroup>
                <CRow>
                  <CCol>
                    <CLabel>No. SK</CLabel>
                    <CInput
                      type="text"
                      name="no_sk"
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
                  <CCol>
                    <CLabel>Tgl. Kenaikan Pangkat</CLabel>
                    <CInput
                      type="date"
                      name="tanggal"
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
                  </CCol>
                </CRow>
              </CFormGroup>
              <CFormGroup>
                <CLabel>TMT. Kenaikan Pangkat</CLabel>
                <CInput
                  type="date"
                  name="tmt_kenaikan_pangkat"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tmt_kenaikan_pangkat}
                  className={
                    errors.tmt_kenaikan_pangkat && touched.tmt_kenaikan_pangkat
                      ? "is-invalid"
                      : null
                  }
                />
                {errors.tmt_kenaikan_pangkat &&
                  touched.tmt_kenaikan_pangkat && (
                    <div className="invalid-feedback">
                      {errors.tmt_kenaikan_pangkat}
                    </div>
                  )}
              </CFormGroup>
              <CFormGroup>
                <CLabel>Pejabat Penetap</CLabel>
                <CInput
                  type="text"
                  name="pejabat_penetap"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pejabat_penetap}
                  className={
                    errors.pejabat_penetap && touched.pejabat_penetap
                      ? "is-invalid"
                      : null
                  }
                />
                {errors.pejabat_penetap && touched.pejabat_penetap && (
                  <div className="invalid-feedback">
                    {errors.pejabat_penetap}
                  </div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CRow>
                  <CCol>
                    <CLabel>Masa Kerja Golongan</CLabel>
                    <CInput
                      type="number"
                      name="mk_tahun"
                      min="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mk_tahun}
                      placeholder="Tahun"
                      className={
                        errors.mk_tahun && touched.mk_tahun
                          ? "is-invalid"
                          : null
                      }
                    />
                    <CFormText>Tahun</CFormText>
                    {errors.mk_tahun && touched.mk_tahun && (
                      <div className="invalid-feedback">{errors.mk_tahun}</div>
                    )}
                  </CCol>
                  <CCol
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                    }}
                  >
                    <CInput
                      type="number"
                      name="mk_bulan"
                      min="0"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mk_bulan}
                      placeholder="Bulan"
                      className={
                        errors.mk_bulan && touched.mk_bulan
                          ? "is-invalid"
                          : null
                      }
                    />
                    <CFormText>Bulan</CFormText>
                    {errors.mk_bulan && touched.mk_bulan && (
                      <div className="invalid-feedback">{errors.mk_bulan}</div>
                    )}
                  </CCol>
                </CRow>
              </CFormGroup>
              <CFormGroup>
                <CLabel>Pangkat Terkini</CLabel>
                <InputCheckbox
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <CFormText>
                  Cek apabila merupakan pangkat Anda saat ini
                </CFormText>
                {errors.pejabat_penetap && touched.pejabat_penetap && (
                  <div className="invalid-feedback">
                    {errors.pejabat_penetap}
                  </div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel>File</CLabel>
                <CInput
                  type="file"
                  name="file"
                  onChange={(e) => {
                    setFieldValue("file", e.target.files[0]);
                    onSelectFile(e);
                  }}
                  onBlur={handleBlur}
                  className={errors.file && touched.file ? "is-invalid" : null}
                />
                <CFormText>{preview}</CFormText>
                {errors.file && touched.file && (
                  <div className="invalid-feedback">{errors.file}</div>
                )}
              </CFormGroup>
            </CModalBody>
            <CModalFooter>
              <CButton
                type="submit"
                color="primary"
                disabled={loadingSubmit ? true : false}
              >
                {loadingSubmit ? <LoadingSubmit /> : "Simpan"}
              </CButton>
              <CButton
                type="button"
                color="secondary"
                onClick={() =>
                  setModalEdit({ ...modalEdit, modal: false, id: "", data: "" })
                }
              >
                Batal
              </CButton>
            </CModalFooter>
          </CForm>
        )}
      </Formik>
    </CModal>
  );
};

export default ModalEdit;
