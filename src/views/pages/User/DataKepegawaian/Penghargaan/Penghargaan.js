import React, { useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CButtonGroup,
  CRow,
  CCol,
  CModal,
  CModalHeader,
  CModalTitle,
  CForm,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilPrint, cilInfo, cilPen, cilTrash } from "@coreui/icons";
import { SampleSertifikat } from "src/assets";
import TambahPenghargaan from "./TambahPenghargaan";
import EditPenghargaan from "./EditPenghargaan";
import DetailPenghargaan from "./DetailPenghargaan";

const TextField = styled.input`
  height: 37px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 37px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3e5973;
  border: none;
  color: white;
  padding: 0 10px;
  transition: 0.3s;

  &:hover {
    background-color: #283c4f;
  }
`;

const Penghargaan = () => {
  const [modalTambah, setModalTambah] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });
  const [modalDetail, setModalDetail] = useState({
    modal: false,
    id: null,
  });
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const data = [
    {
      no: 1,
      id: 1,
      nip: "19651127 199301 1 001",
      nama: "Ir. H. Dadang Airlangga N, MMT",
      nama_penghargaan: "Penghargaan 1",
      pemberi: "Walikota Samarinda",
      tgl_penghargaan: "10-12-2021",
      dokumentasi: "foto",
    },
    {
      no: 2,
      id: 2,
      nip: "19640315 199203 1 014",
      nama: "H. Akhmad Husein, ST, MT",
      nama_penghargaan: "Penghargaan 2",
      pemberi: "Walikota Samarinda",
      tgl_penghargaan: "10-12-2021",
      dokumentasi: "foto",
    },
    {
      no: 3,
      id: 3,
      nip: "19660425 199312 1 001",
      nama: "Joko Karyono, ST, MT",
      nama_penghargaan: "Penghargaan 3",
      pemberi: "Walikota Samarinda",
      tgl_penghargaan: "10-12-2021",
      dokumentasi: "file",
    },
    {
      no: 4,
      id: 4,
      nip: "19660425 199312 1 001",
      nama: "Joko Karyono, ST, MT",
      nama_penghargaan: "Penghargaan 4",
      pemberi: "Walikota Samarinda",
      tgl_penghargaan: "10-12-2021",
      dokumentasi: "file",
    },
  ];

  const filteredData = data.filter((item) =>
    // (
    //   item.nama && item.sub_bidang &&
    //   item.nama.toLowerCase().includes(filterText.toLowerCase())

    // )
    {
      if (item.nama && item.nama_penghargaan) {
        if (
          item.nama.toLowerCase().includes(filterText.toLowerCase()) ||
          item.nama_penghargaan.toLowerCase().includes(filterText.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    }
  );

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      width: "50px",
    },
    {
      name: "Nama Penghargaan",
      selector: "nama_penghargaan",
      sortable: true,
      wrap: true,
    },
    {
      name: "Pemberi",
      selector: "pemberi",
      sortable: true,
      wrap: true,
    },
    {
      name: "Tgl. Penghargaan",
      selector: "tgl_penghargaan",
      sortable: true,
      wrap: true,
    },
    {
      maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <CButton
            color="info"
            className="btn btn-sm"
            onClick={() =>
              setModalDetail({
                ...modalDetail,
                modal: !modalDetail.modal,
                id: row.id,
              })
            }
          >
            <CIcon content={cilInfo} color="white" />
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

  const goToTambah = (id) => {
    history.push(`/epekerja/admin/penghargaan-tambah`);
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/penghargaan-edit/${id}`);
  };

  const goToDetail = (id) => {
    history.push(`/epekerja/admin/penghargaan-detail/${id}`);
  };

  const ExpandableComponent = ({ data }) => (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Dokumentasi</strong>
          </CCol>
          <CCol>
            {data.dokumentasi === "foto" ? (
              <img width={200} src={SampleSertifikat} alt="foto-penghargaan" />
            ) : (
              <a href=".">dokumentasi_penghargaan.pdf</a>
            )}
          </CCol>
        </CRow>
      </div>
    </>
  );

  return (
    <>
      {/* <div className="button-control mb-2 mt-4">
        <CButton
          color="primary"
          className="btn btn-md"
          onClick={() => setModalTambah(!modalTambah)}
        >
          Tambah Penghargaan
        </CButton>
        <CButton type="button" color="info">
          Cetak <CIcon content={cilPrint} />
        </CButton>
      </div> */}

      <DataTable
        columns={columns}
        data={filteredData}
        noHeader
        responsive={true}
        customStyles={customStyles}
        pagination
        // paginationRowsPerPageOptions={[5, 10, 15]}
        // paginationPerPage={5}
        paginationResetDefaultPage={resetPaginationToggle}
        expandableRows={true}
        expandableRowsComponent={<ExpandableComponent />}
        expandOnRowClicked
        highlightOnHover
      />

      {/* Modal Detail */}
      <CModal
        show={modalDetail.modal}
        onClose={() =>
          setModalDetail({
            ...modalDetail,
            modal: !modalDetail.modal,
            id: null,
          })
        }
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Detail Penghargaan</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <DetailPenghargaan id={modalDetail.id} />
          </CModalBody>
          <CModalFooter>
            <CButton type="submit" color="primary">
              Simpan
            </CButton>{" "}
            <CButton
              type="button"
              color="secondary"
              onClick={() => setModalDetail(!modalDetail.modal)}
            >
              Batal
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </>
  );
};

export default Penghargaan;
