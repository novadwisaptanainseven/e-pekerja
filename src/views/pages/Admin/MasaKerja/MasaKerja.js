import React, { useContext, useEffect, useState } from "react";
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
import { GlobalContext } from "src/context/Provider";
import { getMasaKerja } from "src/context/actions/MasaKerja/getMasaKerja";
import { format } from "date-fns";
import { LoadAnimationBlue } from "src/assets";
import printMasaKerja from "src/context/actions/DownloadFile/printMasaKerja";
import exportExcel from "src/context/actions/DownloadFile/Excel/Pegawai/exportExcel";

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
  const { masaKerjaState, masaKerjaDispatch } = useContext(GlobalContext);
  const { data, loading } = masaKerjaState;

  useEffect(() => {
    // Get all masa kerja
    getMasaKerja(masaKerjaDispatch);
  }, [masaKerjaDispatch]);

  const filteredData = data.filter(
    (item) =>
      item.nama && item.nama.toLowerCase().includes(filterText.toLowerCase())
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
      selector: "mk_seluruhnya",
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
              onClick={() => goToDetail(row.id_masa_kerja)}
            >
              Detail
            </CButton>
            <CButton
              color="success"
              className="btn btn-sm"
              onClick={() => goToEdit(row.id_masa_kerja)}
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

        <CButton
          type="button"
          color="info"
          className="ml-2"
          onClick={printMasaKerja}
        >
          PDF <CIcon content={cilPrint} />
        </CButton>

        <CButton
          type="button"
          color="success"
          className="ml-2"
          onClick={() => exportExcel('masa-kerja')}
        >
          Excel <CIcon content={cilPrint} />
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
          <CCol>{data.nama_jabatan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>TMT. Jabatan</strong>
          </CCol>
          <CCol>{format(new Date(data.tmt_jabatan), "dd/MM/y")}</CCol>
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
          <CCol>{format(new Date(data.tmt_golongan), "dd/MM/y")}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Eselon</strong>
          </CCol>
          <CCol>{data.eselon}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>TMT. CPNS</strong>
          </CCol>
          <CCol>{format(new Date(data.tmt_cpns), "dd/MM/y")}</CCol>
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
          {data.length > 0 ? (
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
              expandOnRowClicked
              highlightOnHover
              expandableRowsComponent={<ExpandableComponent />}
            />
          ) : loading ? (
            <div>
              <CRow>
                <CCol className="text-center">
                  <img
                    className="mt-4 ml-3"
                    width={30}
                    src={LoadAnimationBlue}
                    alt="load-animation"
                  />
                </CCol>
              </CRow>
            </div>
          ) : (
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
              expandOnRowClicked
              highlightOnHover
              expandableRowsComponent={<ExpandableComponent />}
            />
          )}
        </CCardBody>
      </CCard>
    </>
  );
};

export default MasaKerja;
