import React, { useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadAnimationWhite } from "src/assets";

import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CCardFooter,
  CButton,
  CForm,
  CSelect,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import { getSelectBidang } from "src/context/actions/MasterData/Bidang/getSelectBidang";
import { getSubBidangById } from "src/context/actions/MasterData/SubBidang/getSubBidangById";
import { editSubBidang } from "src/context/actions/MasterData/SubBidang/editSubBidang";

const MySwal = withReactContent(swal2);

const EditSubBidang = ({ match }) => {
  const history = useHistory();
  const params = match.params;
  const [loading, setLoading] = useState(false);
  const [bidang, setBidang] = useState([]);
  const [subBidang, setSubBidang] = useState(null);

  useEffect(() => {
    // Get all bidang
    getSelectBidang(setBidang);
    // Get sub bidang by id
    getSubBidangById(params.id, setSubBidang);
  }, [params]);

  // Kembali ke menu agama
  const goBackToParent = () => {
    history.goBack();
  };

  // Inisialisasi state formik
  const initState = {
    id_bidang: subBidang ? subBidang.id_bidang : "",
    nama_sub_bidang: subBidang ? subBidang.nama_sub_bidang : "",
    keterangan: subBidang ? subBidang.keterangan : "",
  };

  // Fungsi untuk menampilkan alert success edit data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/master-data/sub-bidang");
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
  const validationSchema = Yup.object().shape({
    id_bidang: Yup.string().required("Bidang harus dipilih!"),
    nama_sub_bidang: Yup.string().required("Sub Bidang harus diisi!"),
    keterangan: Yup.string().required("Keterangan harus diisi!"),
  });

  // Menangani value form submit
  const handleFormSubmit = (values) => {
    // Memanggil method editSubBidang untuk mengubah data SubBidang
    editSubBidang(
      params.id,
      values,
      setLoading,
      showAlertSuccess,
      showAlertError
    );
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Ubah Sub Bidang</h3>
        </CCardHeader>
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
          }) => (
            <CForm onSubmit={handleSubmit}>
              <CCardBody>
                <CRow>
                  <CCol xs="12" md="6">
                    <CFormGroup>
                      <CLabel>Bidang</CLabel>
                      <CSelect
                        custom
                        name="id_bidang"
                        id="id_bidang"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.id_bidang}
                        className={
                          errors.id_bidang && touched.id_bidang
                            ? "is-invalid"
                            : null
                        }
                      >
                        <option value="">-- Pilih Bidang --</option>
                        {bidang.length > 0 &&
                          bidang.map((item, index) => (
                            <option key={index} value={item.id_bidang}>
                              {item.nama_bidang}
                            </option>
                          ))}
                      </CSelect>
                      {errors.id_bidang && touched.id_bidang && (
                        <div className="invalid-feedback">
                          {errors.id_bidang}
                        </div>
                      )}
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="name">Sub Bidang</CLabel>
                      <CInput
                        id="nama_sub_bidang"
                        name="nama_sub_bidang"
                        placeholder="Masukkan sub bidang"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nama_sub_bidang}
                        className={
                          errors.nama_sub_bidang && touched.nama_sub_bidang
                            ? "is-invalid"
                            : null
                        }
                      />
                      {errors.nama_sub_bidang && touched.nama_sub_bidang && (
                        <div className="invalid-feedback">
                          {errors.nama_sub_bidang}
                        </div>
                      )}
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="name">Keterangan</CLabel>
                      <CInput
                        id="keterangan"
                        name="keterangan"
                        placeholder="Masukkan keterangan"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.keterangan}
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
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CCardBody>
              <CCardFooter>
                <CButton
                  type="submit"
                  color="primary"
                  className="mr-1"
                  disabled={loading ? true : false}
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
                <CButton type="button" color="danger" onClick={goBackToParent}>
                  Kembali
                </CButton>
              </CCardFooter>
            </CForm>
          )}
        </Formik>
      </CCard>
    </>
  );
};

export default EditSubBidang;
