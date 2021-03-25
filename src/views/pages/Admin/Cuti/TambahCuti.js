import React, { useCallback, useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadAnimationBlue, LoadAnimationWhite } from "src/assets";

import {
  CFormGroup,
  CInput,
  CLabel,
  CCol,
  CSelect,
  CModalBody,
  CForm,
  CModalFooter,
  CButton,
} from "@coreui/react";
import { useHistory } from "react-router";
import { format } from "date-fns";

const MySwal = withReactContent(swal2);

const TambahCuti = ({ modalTambah, setModalTambah, id_pegawai }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [tglSelesaiCuti, setTglSelesaiCuti] = useState("");
  const [lamaCuti, setLamaCuti] = useState("");
  const [inputVal, setInputVal] = useState({});

  // Inisialisasi State Formik
  const initState = {
    tgl_mulai: "",
    tgl_selesai: "",
    lama_cuti: "",
    satuan: "hari",
    keterangan: "",
  };

  // Menghitung tgl selesai berdasarkan lama cuti
  const cariTanggalSelesai = useCallback(() => {
    // Get timestamp tgl mulai cuti
    let tsTglMulaiCuti = inputVal.tgl_mulai
      ? new Date(inputVal.tgl_mulai).getTime()
      : 0;
    let interval = null;

    let satuan = inputVal.satuan ? inputVal.satuan : "hari";

    // Mencari interval waktu
    if (satuan === "hari") {
      interval = inputVal.lama_cuti ? inputVal.lama_cuti * 24 * 60 * 60 : 0;
    } else if (satuan === "minggu") {
      interval = inputVal.lama_cuti ? inputVal.lama_cuti * 7 * 24 * 60 * 60 : 0;
    } else if (satuan === "bulan") {
      interval = inputVal.lama_cuti
        ? inputVal.lama_cuti * 30 * 24 * 60 * 60
        : 0;
    }
    // Get timestamp tgl selesai cuti
    let tsTglSelesaiCuti = tsTglMulaiCuti + interval;
    let tglSelesaiCuti = null;

    // Ubah ke dalam bentuk format date
    tglSelesaiCuti = format(new Date(tsTglSelesaiCuti), "y-MM-dd");
    // tglSelesaiCuti = new Date(tsTglSelesaiCuti);

    console.log(new Date(tsTglSelesaiCuti));
    // setTglSelesaiCuti(inputVal.satuan);
  }, [inputVal]);

  useEffect(() => {
    cariTanggalSelesai();
  }, [cariTanggalSelesai]);

  const cariTanggalSelesai2 = (values) => {
    // Get timestamp tgl mulai cuti
    // let tsTglMulaiCuti = new Date(tglMulaiCuti).getTime();
    // let interval = null;

    // // Mencari interval waktu
    // if (satuan === "hari") {
    //   interval = lamaCuti * 24 * 60 * 60;
    // } else if (satuan === "minggu") {
    //   interval = lamaCuti * 7 * 24 * 60 * 60;
    // } else if (satuan === "bulan") {
    //   interval = lamaCuti * 30 * 24 * 60 * 60;
    // }

    // // Get timestamp tgl selesai cuti
    // let tsTglSelesaiCuti = tsTglMulaiCuti + interval;

    // // Ubah ke dalam bentuk format date
    // let tglSelesaiCuti = format(new Date(tsTglSelesaiCuti), "y-MM-dd");

    setTglSelesaiCuti(inputVal.lama_cuti);
    // console.log(inputVal);
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Tambah Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModalTambah(!modalTambah);
      history.push(`/epekerja/admin/cuti/riwayat/${id_pegawai}`);
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
  const handleFormSubmit = (values) => {
    console.log(inputVal);

    // const formData = new FormData();
    // formData.append("tgl_mulai", values.tgl_mulai);
    // formData.append("lama_cuti", values.lama_cuti);
    // formData.append("satuan", values.satuan);
    // formData.append("tgl_selesai", values.tgl_selesai);
    // formData.append("keterangan", values.keterangan);

    // for (var pair of formData.entries()) {
    //   console.log(pair);
    // }

    // Memanggil method Insert Cuti untuk menambah data Cuti ke database
  };

  return (
    <>
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
                    type="number"
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
                onClick={() => setModalTambah(!modalTambah)}
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

export default TambahCuti;
