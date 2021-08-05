import React, { useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CRow,
  CCol,
  CButtonGroup,
  CBadge,
} from "@coreui/react";
import DataTable from "react-data-table-component";
// import styled from "styled-components";
import CIcon from "@coreui/icons-react";
import { cilPen, cilTrash, cilPrint, cilInfo } from "@coreui/icons";
import { format } from "date-fns";
import exportExcel from "src/context/actions/DownloadFile/Excel/Pegawai/exportExcel";
import { getRiwayatSK } from "src/context/actions/PembaruanSK/getRiwayatSK";
import getSK from "src/context/actions/DownloadFile/getSK";
import getFilename from "src/helpers/getFilename";
import { deleteRiwayatSK } from "src/context/actions/PembaruanSK/deleteRiwayatSK";
import printSK from "src/context/actions/DownloadFile/printSK";
import ModalEdit from "./ModalEdit";
import ModalTambah from "./ModalTambah";
import ModalDetail from "./ModalDetail";
import Loading from "src/reusable/Loading";
import ModalTambahPTTB from "./ModalTambahPTTB";
import ModalEditPTTB from "./ModalEditPTTB";

const MySwal = withReactContent(swal2);

const RiwayatSK = ({ id, dataActive, setPegawai, pegawai }) => {
  const [modalTambah, setModalTambah] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(loading);

  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });
  const [modalDetail, setModalDetail] = useState({
    modal: false,
    id: null,
  });

  // Get Riwayat SK
  useEffect(() => {
    if (!data) {
      if (dataActive === "riwayat-sk") {
        getRiwayatSK(id, setLoading, setData);
      }
    }
  }, [id, data, dataActive]);

  const columns = [
    {
      name: "No. SK",
      selector: "no_sk",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Penetap SK",
      selector: "penetap_sk",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
    },
    {
      name: "Tgl. Penetapan SK",
      selector: "tgl_penetapan_sk",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
      cell: (row) => (
        <div>{format(new Date(row.tgl_penetapan_sk), "dd/MM/y")}</div>
      ),
    },
    {
      name: "Tgl. Mulai Tugas",
      selector: "tgl_mulai_tugas",
      sortable: true,
      wrap: true,
      cell: (row) => <div>{row.tgl_mulai_tugas}</div>,
    },
    {
      name: "Status",
      selector: (row) => row.sk_terkini,
      sortable: true,
      wrap: true,
      cell: (row) => (
        <div>
          {row.sk_terkini === 1 ? (
            <CBadge className="p-1" color="success">
              SK Terkini
            </CBadge>
          ) : (
            ""
          )}
        </div>
      ),
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
                color="info"
                size="sm"
                onClick={() => {
                  setModalDetail({
                    ...modalDetail,
                    modal: !modalDetail.modal,
                    id: row.id_riwayat_sk,
                  });
                }}
                className="text-white"
              >
                <CIcon content={cilInfo} />
              </CButton>
              <CButton
                color="warning"
                size="sm"
                onClick={() => {
                  setModalEdit({
                    ...modalEdit,
                    modal: !modalEdit.modal,
                    id: row.id_riwayat_sk,
                  });
                }}
                className="text-white"
              >
                <CIcon content={cilPen} />
              </CButton>
              <CButton
                disabled={row.sk_terkini === 1 ? true : false}
                color="danger"
                size="sm"
                onClick={() => handleDelete(row.id_riwayat_sk)}
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
        fontSize: "1.15em",
      },
    },
  };

  // Menangani tombol hapus
  const handleDelete = (id_riwayat_sk) => {
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
        deleteRiwayatSK(id, id_riwayat_sk, setLoading, setData);
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
      <div style={{ width: "100%" }} className="d-flex justify-content-between">
        <CButton
          type="button"
          color="primary"
          className="ml-2"
          onClick={() => setModalTambah(true)}
        >
          Tambah Riwayat SK
        </CButton>
        <div>
          <CButton
            type="button"
            color="info"
            className="ml-2"
            onClick={() => printSK(id)}
          >
            PDF <CIcon content={cilPrint} />
          </CButton>
          <CButton
            type="button"
            color="success"
            className="ml-2"
            onClick={() => exportExcel(`riwayat-sk/` + id)}
          >
            Excel <CIcon content={cilPrint} />
          </CButton>
        </div>
      </div>
    );
  };

  // Expandable Component
  const ExpandableComponent = ({ data }) => {
    return (
      <div style={{ padding: "10px 63px" }}>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>Gaji Pokok</strong>
          </CCol>
          <CCol>
            {data.gaji_pokok.toLocaleString("id", {
              style: "currency",
              currency: "IDR",
            })}
          </CCol>
        </CRow>

        <CRow className="mb-1">
          <CCol md="2">
            <strong>Tugas</strong>
          </CCol>
          <CCol>{data.nama_jabatan}</CCol>
        </CRow>

        <CRow className="mb-1">
          <CCol md="2">
            <strong>File SK</strong>
          </CCol>
          <CCol>
            {data.file ? (
              <a href={getSK(data.file)} target="_blank" rel="noreferrer">
                {getFilename(data.file)}
              </a>
            ) : (
              "Belum ada file"
            )}
          </CCol>
        </CRow>
      </div>
    );
  };

  return (
    <>
      <div className="mt-2">
        {data ? (
          <DataTable
            columns={columns}
            data={data}
            responsive={true}
            customStyles={customStyles}
            pagination
            // paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={<SubHeaderComponentMemo />}
            highlightOnHover
            expandableRows
            expandOnRowClicked
            expandableRowsComponent={<ExpandableComponent />}
          />
        ) : (
          <Loading />
        )}
      </div>

      {/* Modal Tambah */}
      <CModal
        show={modalTambah}
        onClose={() => setModalTambah(!modalTambah)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Perbarui SK</CModalTitle>
        </CModalHeader>

        {pegawai.id_status_pegawai === 2 ? (
          <ModalTambah
            modalTambah={modalTambah}
            setModalTambah={setModalTambah}
            setData={setData}
            id_pegawai={id}
            setPegawai={setPegawai}
          />
        ) : (
          <ModalTambahPTTB
            modalTambah={modalTambah}
            setModalTambah={setModalTambah}
            setData={setData}
            id_pegawai={id}
            setPegawai={setPegawai}
          />
        )}
      </CModal>

      {/* Modal Edit Riwayat SK */}
      <CModal
        show={modalEdit.modal}
        onClose={() => {
          setModalEdit({
            ...modalEdit,
            modal: !modalEdit.modal,
            id: null,
          });
        }}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Edit Riwayat SK</CModalTitle>
        </CModalHeader>

        {pegawai.id_status_pegawai === 2 ? (
          <ModalEdit
            id_riwayat_sk={modalEdit.id}
            id_pegawai={id}
            modalEdit={modalEdit}
            setDataRiwayat={setData}
            setModalEdit={setModalEdit}
            setPegawai={setPegawai}
          />
        ) : (
          <ModalEditPTTB
            id_riwayat_sk={modalEdit.id}
            id_pegawai={id}
            modalEdit={modalEdit}
            setDataRiwayat={setData}
            setModalEdit={setModalEdit}
            setPegawai={setPegawai}
          />
        )}
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

        <ModalDetail
          id_riwayat_sk={modalDetail.id}
          id_pegawai={id}
          modalDetail={modalDetail}
          setModalDetail={setModalDetail}
        />
      </CModal>
    </>
  );
};

export default RiwayatSK;
