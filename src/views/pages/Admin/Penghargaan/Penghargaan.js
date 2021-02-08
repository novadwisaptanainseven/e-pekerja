import React, { useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CButtonGroup,
  CRow,
  CCol,
} from "@coreui/react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilPrint, cilInfo, cilPen, cilTrash } from "@coreui/icons";
import { SampleFotoPegawai } from "src/assets";

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

// Handle filter pencarian

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Cari pegawai"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      Reset
    </ClearButton>
  </>
);

const Penghargaan = () => {
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
      name: "NIP",
      selector: "nip",
      sortable: true,
      wrap: true,
      // maxWidth: "200px",
    },
    {
      name: "Nama",
      selector: "nama",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Nama Penghargaan",
      selector: "nama_penghargaan",
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
              onClick={() => goToDetail(row.id)}
            >
              <CIcon content={cilInfo} color="white" />
            </CButton>
            <CButton
              color="success"
              className="btn btn-sm"
              onClick={() => goToEdit(row.id)}
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

  const SubHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <>
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />

        <CButton type="button" color="info" className="ml-2">
          Cetak <CIcon content={cilPrint} />
        </CButton>
      </>
    );
  }, [filterText, resetPaginationToggle]);

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
            <strong>Pemberi</strong>
          </CCol>
          <CCol>{data.pemberi}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Tgl. Penghargaan</strong>
          </CCol>
          <CCol>{data.tgl_penghargaan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Dokumentasi</strong>
          </CCol>
          <CCol>
            {data.dokumentasi === "foto" ? (
              <img width={200} src={SampleFotoPegawai} alt="foto-penghargaan" />
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
      <CCard>
        <CCardHeader>
          <h3>Penghargaan</h3>
        </CCardHeader>
        <CCardBody>
          <CButton type="button" color="primary" onClick={goToTambah}>
            Tambah Penghargaan
          </CButton>

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
            subHeader
            subHeaderComponent={SubHeaderComponentMemo}
            expandableRows={true}
            expandableRowsComponent={<ExpandableComponent />}
            expandOnRowClicked
            highlightOnHover
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Penghargaan;
