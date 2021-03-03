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
import TambahDataPendidikan from "./TambahDataPendidikan";
import EditDataPendidikan from "./EditDataPendidikan";
import { SampleIjazah } from "src/assets/index";

const DataPendidikan = () => {
  const [modalTambah, setModalTambah] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });

  const data = [
    {
      id: 1,
      nama_akademi: "Politeknik Negeri Samarinda",
      jurusan: "Teknologi Informasi",
      jenjang: "D4/S1",
      tahun_lulus: "2020",
      no_ijazah: "12-AD-IA-39",
      file_ijazah: "ijazah.jpg",
    },
    {
      id: 2,
      nama_akademi: "Universitas Mulawarman",
      jurusan: "Ilmu Komputer",
      jenjang: "S1",
      tahun_lulus: "2020",
      no_ijazah: "12-AD-IA-39",
      file_ijazah: "ijazah.pdf",
    },
  ];

  const columns = [
    {
      name: "Nama Akademi",
      selector: "nama_akademi",
      wrap: true,
      sortable: true,
    },
    {
      name: "Jurusan",
      selector: "jurusan",
      wrap: true,
      sortable: true,
    },
    {
      name: "Jenjang",
      selector: "jenjang",
      wrap: true,
      sortable: true,
      maxWidth: "100px",
    },
    {
      name: "Tahun Lulus",
      selector: "tahun_lulus",
      wrap: true,
      sortable: true,
      maxWidth: "150px",
    },
    {
      name: "No. Ijazah",
      selector: "no_ijazah",
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
    let ext_file = data.file_ijazah.split(".");
    let ext_status = ext_file[ext_file.length - 1];

    return (
      <>
        <div style={{ padding: "10px 63px" }}>
          <CRow>
            <CCol md="2">
              <strong>File Ijazah</strong>
            </CCol>
            <CCol>
              {ext_status === "jpg" ? (
                <img width={200} src={SampleIjazah} alt={data.file_ijazah} />
              ) : (
                <a href="#">{data.file_ijazah}</a>
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
          highlightOnHover
          expandOnRowClicked
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
            <TambahDataPendidikan />
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
            <EditDataPendidikan id={modalEdit.id} />
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

export default DataPendidikan;
