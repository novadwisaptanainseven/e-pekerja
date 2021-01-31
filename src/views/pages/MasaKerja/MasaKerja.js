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
import { cilPrint } from "@coreui/icons";

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

const MasaKerja = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const data = [
    {
      no: 1,
      id: 1,
      nip: "19651127 199301 1 001",
      nama: "Ir. H. Dadang Airlangga Nopandani, MMT",
      mk_golongan: "21 Tahun 3 Bulan",
      mk_jabatan: "4 Tahun 0 Bulan",
      mk_sebelum_cpns: "0 Tahun 0 Bulan",
      mk_seluruhnya: "27 Tahun 11 Bulan",
      jabatan: "Kepala Dinas",
      golongan: "IV/c",
      tmt_golongan: "01/04/2014",
      tmt_jabatan: "30/12/2016",
      tmt_sebelum_cpns: "01/01/1993",
      pendidikan: "Magister Manajemen",
      eselon: "II/b",
    },
    {
      no: 2,
      id: 2,
      nip: "19640315 199203 1 014",
      nama: "H. Akhmad Husein, ST, MT",
      mk_golongan: "26 Tahun 2 Bulan",
      mk_jabatan: "4 Tahun 0 Bulan",
      mk_sebelum_cpns: "6 Tahun 7 Bulan",
      mk_seluruhnya: "27 Tahun 11 Bulan",
      jabatan: "Kepala Dinas",
      golongan: "IV/c",
      tmt_golongan: "01/04/2014",
      tmt_jabatan: "30/12/2016",
      tmt_sebelum_cpns: "01/01/1993",
      pendidikan: "Magister Manajemen",
      eselon: "II/b",
    },
    {
      no: 3,
      id: 3,
      nip: "19660425 199312 1 001",
      nama: "Joko Karyono, ST, MT",
      mk_golongan: "26 Tahun 2 Bulan",
      mk_jabatan: "4 Tahun 0 Bulan",
      mk_sebelum_cpns: "6 Tahun 7 Bulan",
      mk_seluruhnya: "27 Tahun 11 Bulan",
      jabatan: "Kepala Dinas",
      golongan: "IV/c",
      tmt_golongan: "01/04/2014",
      tmt_jabatan: "30/12/2016",
      tmt_sebelum_cpns: "01/01/1993",
      pendidikan: "Magister Manajemen",
      eselon: "II/b",
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
      wrap: true,
      // maxWidth: "200px",
    },
    {
      name: "MK. Gol",
      selector: "mk_golongan",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "MK. Jabatan",
      selector: "mk_jabatan",
      sortable: true,
      wrap: true,
    },
    {
      name: "MK. CPNS",
      selector: "mk_sebelum_cpns",
      sortable: true,
      wrap: true,
    },
    {
      name: "MK. Seluruhnya",
      selector: "mk_sebelum_cpns",
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
              Detail
            </CButton>
            <CButton
              color="success"
              className="btn btn-sm"
              onClick={() => goToEdit(row.id)}
            >
              Perbarui
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

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/masa-kerja-edit/${id}`);
  };

  const goToDetail = (id) => {
    history.push(`/epekerja/admin/masa-kerja-detail/${id}`);
  };

  const ExpandableComponent = ({ data }) => (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>NIP</strong>
          </CCol>
          <CCol>{data.nip}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Jabatan</strong>
          </CCol>
          <CCol>{data.jabatan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>TMT. Jabatan</strong>
          </CCol>
          <CCol>{data.tmt_jabatan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Golongan</strong>
          </CCol>
          <CCol>{data.golongan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>TMT. Golongan</strong>
          </CCol>
          <CCol>{data.tmt_golongan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Eselon</strong>
          </CCol>
          <CCol>{data.eselon}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>TMT. Sebelum CPNS</strong>
          </CCol>
          <CCol>{data.tmt_sebelum_cpns}</CCol>
        </CRow>
      </div>
    </>
  );

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Masa Kerja Pegawai Negeri Sipil</h3>
        </CCardHeader>
        <CCardBody>
          <DataTable
            columns={columns}
            data={filteredData}
            noHeader
            responsive={true}
            customStyles={customStyles}
            pagination
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={SubHeaderComponentMemo}
            expandableRows={true}
            expandableRowsComponent={<ExpandableComponent />}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default MasaKerja;
