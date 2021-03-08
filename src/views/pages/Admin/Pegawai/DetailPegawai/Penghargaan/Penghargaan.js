import React, { useState } from "react";
import {
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
import CIcon from "@coreui/icons-react";
import { cilPrint, cilInfo, cilPen, cilTrash } from "@coreui/icons";
import { SampleSertifikat } from "src/assets";
import TambahPenghargaan from "./TambahPenghargaan";
import EditPenghargaan from "./EditPenghargaan";
import DetailPenghargaan from "./DetailPenghargaan";

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
          <CButtonGroup>
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
            <CButton
              color="success"
              className="btn btn-sm"
              onClick={() =>
                setModalEdit({
                  ...modalEdit,
                  modal: !modalEdit.modal,
                  id: row.id,
                })
              }
            >
              <CIcon content={cilPen} color="white" />
            </CButton>
            <CButton
              color="danger"
              className="btn btn-sm"
              onClick={() =>
                window.confirm("Anda yakin ingin menghapus data ini ?")
              }
            >
              <CIcon content={cilTrash} color="white" />
            </CButton>
          </CButtonGroup>
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
      <div className="button-control mb-2 mt-4">
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
      </div>

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

      {/* Modal Tambah */}
      <CModal
        show={modalTambah}
        onClose={() => setModalTambah(!modalTambah)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Tambah Penghargaan</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <TambahPenghargaan />
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

      {/* Modal Edit */}
      <CModal
        show={modalEdit.modal}
        onClose={() =>
          setModalEdit({ ...modalEdit, modal: !modalEdit.modal, id: null })
        }
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Edit Penghargaan</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <EditPenghargaan id={modalEdit.id} />
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
