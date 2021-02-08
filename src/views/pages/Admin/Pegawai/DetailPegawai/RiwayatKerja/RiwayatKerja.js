import React, { useState } from "react";
import DataTable from "react-data-table-component";
import {
  CButtonGroup,
  CButton,
  CRow,
  CCol,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPen, cilTrash, cilPrint } from "@coreui/icons";
import TambahRiwayatKerja from "./TambahRiwayatKerja";
import EditRiwayatKerja from "./EditRiwayatKerja";

const DataKeluarga = () => {
  const [modalTambah, setModalTambah] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });

  const data = [
    {
      id: 1,
      kantor: "Dinas PUPR",
      jabatan: "Kepala Dinas",
      tgl_masuk: "21-01-2021",
      tgl_keluar: "15-05-2021",
      keterangan: "Mutasi",
    },
    {
      id: 2,
      kantor: "Dinas Komunikasi dan Informatika",
      jabatan: "Programmer",
      tgl_masuk: "21-01-2021",
      tgl_keluar: "15-05-2021",
      keterangan: "Mencari Pengalaman Baru",
    },
  ];

  const columns = [
    {
      name: "Kantor Lama",
      selector: "kantor",
      wrap: true,
      sortable: true,
    },
    {
      name: "Jabatan Lama",
      selector: "jabatan",
      wrap: true,
      sortable: true,
    },
    {
      name: "Tgl. Masuk Kerja",
      selector: "tgl_masuk",
      wrap: true,
      sortable: true,
    },
    {
      name: "Tgl. Keluar Kerja",
      selector: "tgl_keluar",
      wrap: true,
      sortable: true,
    },
    // {
    //   name: "Keterangan",
    //   selector: "keterangan",
    //   wrap: true,
    //   sortable: true,
    // },
    {
      name: "Aksi",
      selector: "aksi",
      wrap: true,
      maxWidth: "150px",
      cell: (row) => (
        <>
          <CButtonGroup>
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
                window.confirm(
                  `Anda yakin ingin hapus data dengan id : ${row.id}`
                )
              }
            >
              <CIcon content={cilTrash} color="white" />
            </CButton>
          </CButtonGroup>
        </>
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
        <CRow>
          <CCol md="2">
            <strong>Keterangan</strong>
          </CCol>
          <CCol>{data.keterangan}</CCol>
        </CRow>
        
      </div>
    </>
  );

  return (
    <>
      <div className="my-3">
        <div className="button-control mb-2">
          <CButton
            color="primary"
            className="btn btn-md"
            onClick={() => setModalTambah(!modalTambah)}
          >
            Tambah Data
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
          expandableRows
          expandableRowsComponent={<ExpandableComponent />}
        />
      </div>

      {/* Modal Tambah */}
      <CModal
        show={modalTambah}
        onClose={() => setModalTambah(!modalTambah)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Tambah Data</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <TambahRiwayatKerja />
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
          setModalEdit({ ...modalEdit, modal: !modalEdit, id: null })
        }
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Edit Data</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <EditRiwayatKerja id={modalEdit.id} />
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

export default DataKeluarga;
