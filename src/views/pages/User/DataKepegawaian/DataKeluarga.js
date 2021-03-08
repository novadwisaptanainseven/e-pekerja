import React from "react";
import DataTable from "react-data-table-component";
import { CRow, CCol } from "@coreui/react";

const DataKeluarga = () => {
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
