import React, { useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CForm,
  CModalBody,
  CModalFooter,
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
import TambahAbsen from "./TambahAbsen";
import EditAbsen from "./EditAbsensi";
import styled from "styled-components";

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

const RekapAbsensi = () => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [modalTambah, setModalTambah] = useState(false);
  const [dataTahun, setDataTahun] = useState(null);
  const [collapse2, setCollapse2] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [formattedDate, setFormattedDate] = useState({
    startDate: null,
    endDate: null,
  });

  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });

  const data = [
    {
      no: 1,
      id: 1,
      nama: "Nova Dwi Sapta",
      jabatan: "Programmer",
      hadir: 10,
      izin: 2,
      sakit: 1,
      cuti: 0,
      tanpa_keterangan: 2,
    },
    {
      no: 2,
      id: 2,
      nama: "Ikwal Ramadhani",
      jabatan: "IT Support",
      hadir: 10,
      izin: 2,
      sakit: 1,
      cuti: 0,
      tanpa_keterangan: 2,
    },
    {
      no: 3,
      id: 3,
      nama: "Iqbal Wahyudi",
      jabatan: "Programmer",
      hadir: 10,
      izin: 2,
      sakit: 1,
      cuti: 0,
      tanpa_keterangan: 2,
    },
    {
      no: 4,
      id: 4,
      nama: "Ir. H. Dadang",
      jabatan: "Programmer",
      hadir: 10,
      izin: 2,
      sakit: 1,
      cuti: 0,
      tanpa_keterangan: 2,
    },
  ];

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
      // maxWidth: "150px",
    },
    {
      name: "Izin",
      selector: "izin",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
    },
    {
      name: "Sakit",
      selector: "sakit",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
    },
    {
      name: "Cuti",
      selector: "cuti",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
    },
    {
      name: "Tanpa Keterangan",
      selector: "tanpa_keterangan",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
    },
    {
      maxWidth: "180px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <CButton color="warning" className="text-white mr-1">
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
          <CButton type="button" color="info" className="ml-2">
            <span className="my-text-button">Cetak Rekapan Absensi</span>{" "}
            <CIcon content={cilPrint} />
          </CButton>
        </CPopover>
      </>
    );
  }, [filterText, resetPaginationToggle]);

  const handleDateChange = (item) => {
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
    console.log(formattedDate);
  };

  const Kalender = () => {
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
  const handleOnTampilkanDataTahun = () => {
    console.log(dataTahun);
  };

  // Tombol untuk menampilkan data berdasarkan filter Tahun
  const handleOnTampilkanDataTanggal = () => {
    console.log(formattedDate);
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between my-card-header">
          <div className="title mb-2">
            <h3>Rekap Absensi Pegawai</h3>
          </div>
          {/* <CButton
            color="warning"
            className="text-white"
            style={{ height: "40px", width: "100px" }}
            onClick={goBackToParent}
          >
            Kembali
          </CButton> */}
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol md="6">
              <CCard className="shadow">
                <CCardHeader className="bg-dark">
                  <h5 className="mb-0">Filter berdasarkan Tanggal</h5>
                </CCardHeader>
                <CCollapse show={collapse2}>
                  <CCardBody className="text-center">
                    <p>Atur range tanggal untuk menampilkan data absensi</p>
                    <Kalender />
                    <CButton
                      type="button"
                      color="primary"
                      className="float-right mb-3"
                      onClick={handleOnTampilkanDataTanggal}
                    >
                      Tampilkan Data
                    </CButton>
                  </CCardBody>
                </CCollapse>
                <CCardFooter>
                  <CButton
                    type="button"
                    color="secondary"
                    onClick={() => setCollapse2(!collapse2)}
                  >
                    {!collapse2 ? "Klik untuk melihat" : "Tutup"}
                  </CButton>
                </CCardFooter>
              </CCard>
            </CCol>
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
                      <CButton
                        type="button"
                        color="primary"
                        className="float-right mb-3"
                        onClick={handleOnTampilkanDataTahun}
                      >
                        Tampilkan Data
                      </CButton>
                    </CForm>
                  </CCardBody>
                </CCollapse>
                <CCardFooter>
                  <CButton
                    type="button"
                    color="secondary"
                    onClick={() => setCollapse2(!collapse2)}
                  >
                    {!collapse2 ? "Klik untuk melihat" : "Tutup"}
                  </CButton>
                </CCardFooter>
              </CCard>
            </CCol>
          </CRow>

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
        </CCardBody>
      </CCard>

      {/* Modal Tambah */}
      <CModal
        show={modalTambah}
        onClose={() => setModalTambah(!modalTambah)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Tambah Absensi Pegawai</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <TambahAbsen />
          </CModalBody>
          <CModalFooter>
            <CButton type="submit" color="primary">
              Simpan
            </CButton>{" "}
            <CButton
              type="button"
              color="secondary"
              onClick={() => setModalTambah(!modalTambah)}
            >
              Batal
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>

      {/* Modal Edit Cuti */}
      <CModal
        show={modalEdit.modal}
        onClose={() => {
          setModalEdit({
            ...modalEdit,
            modal: !modalEdit.modal,
            id: null,
          });
        }}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Edit Absensi Pegawai</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <EditAbsen id={modalEdit.id} />
          </CModalBody>
          <CModalFooter>
            <CButton type="submit" color="primary">
              Simpan
            </CButton>{" "}
            <CButton
              type="button"
              color="secondary"
              onClick={() => setModalEdit(!modalEdit.modal)}
            >
              Batal
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </>
  );
};

export default RekapAbsensi;
