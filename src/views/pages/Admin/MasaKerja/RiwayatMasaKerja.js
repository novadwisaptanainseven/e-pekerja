import React, { useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CRow,
  CCol,
  CButtonGroup,
  CAlert,
} from "@coreui/react";
import DataTable from "react-data-table-component";
// import styled from "styled-components";
import CIcon from "@coreui/icons-react";
import { cilTrash, cilPrint, cilUser } from "@coreui/icons";
import { useHistory } from "react-router-dom";
import { getPNSById } from "src/context/actions/Pegawai/PNS/getPNSById";
import { LoadAnimationBlue } from "src/assets";
import { format } from "date-fns";
import exportExcel from "src/context/actions/DownloadFile/Excel/Pegawai/exportExcel";
import PerbaruiMasaKerja from "./PerbaruiMasaKerja";
import DetailSK from "./DetailSK";
import { getRiwayatMasaKerja } from "src/context/actions/MasaKerja/getRiwayatMasaKerja";
import { deleteRiwayatMasaKerja } from "src/context/actions/MasaKerja/deleteRiwayatMasaKerja";
import printRiwayatMK from "src/context/actions/DownloadFile/printRiwayatMK";

const MySwal = withReactContent(swal2);

const RiwayatMasaKerja = ({ match }) => {
  const params = match.params;
  const [modalTambah, setModalTambah] = useState(false);
  const [data, setData] = useState([]);
  const [pegawai, setPegawai] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertSuccessDelete, setAlertSuccessDelete] = useState(false);

  const [modalDetail, setModalDetail] = useState({
    modal: false,
    id: null,
  });

  const goToDetailPegawai = (id) => {
    history.push(`/epekerja/admin/pegawai-detail/${id}`);
  };

  const goBackToParent = () => {
    history.goBack();
  };

  // Get Pegawai by Id Pegawai
  useEffect(() => {
    getPNSById(params.id, setPegawai);

    // Unmount
    return () => {
      setPegawai("");
    };
  }, [params]);

  // Get Riwayat Masa Kerja
  useEffect(() => {
    getRiwayatMasaKerja(params.id, setLoading, setData);
  }, [params]);

  const columns = [
    {
      name: "Tgl. Pembaruan",
      selector: "tanggal",
      sortable: true,
      wrap: true,
      cell: (row) => <div>{format(new Date(row.tanggal), "dd/MM/y")}</div>,
    },
    {
      name: "MK. Golongan",
      selector: "mk_golongan",
      sortable: true,
      wrap: true,
    },
    {
      name: "MK. Jabatan",
      selector: "mk_jabatan",
      sortable: true,
      wrap: true,
    },
    {
      name: "MK. Sebelum CPNS",
      selector: "mk_sebelum_cpns",
      sortable: true,
      wrap: true,
    },
    {
      name: "MK. Seluruhnya",
      selector: "mk_seluruhnya",
      sortable: true,
      wrap: true,
    },
    {
      // maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => {
        return (
          <div data-tag="allowRowEvents">
            <CButtonGroup>
              <CButton
                color="danger"
                size="sm"
                onClick={() => handleDelete(row.id_riwayat_mk)}
              >
                <CIcon content={cilTrash} />
              </CButton>
            </CButtonGroup>
          </div>
        );
      },
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: "1em",
      },
    },
  };

  // Menangani tombol hapus
  const handleDelete = (id_riwayat_mk) => {
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
        deleteRiwayatMasaKerja(
          params.id,
          id_riwayat_mk,
          setLoading,
          setData,
          setAlertSuccessDelete
        );
        MySwal.fire({
          icon: "success",
          title: "Terhapus",
          text: "Data berhasil dihapus",
        });
      }
    });
  };

  const SubHeaderComponentMemo = () => {
    return (
      <>
        <CButton
          type="button"
          color="secondary"
          className="ml-2"
          onClick={() => goToDetailPegawai(params.id)}
        >
          Detail Pegawai <CIcon content={cilUser} />
        </CButton>
        <CButton
          type="button"
          color="info"
          className="ml-2"
          onClick={() => printRiwayatMK(params.id)}
        >
          PDF <CIcon content={cilPrint} />
        </CButton>
        <CButton
          type="button"
          color="success"
          className="ml-2"
          onClick={() => exportExcel(`riwayat-mk/${params.id}`)}
        >
          Excel <CIcon content={cilPrint} />
        </CButton>
      </>
    );
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between my-card-header">
          <div className="title mb-2">
            <h3>Pembaruan Masa Kerja Pegawai</h3>
            <h5 className="font-weight-normal">{pegawai.nama}</h5>
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
          {/* Alert Success Perbarui Masa Kerja */}
          <CAlert
            show={alertSuccess}
            color="success"
            closeButton
            onShowChange={(show) => setAlertSuccess(show)}
          >
            Masa Kerja berhasil diperbarui. Silahkan cek di{" "}
            <a
              href="."
              onClick={(e) => {
                e.preventDefault();
                goToDetailPegawai(params.id);
              }}
            >
              Detail Pegawai
            </a>
          </CAlert>
          {/* End of Alert Success Perbarui Masa Kerja */}

          {/* Alert Success Delete Riwayat Masa Kerja */}
          <CAlert
            show={alertSuccessDelete}
            color="success"
            closeButton
            onShowChange={(show) => setAlertSuccessDelete(show)}
          >
            Riwayat Masa Kerja berhasil dihapus.
          </CAlert>
          {/* End of Alert Success Delete Riwayat Masa Kerja */}
          <CButton
            color="primary"
            className="btn btn-md"
            onClick={() => setModalTambah(!modalTambah)}
          >
            Perbarui Masa Kerja
          </CButton>
          <h3 className="font-weight-normal text-center">
            Riwayat Masa Kerja Pegawai
          </h3>
          {data.length > 0 ? (
            <DataTable
              columns={columns}
              data={data}
              responsive={true}
              customStyles={customStyles}
              pagination
              subHeader
              subHeaderComponent={<SubHeaderComponentMemo />}
            />
          ) : loading ? (
            <div>
              <CRow>
                <CCol className="text-center">
                  <img
                    className="mt-4 ml-3"
                    width={30}
                    src={LoadAnimationBlue}
                    alt="load-animation"
                  />
                </CCol>
              </CRow>
            </div>
          ) : (
            <DataTable
              columns={columns}
              data={data}
              noHeader
              responsive={true}
              customStyles={customStyles}
              pagination
              subHeader
              subHeaderComponent={<SubHeaderComponentMemo />}
            />
          )}
        </CCardBody>
      </CCard>

      {/* Modal Tambah */}
      <CModal
        show={modalTambah}
        onClose={() => setModalTambah(!modalTambah)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Perbarui Masa Kerja</CModalTitle>
        </CModalHeader>

        <PerbaruiMasaKerja
          modalTambah={modalTambah}
          setModalTambah={setModalTambah}
          id_pegawai={params.id}
          setAlertSuccess={setAlertSuccess}
        />
      </CModal>

      {/* Detail Riwayat SK */}
      <CModal
        show={modalDetail.modal}
        onClose={() => {
          setModalDetail({
            ...modalDetail,
            modal: !modalDetail.modal,
            id: null,
          });
        }}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Detail Riwayat SK</CModalTitle>
        </CModalHeader>

        <DetailSK
          id_riwayat_sk={modalDetail.id}
          id_pegawai={params.id}
          modalDetail={modalDetail}
          setModalDetail={setModalDetail}
        />
      </CModal>
    </>
  );
};

export default RiwayatMasaKerja;
