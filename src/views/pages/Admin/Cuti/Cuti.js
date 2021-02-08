import React, { useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CPopover,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilGroup } from "@coreui/icons";
import DaftarPegawaiCuti from "./DaftarPegawaiCuti";

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

const Cuti = () => {
  const [modalCuti, setModalCuti] = useState(false);
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
      jenis_cuti: "Cuti Isolasi Mandiri",
      tgl_mulai: "10-09-2021",
      tgl_selesai: "24-09-2021",
      lama_cuti: "14 Hari",
      status_cuti: 1,
      keterangan: "Sedang Isolasi Mandiri selam 14 hari",
    },
    {
      no: 2,
      id: 2,
      nip: "19651127 199301 1 001",
      nama: "Nova Dwi Sapta",
      jabatan: "Programmer",
      jenis_cuti: "Cuti Liburan",
      tgl_mulai: "10-09-2021",
      tgl_selesai: "10-10-2021",
      lama_cuti: "1 Bulan",
      status_cuti: 2,
      keterangan: "Liburan ke luar negeri",
    },
    {
      no: 3,
      id: 3,
      nip: "19651127 199301 1 001",
      nama: "Ikwal Ramadhani",
      jabatan: "IT Support",
      jenis_cuti: "Cuti Liburan",
      tgl_mulai: "10-09-2021",
      tgl_selesai: "10-10-2021",
      lama_cuti: "1 Bulan",
      status_cuti: 0,
      keterangan: "Liburan ke luar negeri",
    },
  ];

  const filteredData = data.filter((item) =>
    // (
    //   item.nama && item.sub_bidang &&
    //   item.nama.toLowerCase().includes(filterText.toLowerCase())

    // )
    {
      if (item.nama) {
        if (item.nama.toLowerCase().includes(filterText.toLowerCase())) {
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
      wrap: true,
      width: "50px",
    },
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
      maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <CButton color="info" onClick={() => goToRiwayatCuti(row.id)}>
            Buat Cuti
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

        <CPopover content="Untuk melihat daftar pegawai yang sedang cuti">
          <CButton
            type="button"
            color="warning"
            className="ml-2"
            onClick={() => setModalCuti(!modalCuti)}
          >
            <span className="my-text-button">Daftar Pegawai Cuti</span>{" "}
            <CIcon content={cilGroup} /> (3)
          </CButton>
        </CPopover>

        {/* <CButton type="button" color="info" className="ml-2">
          <span class="my-text-button">Cetak</span> <CIcon content={cilPrint} />
        </CButton> */}
      </>
    );
  }, [filterText, resetPaginationToggle, modalCuti]);

  const goToRiwayatCuti = (id) => {
    history.push(`/epekerja/admin/cuti-pegawai/${id}`);
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Cuti Pegawai</h3>
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
            highlightOnHover
          />
        </CCardBody>
      </CCard>

      {/* Modal Cuti */}
      <CModal
        show={modalCuti}
        onClose={() => setModalCuti(!modalCuti)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Daftar Pegawai Cuti</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <DaftarPegawaiCuti />
        </CModalBody>
        <CModalFooter>
          <CButton type="submit" color="primary">
            Simpan
          </CButton>{" "}
          <CButton
            type="button"
            color="secondary"
            onClick={() => setModalCuti(!modalCuti)}
          >
            Batal
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Cuti;
