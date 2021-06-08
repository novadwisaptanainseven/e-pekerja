import React, { useContext, useEffect, useState } from "react";

import { GlobalContext } from "src/context/Provider";
import { LoadAnimationBlue } from "src/assets";

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
import { cilPrint, cilInfo } from "@coreui/icons";
import { getDUK } from "src/context/actions/DUK/getDUK";
import printDUK from "src/context/actions/DownloadFile/printDUK";
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

const DukPNS = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const { dukState, dukDispatch } = useContext(GlobalContext);
  const { data } = dukState;

  useEffect(() => {
    // Get data DUK
    getDUK(dukDispatch);
  }, [dukDispatch]);

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
      name: "No. Urut",
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
      name: "Pangkat/Gol",
      selector: "ket_golongan",
      sortable: true,
      wrap: true,
    },
    // {
    //   name: "TMT. Golongan",
    //   selector: "tmt_golongan",
    //   sortable: true,
    //   wrap: true,
    // },
    {
      name: "Jabatan",
      selector: "nama_jabatan",
      sortable: true,
      wrap: true,
    },
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
              onClick={() => goToDetail(row.id_duk, row.no)}
            >
              <CIcon content={cilInfo} color="white" />
            </CButton>
            <CButton
              color="success"
              className="btn btn-sm"
              onClick={() => goToEdit(row.id_duk)}
            >
              Catatan Mutasi
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

        <CButton type="button" color="info" className="ml-2" onClick={printDUK}>
          PDF <CIcon content={cilPrint} />
        </CButton>
        <CButton
          type="button"
          color="success"
          className="ml-2"
          onClick={() => exportExcel("duk")}
        >
          Excel <CIcon content={cilPrint} />
        </CButton>
      </>
    );
  }, [filterText, resetPaginationToggle]);

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/duk-edit/${id}`);
  };

  const goToDetail = (id, no_urut) => {
    history.push(`/epekerja/admin/duk-detail/${id}/${no_urut}`);
  };

  const ExpandableComponent = ({ data }) => (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>TMT. Golongan</strong>
          </CCol>
          <CCol>{data.tmt_golongan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Masa Kerja Golongan</strong>
          </CCol>
          <CCol>{data.mk_golongan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Pendidikan</strong>
          </CCol>
          <CCol>{data.pendidikan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Tgl. Lahir</strong>
          </CCol>
          <CCol>{data.tgl_lahir}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Catatan Mutasi</strong>
          </CCol>
          <CCol>
            {data.catatan_mutasi === "-" ? (
              <CBadge className="py-2 px-3" color="warning" shape="pill">
                Belum Diisi,{" "}
                <a
                  href="."
                  onClick={(e) => {
                    e.preventDefault();
                    goToEdit(data.id_duk);
                  }}
                >
                  Klik Disini
                </a>{" "}
                untuk mengubah
              </CBadge>
            ) : (
              data.catatan_mutasi
            )}
          </CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>TMT. CPNS</strong>
          </CCol>
          <CCol>{data.tmt_cpns}</CCol>
        </CRow>
      </div>
    </>
  );

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Daftar Urut Kepangkatan Pegawai Negeri Sipil</h3>
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
              // paginationRowsPerPageOptions={[5, 10, 15]}
              // paginationPerPage={5}
              paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={SubHeaderComponentMemo}
              expandableRows={true}
              expandOnRowClicked
              highlightOnHover
              expandableRowsComponent={<ExpandableComponent />}
            />
          ) : (
            <>
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
            </>
          )}
        </CCardBody>
      </CCard>
    </>
  );
};

export default DukPNS;
