import React, { useContext, useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CButtonGroup,
  CBadge,
  CRow,
  CCol,
} from "@coreui/react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilPrint, cilInfo, cilPen, cilSend } from "@coreui/icons";
import { GlobalContext } from "src/context/Provider";
import { getPensiun } from "src/context/actions/Pensiun.js/getPensiun";
import { format } from "date-fns";
import { LoadAnimationBlue } from "src/assets";
// import { deletePensiun } from "src/context/actions/Pensiun.js/deletePensiun";
import { batalkanPensiun } from "src/context/actions/Pensiun.js/batalkanPensiun";
import printPensiunPegawai from "src/context/actions/DownloadFile/printPensiunPegawai";
import exportExcel from "src/context/actions/DownloadFile/Excel/Pegawai/exportExcel";
import FilterPencarianTanggal from "src/reusable/FilterPencarianTanggal";
import ModalKirimWa from "./ModalKirimWa";

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

const Pensiun = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const { pensiunState, pensiunDispatch } = useContext(GlobalContext);
  const { data, loading } = pensiunState;
  const [paramsFilter, setParamsFilter] = useState({
    bulan: "",
    tahun: "",
  });
  const [modalKirimWa, setModalKirimWa] = useState({
    data: null,
    modal: false,
  });

  useEffect(() => {
    // Get all pensiun
    getPensiun(pensiunDispatch);
  }, [pensiunDispatch]);

  const filteredData = data.filter((item) => {
    if (item.nama) {
      if (item.nama.toLowerCase().includes(filterText.toLowerCase())) {
        return true;
      }
    }
    return false;
  });

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      width: "80px",
    },
    {
      name: "NIP/NIK",
      selector: "nip",
      sortable: true,
      wrap: true,
      // maxWidth: "200px",
      cell: (row) => {
        if (row.nip) {
          return row.nip;
        } else {
          return row.nik;
        }
      },
    },
    {
      name: "Nama",
      selector: "nama",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Tgl. Pensiun",
      selector: "tgl_pensiun",
      sortable: true,
      wrap: true,
      // maxWidth: "100px",
      cell: (row) => format(new Date(row.tgl_pensiun), "dd/MM/yyyy"),
    },
    {
      name: "Status",
      selector: "status_pensiun",
      sortable: true,
      wrap: true,
      // maxWidth: "100px",
      cell: (row) => {
        let currentTimestamp = Date.parse(new Date());
        let tglPensiunTimestamp = Date.parse(new Date(row.tgl_pensiun));
        if (currentTimestamp < tglPensiunTimestamp) {
          return (
            <>
              <CBadge color="primary" shape="pill" className="px-2 py-2">
                Akan Pensiun
              </CBadge>
            </>
          );
        } else {
          return (
            <>
              <CBadge color="dark" shape="pill" className="px-2 py-2">
                Pensiun
              </CBadge>
            </>
          );
        }
      },
    },
    {
      name: "Keterangan",
      selector: "keterangan",
      wrap: true,
      width: "250px",
    },
    {
      // maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents" className="my-1">
          <CButtonGroup className="mb-1">
            <CButton
              color="info"
              className="btn btn-sm"
              onClick={() => goToDetail(row.id_pensiun)}
            >
              <CIcon content={cilInfo} color="white" />
            </CButton>
            <CButton
              color="success"
              className="btn btn-sm"
              onClick={() => goToEdit(row.id_pensiun)}
            >
              <CIcon content={cilPen} color="white" />
            </CButton>
            <CButton
              color="warning"
              className="btn btn-sm"
              onClick={() =>
                setModalKirimWa({
                  ...modalKirimWa,
                  data: row,
                  modal: true,
                })
              }
            >
              <CIcon content={cilSend} color="white" />
            </CButton>
          </CButtonGroup>
          <CButton
            color="dark"
            className="btn btn-sm"
            onClick={() => handleBatalkanPensiun(row.id_pensiun)}
          >
            Batalkan Pensiun
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

    const goToTambah = (id) => {
      history.push(`/epekerja/admin/pensiun/tambah`);
    };

    return (
      <>
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <CButton type="button" color="primary" onClick={goToTambah}>
            Tambah Pensiun
          </CButton>
          <div className="d-flex">
            <FilterComponent
              onFilter={(e) => setFilterText(e.target.value)}
              onClear={handleClear}
              filterText={filterText}
            />

            <CButton
              type="button"
              color="info"
              className="ml-2"
              onClick={() => printPensiunPegawai(paramsFilter)}
            >
              PDF <CIcon content={cilPrint} />
            </CButton>

            <CButton
              type="button"
              color="success"
              className="ml-2"
              onClick={() =>
                exportExcel(
                  "pensiun-pegawai",
                  paramsFilter,
                  "filter_bulan_tahun"
                )
              }
            >
              Excel <CIcon content={cilPrint} />
            </CButton>
          </div>
        </div>
      </>
    );
  }, [filterText, resetPaginationToggle, history, paramsFilter]);

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/pensiun/edit/${id}`);
  };

  const goToDetail = (id) => {
    history.push(`/epekerja/admin/pensiun/detail/${id}`);
  };

  // hapus data
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
  //       // Delete pesan
  //       deletePensiun(id, pensiunDispatch);
  //       MySwal.fire({
  //         icon: "success",
  //         title: "Terhapus",
  //         text: "Data berhasil dihapus",
  //       });
  //     }
  //   });
  // };

  // Konfirmasi batalkan status pensiun
  const handleBatalkanPensiun = (id) => {
    MySwal.fire({
      icon: "warning",
      title: "Anda yakin ingin membatalkan pensiun untuk pegawai ini ?",
      text: "Jika yakin, klik YA",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YA",
    }).then((res) => {
      if (res.isConfirmed) {
        // Batalkan pensiun
        batalkanPensiun(id, pensiunDispatch);
        MySwal.fire({
          icon: "success",
          title: "Sukses",
          text: "Pensiun Berhasil Dibatalkan",
        });
      }
    });
  };

  // Handle reset filter pencarian
  const handleResetFilter = () => {
    getPensiun(pensiunDispatch);
  };

  // Handle filter pencarian
  const handleFilterCari = (e) => {
    e.preventDefault();

    getPensiun(pensiunDispatch, paramsFilter);
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Data Pensiun</h3>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol md="6">
              <FilterPencarianTanggal
                paramsFilter={paramsFilter}
                setParamsFilter={setParamsFilter}
                handleResetFilter={handleResetFilter}
                handleFilterCari={handleFilterCari}
              />
            </CCol>
          </CRow>
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
              highlightOnHover
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

      {/* Modal Kirim WA */}
      <ModalKirimWa modal={modalKirimWa} setModal={setModalKirimWa} />
    </>
  );
};

export default Pensiun;
