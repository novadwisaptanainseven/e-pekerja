import React, { useState } from "react";
import {
  CButton,
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
import CIcon from "@coreui/icons-react";
import { cilInfo } from "@coreui/icons";
import { SampleSertifikat } from "src/assets";
import DetailPenghargaan from "./DetailPenghargaan";

const Penghargaan = () => {
  const [modalDetail, setModalDetail] = useState({
    modal: false,
    id: null,
  });

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
      <DataTable
        columns={columns}
        data={data}
        noHeader
        responsive={true}
        customStyles={customStyles}
        pagination
        // paginationRowsPerPageOptions={[5, 10, 15]}
        // paginationPerPage={5}
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
