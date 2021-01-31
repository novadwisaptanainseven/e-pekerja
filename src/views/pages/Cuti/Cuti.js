import React, { useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CButtonGroup,
  CRow,
  CCol,
  CBadge,
} from "@coreui/react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilPrint, cilPen, cilTrash } from "@coreui/icons";

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

const Cuti = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const data = [
    {
      no: 1,
      id: 1,
      nip: "19651127 199301 1 001",
      nama: "Ir. H. Dadang Airlangga N, MMT",
      jenis_cuti: "Cuti Isolasi Mandiri",
      tgl_mulai: "10-09-2021",
      tgl_selesai: "24-09-2021",
      lama_cuti: "14 Hari",
      status_cuti: 1,
      keterangan: "Sedang Isolasi Mandiri selam 14 hari",
    },
    {
      no: 2,
      id: 2,
      nip: "19651127 199301 1 001",
      nama: "Nova Dwi Sapta",
      jenis_cuti: "Cuti Liburan",
      tgl_mulai: "10-09-2021",
      tgl_selesai: "10-10-2021",
      lama_cuti: "1 Bulan",
      status_cuti: 2,
      keterangan: "Liburan ke luar negeri",
    },
    {
      no: 3,
      id: 3,
      nip: "19651127 199301 1 001",
      nama: "Ikwal Ramadhani",
      jenis_cuti: "Cuti Liburan",
      tgl_mulai: "10-09-2021",
      tgl_selesai: "10-10-2021",
      lama_cuti: "1 Bulan",
      status_cuti: 0,
      keterangan: "Liburan ke luar negeri",
    },
  ];

  const filteredData = data.filter((item) =>
    // (
    //   item.nama && item.sub_bidang &&
    //   item.nama.toLowerCase().includes(filterText.toLowerCase())

    // )
    {
      if (item.nama) {
        if (item.nama.toLowerCase().includes(filterText.toLowerCase())) {
          return true;
        }
      }
      return false;
    }
  );

  const columns = [
    {
      name: "Nama",
      selector: "nama",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Jenis Cuti",
      selector: "jenis_cuti",
      sortable: true,
      wrap: true,
    },
    {
      name: "Lama Cuti",
      selector: "lama_cuti",
      sortable: true,
      wrap: true,
    },
    {
      name: "Tgl. Mulai",
      selector: "tgl_mulai",
      sortable: true,
      wrap: true,
    },
    {
      name: "Tgl. Selesai",
      selector: "tgl_selesai",
      sortable: true,
      wrap: true,
    },
    {
      name: "Status",
      selector: "status_cuti",
      sortable: true,
      wrap: true,
      cell: (row) => {
        if (row.status_cuti === 1) {
          return (
            <>
              <CBadge color="info" shape="pill" className="py-2 px-3">
                Sedang Cuti
              </CBadge>
            </>
          );
        } else if (row.status_cuti === 2) {
          return (
            <>
              <CBadge color="dark" shape="pill" className="py-2 px-3">
                Masa Cuti Selesai
              </CBadge>
            </>
          );
        }
        else
        {
          return (
            <>
              <CBadge color="primary" shape="pill" className="py-2 px-3">
                Akan Cuti
              </CBadge>
            </>
          );
        }
      },
    },
    {
      maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <CButtonGroup>
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
                window.confirm(
                  `Anda yakin ingin hapus data dengan id : ${row.id}`
                )
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

  const goToTambah = () => {
    history.push("/epekerja/admin/cuti-tambah");
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/cuti-edit/${id}`);
  };

  const ExpandableComponent = ({ data }) => (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>NIP</strong>
          </CCol>
          <CCol>{data.nip}</CCol>
        </CRow>
        {/* <CRow className="mb-1">
          <CCol md="2">
            <strong>Lama Cuti</strong>
          </CCol>
          <CCol>{data.lama_cuti}</CCol>
        </CRow> */}
        <CRow className="mb-1">
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
      <CCard>
        <CCardHeader>
          <h3>Cuti Pegawai</h3>
        </CCardHeader>
        <CCardBody>
          <CButton color="primary" className="btn btn-md" onClick={goToTambah}>
            Tambah Data
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
            expandOnRowClicked
            expandableRows
            expandableRowsComponent={<ExpandableComponent />}
            highlightOnHover
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Cuti;
