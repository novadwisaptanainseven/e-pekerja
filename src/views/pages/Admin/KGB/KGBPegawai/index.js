import { cilPrint } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CRow,
  CCol,
  CAlert,
  CBadge,
} from "@coreui/react";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import { LoadAnimationBlue } from "src/assets";
import exportExcel from "src/context/actions/DownloadFile/Excel/Pegawai/exportExcel";
import printKGBSemuaPegawai from "src/context/actions/DownloadFile/printKGBSemuaPegawai";
import { getKGBPegawai } from "src/context/actions/KGB/getKGBPegawai";
import FilterPencarianTanggal from "src/reusable/FilterPencarianTanggal";
import FilterComponent from "src/reusable/FilterSearchComponent/FilterComponent";
import ModalKirimWa from "./ModalKirimWa";

const KGBPegawai = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [modalKirimWa, setModalKirimWa] = useState({
    data: null,
    modal: false,
    status: "",
  });
  const [paramsFilter, setParamsFilter] = useState({
    bulan: "",
    tahun: "",
  });

  // Get KGB Pegawai
  useEffect(() => {
    getKGBPegawai(setLoading, setData);
  }, []);

  const goBackToParent = () => {
    history.goBack();
  };

  const goToDaftarKGB = (id) => {
    history.push(`/epekerja/admin/kgb/${id}/daftar`);
  };

  const filteredData = data.filter(
    (item) =>
      item.nama.toLowerCase().includes(filterText.toLowerCase()) ||
      item.nip.toLowerCase().includes(filterText.toLowerCase())
  );

  // Columns Datatable
  const columns = [
    // {
    //   name: "No",
    //   selector: "no",
    //   sortable: true,
    //   wrap: true,
    //   width: "80px",
    // },
    {
      name: "NIP",
      selector: "nip",
      sortable: true,
      wrap: true,
    },
    {
      name: "Nama",
      selector: "nama",
      sortable: true,
      wrap: true,
    },
    {
      name: "Status KGB",
      selector: "status_kgb",
      sortable: true,
      cell: (row) => {
        return (
          <div>
            <div>
              {row.status_kgb === "sedang-berjalan" && (
                <CBadge className="py-2 px-3" color="success" shape="pill">
                  Sedang Berjalan
                </CBadge>
              )}
              {row.status_kgb === "akan-naik-gaji" && (
                <CBadge className="py-2 px-3" color="danger" shape="pill">
                  Akan Naik Gaji
                </CBadge>
              )}
              {row.status_kgb === "naik-gaji" && (
                <CBadge className="py-2 px-3" color="primary" shape="pill">
                  Naik Gaji
                </CBadge>
              )}
              {row.status_kgb === "akan-naik-gaji-2" && (
                <CBadge className="py-2 px-3" color="warning" shape="pill">
                  Akan Naik Gaji
                </CBadge>
              )}
            </div>
          </div>
        );
      },
    },
    {
      name: "Pemberitahuan",
      wrap: true,
      width: "350px",
      cell: (row) => {
        return (
          <div>
            <div>
              {row.status_kgb === "akan-naik-gaji" && (
                <span className="text-danger font-weight-bold">
                  Pegawai ini akan naik gaji pada tanggal{" "}
                  {format(new Date(row.kenaikan_gaji_yad), "dd/MM/y")}
                </span>
              )}
              {row.status_kgb === "naik-gaji" && (
                <span className="text-primary font-weight-bold">
                  Pegawai ini sudah bisa dilakukan kenaikan gaji
                </span>
              )}
              {row.status_kgb === "sedang-berjalan" && (
                <span className="text-success font-weight-bold">
                  Pegawai ini telah diperbarui gajinya
                </span>
              )}
              {row.status_kgb === "akan-naik-gaji-2" && (
                <span className="text-warning font-weight-bold">
                  Pegawai ini dalam waktu dekat akan mengalami kenaikan gaji
                  yaitu pada tanggal{" "}
                  {format(new Date(row.kenaikan_gaji_yad), "dd/MM/y")}
                </span>
              )}
            </div>
          </div>
        );
      },
    },
    {
      name: "Action",
      sortable: true,
      cell: (row) => {
        return (
          <div data-tag="allowRowEvents" className="my-1">
            {(row.status_kgb === "akan-naik-gaji" ||
              row.status_kgb === "akan-naik-gaji-2" ||
              row.status_kgb === "sedang-berjalan") && (
              <CButton
                className="mr-1"
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
            )}
            {row.status_kgb === "naik-gaji" && (
              <>
                <CButton
                  className="mr-1 mb-1"
                  color="info"
                  onClick={() => goToDaftarKGB(row.id_pegawai)}
                >
                  Perbarui Gaji
                </CButton>{" "}
              </>
            )}
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
          onClick={() => printKGBSemuaPegawai(paramsFilter)}
        >
          PDF <CIcon content={cilPrint} />
        </CButton>
        <CButton
          type="button"
          color="success"
          className="ml-2"
          onClick={() =>
            exportExcel(`kgb-pegawai2`, paramsFilter, "filter_bulan_tahun")
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
            <strong>TMT. Kenaikan Gaji</strong>
          </CCol>
          <CCol>{format(new Date(data.tmt_kenaikan_gaji), "dd/MM/y")}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Gaji Pokok Lama</strong>
          </CCol>
          <CCol>
            {data.gaji_pokok_lama.toLocaleString("id", {
              style: "currency",
              currency: "IDR",
            })}
          </CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Gaji Pokok Baru</strong>
          </CCol>
          <CCol>
            {data.gaji_pokok_baru.toLocaleString("id", {
              style: "currency",
              currency: "IDR",
            })}
          </CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Kenaikan Gaji YAD</strong>
          </CCol>
          <CCol>{format(new Date(data.kenaikan_gaji_yad), "dd/MM/y")}</CCol>
        </CRow>
      </div>
    </>
  );

  // Handle reset filter pencarian
  const handleResetFilter = () => {
    getKGBPegawai(setLoading, setData);
  };

  // Handle filter pencarian
  const handleFilterCari = (e) => {
    e.preventDefault();

    getKGBPegawai(setLoading, setData, paramsFilter);
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between my-card-header">
          <div className="title mb-2">
            <h3>Semua Kenaikan Gaji Berkala Pegawai</h3>
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
                <h4>Keterangan Status KGB</h4>
                <hr />
                <table>
                  <tr>
                    <th valign="top" width="150px">
                      Sedang Berjalan
                    </th>
                    <th valign="top" width="30px">
                      {" "}
                      :{" "}
                    </th>
                    <td>Pegawai tersebut gajinya telah diperbarui</td>
                  </tr>
                  <tr>
                    <th valign="top">Akan Naik Gaji</th>
                    <th valign="top" width="30px">
                      {" "}
                      :{" "}
                    </th>
                    <td>
                      Pegawai tersebut akan mengalami kenaikan gaji pada tanggal
                      yang sudah ditentukan
                    </td>
                  </tr>
                  <tr>
                    <th valign="top">Perbarui Gaji</th>
                    <th valign="top" width="30px">
                      {" "}
                      :{" "}
                    </th>
                    <td>
                      Pegawai tersebut telah berada di rentang tanggal kenaikan
                      gaji berkala, sehingga bisa dilakukan kenaikan gaji
                    </td>
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

export default KGBPegawai;
