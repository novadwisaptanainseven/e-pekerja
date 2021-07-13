import React, { useContext, useState, useEffect } from "react";

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
} from "@coreui/react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilPrint } from "@coreui/icons";
import { format } from "date-fns";
import printDaftarPegawai from "src/context/actions/DownloadFile/printDaftarPegawai";
import exportExcel from "src/context/actions/DownloadFile/Excel/Pegawai/exportExcel";
import { getPTTB } from "src/context/actions/Pegawai/PTTB/getPTTB";
import FilterComponent from "src/reusable/FilterSearchComponent/FilterComponent";

const DataPTTB = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const { pttbState, pttbDispatch } = useContext(GlobalContext);
  const { data, loading } = pttbState;

  useEffect(() => {
    // Get data PTTH
    getPTTB(pttbDispatch);
  }, [pttbDispatch]);

  const filteredData = data.filter((item) => {
    if (
      item.nama.toLowerCase().includes(filterText.toLowerCase()) ||
      item.nip.toLowerCase().includes(filterText.toLowerCase()) ||
      item.jabatan.toLowerCase().includes(filterText.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      width: "50px",
    },
    {
      name: "Nama",
      selector: "nama",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Penetap SK",
      selector: "penetap_sk",
      sortable: true,
      wrap: true,
    },
    {
      name: "Tugas Pokok",
      selector: "jabatan",
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
              onClick={() => goToDetail(row.id_pegawai)}
            >
              Pembaruan SK
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
          onClick={() => printDaftarPegawai("pttb")}
        >
          PDF <CIcon content={cilPrint} />
        </CButton>

        <CButton
          type="button"
          color="success"
          className="ml-2"
          onClick={() => exportExcel("pttb")}
        >
          Excel <CIcon content={cilPrint} />
        </CButton>
      </>
    );
  }, [filterText, resetPaginationToggle]);

  const goToDetail = (id) => {
    history.push(`/epekerja/admin/pembaruan-sk/pttb/${id}`);
  };

  const ExpandableComponent = ({ data }) => (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>NIPB</strong>
          </CCol>
          <CCol>{data.nip}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>Tgl. Penetapan SK</strong>
          </CCol>
          <CCol>{format(new Date(data.tgl_penetapan_sk), "dd/MM/y")}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>No. SK</strong>
          </CCol>
          <CCol>{data.no_sk}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>Tgl. Mulai Tugas</strong>
          </CCol>
          <CCol>{format(new Date(data.tgl_mulai_tugas), "dd/MM/y")}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>Kontrak Ke</strong>
          </CCol>
          <CCol>{data.kontrak_ke}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>Masa Kerja</strong>
          </CCol>
          <CCol>{data.masa_kerja}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>Gaji Pokok</strong>
          </CCol>
          <CCol>
            {data.gaji_pokok.toLocaleString("id", {
              style: "currency",
              currency: "IDR",
            })}
          </CCol>
        </CRow>
      </div>
    </>
  );

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Pembaruan SK (PTTB)</h3>
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
              expandableRows
              highlightOnHover
              expandOnRowClicked
              expandableRowsComponent={ExpandableComponent}
            />
          ) : loading ? (
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
          ) : (
            <DataTable
              columns={columns}
              data={filteredData}
              noHeader
              responsive={true}
              customStyles={customStyles}
            />
          )}
        </CCardBody>
      </CCard>
    </>
  );
};

export default DataPTTB;
