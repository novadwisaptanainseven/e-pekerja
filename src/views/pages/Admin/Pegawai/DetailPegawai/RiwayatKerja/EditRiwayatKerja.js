import React, { useState, useEffect } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { getRiwayatKerjaById } from "src/context/actions/Pegawai/RiwayatKerja/getRiwayatKerjaById";
import { editRiwayatKerja } from "src/context/actions/Pegawai/RiwayatKerja/editRiwayatKerja";
import Form from "./Form";

const MySwal = withReactContent(swal2);

const EditRiwayatKerja = ({
  idPegawai,
  idRiwayatKerja,
  modal,
  setModal,
  riwayatKerja,
}) => {
  const history = useHistory();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get Riwayat Kerja by Id
    if (idRiwayatKerja) {
      getRiwayatKerjaById(idPegawai, idRiwayatKerja, setData);
    }

    return () => setData(null);
  }, [idPegawai, idRiwayatKerja]);

  // Inisialisasi State Formik
  const initState = {
    kantor: data ? data.kantor : "",
    jabatan: data ? data.jabatan : "",
    tgl_masuk: data ? data.tgl_masuk : "",
    tgl_keluar: data ? data.tgl_keluar : "",
    keterangan: data ? data.keterangan : "",
  };

  // Fungsi untuk menampilkan alert success Edit data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Edit Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModal(!modal);
      history.push(`/epekerja/admin/pegawai-detail/${idPegawai}`);
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
  const validationSchema = Yup.object().shape({
    kantor: Yup.string().required("Kantor lama harus diisi!"),
    jabatan: Yup.string().required("Jabatan lama harus diisi!"),
    tgl_masuk: Yup.string().required("Tgl. masuk harus diisi!"),
    tgl_keluar: Yup.string().required("Tgl. keluar harus diisi!"),
    keterangan: Yup.string().required("Keterangan harus diisi!"),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    // Memanggil method Edit RiwayatKerja untuk menambah data RiwayatKerja ke database
    editRiwayatKerja(
      idPegawai,
      idRiwayatKerja,
      values,
      setLoading,
      showAlertSuccess,
      showAlertError,
      riwayatKerja.setData,
      riwayatKerja.setLoadingRiwayatKerja
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
        }) => (
          <Form
            values={values}
            errors={errors}
            touched={touched}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleBlur={handleBlur}
            modal={modal}
            setModal={setModal}
            loading={loading}
          />
        )}
      </Formik>
    </>
  );
};

export default EditRiwayatKerja;
