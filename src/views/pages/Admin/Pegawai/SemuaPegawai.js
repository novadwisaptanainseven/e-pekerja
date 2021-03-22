import React, { useContext, useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
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
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilPrint } from "@coreui/icons";
import { getAllPegawai } from "src/context/actions/Pegawai/SemuaPegawai/getAllPegawai";
import printDaftarPegawai from "src/context/actions/DownloadFile/printDaftarPegawai";

const MySwal = withReactContent(swal2);

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

const SemuaPegawai = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const { pegawaiState, pegawaiDispatch } = useContext(GlobalContext);
  const { data } = pegawaiState;

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
          onClick={() => printDaftarPegawai("semua-pegawai")}
        >
          Cetak <CIcon content={cilPrint} />
        </CButton>
      </>
    );
  }, [filterText, resetPaginationToggle]);

  // const goToTambah = () => {
  //   history.push("/epekerja/admin/pegawai-tambah");
  // };

  const goToEditPNS = (id) => {
    history.push(`/epekerja/admin/pegawai-edit/${id}`);
  };
  const goToEditPTTH = (id) => {
    history.push(`/epekerja/admin/pegawai/ptth-edit/${id}`);
  };
  const goToEditPTTB = (id) => {
    history.push(`/epekerja/admin/pegawai/pttb-edit/${id}`);
  };

  const goToDetail = (id) => {
    history.push(`/epekerja/admin/pegawai-detail/${id}`);
  };

  // Menangani tombol hapus
  // const handleDelete = (id) => {
  //   MySwal.fire({
  //     icon: "warning",
  //     title: "Anda yakin ingin menghapus data ini ?",
  //     text: "Jika yakin, klik YA",
  //     showConfirmButton: true,
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "YA",
  //   }).then((res) => {
  //     if (res.isConfirmed) {
  //       // Memanggil method deletePNS untuk menghapus data PNS
  //       deletePNS(id, pnsDispatch);
  //       MySwal.fire({
  //         icon: "success",
  //         title: "Terhapus",
  //         text: "Data berhasil dihapus",
  //       });
  //     }
  //   });
  // };

  const ExpandableComponent = ({ data }) => {
    // let status_pegawai = "";
    // if (data.status_pegawai === 1) {
    //   status_pegawai = "PNS";
    // } else if (data.status_pegawai === 2) {
    //   status_pegawai = "PTTH";
    // } else if (data.status_pegawai === 3) {
    //   status_pegawai = "PTTB";
    // }
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

export default SemuaPegawai;
