import React, { useCallback, useEffect, useState } from "react";
import {
  CFormGroup,
  CInput,
  CLabel,
  CCol,
  CSelect,
  CForm,
  CModalBody,
  CModalFooter,
  CButton,
  CFormText,
} from "@coreui/react";
import { useHistory } from "react-router";
import { getCutiById } from "src/context/actions/Cuti/getCutiById";
import { format } from "date-fns";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadAnimationWhite } from "src/assets";
import { editCuti } from "src/context/actions/Cuti/editCuti";

// Split lama cuti menjadi angka dan satuan yang terpisah
const splitLamaCuti = (val, type) => {
  let arrVal = val.split(" ");
  let angka = arrVal[0];
  let satuan = arrVal[1];

  if (type === "angka") {
    return angka;
  } else if (type === "satuan") {
    return satuan;
  }
};

const MySwal = withReactContent(swal2);

const EditCuti = ({ modalEdit, setModalEdit, id_pegawai }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [tglSelesaiCuti, setTglSelesaiCuti] = useState(
    data ? data.tgl_selesai : ""
  );
  const [data, setData] = useState("");
  const [inputVal, setInputVal] = useState({
    satuan: "",
    tgl_selesai: "",
    lama_cuti: "",
    keterangan: "",
  });

  useEffect(() => {
    // Get Cuti by ID
    if (modalEdit.id) {
      getCutiById(id_pegawai, modalEdit.id, setData);
    }

    return () => {
      setData(null);
    };
  }, [modalEdit]);

  useEffect(() => {
    if (data) {
      setInputVal({
        ...inputVal,
        satuan: splitLamaCuti(data.lama_cuti, "satuan"),
        tgl_selesai: data.tgl_selesai,
        tgl_mulai: data.tgl_mulai,
        lama_cuti: splitLamaCuti(data.lama_cuti, "angka"),
        keterangan: data.keterangan,
      });
    }
  }, [data]);

  // Inisialisasi State Formik
  const initState = {
    tgl_mulai: data ? data.tgl_mulai : "",
    tgl_selesai: data ? data.tgl_selesai : "",
    lama_cuti: data ? splitLamaCuti(data.lama_cuti, "angka") : "",
    satuan: data ? splitLamaCuti(data.lama_cuti, "satuan") : "",
    keterangan: data ? data.keterangan : "",
  };

  // Menghitung tgl selesai berdasarkan lama cuti
  const cariTanggalSelesai = useCallback(() => {
    // Get timestamp in miliseconds tgl mulai cuti
    let tsTglMulaiCuti = inputVal.tgl_mulai
      ? new Date(inputVal.tgl_mulai).getTime()
      : 0;
    let interval = null;

    let satuan = inputVal.satuan ? inputVal.satuan : "hari";

    // Mencari interval waktu
    if (satuan === "hari") {
      interval = inputVal.lama_cuti
        ? inputVal.lama_cuti * 24 * 60 * 60 * 1000 // dikalikan 1000 untuk mengubahnya ke dalam satuan miliseconds
        : 0;
    } else if (satuan === "minggu") {
      interval = inputVal.lama_cuti
        ? inputVal.lama_cuti * 7 * 24 * 60 * 60 * 1000
        : 0;
    } else if (satuan === "bulan") {
      interval = inputVal.lama_cuti
        ? inputVal.lama_cuti * 30 * 24 * 60 * 60 * 1000
        : 0;
    }
    // Get timestamp tgl selesai cuti
    let tsTglSelesaiCuti = tsTglMulaiCuti + interval;
    let tglSelesaiCuti = null;

    // Ubah ke dalam bentuk format date
    // Objek Date menerima argumen berupa miliseconds sehingga timestamp (seconds) perlu dikalikan 1000 untuk dikonversikan dalam satuan miliseconds
    tglSelesaiCuti = format(new Date(tsTglSelesaiCuti), "yyyy-MM-dd");
    // tglSelesaiCuti = new Date(tsTglSelesaiCuti);
    setTglSelesaiCuti(tglSelesaiCuti);
  }, [inputVal]);

  useEffect(() => {
    cariTanggalSelesai();
  }, [cariTanggalSelesai]);

  // Fungsi untuk menampilkan alert success edit data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModalEdit({
        ...modalEdit,
        modal: !modalEdit.modal,
        id: null,
      });
      history.push(`/epekerja/admin/cuti/riwayat/${id_pegawai}`);
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
    tgl_mulai: Yup.string().required("Tanggal mulai cuti harus diisi!"),
    // tgl_selesai: Yup.string().required("Tanggal selesai cuti harus diisi!"),
    lama_cuti: Yup.number()
      .integer("Lama cuti harus berupa bilangan")
      .typeError("Lama cuti harus berupa angka")
      .required("Lama cuti harus diisi!"),
    satuan: Yup.string().required("Satuan lama cuti harus diisi!"),
    keterangan: Yup.string().required("Keterangan/alasan cuti harus diisi!"),
  });

  // Menangani value dari form submit
  const handleFormSubmit = () => {
    inputVal.tgl_selesai = tglSelesaiCuti;

    console.log(inputVal);
    editCuti(
      id_pegawai,
      modalEdit.id,
      inputVal,
      setLoading,
      showAlertSuccess,
      showAlertError
    );
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
          setFieldValue,
        }) => (
          <CForm onSubmit={handleSubmit}>
            <CModalBody>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Tgl. Mulai</CLabel>
                </CCol>
                <CCol>
                  <CInput
                    type="date"
                    name="tgl_mulai"
                    id="tgl_mulai"
                    placeholder="Masukkan tgl mulai cuti"
                    // min={format(new Date(), "yyyy-MM-dd")}
                    onChange={(e) => {
                      setFieldValue("tgl_mulai", e.target.value);
                      setInputVal({
                        ...inputVal,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleBlur}
                    value={values.tgl_mulai}
                    className={
                      errors.tgl_mulai && touched.tgl_mulai
                        ? "is-invalid"
                        : null
                    }
                  />
                  {errors.tgl_mulai && touched.tgl_mulai && (
                    <div className="invalid-feedback">{errors.tgl_mulai}</div>
                  )}
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Lama Cuti</CLabel>
                </CCol>
                <CCol>
                  <CInput
                    type="number"
                    name="lama_cuti"
                    id="lama_cuti"
                    min={1}
                    placeholder="Masukkan lama cuti"
                    disabled={!values.tgl_mulai ? true : false}
                    onChange={(e) => {
                      setFieldValue("lama_cuti", e.target.value);
                      setInputVal({
                        ...inputVal,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleBlur}
                    value={values.lama_cuti}
                    className={
                      errors.lama_cuti && touched.lama_cuti
                        ? "is-invalid"
                        : null
                    }
                  />
                  {errors.lama_cuti && touched.lama_cuti && (
                    <div className="invalid-feedback">{errors.lama_cuti}</div>
                  )}
                </CCol>
                <CCol>
                  <CSelect
                    custom
                    name="satuan"
                    id="satuan"
                    onChange={(e) => {
                      setFieldValue("satuan", e.target.value);
                      setInputVal({
                        ...inputVal,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleBlur}
                    value={values.satuan}
                    className={
                      errors.satuan && touched.satuan ? "is-invalid" : null
                    }
                    disabled={!values.tgl_mulai ? true : false}
                  >
                    <option value="">-- Pilih Satuan --</option>
                    <option value="hari">Hari</option>
                    <option value="minggu">Minggu</option>
                    <option value="bulan">Bulan</option>
                  </CSelect>
                  {errors.satuan && touched.satuan && (
                    <div className="invalid-feedback">{errors.satuan}</div>
                  )}
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Tgl. Selesai</CLabel>
                </CCol>
                <CCol>
                  <CInput
                    readOnly
                    type="date"
                    name="tgl_selesai"
                    id="tgl_selesai"
                    placeholder="Masukkan tgl selesai cuti"
                    onChange={(e) => {
                      setFieldValue("tgl_selesai", e.target.value);
                      setInputVal({
                        ...inputVal,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={handleBlur}
                    value={tglSelesaiCuti}
                  />
                  <CFormText>
                    <b>Format: </b> Bulan / Tanggal / Tahun
                  </CFormText>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Keterangan</CLabel>
                </CCol>
                <CCol>
                  <CInput
                    type="text"
                    name="keterangan"
                    id="keterangan"
                    placeholder="Masukkan keterangan / alasan cuti"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.keterangan}
                    disabled={!values.tgl_mulai ? true : false}
                    onChange={(e) => {
                      setFieldValue("keterangan", e.target.value);
                      setInputVal({
                        ...inputVal,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    className={
                      errors.keterangan && touched.keterangan
                        ? "is-invalid"
                        : null
                    }
                  />
                  {errors.keterangan && touched.keterangan && (
                    <div className="invalid-feedback">{errors.keterangan}</div>
                  )}
                </CCol>
              </CFormGroup>
            </CModalBody>
            <CModalFooter>
              <CButton
                type="submit"
                color="primary"
                // onClick={() => handleFormSubmit(values)}
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
              </CButton>{" "}
              <CButton
                type="button"
                color="secondary"
                onClick={() =>
                  setModalEdit({
                    ...modalEdit,
                    modal: !modalEdit.modal,
                    id: null,
                  })
                }
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

export default EditCuti;
