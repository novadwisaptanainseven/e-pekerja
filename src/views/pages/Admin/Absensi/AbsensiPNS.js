import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CPopover,
  CCol,
  CRow,
  CForm,
  CSelect,
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from "@coreui/react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilPrint } from "@coreui/icons";
import { format } from "date-fns";

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

const AbsensiPNS = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const data = [
    {
      no: 1,
      id: 1,
      nip: "19651127 199301 1 001",
      nama: "Ir. H. Dadang Airlangga N, MMT",
      jabatan: "Kepala Dinas",
      year: 2021,
      month: 2,
      tgl_absen: {
        1: 1,
        2: 2,
        3: 1,
        4: 3,
        5: 5,
      },
    },
    {
      no: 2,
      id: 2,
      nip: "19651127 199301 1 001",
      nama: "Nova Dwi Sapta",
      jabatan: "Programmer",
      year: 2021,
      month: 2,
      tgl_absen: {
        1: 1,
        2: 2,
        3: 1,
        4: 3,
        5: 5,
      },
    },
    {
      no: 3,
      id: 3,
      nip: "19651127 199301 1 001",
      nama: "Ikwal Ramadhani",
      jabatan: "IT Support",
      year: 2021,
      month: 2,
      tgl_absen: {
        1: 1,
        2: 2,
        3: 1,
        4: 3,
        5: 5,
      },
    },
    {
      no: 4,
      id: 4,
      nip: "19651127 199301 1 001",
      nama: "Iqbal Wahyudi",
      jabatan: "Programmer",
      year: 2021,
      month: 2,
      tgl_absen: {
        1: 1,
        2: 2,
        3: 1,
        4: 3,
        5: 5,
      },
    },
  ];

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
            onClick={() => goToRiwayat(row.id)}
          >
            Absensi
          </CButton>
          {/* <CButton
              color="danger"
              className="btn btn-sm"
              onClick={() =>
                window.confirm(
                  `Anda yakin ingin hapus data dengan id : ${row.id}`
                )
              }
            >
              <CIcon content={cilTrash} color="white" />
            </CButton> */}
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
          <CButton utton type="button" color="info" className="ml-2">
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

  // Expandable Component
  const ExpandableComponent = ({ data }) => {
    const [days, setDays] = useState([]);
    const current_year = new Date().getFullYear();
    const current_month = new Date().getMonth();
    const [filterYear, setFilterYear] = useState(current_year);
    const [filterMonth, setFilterMonth] = useState(current_month);
    const [saveDay, setSaveDay] = useState({});

    // Get Years
    const years = [];
    const old_year = 2015;
    let range_year = current_year - old_year;

    // useEffect(() => {
    //   if (!days.length > 0) {
    //     getDays(current_month, current_year);
    //   }

    //   return () => {
    //     setDays([]);
    //   };
    // }, [days]);

    // Isi tahun dari 2015 sd tahun sekarang
    for (let i = 0; i <= range_year; i++) {
      years.push(old_year + i);
    }

    // Get Months
    const months = [];

    // Isi bulan dari Januari sd Desember
    for (let i = 0; i < 12; i++) {
      months.push(format(new Date(old_year, i, 1), "MMMM"));
    }

    // Get total days
    const getDays = (month, year) => {
      let arr_index = [];
      for (let i = 1; i <= getDaysInMonth(month + 1, year); i++) {
        arr_index.push(i);
      }
      setDays(arr_index);
    };
    // const days = [];
    // Dapatkan jumlah tanggal setiap bulan berdasarkan tahun
    const getDaysInMonth = (month, year) => {
      return new Date(year, month, 0).getDate();
    };

    // console.log(days);

    // Tangani perubahan nilai pada select
    const handleChangeYear = (e) => {
      setSaveDay({});
      setDays([]);
      setFilterYear(parseInt(e.target.value));

      // getDays(filterMonth, filterYear);
    };

    const handleChangeMonth = (e) => {
      setSaveDay({});
      setDays([]);
      setFilterMonth(parseInt(e.target.value));

      // getDays(filterMonth, filterYear);
    };

    const getDaysOnTampil = () => {
      getDays(filterMonth, filterYear);
    };

    const handleOnChangeAbsensi = (e) => {
      setSaveDay({
        ...saveDay,
        year: filterYear,
        month: filterMonth + 1,
        tgl_absen: {
          ...saveDay.tgl_absen,
          [e.target.name]: e.target.value,
        },
      });
    };

    const handleOnSubmit = (e) => {
      e.preventDefault();
      let arr_tgl_absen = [];

      for (const tgl in saveDay.tgl_absen) {
        arr_tgl_absen.push(
          `${tgl}/${saveDay.month}/${saveDay.year} => ${saveDay.tgl_absen[tgl]}`
        );
      }

      console.log(arr_tgl_absen);
    };

    // Ketika pertama kali dirender
    // getDays(current_month, current_year);

    return (
      <>
        <div style={{ padding: "10px 63px" }}>
          <CForm>
            <CRow>
              <CCol>
                <CFormGroup row>
                  <CCol md="2" className="mb-2">
                    <CSelect
                      custom
                      name="year"
                      id="year"
                      onChange={(e) => handleChangeYear(e)}
                      // onClick={(e) => handleChangeYear(e)}
                      defaultValue={current_year}
                    >
                      {years.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </CSelect>
                  </CCol>
                  <CCol md="2" className="mb-2">
                    <CSelect
                      custom
                      name="month"
                      id="month"
                      onChange={(e) => handleChangeMonth(e)}
                      // onClick={(e) => handleChangeMonth(e)}
                      defaultValue={current_month}
                    >
                      {months.map((item, index) => (
                        <option key={index} value={index}>
                          {item}
                        </option>
                      ))}
                    </CSelect>
                  </CCol>
                  <CCol>
                    <CButton
                      type="button"
                      color="info"
                      onClick={getDaysOnTampil}
                      className="mr-2"
                    >
                      Tampilkan Tanggal
                    </CButton>

                    <CButton
                      type="submit"
                      color="warning"
                      onClick={(e) => handleOnSubmit(e)}
                    >
                      Simpan Absen
                    </CButton>
                  </CCol>
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              {days.length > 0 &&
                days.map((item, index) => {
                  return (
                    <>
                      <CCol lg="2" md="3" sm="3" xs="6" key={index} className="mb-2">
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>{item}</CInputGroupText>
                          </CInputGroupPrepend>
                          <CSelect
                            custom
                            defaultValue={
                              data.tgl_absen[item] ? data.tgl_absen[item] : ""
                            }
                            name={item}
                            id={item}
                            onChange={(e) => handleOnChangeAbsensi(e)}
                          >
                            <option value="">-- Absensi --</option>
                            <option value="0">Tidak Hadir</option>
                            <option value="1">Hadir</option>
                            <option value="2">Izin</option>
                            <option value="3">Sakit</option>
                            <option value="4">Cuti</option>
                            <option value="5">TK</option>
                          </CSelect>
                        </CInputGroup>
                      </CCol>
                    </>
                  );
                })}
            </CRow>
          </CForm>
        </div>
      </>
    );
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Absensi Pegawai Negeri Sipil (PNS)</h3>
        </CCardHeader>
        <CCardBody>
          {/* <CButton color="primary" className="btn btn-md" onClick={goToTambah}>
            Tambah Data
          </CButton> */}

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
        </CCardBody>
      </CCard>
    </>
  );
};

export default AbsensiPNS;
