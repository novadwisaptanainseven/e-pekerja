import React, { useState, useEffect, useContext } from "react";

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
import { getImage } from "src/context/actions/DownloadFile";
import Select from "react-select";
import Loading from "src/reusable/Loading";
import { GlobalContext } from "src/context/Provider";
import { getDataDiri } from "src/context/actions/UserPage/DataKepegawaian/getDataDiri";
import {
  getSelectAgama,
  getSelectBidang,
  getSelectJabatan,
} from "src/context/actions/UserPage/SelectEditDataDiri";
import { editPTTB } from "src/context/actions/UserPage/DataDiri";
import { getDashboardInformation } from "src/context/actions/UserPage/Dashboard/getDashboardInformation";

const MySwal = withReactContent(swal2);

const EditPTTB = () => {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [jabatan, setJabatan] = useState([]);
  const [bidang, setBidang] = useState([]);
  const [agama, setAgama] = useState([]);
  const [touchedSelect, setTouchedSelect] = useState(false);
  const { dataDiriState, dataDiriDispatch, userState, dashboardDispatch } =
    useContext(GlobalContext);
  const { data } = dataDiriState;
  const { data: user } = userState;

  const goBackToParent = () => {
    history.goBack();
  };

  useEffect(() => {
    // Get Data Diri
    getDataDiri(dataDiriDispatch);
    // Get Bidang
    getSelectBidang(setBidang);
    // Get Jabatan
    getSelectJabatan(setJabatan);
    // Get Agama
    getSelectAgama(setAgama);
  }, [dataDiriDispatch]);

  const getDataOptions = (jabatan) => {
    let options = [];

    jabatan.forEach((item) => {
      options.push({
        value: item.id_jabatan,
        label: item.nama_jabatan,
      });
    });
    return options;
  };

  const optionsData = React.useMemo(() => getDataOptions(jabatan), [jabatan]);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(data ? getImage(data.foto) : "");
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // Free memory when ever this component is unmounted
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [data, selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  // Inisialisasi State Formik
  const initState = {
    nip: data ? data.nip : "",
    nama: data ? data.nama : "",
    penetap_sk: data ? data.penetap_sk : "",
    tgl_penetapan_sk: data ? data.tgl_penetapan_sk : "",
    no_sk: data ? data.no_sk : "",
    kontrak_ke: data ? data.kontrak_ke : "",
    masa_kerja: data ? data.masa_kerja : "",
    tgl_mulai_tugas: data ? data.tgl_mulai_tugas : "",
    id_jabatan: data ? data.id_jabatan : "",
    id_bidang: data ? data.id_bidang : "",
    id_agama: data ? data.id_agama : "",
    tempat_lahir: data ? data.tempat_lahir : "",
    tgl_lahir: data ? data.tgl_lahir : "",
    alamat: data ? data.alamat : "",
    jenis_kelamin: data ? data.jenis_kelamin : "",
    bpjs: data ? data.bpjs : "",
    npwp: data ? data.npwp : "",
    no_hp: data ? data.no_hp : "",
    email: data ? data.email : "",
    no_ktp: data ? data.no_ktp : "",
    gaji_pokok: data ? data.gaji_pokok : "",
    foto: undefined,
  };

  // Fungsi untuk menampilkan alert success Edit data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      getDataDiri(dataDiriDispatch);
      getDashboardInformation(dashboardDispatch);
      history.push("/epekerja/user/data-kepegawaian");
    });
  };

  // Fungsi untuk menampilkan alert error Edit data
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
  const FOTO_PEGAWAI_SIZE = 2048000; // Bytes => 2 mb x 1000 kb x 1000 bytes
  const FOTO_PEGAWAI_SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
  ];

  const validationSchema = Yup.object().shape({
    nip: Yup.string().required("NIP harus diisi!"),
    nama: Yup.string().required("Nama harus diisi!"),
    penetap_sk: Yup.string().required("Penetap SK harus diisi!"),
    tgl_penetapan_sk: Yup.string().required("Tgl. penetapan SK harus diisi!"),
    no_sk: Yup.string().required("No. SK harus diisi!"),
    kontrak_ke: Yup.string().required("Kontrak harus diisi!"),
    masa_kerja: Yup.string().required("Masa kerja harus diisi!"),
    tgl_mulai_tugas: Yup.string().required("Tgl. mulai tugas harus diisi!"),
    id_jabatan: Yup.string().required("Tugas harus diisi!"),
    id_bidang: Yup.string().required("Bidang harus diisi!"),
    id_agama: Yup.string().required("Agama harus diisi!"),
    tempat_lahir: Yup.string().required("Tempat lahir harus diisi!"),
    tgl_lahir: Yup.string().required("Tgl lahir harus diisi!"),
    alamat: Yup.string().required("Alamat harus diisi!"),
    jenis_kelamin: Yup.string().required("Jenis kelamin harus diisi!"),
    bpjs: Yup.string().required("BPJS harus diisi!"),
    npwp: Yup.string().required("NPWP harus diisi!"),
    no_hp: Yup.string().required("No HP harus diisi!"),
    no_ktp: Yup.string().required("No. KTP harus diisi!"),
    email: Yup.string()
      // .email("Email tidak valid")
      .required("No. email harus diisi!"),
    gaji_pokok: Yup.number()
      .typeError("Gaji pokok harus berupa bilangan")
      .integer("Gaji pokok harus berupa bilangan")
      .required("Gaji pokok harus diisi!"),
    foto: Yup.mixed()
      .test("size", "Kapasitas file maksimal 2 mb", (value) => {
        if (value) {
          return value && value.size <= FOTO_PEGAWAI_SIZE;
        }
        return true;
      })
      .test(
        "type",
        "Ekstensi yang diperbolehkan hanya jpg, jpeg, dan png",
        (value) => {
          if (value) {
            return value && FOTO_PEGAWAI_SUPPORTED_FORMATS.includes(value.type);
          }
          return true;
        }
      ),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("nip", values.nip);
    formData.append("nama", values.nama);
    formData.append("penetap_sk", values.penetap_sk);
    formData.append("tgl_penetapan_sk", values.tgl_penetapan_sk);
    formData.append("no_sk", values.no_sk);
    formData.append("kontrak_ke", values.kontrak_ke);
    formData.append("masa_kerja", values.masa_kerja);
    formData.append("tgl_mulai_tugas", values.tgl_mulai_tugas);
    formData.append("id_jabatan", values.id_jabatan);
    formData.append("tugas", values.id_jabatan);
    formData.append("id_bidang", values.id_bidang);
    formData.append("id_agama", values.id_agama);
    formData.append("tempat_lahir", values.tempat_lahir);
    formData.append("tgl_lahir", values.tgl_lahir);
    formData.append("alamat", values.alamat);
    formData.append("jenis_kelamin", values.jenis_kelamin);
    formData.append("bpjs", values.bpjs);
    formData.append("npwp", values.npwp);
    formData.append("gaji_pokok", values.gaji_pokok);
    formData.append("no_hp", values.no_hp);
    formData.append("email", values.email);
    formData.append("no_ktp", values.no_ktp);
    if (values.foto) {
      formData.append("foto", values.foto);
    }

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // Memanggil method edit PTTB untuk menambah data PTTB ke database
    editPTTB(
      user.id_pegawai,
      formData,
      setLoading,
      showAlertSuccess,
      showAlertError
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
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Edit PTTB</h3>
          <CButton
            type="button"
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>

        {data ? (
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
                <CForm onSubmit={handleSubmit} className="form-horizontal">
                  <CCardBody>
                    <CRow>
                      <CCol md="6" sm="12">
                        <CFormGroup row>
                          <CCol>
                            <CLabel>NIP</CLabel>
                          </CCol>
                          <CCol md="9" sm="12">
                            <CInput
                              type="text"
                              name="nip"
                              id="nip"
                              placeholder="Masukkan nip"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.nip}
                              className={
                                errors.nip && touched.nip ? "is-invalid" : null
                              }
                            />
                            {errors.nip && touched.nip && (
                              <div className="invalid-feedback">
                                {errors.nip}
                              </div>
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
                                errors.nama && touched.nama
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.nama && touched.nama && (
                              <div className="invalid-feedback">
                                {errors.nama}
                              </div>
                            )}
                          </CCol>
                        </CFormGroup>

                        <CFormGroup row>
                          <CCol>
                            <CLabel>Tugas</CLabel>
                          </CCol>
                          <CCol md="9" sm="12">
                            <Select
                              isDisabled
                              styles={customStyles}
                              name="id_jabatan"
                              id="id_jabatan"
                              onChange={(opt) => {
                                setTouchedSelect(false);
                                setFieldValue(
                                  "id_jabatan",
                                  opt ? opt.value : ""
                                );
                              }}
                              onBlur={() =>
                                values.id_jabatan
                                  ? setTouchedSelect(false)
                                  : setTouchedSelect(true)
                              }
                              onFocus={() => setTouchedSelect(true)}
                              placeholder="-- Pilih Tugas --"
                              isSearchable
                              isClearable
                              defaultValue={{
                                value: data ? data.id_jabatan : "",
                                label: data ? data.jabatan : "",
                              }}
                              options={optionsData}
                            />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol>
                            <CLabel>Bidang</CLabel>
                          </CCol>
                          <CCol md="9" sm="12">
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
                              {bidang.map((item, index) => (
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
                          </CCol>
                        </CFormGroup>
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
                                name="jenis_kelamin"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                checked={
                                  values.jenis_kelamin === "Laki-Laki"
                                    ? true
                                    : false
                                }
                                value="Laki-Laki"
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
                                checked={
                                  values.jenis_kelamin === "Perempuan"
                                    ? true
                                    : false
                                }
                                value="Perempuan"
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
                      </CCol>
                      <CCol md="6">
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
                                errors.bpjs && touched.bpjs
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.bpjs && touched.bpjs && (
                              <div className="invalid-feedback">
                                {errors.bpjs}
                              </div>
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
                                errors.npwp && touched.npwp
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.npwp && touched.npwp && (
                              <div className="invalid-feedback">
                                {errors.npwp}
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
                              placeholder="Masukkan no hp"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.no_hp}
                              className={
                                errors.no_hp && touched.no_hp
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.no_hp && touched.no_hp && (
                              <div className="invalid-feedback">
                                {errors.no_hp}
                              </div>
                            )}
                          </CCol>
                        </CFormGroup>

                        <CFormGroup row>
                          <CCol>
                            <CLabel>Email</CLabel>
                          </CCol>
                          <CCol md="9" sm="12">
                            <CInput
                              type="text"
                              name="email"
                              id="email"
                              placeholder="Masukkan no. hp"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              className={
                                errors.email && touched.email
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.email && touched.email && (
                              <div className="invalid-feedback">
                                {errors.email}
                              </div>
                            )}
                          </CCol>
                        </CFormGroup>

                        <CFormGroup row>
                          <CCol>
                            <CLabel>No. KTP</CLabel>
                          </CCol>
                          <CCol md="9" sm="12">
                            <CInput
                              type="text"
                              name="no_ktp"
                              id="no_ktp"
                              placeholder="Masukkan no. ktp"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.no_ktp}
                              className={
                                errors.no_ktp && touched.no_ktp
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.no_ktp && touched.no_ktp && (
                              <div className="invalid-feedback">
                                {errors.no_ktp}
                              </div>
                            )}
                          </CCol>
                        </CFormGroup>

                        <CFormGroup row>
                          <CLabel col>Foto</CLabel>
                          <CCol xs="12" md="9">
                            <CInputFile
                              custom
                              id="custom-file-input"
                              onChange={(e) => {
                                onSelectFile(e);
                                setFieldValue("foto", e.target.files[0]);
                              }}
                              onBlur={handleBlur}
                              className={
                                errors.foto && touched.foto
                                  ? "is-invalid"
                                  : null
                              }
                            />
                            {errors.foto && touched.foto && (
                              <div className="invalid-feedback">
                                {errors.foto}
                              </div>
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
                              Foto harus bertipe jpg, jpeg, atau png dan sizenya
                              kurang dari 2 MB
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
                  </CCardFooter>
                </CForm>
              )}
            </Formik>
          </>
        ) : (
          <Loading />
        )}
      </CCard>
    </>
  );
};

export default EditPTTB;
