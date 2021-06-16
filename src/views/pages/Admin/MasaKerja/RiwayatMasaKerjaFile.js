import { cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CRow,
  CCol,
  CForm,
  CFormGroup,
  CLabel,
  CSelect,
} from "@coreui/react";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IconExcel, LoadAnimationBlue, LoadAnimationWhite } from "src/assets";
import getRiwayatMKExcel from "src/context/actions/DownloadFile/getRiwayatMKExcel";
import { deleteRiwayatMKFile } from "src/context/actions/MasaKerja/deleteRiwayatMKFile";
import { getRiwayatMKFile } from "src/context/actions/MasaKerja/getRiwayatMKFile";
import { getRiwayatMKFileByDate } from "src/context/actions/MasaKerja/getRiwayatMKFileByDate";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(swal2);

const RiwayatMasaKerjaFile = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputCari, setInputCari] = useState({});

  // Get Riwayat Masa Kerja File
  useEffect(() => {
    getRiwayatMKFile(setLoading, setData);
  }, []);

  const goBackToParent = () => {
    history.goBack();
  };

  // Menangani tombol hapus
  const handleDelete = (id_riwayat_mk_file) => {
    MySwal.fire({
      icon: "warning",
      title: "Anda yakin ingin menghapus data ini ?",
      text: "Jika yakin, klik YA",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YA",
    }).then((res) => {
      if (res.isConfirmed) {
        deleteRiwayatMKFile(id_riwayat_mk_file, setLoading, setData);
        MySwal.fire({
          icon: "success",
          title: "Terhapus",
          text: "Data berhasil dihapus",
        });
      }
    });
  };

  // Component Option Select Bulan
  const SelectOptionBulan = () => {
    let bulanOptions = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    return (
      <>
        {bulanOptions.map((item, index) => (
          <option key={index} value={index + 1}>
            {item}
          </option>
        ))}
      </>
    );
  };

  // Component Option Select Tahun
  const SelectOptionTahun = () => {
    let curYear = new Date().getFullYear();
    let bottomLimitYear = 2018;

    let tahunOptions = [];

    for (let i = bottomLimitYear; i <= curYear; i++) {
      tahunOptions.push(i);
    }

    return (
      <>
        {tahunOptions.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </>
    );
  };

  // Handle tombol pencarian file
  const handleTombolCari = () => {
    getRiwayatMKFileByDate(setLoading, setData, inputCari);
  };

  // Handle tombol reset
  const handleTombolReset = () => {
    getRiwayatMKFile(setLoading, setData)
  }

  return (
    <div>
      <CCard>
        <CCardHeader className="d-flex justify-content-between my-card-header">
          <div className="title mb-2">
            <h3>Riwayat Pegawai Berdasarkan Masa Kerja</h3>
          </div>
          <CButton
            color="warning"
            className="text-white"
            style={{ height: "40px", width: "100px" }}
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-2">
            <CCol md="8">
              <CForm>
                <CFormGroup>
                  <CLabel>Pencarian</CLabel>
                  <CRow>
                    <CCol md="5" className="pr-0">
                      <CSelect
                        name="bulan"
                        value={inputCari.bulan}
                        onChange={(e) =>
                          setInputCari({
                            ...inputCari,
                            [e.target.name]: e.target.value,
                          })
                        }
                      >
                        <option value="">-- Pilih Bulan --</option>
                        <SelectOptionBulan />
                      </CSelect>
                    </CCol>
                    <CCol className="d-flex">
                      <CSelect
                        name="tahun"
                        value={inputCari.tahun}
                        onChange={(e) =>
                          setInputCari({
                            ...inputCari,
                            [e.target.name]: e.target.value,
                          })
                        }
                      >
                        <option value="">-- Pilih Tahun --</option>
                        <SelectOptionTahun />
                      </CSelect>
                      <CButton
                        className="ml-2"
                        color="primary"
                        onClick={handleTombolCari}
                        disabled={
                          inputCari.bulan && inputCari.tahun ? false : true
                        }
                      >
                        {loading ? (
                          <div>
                            <img
                              width={20}
                              src={LoadAnimationWhite}
                              alt="load-animation"
                            />
                          </div>
                        ) : (
                          "Cari"
                        )}
                      </CButton>
                      <CButton
                        className="ml-2"
                        color="warning"
                        onClick={handleTombolReset}
                      >
                        Reset
                      </CButton>
                    </CCol>
                  </CRow>
                </CFormGroup>
              </CForm>
            </CCol>
          </CRow>
          <CRow>
            {!loading ? (
              data.map((item, index) => (
                <CCol key={index} md="3">
                  <div className="card">
                    <div className="bg-secondary d-flex py-3">
                      <img
                        src={IconExcel}
                        style={{
                          width: "40%",
                          margin: "auto",
                        }}
                        className="card-img-top"
                        alt="icon-excel"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.file}</h5>
                      <p className="card-text">Keadaan {item.keadaan}</p>
                      <p className="text-muted">
                        Disimpan pada{" "}
                        {format(new Date(item.tanggal), "dd/MM/y")}
                      </p>
                      <div className="d-flex justify-content-between">
                        <a
                          href={getRiwayatMKExcel(item.file_slug)}
                          className="btn btn-primary mr-2"
                        >
                          Download File
                        </a>
                        <a
                          href="."
                          className="btn btn-danger"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDelete(item.id_riwayat_mk_file);
                          }}
                        >
                          <CIcon content={cilTrash} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CCol>
              ))
            ) : (
              <CCol className="text-center">
                <img
                  className="mt-4 ml-3"
                  width={30}
                  src={LoadAnimationBlue}
                  alt="load-animation"
                />
              </CCol>
            )}
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default RiwayatMasaKerjaFile;
