import { cilPrint } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CRow,
  CCol,
  CForm,
  CFormGroup,
  CLabel,
  CSelect,
  CCardFooter,
  CAlert,
  CInput,
  CBadge,
} from "@coreui/react";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import { LoadAnimationBlue } from "src/assets";
import { getKGBPegawai } from "src/context/actions/KGB/getKGBPegawai";
import FilterComponent from "src/reusable/FilterSearchComponent/FilterComponent";
import SelectOptionBulan from "src/reusable/SelectOptionBulan";
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
                <CBadge className="py-2 px-3" color="info" shape="pill">
                  Akan Naik Gaji
                </CBadge>
              )}
              {row.status_kgb === "naik-gaji" && (
                <CBadge className="py-2 px-3" color="primary" shape="pill">
                  Naik Gaji
                </CBadge>
              )}
            </div>
          </div>
        );
      },
    },
    {
      name: "Pemberitahuan",
      sortable: true,
      wrap: true,
      width: "350px",
      cell: (row) => {
        return (
          <div>
            <div>
              {row.status_kgb === "akan-naik-gaji" && (
                <span className="text-info font-weight-bold">
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
            {row.status_kgb === "akan-naik-gaji" && (
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
            {row.status_kgb === "sedang-berjalan" && (
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

        <CButton type="button" color="info" className="ml-2">
          PDF <CIcon content={cilPrint} />
        </CButton>
        <CButton type="button" color="success" className="ml-2">
          Excel <CIcon content={cilPrint} />
        </CButton>
      </>
    );
  }, [filterText, resetPaginationToggle]);

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
              <CCard>
                <CCardHeader className="bg-dark">
                  <h5 className="mb-0">Filter Pencarian</h5>
                </CCardHeader>
                <CForm>
                  <CCardBody>
                    <CRow>
                      <CCol>
                        <CFormGroup>
                          <CLabel>Bulan</CLabel>
                          <CSelect
                            required
                            name="bulan"
                            onChange={(e) =>
                              setParamsFilter({
                                ...paramsFilter,
                                [e.target.name]: e.target.value,
                              })
                            }
                          >
                            <option value="">-- Pilih Bulan --</option>
                            <SelectOptionBulan />
                          </CSelect>
                        </CFormGroup>
                      </CCol>
                      <CCol>
                        <CFormGroup>
                          <CLabel>Tahun</CLabel>
                          <CInput
                            required
                            type="number"
                            name="tahun"
                            placeholder={`Masukkan Tahun, exp: ${new Date().getFullYear()}`}
                            onChange={(e) =>
                              setParamsFilter({
                                ...paramsFilter,
                                [e.target.name]: e.target.value,
                              })
                            }
                          />
                          {/* <CSelect name="tahun">
                            <option value="">-- Tahun --</option>
                            <SelectOptionTahun />
                          </CSelect> */}
                        </CFormGroup>
                      </CCol>
                      {/* <CCol>
                        <CFormGroup>
                          <CLabel>Status KGB</CLabel>
                          <CSelect name="status">
                            <option value="">-- Status --</option>
                            <option value="kgb-aktif">Sedang Berjalan</option>
                            <option value="kgb-akan">Akan Naik Gaji</option>
                          </CSelect>
                        </CFormGroup>
                      </CCol> */}
                    </CRow>
                  </CCardBody>
                  <CCardFooter className="text-right">
                    <CButton
                      type="submit"
                      color="primary"
                      className="mr-2"
                      onClick={(e) => handleFilterCari(e)}
                      disabled={
                        paramsFilter.bulan && paramsFilter.tahun ? false : true
                      }
                    >
                      Cari
                    </CButton>
                    <CButton color="warning" onClick={handleResetFilter}>
                      Reset
                    </CButton>
                  </CCardFooter>
                </CForm>
              </CCard>
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
                  expandableRowsComponent={<ExpandableComponent />}
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
