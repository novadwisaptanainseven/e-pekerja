import { cilInfo, cilPen, cilPrint } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CBadge,
  CButton,
  CButtonGroup,
} from "@coreui/react";
import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import exportExcel from "src/context/actions/DownloadFile/Excel/Pegawai/exportExcel";
import printMutasiPegawai from "src/context/actions/DownloadFile/printMutasiPegawai";
import { batalkanMutasi } from "src/context/actions/Mutasi/batalkanMutasi";
import { getMutasi } from "src/context/actions/Mutasi/getMutasi";
import { GlobalContext } from "src/context/Provider";
import customStyles from "src/reusable/customStyles";
import FilterPencarianTanggal from "src/reusable/FilterPencarianTanggal";
import FilterComponent from "src/reusable/FilterSearchComponent/FilterComponent";
import Loading from "src/reusable/Loading";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(swal2);

const Mutasi = () => {
  const history = useHistory();
  // const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const { mutasiState, mutasiDispatch } = useContext(GlobalContext);
  const { data, loading } = mutasiState;
  const [paramsFilter, setParamsFilter] = useState({
    bulan: "",
    tahun: "",
  });

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/mutasi/edit/${id}`);
  };

  const goToDetail = (id) => {
    history.push(`/epekerja/admin/mutasi/detail/${id}`);
  };

  useEffect(() => {
    // Get all mutasi
    getMutasi(mutasiDispatch);
  }, [mutasiDispatch]);

  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      width: "50px",
    },
    {
      name: "NIP/NIK",
      sortable: true,
      wrap: true,
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
      wrap: true,
    },
    {
      name: "Tgl. Mutasi",
      selector: "tgl_mutasi",
      sortable: true,
      wrap: true,
      cell: (row) => format(new Date(row.tgl_mutasi), "dd/MM/yyyy"),
    },
    {
      name: "Status",
      sortable: true,
      wrap: true,
      cell: (row) => {
        let currentTimestamp = Date.parse(new Date());
        let tglMutasiTimestamp = Date.parse(new Date(row.tgl_mutasi));
        if (currentTimestamp < tglMutasiTimestamp) {
          return (
            <>
              <CBadge color="primary" shape="pill" className="px-2 py-2">
                Akan Mutasi
              </CBadge>
            </>
          );
        } else {
          return (
            <CBadge color="dark" shape="pill" className="px-2 py-2">
              Mutasi
            </CBadge>
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
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents" className="my-1">
          <CButtonGroup className="mb-1">
            <CButton
              color="info"
              className="btn btn-sm"
              onClick={() => goToDetail(row.id_mutasi)}
            >
              <CIcon content={cilInfo} color="white" />
            </CButton>
            <CButton
              color="success"
              className="btn btn-sm"
              onClick={() => goToEdit(row.id_mutasi)}
            >
              <CIcon content={cilPen} color="white" />
            </CButton>
          </CButtonGroup>
          <CButton
            color="dark"
            className="btn btn-sm"
            onClick={() => handleBatalkanMutasi(row.id_mutasi)}
          >
            Batalkan Mutasi
          </CButton>
        </div>
      ),
    },
  ];

  const SubHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    const goToTambah = (id) => {
      history.push(`/epekerja/admin/mutasi/tambah`);
    };

    return (
      <>
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <CButton type="button" color="primary" onClick={goToTambah}>
            Tambah Mutasi
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
              onClick={() => printMutasiPegawai(paramsFilter)}
            >
              PDF <CIcon content={cilPrint} />
            </CButton>

            <CButton
              type="button"
              color="success"
              className="ml-2"
              onClick={() =>
                exportExcel(
                  "mutasi-pegawai",
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

  // Konfirmasi batalkan status mutasi
  const handleBatalkanMutasi = (id) => {
    MySwal.fire({
      icon: "warning",
      title: "Anda yakin ingin membatalkan mutasi untuk pegawai ini ?",
      text: "Jika yakin, klik YA",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YA",
    }).then((res) => {
      if (res.isConfirmed) {
        // Batalkan pensiun
        batalkanMutasi(id, mutasiDispatch);
        MySwal.fire({
          icon: "success",
          title: "Sukses",
          text: "Mutasi Berhasil Dibatalkan",
        });
      }
    });
  };

  // Handle reset filter pencarian
  const handleResetFilter = () => {
    getMutasi(mutasiDispatch);
  };

  // Handle filter pencarian
  const handleFilterCari = (e) => {
    e.preventDefault();

    getMutasi(mutasiDispatch, paramsFilter);
  };

  return (
    <div>
      <CCard>
        <CCardHeader>
          <h3>Data Mutasi</h3>
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
              paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={SubHeaderComponentMemo}
              highlightOnHover
            />
          ) : loading ? (
            <Loading />
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
    </div>
  );
};

export default Mutasi;
