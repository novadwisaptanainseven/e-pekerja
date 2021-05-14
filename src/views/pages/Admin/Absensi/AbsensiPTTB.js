import React, { useContext, useEffect, useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CPopover,
  CRow,
  CCol,
} from "@coreui/react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilPrint } from "@coreui/icons";
import ExpandableComponent from "./ExpandableComponent";
import { GlobalContext } from "src/context/Provider";
import { LoadAnimationBlue } from "src/assets";
import { printRekapAbsensiByStatusPegawai } from "src/context/actions/DownloadFile/printAbsensi";
import { getPTTB } from "src/context/actions/Pegawai/PTTB/getPTTB";
// const TambahAbsen = React.lazy(() => import("./TambahAbsen"));

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

const AbsensiPTTB = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const { pttbState, pttbDispatch } = useContext(GlobalContext);
  const { data, loading } = pttbState;

  useEffect(() => {
    // Get All Pegawai
    getPTTB(pttbDispatch);
  }, [pttbDispatch]);

  const filteredData = data.filter((item) =>
    // (
    //   item.nama && item.sub_bidang &&
    //   item.nama.toLowerCase().includes(filterText.toLowerCase())

    // )
    {
      if (item.nama && item.nip) {
        if (
          item.nama.toLowerCase().includes(filterText.toLowerCase()) ||
          item.nip.toLowerCase().includes(filterText.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    }
  );

  const columns = [
    {
      name: "NIP",
      selector: "nip",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Nama",
      selector: "nama",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Jabatan",
      selector: "jabatan",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <CButton
            color="success"
            className="btn btn-sm"
            onClick={() => goToRiwayat(row.id_pegawai)}
          >
            Absensi
          </CButton>
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

        <CPopover content="Cetak Rekapan Absensi Pegawai">
          <CButton
            utton
            type="button"
            color="info"
            className="ml-2"
            onClick={() => printRekapAbsensiByStatusPegawai("pttb")}
          >
            <span className="my-text-button">Cetak Rekapan Absensi</span>{" "}
            <CIcon content={cilPrint} />
          </CButton>
        </CPopover>
      </>
    );
  }, [filterText, resetPaginationToggle]);

  const goToRiwayat = (id) => {
    history.push(`/epekerja/admin/absensi/riwayat-absensi/${id}`);
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Absensi Pegawai Tidak Tetap Bulanan (PTTB)</h3>
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
              highlightOnHover
            />
          )}
        </CCardBody>
      </CCard>
    </>
  );
};

export default AbsensiPTTB;
