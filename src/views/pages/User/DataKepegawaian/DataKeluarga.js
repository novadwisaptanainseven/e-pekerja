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
import { cilPen, cilTrash } from "@coreui/icons";

const DataKeluarga = () => {
  const [modalTambah, setModalTambah] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });

  const data = [
    {
      id: 1,
      nik: "213123123213",
      nama: "Rahma",
      hubungan: "Istri",
      ttl: "Samarinda, 21 Januari 1998",
      pekerjaan: "Dosen",
      agama: "Islam",
      jenis_kelamin: "Perempuan",
      telepon: "08123213",
      alamat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, amet!",
    },
    {
      id: 2,
      nik: "213123123213",
      nama: "Ramond",
      hubungan: "Anak Kandung",
      ttl: "Samarinda, 21 Januari 1998",
      pekerjaan: "Mahasiswa",
      agama: "Islam",
      jenis_kelamin: "Laki - Laki",
      telepon: "08123213",
      alamat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, amet!",
    },
  ];

  const columns = [
    {
      name: "NIK / NIP",
      selector: "nik",
      wrap: true,
      sortable: true,
    },
    {
      name: "Nama",
      selector: "nama",
      wrap: true,
      sortable: true,
    },
    {
      name: "Hubungan",
      selector: "hubungan",
      wrap: true,
      sortable: true,
    },
    {
      name: "TTL",
      selector: "ttl",
      wrap: true,
      sortable: true,
    },
    {
      name: "Pekerjaan",
      selector: "pekerjaan",
      wrap: true,
      sortable: true,
    },
    // {
    //   name: "Aksi",
    //   selector: "aksi",
    //   wrap: true,
    //   cell: (row) => (
    //     <>
    //       <CButtonGroup>
    //         <CButton
    //           color="success"
    //           className="btn btn-sm"
    //           onClick={() =>
    //             setModalEdit({
    //               ...modalEdit,
    //               modal: !modalEdit.modal,
    //               id: row.id,
    //             })
    //           }
    //         >
    //           <CIcon content={cilPen} color="white" />
    //         </CButton>
    //         <CButton
    //           color="danger"
    //           className="btn btn-sm"
    //           onClick={() =>
    //             window.confirm(
    //               `Anda yakin ingin hapus data dengan id : ${row.id}`
    //             )
    //           }
    //         >
    //           <CIcon content={cilTrash} color="white" />
    //         </CButton>
    //       </CButtonGroup>
    //     </>
    //   ),
    // },
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
            <strong>Agama</strong>
          </CCol>
          <CCol>{data.agama}</CCol>
        </CRow>
        <CRow>
          <CCol md="2">
            <strong>Jenis Kelamin</strong>
          </CCol>
          <CCol>{data.jenis_kelamin}</CCol>
        </CRow>
        <CRow>
          <CCol md="2">
            <strong>Telepon</strong>
          </CCol>
          <CCol>{data.telepon}</CCol>
        </CRow>
        <CRow>
          <CCol md="2">
            <strong>Alamat</strong>
          </CCol>
          <CCol>{data.alamat}</CCol>
        </CRow>
      </div>
    </>
  );

  return (
    <>
      <div className="my-3">
        {/* <div className="button-control mb-2">
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
        </div> */}
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
    </>
  );
};

export default DataKeluarga;
