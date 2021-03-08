import React, { useState } from "react";
import DataTable from "react-data-table-component";
import {
  CButtonGroup,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CCol,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPen, cilTrash, cilPrint } from "@coreui/icons";
import TambahDataDiklat from "./TambahDataDiklat";
import EditDataDiklat from "./EditDataDiklat";
import { SampleIjazah } from "src/assets";

const DataDiklat = () => {
  const [modalTambah, setModalTambah] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });

  const data = [
    {
      id: 1,
      nama_diklat: "Adumla",
      jenis_diklat: "Jenis Diklat",
      penyelenggara: "Penyelenggara",
      tahun_diklat: "1997",
      jml_jam: "500",
      dokumentasi: "dokumentasi_diklat.jpg",
    },
    {
      id: 2,
      nama_diklat: "Diklatpim Tk. III",
      jenis_diklat: "Jenis Diklat",
      penyelenggara: "Penyelenggara",
      tahun_diklat: "2003",
      jml_jam: "360",
      dokumentasi: "dokumentasi_diklat.pdf",
    },
  ];

  const columns = [
    {
      name: "Nama Diklat",
      selector: "nama_diklat",
      wrap: true,
      sortable: true,
    },
    {
      name: "Jenis Diklat",
      selector: "jenis_diklat",
      wrap: true,
      sortable: true,
    },
    {
      name: "Penyelenggara",
      selector: "penyelenggara",
      wrap: true,
      sortable: true,
      // maxWidth: "100px",
    },
    {
      name: "Tahun Diklat",
      selector: "tahun_diklat",
      wrap: true,
      sortable: true,
      // maxWidth: "150px",
    },
    {
      name: "Jumlah Jam",
      selector: "jml_jam",
      wrap: true,
      sortable: true,
    },

    {
      name: "Aksi",
      selector: "aksi",
      wrap: true,
      maxWidth: "100px",
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

  // Expandable Component
  const ExpandableComponent = ({ data }) => {
    let ext_file = data.dokumentasi.split(".");
    let ext_status = ext_file[ext_file.length - 1];

    return (
      <>
        <div style={{ padding: "10px 63px" }}>
          <CRow>
            <CCol md="2">
              <strong>Dokumentasi</strong>
            </CCol>
            <CCol>
              {ext_status === "jpg" ? (
                <img width={200} src={SampleIjazah} alt={data.dokumentasi} />
              ) : (
                <a href=".">{data.dokumentasi}</a>
              )}
            </CCol>
          </CRow>
        </div>
      </>
    );
  };

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
          expandOnRowClicked
          highlightOnHover
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
            <TambahDataDiklat />
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
          <CModalTitle>Edit Data</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <EditDataDiklat id={modalEdit.id} />
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

export default DataDiklat;
