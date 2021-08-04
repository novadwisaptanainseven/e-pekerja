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
} from "@coreui/react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilPrint } from "@coreui/icons";
import { getAllPegawai } from "src/context/actions/Pegawai/SemuaPegawai/getAllPegawai";
import FilterComponent from "src/reusable/FilterSearchComponent/FilterComponent";
import FilterPrint from "./FilterPrint";

const SemuaPegawai = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const { pegawaiState, pegawaiDispatch } = useContext(GlobalContext);
  const { data, loading } = pegawaiState;
  const [modalPrint, setModalPrint] = useState({
    type: "",
    modal: false,
  });

  useEffect(() => {
    // Get semua pegawai
    getAllPegawai(pegawaiDispatch);
  }, [pegawaiDispatch]);

  const filteredData = data.filter((item) =>
    // (
    //   item.nama && item.sub_bidang &&
    //   item.nama.toLowerCase().includes(filterText.toLowerCase())

    // )
    {
      if (item.nama && item.bidang && item.jabatan) {
        if (
          item.nama.toLowerCase().includes(filterText.toLowerCase()) ||
          item.bidang.toLowerCase().includes(filterText.toLowerCase()) ||
          item.jabatan.toLowerCase().includes(filterText.toLowerCase())
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
      wrap: true,
    },
    {
      name: "Bidang",
      selector: "bidang",
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
              Kelengkapan
            </CButton>
            {/* <CButton
              color="success"
              className="btn btn-sm"
              onClick={() => {
                if (row.id_status_pegawai === 1) {
                  goToEditPNS(row.id_pegawai);
                } else if (row.id_status_pegawai === 2) {
                  goToEditPTTH(row.id_pegawai);
                } else if (row.id_status_pegawai === 3) {
                  goToEditPTTB(row.id_pegawai);
                }
              }}
            >
              <CIcon content={cilPen} color="white" />
            </CButton> */}
            {/* <CButton
              color="danger"
              className="btn btn-sm"
              onClick={() => handleDelete(row.id_pegawai)}
            >
              <CIcon content={cilTrash} color="white" />
            </CButton> */}
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
          onClick={() =>
            setModalPrint({ ...modalPrint, type: "print", modal: true })
          }
          // onClick={() => printDaftarPegawai("semua-pegawai")}
        >
          PDF <CIcon content={cilPrint} />
        </CButton>

        <CButton
          type="button"
          color="success"
          className="ml-2"
          onClick={() =>
            setModalPrint({
              ...modalPrint,
              type: "excel",
              modal: true,
            })
          }
        >
          Excel <CIcon content={cilPrint} />
        </CButton>
      </>
    );
  }, [filterText, resetPaginationToggle, modalPrint]);

  const goToDetail = (id) => {
    history.push(`/epekerja/admin/pegawai-detail/${id}`);
  };

  const ExpandableComponent = ({ data }) => {
    return (
      <>
        <div style={{ padding: "10px 63px" }}>
          <CRow className="mb-1">
            <CCol md="2">
              <strong>{data.nip ? "NIP" : "NIK"}</strong>
            </CCol>
            <CCol>{data.nip ? data.nip : data.nik}</CCol>
          </CRow>
          <CRow className="mb-1">
            <CCol md="2">
              <strong>No. HP</strong>
            </CCol>
            <CCol>{data.no_hp}</CCol>
          </CRow>
          <CRow className="mb-1">
            <CCol md="2">
              <strong>Status Pegawai</strong>
            </CCol>
            <CCol>{data.status_pegawai}</CCol>
          </CRow>
        </div>
      </>
    );
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Semua Data Pegawai</h3>
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
              expandOnRowClicked
              highlightOnHover
              expandableRowsComponent={<ExpandableComponent />}
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

      {/* Modal Print */}
      <FilterPrint modal={modalPrint} setModal={setModalPrint} />
    </>
  );
};

export default SemuaPegawai;
