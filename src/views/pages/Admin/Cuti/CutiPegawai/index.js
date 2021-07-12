import { cilPrint } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CCard,
  CButton,
  CCardHeader,
  CCardBody,
  CCol,
  CRow,
  CAlert,
  CBadge,
} from "@coreui/react";
import { format } from "date-fns";
import React, { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import { LoadAnimationBlue } from "src/assets";
import { getPegawaiStatusCuti } from "src/context/actions/Cuti/getPegawaiStatusCuti ";
import exportExcel from "src/context/actions/DownloadFile/Excel/Pegawai/exportExcel";
import printPegawaiStatusCuti from "src/context/actions/DownloadFile/printPegawaiStatusCuti";
import FilterPencarianTanggal from "src/reusable/FilterPencarianTanggal";
import FilterComponent from "src/reusable/FilterSearchComponent/FilterComponent";
import ModalKirimWa from "./ModalKirimWa";

const CutiPegawai = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [paramsFilter, setParamsFilter] = useState({
    bulan: "",
    tahun: "",
  });
  const [modalKirimWa, setModalKirimWa] = useState({
    data: null,
    modal: false,
  });

  // Get Pegawai Status Cuti
  useEffect(() => {
    getPegawaiStatusCuti(setLoading, setData);
  }, []);

  const goBackToParent = () => {
    history.push(`/epekerja/admin/cuti`);
  };

  const goToRiwayatCuti = (id) => {
    history.push(`/epekerja/admin/cuti/riwayat/${id}`);
  };

  const filteredData = data.filter((item) => {
    if (item.nik) {
      if (
        item.nik.toLowerCase().includes(filterText.toLowerCase()) ||
        item.nama.toLowerCase().includes(filterText.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      if (
        item.nip.toLowerCase().includes(filterText.toLowerCase()) ||
        item.nama.toLowerCase().includes(filterText.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    }
  });

  // const dummyData = [
  //   {
  //     nip: "1234567",
  //     nama: "Nova Dwi Sapta",
  //     status_cuti: "sedang-cuti",
  //     pemberitahuan: "",
  //     tgl_mulai_cuti: "2021-10-08",
  //     tgl_selesai_cuti: "2021-10-08",
  //     jenis_cuti: "Cuti Tahunan",
  //     keterangan: "Lorem ipsum dolor sit amet",
  //   },
  // ];

  // Columns Datatable
  const columns = [
    {
      name: "Nama/NIP/NIPTTB/NIK",
      selector: "nama",
      sortable: true,
      wrap: true,
      cell: (row) => {
        return (
          <div>
            {row.nama} <br />
            {row.id_status_pegawai === 2 ? row.nik : row.nip}
          </div>
        );
      },
    },
    {
      name: "Status Cuti",
      selector: "status_cuti",
      sortable: true,
      wrap: true,
      cell: (row) => {
        return (
          <div>
            {row.status_cuti === "sedang-cuti" && (
              <CBadge className="py-2 px-3" color="success" shape="pill">
                Sedang Cuti
              </CBadge>
            )}
            {row.status_cuti === "akan-cuti" && (
              <CBadge className="py-2 px-3" color="info" shape="pill">
                Akan Cuti
              </CBadge>
            )}
            {row.status_cuti === "masa-cuti-hampir-selesai" && (
              <CBadge className="py-2 px-3" color="warning" shape="pill">
                Cuti Akan Berakhir
              </CBadge>
            )}
            {row.status_cuti === "masa-cuti-selesai" && (
              <CBadge className="py-2 px-3" color="dark" shape="pill">
                Masa Cuti Selesai
              </CBadge>
            )}
          </div>
        );
      },
    },
    {
      name: "Pemberitahuan",
      width: "450px",
      wrap: true,
      cell: (row) => {
        return (
          <div>
            {row.status_cuti === "akan-cuti" && (
              <span className="text-info font-weight-bold">
                Pegawai ini akan cuti dari tanggal{" "}
                {format(new Date(row.tgl_mulai), "dd/MM/y")} s/d{" "}
                {format(new Date(row.tgl_selesai), "dd/MM/y")}
              </span>
            )}
            {row.status_cuti === "sedang-cuti" && (
              <span className="text-success font-weight-bold">
                Pegawai ini sedang cuti sampai tanggal{" "}
                {format(new Date(row.tgl_selesai), "dd/MM/y")}
              </span>
            )}
            {row.status_cuti === "masa-cuti-hampir-selesai" && (
              <span className="text-warning font-weight-bold">
                Masa cuti pegawai ini akan berakhir pada tanggal{" "}
                {format(new Date(row.tgl_selesai), "dd/MM/y")}
              </span>
            )}
            {row.status_cuti === "masa-cuti-selesai" && (
              <span className="text-dark font-weight-bold">
                Masa cuti pegawai ini telah berakhir
              </span>
            )}
          </div>
        );
      },
    },
    {
      name: "Aksi",
      wrap: true,
      cell: (row) => {
        return (
          <div data-tag="allowRowEvents" className="my-1">
            <CButton
              className="mb-1"
              color="success"
              onClick={() =>
                setModalKirimWa({
                  ...modalKirimWa,
                  data: row,
                  modal: true,
                })
              }
            >
              Kirim (WA)
            </CButton>
            <br />
            <CButton
              color="info"
              onClick={() => goToRiwayatCuti(row.id_pegawai)}
            >
              Riwayat Cuti
            </CButton>
          </div>
        );
      },
    },
  ];

  // Style of Datatables
  const customStyles = {
    headCells: {
      style: {
        fontSize: "1em",
      },
    },
  };

  const SubHeaderComponentMemo = useMemo(() => {
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
          onClick={() => printPegawaiStatusCuti(paramsFilter)}
        >
          PDF <CIcon content={cilPrint} />
        </CButton>
        <CButton
          type="button"
          color="success"
          className="ml-2"
          onClick={() =>
            exportExcel(
              `pegawai-status-cuti`,
              paramsFilter,
              "filter_bulan_tahun"
            )
          }
        >
          Excel <CIcon content={cilPrint} />
        </CButton>
      </>
    );
  }, [filterText, resetPaginationToggle, paramsFilter]);

  const ExpandableComponent = ({ data }) => (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Jenis Cuti</strong>
          </CCol>
          <CCol>{data.jenis_cuti}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Tgl. Mulai Cuti</strong>
          </CCol>
          <CCol>{format(new Date(data.tgl_mulai), "dd/MM/yyyy")}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Tgl. Selesai Cuti</strong>
          </CCol>
          <CCol>{format(new Date(data.tgl_selesai), "dd/MM/yyyy")}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Keterangan</strong>
          </CCol>
          <CCol>{data.keterangan}</CCol>
        </CRow>
      </div>
    </>
  );

  // Handle reset filter pencarian
  const handleResetFilter = () => {
    getPegawaiStatusCuti(setLoading, setData);
  };

  // Handle filter pencarian
  const handleFilterCari = (e) => {
    e.preventDefault();

    getPegawaiStatusCuti(setLoading, setData, paramsFilter);
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between my-card-header">
          <div className="title mb-2">
            <h3>Semua Cuti Pegawai</h3>
          </div>
          <CButton
            color="warning"
            className="text-white"
            style={{ height: "40px", width: "100px" }}
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
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
            <CCol>
              <CAlert color="info">
                <h4>Keterangan Status Cuti</h4>
                <hr />
                <table>
                  <tr>
                    <th valign="top" width="150px">
                      Sedang Cuti
                    </th>
                    <th valign="top" width="30px">
                      {" "}
                      :{" "}
                    </th>
                    <td>Pegawai tersebut sedang dalam masa cuti</td>
                  </tr>
                  <tr>
                    <th valign="top">Akan Cuti</th>
                    <th valign="top" width="30px">
                      {" "}
                      :{" "}
                    </th>
                    <td>
                      Pegawai tersebut akan cuti pada tanggal yang telah
                      ditentukan
                    </td>
                  </tr>
                  <tr>
                    <th valign="top">Masa Cuti Selesai</th>
                    <th valign="top" width="30px">
                      {" "}
                      :{" "}
                    </th>
                    <td>Masa cuti pegawai tersebut telah habis</td>
                  </tr>
                </table>
              </CAlert>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              {loading ? (
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
                  expandableRows
                  expandableRowsComponent={ExpandableComponent}
                  expandOnRowClicked
                  highlightOnHover
                />
              )}
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      {/* Modal Kirim WA */}
      <ModalKirimWa modal={modalKirimWa} setModal={setModalKirimWa} />
    </>
  );
};

export default CutiPegawai;
