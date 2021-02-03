import React, { useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CForm,
  CModalBody,
  CModalFooter,
  CRow,
  CCol,
  CBadge,
} from "@coreui/react";
import DataTable from "react-data-table-component";
// import styled from "styled-components";
import CIcon from "@coreui/icons-react";
import { cilPen, cilTrash, cilPrint } from "@coreui/icons";
import { useHistory } from "react-router-dom";
import TambahCuti from "./TambahCuti";
import EditCuti from "./EditCuti";

const RiwayatCuti = () => {
  const [modalTambah, setModalTambah] = useState(false);

  const history = useHistory();

  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });

  const goBackToParent = () => {
    history.goBack();
  };

  const data = [
    {
      no: 1,
      id: 1,
      lama_cuti: "14 Hari",
      tgl_mulai: "10-02-2021",
      tgl_selesai: "24-02-2021",
      keterangan: "Isolasi Mandiri selama 14 hari",
      created_at: "09-02-2021",
      status_cuti: 0,
    },
    {
      no: 2,
      id: 2,
      lama_cuti: "1 Bulan",
      tgl_mulai: "15-02-2021",
      tgl_selesai: "15-03-2021",
      keterangan: "Liburan ke Amerika Serikat",
      created_at: "10-02-2021",
      status_cuti: 1,
    },
    {
      no: 3,
      id: 3,
      lama_cuti: "1 Minggu",
      tgl_mulai: "20-02-2021",
      tgl_selesai: "27-02-2021",
      keterangan: "Daftar CPNS",
      created_at: "11-02-2021",
      status_cuti: 2,
    },
  ];

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      wrap: true,
      width: "50px",
    },
    {
      name: "Lama Cuti",
      selector: "lama_cuti",
      sortable: true,
      maxWidth: "150px",
      wrap: true,
    },
    {
      name: "Tgl. Mulai Cuti",
      selector: "tgl_mulai",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
    },
    {
      name: "Tgl. Selesai Cuti",
      selector: "tgl_selesai",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
    },
    {
      name: "Status Cuti",
      selector: "status_cuti",
      sortable: true,
      wrap: true,
      cell: (row) => {
        if (row.status_cuti === 0) {
          return (
            <>
              <CBadge color="info" shape="pill" className="px-2 py-2">
                Akan Cuti
              </CBadge>
            </>
          );
        } else if (row.status_cuti === 1) {
          return (
            <>
              <CBadge color="primary" shape="pill" className="px-2 py-2">
                Sedang Cuti
              </CBadge>
            </>
          );
        } else if (row.status_cuti === 2) {
          return (
            <>
              <CBadge color="dark" shape="pill" className="px-2 py-2">
                Masa Cuti Selesai
              </CBadge>
            </>
          );
        }
      },
    },
    {
      maxWidth: "180px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <CButton className="mr-1" color="info" onClick={0}>
            <CIcon content={cilPrint} />
          </CButton>
          <CButton
            color="warning"
            onClick={() => {
              setModalEdit({
                ...modalEdit,
                modal: !modalEdit.modal,
                id: row.id,
              });
            }}
            className="text-white mr-1"
          >
            <CIcon content={cilPen} />
          </CButton>
          <CButton
            color="danger"
            onClick={() =>
              window.confirm(`Anda yakin ingin menghapus data ini ?`)
            }
          >
            <CIcon content={cilTrash} />
          </CButton>
        </div>
      ),
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: "1.15em",
      },
    },
  };

  const SubHeaderComponentMemo = () => {
    return (
      <>
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <CButton
            color="primary"
            className="btn btn-md"
            onClick={() => setModalTambah(!modalTambah)}
          >
            Tambah Cuti Baru
          </CButton>
          <div className="d-flex">
            <CButton type="button" color="info" className="ml-2">
              Cetak <CIcon content={cilPrint} />
            </CButton>
            <CButton
              onClick={goBackToParent}
              type="button"
              color="warning"
              className="ml-2 text-white"
            >
              Kembali
            </CButton>
          </div>
        </div>
      </>
    );
  };

  // Expandable Component
  const ExpandableComponent = ({ data }) => (
    <div style={{ padding: "10px 63px" }}>
      <CRow className="mb-1">
        <CCol md="3">
          <strong>Tgl. Pembuatan Cuti</strong>
        </CCol>
        <CCol>{data.created_at}</CCol>
      </CRow>
      <CRow className="mb-1">
        <CCol md="3">
          <strong>Keterangan</strong>
        </CCol>
        <CCol>{data.keterangan}</CCol>
      </CRow>
    </div>
  );

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between my-card-header">
          <h3>Riwayat Cuti Pegawai</h3>
          <span className="font-weight-normal">
            Nova Dwi Sapta Nain Seven S.Tr.Kom
          </span>
        </CCardHeader>
        <CCardBody>
          <DataTable
            columns={columns}
            data={data}
            noHeader
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
        </CCardBody>
      </CCard>

      {/* Modal Tambah */}
      <CModal
        show={modalTambah}
        onClose={() => setModalTambah(!modalTambah)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Buat Cuti Pegawai</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <TambahCuti />
          </CModalBody>
          <CModalFooter>
            <CButton type="submit" color="primary">
              Simpan
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
      </CModal>

      {/* Modal Edit Cuti */}
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
          <CModalTitle>Edit Cuti</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <EditCuti id={modalEdit.id} />
          </CModalBody>
          <CModalFooter>
            <CButton type="submit" color="primary">
              Simpan
            </CButton>{" "}
            <CButton
              type="button"
              color="secondary"
              onClick={() => setModalEdit(!modalEdit.modal)}
            >
              Batal
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </>
  );
};

export default RiwayatCuti;
