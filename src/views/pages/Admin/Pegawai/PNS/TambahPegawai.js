import React, { useCallback, useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadAnimationWhite } from "src/assets";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CRow,
  CForm,
  CLabel,
  CFormGroup,
  CInput,
  CButton,
  CSelect,
  CTextarea,
  CInputRadio,
  CInputFile,
  CFormText,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import { getSelectSubBidang } from "src/context/actions/MasterData/SubBidang/getSelectSubBidang";
import { getSelectJabatan } from "src/context/actions/MasterData/Jabatan/getSelectJabatan";
import { getSelectGolongan } from "src/context/actions/MasterData/PangkatGolongan/getSelectGolongan";
import { getSelectAgama } from "src/context/actions/MasterData/Agama/getSelectAgama";
import { getSelectEselon } from "src/context/actions/MasterData/PangkatEselon/getSelectEselon";
import { insertPNS } from "src/context/actions/Pegawai/PNS/insertPNS";

const MySwal = withReactContent(swal2);

const TambahPegawai = () => {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFile2, setSelectedFile2] = useState();
  const [preview, setPreview] = useState();
  const [preview2, setPreview2] = useState();
  const [loading, setLoading] = useState(false);
  const [jabatan, setJabatan] = useState([]);
  const [subBidang, setSubBidang] = useState([]);
  const [golongan, setGolongan] = useState([]);
  const [eselon, setEselon] = useState([]);
  const [agama, setAgama] = useState([]);
  const [formatGaji, setFormatGaji] = useState("");

  useEffect(() => {
    // Get Sub Bidang
    getSelectSubBidang(setSubBidang);
    // Get Jabatan
    getSelectJabatan(setJabatan);
    // Get Golongan
    getSelectGolongan(setGolongan);
    // Get Golongan
    getSelectEselon(setEselon);
    // Get Agama
    getSelectAgama(setAgama);
  }, []);

  // Menangani preview input gambar setelah dipilih
  const handleSelectedFile = useCallback(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // Free memory when ever this component is unmounted
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedFile]);

  // Menangani preview input ijazah setelah dipilih
  const handleSelectedFile2 = useCallback(() => {
    if (!selectedFile2) {
      setPreview2(null);
      return;
    }

    const filename = selectedFile2.name;
    setPreview2(filename);
  }, [selectedFile2]);

  useEffect(() => {
    handleSelectedFile();
    handleSelectedFile2();
  }, [handleSelectedFile, handleSelectedFile2]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const onSelectFile2 = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile2(undefined);
      return;
    }

    setSelectedFile2(e.target.files[0]);
  };

  // Mengubah format gaji dari number ke currency
  const convertToCurrency = (gaji) => {
    let formattedGaji = parseInt(gaji).toLocaleString("id", {
      style: "currency",
      currency: "IDR",
    });
    if (formattedGaji !== "RpNaN") {
      setFormatGaji(formattedGaji);
    } else {
      setFormatGaji("");
    }
  };

  const goBackToParent = () => {
    history.goBack();
  };

  // Inisialisasi State Formik
  const initState = {
    nip: "",
    nama: "",
    id_jabatan: "",
    id_sub_bidang: "",
    id_golongan: "",
    id_eselon: "",
    id_agama: "",
    tempat_lahir: "",
    tgl_lahir: "",
    alamat: "",
    jenis_kelamin: "",
    karpeg: "",
    bpjs: "",
    npwp: "",
    tmt_golongan: "",
    tmt_cpns: "",
    tmt_jabatan: "",
    no_hp: "",
    gaji_pokok: "",
    foto: undefined,
    mk_jabatan: "",
    mk_sebelum_cpns: "",
    mk_golongan: "",
    mk_seluruhnya: "",
    nama_akademi: "",
    jurusan: "",
    tahun_lulus: "",
    jenjang: "",
    no_ijazah: "",
    foto_ijazah: undefined,
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Tambah Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      history.push("/epekerja/admin/pegawai");
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
  const FOTO_PEGAWAI_SIZE = 2048000; // Bytes => 2 mb x 1000 kb x 1000 bytes
  const FOTO_PEGAWAI_SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
  ];
  const FILE_IJAZAH_SIZE = 2048000; // Bytes => 2 mb x 1000 kb x 1000 bytes
  const FILE_IJAZAH_SUPPORTED_FORMATS = [
    "application/pdf",
    "image/jpg",
    "image/jpeg",
    "image/png",
  ];

  const validationSchema = Yup.object().shape({
    nip: Yup.string().required("NIP Harus diisi!"),
    nama: Yup.string().required("Nama harus diisi!"),
    id_jabatan: Yup.string().required("Jabatan harus diisi!"),
    id_sub_bidang: Yup.string().required("Sub Bidang harus diisi!"),
    id_golongan: Yup.string().required("Golongan harus diisi!"),
    // id_eselon: Yup.string().required("Eselon harus diisi!"),
    id_agama: Yup.string().required("Agama harus diisi!"),
    tempat_lahir: Yup.string().required("Tempat lahir harus diisi!"),
    tgl_lahir: Yup.string().required("Tanggal lahir harus diisi!"),
    alamat: Yup.string().required("Alamat harus diisi!"),
    jenis_kelamin: Yup.string().required("Jenis kelamin harus diisi!"),
    karpeg: Yup.string().required("Karpeg harus diisi!"),
    bpjs: Yup.string().required("BPJS harus diisi!"),
    npwp: Yup.string().required("NPWP harus diisi!"),
    tmt_golongan: Yup.string().required("TMT. Golongan harus diisi!"),
    tmt_cpns: Yup.string().required("TMT. CPNS harus diisi!"),
    tmt_jabatan: Yup.string().required("TMT. Jabatan harus diisi!"),
    no_hp: Yup.string().required("No. HP harus diisi!"),
    gaji_pokok: Yup.number()
      .typeError("Gaji pokok harus berupa bilangan")
      .integer("Gaji pokok harus berupa bilangan")
      .required("Gaji pokok harus diisi!"),
    foto: Yup.mixed()
      .required("Foto belum dipilih")
      .test(
        "size",
        "Kapasitas file maksimal 2 mb",
        (value) => value && value.size <= FOTO_PEGAWAI_SIZE
      )
      .test(
        "type",
        "Ekstensi yang diperbolehkan hanya jpg, jpeg, dan png",
        (value) => value && FOTO_PEGAWAI_SUPPORTED_FORMATS.includes(value.type)
      ),
    mk_jabatan: Yup.string().required("Masa kerja jabatan harus diisi!"),
    mk_sebelum_cpns: Yup.string().required(
      "Masa kerja sebelum CPNS harus diisi!"
    ),
    mk_golongan: Yup.string().required("Masa kerja golongan harus diisi!"),
    mk_seluruhnya: Yup.string().required("Masa kerja seluruhnya harus diisi!"),
    nama_akademi: Yup.string().required("Nama akademi harus diisi!"),
    jurusan: Yup.string().required("Jurusan harus diisi!"),
    tahun_lulus: Yup.string().required("Tahun lulus harus diisi!"),
    jenjang: Yup.string().required("Jenjang harus diisi!"),
    no_ijazah: Yup.string().required("No. ijazah harus diisi!"),
    foto_ijazah: Yup.mixed()
      .required("Ijazah belum dipilih")
      .test(
        "size",
        "Kapasitas file maksimal 2 mb",
        (value) => value && value.size <= FILE_IJAZAH_SIZE
      )
      .test(
        "type",
        "Ekstensi yang diperbolehkan hanya jpg, jpeg, png, dan pdf",
        (value) => value && FILE_IJAZAH_SUPPORTED_FORMATS.includes(value.type)
      ),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("nip", values.nip);
    formData.append("nama", values.nama);
    formData.append("id_jabatan", values.id_jabatan);
    formData.append("id_sub_bidang", values.id_sub_bidang);
    formData.append("id_golongan", values.id_golongan);
    formData.append("id_eselon", values.id_eselon);
    formData.append("id_agama", values.id_agama);
    formData.append("tempat_lahir", values.tempat_lahir);
    formData.append("tgl_lahir", values.tgl_lahir);
    formData.append("alamat", values.alamat);
    formData.append("jenis_kelamin", values.jenis_kelamin);
    formData.append("karpeg", values.karpeg);
    formData.append("bpjs", values.bpjs);
    formData.append("npwp", values.npwp);
    formData.append("tmt_golongan", values.tmt_golongan);
    formData.append("tmt_cpns", values.tmt_cpns);
    formData.append("tmt_jabatan", values.tmt_jabatan);
    formData.append("no_hp", values.no_hp);
    formData.append("gaji_pokok", values.gaji_pokok);
    formData.append("foto", values.foto);
    formData.append("mk_jabatan", values.mk_jabatan);
    formData.append("mk_sebelum_cpns", values.mk_sebelum_cpns);
    formData.append("mk_golongan", values.mk_golongan);
    formData.append("mk_seluruhnya", values.mk_seluruhnya);
    formData.append("nama_akademi", values.nama_akademi);
    formData.append("jurusan", values.jurusan);
    formData.append("tahun_lulus", values.tahun_lulus);
    formData.append("jenjang", values.jenjang);
    formData.append("no_ijazah", values.no_ijazah);
    formData.append("foto_ijazah", values.foto_ijazah);

    // for (var pair of formData.entries()) {
    //   console.log(pair);
    // }

    // Memanggil method Insert PNS untuk menambah data PNS ke database
    insertPNS(formData, setLoading, showAlertSuccess, showAlertError);
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Tambah Pegawai</h3>
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
            <CForm onSubmit={handleSubmit} className="form-horizontal">
              <CCardBody>
                <CRow>
                  <CCol md="6" sm="12">
                    <h4 style={{ fontWeight: "normal" }}>Data Pegawai</h4>
                    <hr />
                    <CFormGroup row>
                      <CCol>
                        <CLabel>NIP</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="text"
                          name="nip"
                          id="nip"
                          placeholder="Masukkan NIP"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.nip}
                          className={
                            errors.nip && touched.nip ? "is-invalid" : null
                          }
                        />
                        {errors.nip && touched.nip && (
                          <div className="invalid-feedback">{errors.nip}</div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>Nama</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="text"
                          name="nama"
                          id="nama"
                          placeholder="Masukkan nama"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.nama}
                          className={
                            errors.nama && touched.nama ? "is-invalid" : null
                          }
                        />
                        {errors.nama && touched.nama && (
                          <div className="invalid-feedback">{errors.nama}</div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>Jabatan</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CSelect
                          custom
                          name="id_jabatan"
                          id="id_jabatan"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.id_jabatan}
                          className={
                            errors.id_jabatan && touched.id_jabatan
                              ? "is-invalid"
                              : null
                          }
                        >
                          <option value="">-- Pilih Jabatan --</option>
                          {jabatan.map((item, index) => (
                            <option key={index} value={item.id_jabatan}>
                              {item.nama_jabatan}
                            </option>
                          ))}
                        </CSelect>
                        {errors.id_jabatan && touched.id_jabatan && (
                          <div className="invalid-feedback">
                            {errors.id_jabatan}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>Sub Bidang</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CSelect
                          custom
                          name="id_sub_bidang"
                          id="id_sub_bidang"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.id_sub_bidang}
                          className={
                            errors.id_sub_bidang && touched.id_sub_bidang
                              ? "is-invalid"
                              : null
                          }
                        >
                          <option value="">-- Pilih Sub Bidang --</option>
                          {subBidang.map((item, index) => (
                            <option key={index} value={item.id_sub_bidang}>
                              {item.nama_sub_bidang}
                            </option>
                          ))}
                        </CSelect>
                        {errors.id_sub_bidang && touched.id_sub_bidang && (
                          <div className="invalid-feedback">
                            {errors.id_sub_bidang}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>Golongan</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CSelect
                          custom
                          name="id_golongan"
                          id="id_golongan"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.id_golongan}
                          className={
                            errors.id_golongan && touched.id_golongan
                              ? "is-invalid"
                              : null
                          }
                        >
                          <option value="">-- Pilih Golongan --</option>
                          {golongan.map((item, index) => (
                            <option
                              key={index}
                              value={item.id_pangkat_golongan}
                            >
                              {item.keterangan} ({item.golongan})
                            </option>
                          ))}
                        </CSelect>
                        {errors.id_golongan && touched.id_golongan && (
                          <div className="invalid-feedback">
                            {errors.id_golongan}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>Eselon</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CSelect
                          custom
                          name="id_eselon"
                          id="id_eselon"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.id_eselon}
                          className={
                            errors.id_eselon && touched.id_eselon
                              ? "is-invalid"
                              : null
                          }
                        >
                          <option value="">-- Pilih Eselon --</option>
                          {eselon.map((item, index) => (
                            <option key={index} value={item.id_pangkat_eselon}>
                              {item.keterangan} ({item.eselon})
                            </option>
                          ))}
                        </CSelect>
                        {errors.id_eselon && touched.id_eselon && (
                          <div className="invalid-feedback">
                            {errors.id_eselon}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    {/* <CFormGroup row>
                  <CCol>
                    <CLabel>Status Pegawai</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CSelect custom name="status_pegawai" id="status_pegawai">
                      <option value="0">-- Pilih Status Pegawai --</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup> */}
                    <CFormGroup row>
                      <CCol>
                        <CLabel>Agama</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CSelect
                          custom
                          name="id_agama"
                          id="id_agama"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.id_agama}
                          className={
                            errors.id_agama && touched.id_agama
                              ? "is-invalid"
                              : null
                          }
                        >
                          <option value="">-- Pilih Agama --</option>
                          {agama.map((item, index) => (
                            <option key={index} value={item.id_agama}>
                              {item.agama}
                            </option>
                          ))}
                        </CSelect>
                        {errors.id_agama && touched.id_agama && (
                          <div className="invalid-feedback">
                            {errors.id_agama}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>Tempat Lahir</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="text"
                          id="tempat_lahir"
                          name="tempat_lahir"
                          placeholder="Masukkan tempat lahir"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tempat_lahir}
                          className={
                            errors.tempat_lahir && touched.tempat_lahir
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.tempat_lahir && touched.tempat_lahir && (
                          <div className="invalid-feedback">
                            {errors.tempat_lahir}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>Tgl Lahir</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="date"
                          id="tgl_lahir"
                          name="tgl_lahir"
                          placeholder="Masukkan tanggal lahir"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tgl_lahir}
                          className={
                            errors.tgl_lahir && touched.tgl_lahir
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.tgl_lahir && touched.tgl_lahir && (
                          <div className="invalid-feedback">
                            {errors.tgl_lahir}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel htmlFor="alamat">Alamat</CLabel>
                      </CCol>
                      <CCol sm="12" md="9">
                        <CTextarea
                          name="alamat"
                          id="alamat"
                          rows="5"
                          placeholder="Masukkan alamat"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.alamat}
                          className={
                            errors.alamat && touched.alamat
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.alamat && touched.alamat && (
                          <div className="invalid-feedback">
                            {errors.alamat}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>Jenis Kelamin</CLabel>
                      </CCol>
                      <CCol sm="12" md="9">
                        <CFormGroup variant="custom-radio" inline>
                          <CInputRadio
                            custom
                            id="jenis_kelamin"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="jenis_kelamin"
                            value="Laki - Laki"
                            required
                          />
                          <CLabel
                            variant="custom-checkbox"
                            htmlFor="jenis_kelamin"
                          >
                            Laki - Laki
                          </CLabel>
                        </CFormGroup>
                        <CFormGroup variant="custom-radio" inline>
                          <CInputRadio
                            custom
                            id="jenis_kelamin2"
                            name="jenis_kelamin"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value="Perempuan"
                            required
                          />
                          <CLabel
                            variant="custom-checkbox"
                            htmlFor="jenis_kelamin2"
                          >
                            Perempuan
                          </CLabel>
                        </CFormGroup>
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol>
                        <CLabel>Karpeg</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="text"
                          name="karpeg"
                          id="karpeg"
                          placeholder="Masukkan karpeg"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.karpeg}
                          className={
                            errors.karpeg && touched.karpeg
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.karpeg && touched.karpeg && (
                          <div className="invalid-feedback">
                            {errors.karpeg}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>BPJS</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="text"
                          name="bpjs"
                          id="bpjs"
                          placeholder="Masukkan bpjs"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.bpjs}
                          className={
                            errors.bpjs && touched.bpjs ? "is-invalid" : null
                          }
                        />
                        {errors.bpjs && touched.bpjs && (
                          <div className="invalid-feedback">{errors.bpjs}</div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>NPWP</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="text"
                          name="npwp"
                          id="npwp"
                          placeholder="Masukkan npwp"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.npwp}
                          className={
                            errors.npwp && touched.npwp ? "is-invalid" : null
                          }
                        />
                        {errors.npwp && touched.npwp && (
                          <div className="invalid-feedback">{errors.npwp}</div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>TMT. Golongan</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="date"
                          name="tmt_golongan"
                          id="tmt_golongan"
                          placeholder="Masukkan tmt golongan"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tmt_golongan}
                          className={
                            errors.tmt_golongan && touched.tmt_golongan
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.tmt_golongan && touched.tmt_golongan && (
                          <div className="invalid-feedback">
                            {errors.tmt_golongan}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>TMT. CPNS</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="date"
                          name="tmt_cpns"
                          id="tmt_cpns"
                          placeholder="Masukkan tmt cpns"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tmt_cpns}
                          className={
                            errors.tmt_cpns && touched.tmt_cpns
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.tmt_cpns && touched.tmt_cpns && (
                          <div className="invalid-feedback">
                            {errors.tmt_cpns}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="6">
                    <CFormGroup row>
                      <CCol>
                        <CLabel>TMT. Jabatan</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="date"
                          name="tmt_jabatan"
                          id="tmt_jabatan"
                          placeholder="Masukkan tmt jabatan"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tmt_jabatan}
                          className={
                            errors.tmt_jabatan && touched.tmt_jabatan
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.tmt_jabatan && touched.tmt_jabatan && (
                          <div className="invalid-feedback">
                            {errors.tmt_jabatan}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>No. HP</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="text"
                          name="no_hp"
                          id="no_hp"
                          placeholder="Masukkan no. hp"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.no_hp}
                          className={
                            errors.no_hp && touched.no_hp ? "is-invalid" : null
                          }
                        />
                        {errors.no_hp && touched.no_hp && (
                          <div className="invalid-feedback">{errors.no_hp}</div>
                        )}
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol>
                        <CLabel>Gaji Pokok</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="text"
                          name="gaji_pokok"
                          id="gaji_pokok"
                          placeholder="Masukkan gaji pokok"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onKeyUp={(e) => convertToCurrency(e.target.value)}
                          value={values.gaji_pokok}
                          className={
                            errors.gaji_pokok && touched.gaji_pokok
                              ? "is-invalid"
                              : null
                          }
                        />
                        <div className="mt-1">{formatGaji}</div>
                        {errors.gaji_pokok && touched.gaji_pokok && (
                          <div className="invalid-feedback">
                            {errors.gaji_pokok}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CLabel col>Foto</CLabel>
                      <CCol xs="12" md="9">
                        <CInputFile
                          custom
                          name="foto"
                          id="custom-file-input"
                          onChange={(e) => {
                            onSelectFile(e);
                            setFieldValue("foto", e.target.files[0]);
                          }}
                          onBlur={handleBlur}
                          className={
                            errors.foto && touched.foto ? "is-invalid" : null
                          }
                        />
                        {errors.foto && touched.foto && (
                          <div className="invalid-feedback">{errors.foto}</div>
                        )}
                        <CLabel
                          style={{ width: "353px", left: 15 }}
                          htmlFor="custom-file-input"
                          variant="custom-file"
                        >
                          Pilih Foto
                        </CLabel>
                        {preview && (
                          <img
                            src={preview}
                            alt={preview}
                            className="img-thumbnail mt-2 mb-1"
                            width={200}
                          />
                        )}
                        <CFormText className="help-block">
                          Foto harus bertipe jpg, jpeg, atau png dengan ukuran
                          kurang dari 2 MB
                        </CFormText>
                      </CCol>
                    </CFormGroup>
                    <h4 style={{ fontWeight: "normal" }}>Masa Kerja Pegawai</h4>
                    <hr />
                    <CFormGroup row>
                      <CCol>
                        <CLabel>MK Jabatan</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="text"
                          name="mk_jabatan"
                          id="mk_jabatan"
                          placeholder="Masukkan masa kerja jabatan"
                          value={values.mk_jabatan}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.mk_jabatan && touched.mk_jabatan
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.mk_jabatan && touched.mk_jabatan && (
                          <div className="invalid-feedback">
                            {errors.mk_jabatan}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>MK Sebelum CPNS</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="text"
                          name="mk_sebelum_cpns"
                          id="mk_sebelum_cpns"
                          placeholder="Masukkan masa kerja sebelum cpns"
                          value={values.mk_sebelum_cpns}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.mk_sebelum_cpns && touched.mk_sebelum_cpns
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.mk_sebelum_cpns && touched.mk_sebelum_cpns && (
                          <div className="invalid-feedback">
                            {errors.mk_sebelum_cpns}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>MK Golongan</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="text"
                          name="mk_golongan"
                          id="mk_golongan"
                          placeholder="Masukkan masa kerja golongan"
                          value={values.mk_golongan}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.mk_golongan && touched.mk_golongan
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.mk_golongan && touched.mk_golongan && (
                          <div className="invalid-feedback">
                            {errors.mk_golongan}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>MK Seluruhnya</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="text"
                          name="mk_seluruhnya"
                          id="mk_seluruhnya"
                          placeholder="Masukkan masa kerja seluruhnya"
                          value={values.mk_seluruhnya}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.mk_seluruhnya && touched.mk_seluruhnya
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.mk_seluruhnya && touched.mk_seluruhnya && (
                          <div className="invalid-feedback">
                            {errors.mk_seluruhnya}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <h4 style={{ fontWeight: "normal" }}>
                      Data Pendidikan Terakhir
                    </h4>
                    <hr />
                    <CFormGroup row>
                      <CCol>
                        <CLabel>Nama Akademi</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="text"
                          name="nama_akademi"
                          id="nama_akademi"
                          placeholder="Masukkan nama akademi"
                          value={values.nama_akademi}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.nama_akademi && touched.nama_akademi
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.nama_akademi && touched.nama_akademi && (
                          <div className="invalid-feedback">
                            {errors.nama_akademi}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>Jurusan</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="text"
                          name="jurusan"
                          id="jurusan"
                          placeholder="Masukkan jurusan"
                          value={values.jurusan}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.jurusan && touched.jurusan
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.jurusan && touched.jurusan && (
                          <div className="invalid-feedback">
                            {errors.jurusan}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>Tahun Lulus</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="text"
                          name="tahun_lulus"
                          id="tahun_lulus"
                          placeholder="Masukkan tahun lulus"
                          value={values.tahun_lulus}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.tahun_lulus && touched.tahun_lulus
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.tahun_lulus && touched.tahun_lulus && (
                          <div className="invalid-feedback">
                            {errors.tahun_lulus}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>Jenjang</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CSelect
                          custom
                          name="jenjang"
                          id="jenjang"
                          value={values.jenjang}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.jenjang && touched.jenjang
                              ? "is-invalid"
                              : null
                          }
                        >
                          <option value="">-- Pilih Jenjang --</option>
                          <option value="sd">SD</option>
                          <option value="smp">SMP</option>
                          <option value="sma/ma/smk">SMA/MA/SMK</option>
                          <option value="D3">D3</option>
                          <option value="D4">D4</option>
                          <option value="S1">S1</option>
                          <option value="S2">S2</option>
                          <option value="S3">S3</option>
                        </CSelect>
                        {errors.jenjang && touched.jenjang && (
                          <div className="invalid-feedback">
                            {errors.jenjang}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol>
                        <CLabel>No. Ijazah</CLabel>
                      </CCol>
                      <CCol md="9" sm="12">
                        <CInput
                          type="text"
                          name="no_ijazah"
                          id="no_ijazah"
                          placeholder="Masukkan no ijazah"
                          value={values.no_ijazah}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.no_ijazah && touched.no_ijazah
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.no_ijazah && touched.no_ijazah && (
                          <div className="invalid-feedback">
                            {errors.no_ijazah}
                          </div>
                        )}
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CLabel col>Foto/Scan Ijazah</CLabel>
                      <CCol xs="12" md="9">
                        <CInputFile
                          name="foto_ijazah"
                          id="foto_ijazah"
                          custom
                          onChange={(e) => {
                            onSelectFile2(e);
                            setFieldValue("foto_ijazah", e.target.files[0]);
                          }}
                          onBlur={handleBlur}
                          className={
                            errors.foto_ijazah && touched.foto_ijazah
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.foto_ijazah && touched.foto_ijazah && (
                          <div className="invalid-feedback">
                            {errors.foto_ijazah}
                          </div>
                        )}
                        <CLabel
                          style={{ width: "353px", left: 15 }}
                          htmlFor="foto_ijazah"
                          variant="custom-file"
                        >
                          Pilih Foto
                        </CLabel>
                        {preview2 && <p className="mt-1">{preview2}</p>}
                        <CFormText className="help-block">
                          File harus bertipe pdf, jpg, jpeg, atau png dengan
                          ukuran kurang dari 2 MB
                        </CFormText>
                      </CCol>
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CCardBody>
              <CCardFooter>
                <CButton
                  color="primary"
                  type="submit"
                  className="mr-3"
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
                <CButton color="danger" type="reset" className="mr-1">
                  Reset
                </CButton>
              </CCardFooter>
            </CForm>
          )}
        </Formik>
      </CCard>
    </>
  );
};

export default TambahPegawai;
