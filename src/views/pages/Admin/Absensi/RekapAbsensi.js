import React, { useContext, useEffect, useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CForm,
  CRow,
  CCol,
  CCollapse,
  CCardFooter,
  CPopover,
  CFormGroup,
  CLabel,
  CSelect,
} from "@coreui/react";
import DataTable from "react-data-table-component";
// import styled from "styled-components";
import CIcon from "@coreui/icons-react";
import { cilPrint } from "@coreui/icons";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import styled from "styled-components";
import { GlobalContext } from "src/context/Provider";
import { getAllRekapAbsensiPerTahun } from "src/context/actions/Absensi/getAllRekapAbsensiPerTahun";
import { LoadAnimationBlue } from "src/assets";
import { printRekapAbsensiByStatusPegawai } from "src/context/actions/DownloadFile/printAbsensi";
import { printRekapAbsensiByIdPegawai } from "src/context/actions/DownloadFile/printAbsensiByIdPegawai";
import { getAllRekapAbsensiByDate } from "src/context/actions/Absensi/getAllRekapAbsensiByDate";
import { printRekapAbsensiByDate } from "src/context/actions/DownloadFile/printAbsensiByDate";

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

// Komponen Kalender
const Kalender = ({ handleDateChange, state }) => {
  return (
    <>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => handleDateChange(item)}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </>
  );
};
const MemoizeKalender = React.memo(Kalender);

const RekapAbsensi = () => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [dataTahun, setDataTahun] = useState(new Date().getFullYear());
  const [collapse2, setCollapse2] = useState(false);
  const { rekapAbsensiState, rekapAbsensiDispatch } = useContext(GlobalContext);
  const { data, loading } = rekapAbsensiState;
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [formattedDate, setFormattedDate] = useState({
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    // Get rekap absensi per tahun
    if (dataTahun) {
      getAllRekapAbsensiPerTahun(rekapAbsensiDispatch, dataTahun);
      setFormattedDate({
        startDate: "",
        endDate: "",
      });
    }
  }, [rekapAbsensiDispatch, dataTahun]);

  useEffect(() => {
    if (formattedDate.startDate && formattedDate.endDate) {
      getAllRekapAbsensiByDate(rekapAbsensiDispatch, formattedDate);
      setDataTahun("");
    }
  }, [formattedDate, rekapAbsensiDispatch]);

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
      name: "Nama",
      selector: "nama",
      sortable: true,
      // maxWidth: "150px",
      wrap: true,
    },
    {
      name: "Jabatan",
      selector: "jabatan",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
    },
    {
      name: "Hadir",
      selector: "hadir",
      sortable: true,
      wrap: true,
      maxWidth: "80px",
    },
    {
      name: "Izin",
      selector: "izin",
      sortable: true,
      wrap: true,
      maxWidth: "80px",
    },
    {
      name: "Sakit",
      selector: "sakit",
      sortable: true,
      wrap: true,
      maxWidth: "80px",
    },
    {
      name: "Cuti",
      selector: "cuti",
      sortable: true,
      wrap: true,
      maxWidth: "80px",
    },
    {
      name: "Tanpa Keterangan",
      selector: "tanpa_keterangan",
      sortable: true,
      wrap: true,
      maxWidth: "200px",
    },
    {
      maxWidth: "180px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <CButton
            color="warning"
            className="text-white mr-1"
            onClick={() => printRekapAbsensiByIdPegawai(row.id_pegawai)}
          >
            Cetak <CIcon content={cilPrint} />
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
    // const cetakRekapAbsensi = () => {
    //   printRekapAbsensiByStatusPegawai("semua", dataTahun);
    // };

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
        {/* <CPopover content="Cetak Rekapan Absensi Pegawai">
          <CButton
            type="button"
            color="info"
            className="ml-2"
            onClick={() => cetakRekapAbsensi()}
          >
            <span className="my-text-button">Cetak Rekapan Absensi</span>{" "}
            <CIcon content={cilPrint} />
          </CButton>
        </CPopover> */}
      </>
    );
  }, [filterText, resetPaginationToggle]);

  const handleDateChange = React.useCallback(
    (item) => {
      setState([item.selection]);
      let timestampStartDate = Date.parse(item.selection.startDate);
      let timestampEndDate = Date.parse(item.selection.endDate);

      let startDate = format(timestampStartDate, "Y-MM-dd");
      let endDate = format(timestampEndDate, "Y-MM-dd");

      setFormattedDate({
        ...formattedDate,
        startDate: startDate,
        endDate: endDate,
      });
    },
    [formattedDate]
  );

  // Mencetak option - option dari select filter tahun
  const filterTahun = () => {
    let first_year = 2015;
    let current_year = new Date().getFullYear();
    // let range_year = current_year - first_year;
    let arr = [];

    for (let i = first_year; i <= current_year; i++) {
      arr.push(i);
    }

    return arr;
  };

  // handle change of Filter Tahun
  const handleChangeFilterTahun = (e) => {
    setDataTahun(e.target.value);
  };

  // Tombol untuk menampilkan data berdasarkan filter Tahun
  // const handleOnTampilkanDataTahun = () => {
  //   console.log(dataTahun);
  // };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between my-card-header">
          <div className="title mb-2">
            <h3>Rekap Absensi Pegawai</h3>
          </div>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol md="6">
              <CCard className="shadow">
                <CCardHeader className="bg-dark">
                  <h5 className="mb-0">Filter berdasarkan per Tahun</h5>
                </CCardHeader>
                <CCollapse show={collapse2}>
                  <CCardBody>
                    <CForm>
                      <CFormGroup>
                        <CLabel>Masukkan tahun</CLabel>
                        <CSelect
                          costum
                          name="filter_tahun"
                          id="filter_tahun"
                          value={dataTahun}
                          onChange={(e) => handleChangeFilterTahun(e)}
                        >
                          <option value="">--- Pilih Tahun ---</option>
                          {filterTahun().map((item, index) => (
                            <option value={item}>{item}</option>
                          ))}
                        </CSelect>
                      </CFormGroup>
                      {loading && (
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
                      )}
                    </CForm>
                  </CCardBody>
                </CCollapse>
                <CCardFooter className="d-flex justify-content-between">
                  <CButton
                    type="button"
                    color="secondary"
                    onClick={() => setCollapse2(!collapse2)}
                  >
                    {!collapse2 ? "Klik untuk melihat" : "Tutup"}
                  </CButton>
                  <CPopover content="Cetak Rekapan Absensi Pegawai Berdasarkan Tahun">
                    <CButton
                      type="button"
                      color="info"
                      className="ml-2"
                      onClick={() =>
                        printRekapAbsensiByStatusPegawai("semua", dataTahun)
                      }
                    >
                      <span className="my-text-button">
                        Cetak Rekapan Absensi
                      </span>{" "}
                      <CIcon content={cilPrint} />
                    </CButton>
                  </CPopover>
                </CCardFooter>
              </CCard>
            </CCol>
            <CCol md="6">
              <CCard className="shadow">
                <CCardHeader className="bg-dark">
                  <h5 className="mb-0">Filter berdasarkan tanggal</h5>
                </CCardHeader>
                <CCollapse show={collapse2}>
                  <CCardBody>
                    <MemoizeKalender
                      state={state}
                      handleDateChange={handleDateChange}
                    />
                    {loading && (
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
                    )}
                  </CCardBody>
                </CCollapse>
                <CCardFooter className="d-flex justify-content-between">
                  <CButton
                    type="button"
                    color="secondary"
                    onClick={() => setCollapse2(!collapse2)}
                  >
                    {!collapse2 ? "Klik untuk melihat" : "Tutup"}
                  </CButton>
                  <CPopover content="Cetak Rekapan Absensi Pegawai Berdasarkan Filter Tanggal">
                    <CButton
                      type="button"
                      color="info"
                      className="ml-2"
                      onClick={() =>
                        printRekapAbsensiByDate("semua", formattedDate)
                      }
                    >
                      <span className="my-text-button">
                        Cetak Rekapan Absensi
                      </span>{" "}
                      <CIcon content={cilPrint} />
                    </CButton>
                  </CPopover>
                </CCardFooter>
              </CCard>
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
              // paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={SubHeaderComponentMemo}
              highlightOnHover
            />
          ) : (
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
          )}
        </CCardBody>
      </CCard>
    </>
  );
};

export default RekapAbsensi;
