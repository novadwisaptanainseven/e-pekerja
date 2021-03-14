import React, { useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";

import { useHistory } from "react-router-dom";
import { insertRiwayatKerja } from "src/context/actions/Pegawai/RiwayatKerja/insertRiwayatKerja";
import Form from "./Form";

const MySwal = withReactContent(swal2);

const TambahRiwayatKerja = ({ id, modal, setModal, riwayatKerja }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  // Inisialisasi State Formik
  const initState = {
    kantor: "",
    jabatan: "",
    tgl_masuk: "",
    tgl_keluar: "",
    keterangan: "",
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Tambah Data Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {
      setModal(!modal);
      history.push(`/epekerja/admin/pegawai-detail/${id}`);
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
    kantor: Yup.string().required("Kantor lama harus diisi!"),
    jabatan: Yup.string().required("Jabatan lama harus diisi!"),
    tgl_masuk: Yup.string().required("Tgl. masuk harus diisi!"),
    tgl_keluar: Yup.string().required("Tgl. keluar harus diisi!"),
    keterangan: Yup.string().required("Keterangan harus diisi!"),
  });

  // Menangani value dari form submit
  const handleFormSubmit = (values) => {
    console.log(values);

    const formData = new FormData();
    formData.append("kantor", values.kantor);
    formData.append("jabatan", values.jabatan);
    formData.append("tgl_masuk", values.tgl_masuk);
    formData.append("tgl_keluar", values.tgl_keluar);
    formData.append("keterangan", values.keterangan);

    for (var pair of formData.entries()) {
      console.log(pair);
    }

    // Memanggil method Insert RiwayatKerja untuk menambah data RiwayatKerja ke database
    insertRiwayatKerja(
      id,
      formData,
      setLoading,
      showAlertSuccess,
      showAlertError,
      riwayatKerja.setLoadingRiwayatKerja,
      riwayatKerja.setData
    );
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

export default TambahRiwayatKerja;
