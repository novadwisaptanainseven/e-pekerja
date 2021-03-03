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

const Pegawai = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const data = [
    {
      no: 1,
      id: 1,
      nip: "19651127 199301 1 001",
      nama: "Ir. H. Dadang Airlangga N, MMT",
      sub_bidang: "Pembinaan Permukiman",
      pangkat_golongan: "IIa / Pengatur Muda",
      no_hp: "0812323121",
      jabatan: "Kepala Dinas",
    },
    {
      no: 2,
      id: 2,
      nip: "19640315 199203 1 014",
      nama: "H. Akhmad Husein, ST, MT",
      sub_bidang: "Sub. Bagian Perencanaan Program dan Keuangan",
      pangkat_golongan: "IIa / Pengatur Muda",
      no_hp: "0812323121",
      jabatan: "Kepala Bidang",
    },
    {
      no: 3,
      id: 3,
      nip: "19650726 198903 2 005",
      nama: "Erminawati, S.Pd, M.Pd",
      sub_bidang: "Pembinaan Permukiman",
      pangkat_golongan: "IIa / Pengatur Muda",
      no_hp: "0812323121",
      jabatan: "Staff Administrasi",
    },
  ];

  const filteredData = data.filter((item) =>
    // (
    //   item.nama && item.sub_bidang &&
    //   item.nama.toLowerCase().includes(filterText.toLowerCase())

    // )
    {
      if (item.nama && item.sub_bidang) {
        if (
          item.nama.toLowerCase().includes(filterText.toLowerCase()) ||
          item.sub_bidang.toLowerCase().includes(filterText.toLowerCase())
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
      name: "Sub Bidang",
      selector: "sub_bidang",
      sortable: true,
      wrap: true,
    },
    // {
    //   name: "Pangkat / Gol",
    //   selector: "pangkat_golongan",
    //   sortable: true,
    //   wrap: true,
    // },
    // {
    //   name: "No. HP",
    //   selector: "no_hp",
    //   sortable: true,
    //   wrap: true,
    // },
    {
      // maxWidth: "150px",
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
              Kelengkapan
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
    history.push("/epekerja/admin/pegawai-tambah");
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/pegawai-edit/${id}`);
  };

  const goToDetail = (id) => {
    history.push(`/epekerja/admin/pegawai-detail/${id}`);
  };

  const ExpandableComponent = ({ data }) => (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>Jabatan</strong>
          </CCol>
          <CCol>{data.jabatan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>Pangkat / Gol</strong>
          </CCol>
          <CCol>{data.pangkat_golongan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>No. HP</strong>
          </CCol>
          <CCol>{data.no_hp}</CCol>
        </CRow>
      </div>
    </>
  );

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Data Pegawai</h3>
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
            expandableRows
            expandOnRowClicked
            highlightOnHover
            expandableRowsComponent={<ExpandableComponent />}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Pegawai;
