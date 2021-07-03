import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CButton,
  CLabel,
  CInput,
  CFormGroup,
  CForm,
  CSelect,
} from "@coreui/react";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { getSelectGolongan } from "src/context/actions/MasterData/PangkatGolongan/getSelectGolongan";
import LoadingSubmit from "src/reusable/LoadingSubmit";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { insertKenaikanPangkat } from "src/context/actions/KenaikanPangkat/insertKenaikanPangkat";

const MySwal = withReactContent(swal2);

const ModalKenaikanPangkat = ({ modal, setModal, dispatch }) => {
  const [loading, setLoading] = useState(false);
  const [pangkat, setPangkat] = useState([]);

  // Get All Pangkat Golongan
  useEffect(() => {
    if (modal.modal) {
      getSelectGolongan(setPangkat);
    }
  }, [modal]);

  // Inisialisasi state formik
  const initState = {
    pangkat_baru: "",
    tmt_kenaikan_pangkat: "",
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Tambah Kenaikan Pangkat Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      // history.push("/epekerja/admin/kenaikan-pangkat");
      setModal({ ...modal, modal: false });
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
      title: "Tambah Kenaikan Pangkat Gagal",
      text: err_message,
    }).then((result) => {
      setLoading(false);
    });
  };

  // Setting validasi form menggunakan YUP & FORMIK
  const validationSchema = Yup.object().shape({
    pangkat_baru: Yup.string().required("Pangkat golongan harus diisi"),
    tmt_kenaikan_pangkat: Yup.string().required(
      "TMT. Kenaikan pangkat harus diisi"
    ),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    const arrPangkatBaru = values.pangkat_baru.split("-");
    const idPangkatBaru = arrPangkatBaru[0];
    const strPangkatBaru = arrPangkatBaru[1];

    formData.append("id_golongan", idPangkatBaru);
    formData.append("pangkat_baru", strPangkatBaru);
    formData.append("tmt_kenaikan_pangkat", values.tmt_kenaikan_pangkat);

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // Tambah data kenaikan pangkat
    insertKenaikanPangkat(
      modal.id,
      formData,
      setLoading,
      showAlertSuccess,
      showAlertError,
      dispatch
    );
  };

  return (
    <CModal
      show={modal.modal}
      onClose={() => setModal({ ...modal, modal: false, id: null })}
    >
      <CModalHeader closeButton>
        <div>
          <h4>Nova Dwi Sapta</h4>
          <h5 className="font-weight-normal">199727</h5>
        </div>
      </CModalHeader>
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
        }) => (
          <CForm onSubmit={handleSubmit}>
            <CModalBody>
              <CFormGroup>
                <CLabel>Pangkat / Golongan Baru</CLabel>
                <CSelect
                  name="pangkat_baru"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.pangkat_baru && touched.pangkat_baru
                      ? "is-invalid"
                      : null
                  }
                >
                  <option value={values.pangkat_baru}>
                    -- Pilih Pangkat --
                  </option>
                  {pangkat.map((item, index) => (
                    <option
                      key={index}
                      value={`${item.id_pangkat_golongan}-${item.keterangan} (${item.golongan})`}
                    >
                      {item.keterangan} ({item.golongan})
                    </option>
                  ))}
                </CSelect>
                {errors.pangkat_baru && touched.pangkat_baru && (
                  <div className="invalid-feedback">{errors.pangkat_baru}</div>
                )}
              </CFormGroup>
              <CFormGroup>
                <CLabel>TMT. Kenaikan Pangkat</CLabel>
                <CInput
                  type="date"
                  name="tmt_kenaikan_pangkat"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
            </CModalBody>
            <CModalFooter>
              <CButton
                type="submit"
                color="primary"
                disabled={loading ? true : false}
              >
                {loading ? <LoadingSubmit /> : "Simpan"}
              </CButton>
              <CButton
                color="secondary"
                onClick={() => setModal({ ...modal, modal: false, id: null })}
              >
                Close
              </CButton>
            </CModalFooter>
          </CForm>
        )}
      </Formik>
    </CModal>
  );
};

export default ModalKenaikanPangkat;
