import React, { useState } from "react";
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
import { cilPrint, cilPen, cilTrash } from "@coreui/icons";

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

  const data = [
    {
      no: 1,
      id: 1,
      nip_nik: "19651127 199301 1 001",
      nama: "Ir. H. Dadang Airlangga N, MMT",
      jabatan: "Kepala Dinas",
      sub_bidang: "Pembinaan Permukiman",
      status_pegawai: 1,
      no_hp: "0812323121",
    },
    {
      no: 2,
      id: 2,
      nip_nik: "123445677",
      nama: "Nova Dwi Sapta Nain Seven, S.Tr.Kom",
      jabatan: "Programmer",
      sub_bidang: "Program dan Keuangan",
      status_pegawai: 2,
      no_hp: "0812323121",
    },
    {
      no: 3,
      id: 3,
      nip_nik: "4343123123",
      nama: "Ikwal Ramadhani, S.Tr.Kom",
      jabatan: "IT Support",
      sub_bidang: "Program dan Keuangan",
      status_pegawai: 3,
      no_hp: "0812323121",
    },
  ];

  const filteredData = data.filter((item) =>
    // (
    //   item.nama && item.sub_bidang &&
    //   item.nama.toLowerCase().includes(filterText.toLowerCase())

    // )
    {
      if (item.nama && item.sub_bidang && item.jabatan) {
        if (
          item.nama.toLowerCase().includes(filterText.toLowerCase()) ||
          item.sub_bidang.toLowerCase().includes(filterText.toLowerCase()) ||
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
    // {
    //   name: "NIP/NIK",
    //   selector: "nip_nik",
    //   sortable: true,
    //   wrap: true,
    //   // maxWidth: "200px",
    // },
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
      name: "Sub Bidang",
      selector: "sub_bidang",
      sortable: true,
      wrap: true,
    },
    // {
    //   name: "Status",
    //   selector: "status_pegawai",
    //   sortable: true,
    //   wrap: true,
    //   cell: (row) => {
    //     if (row.status_pegawai === 1) {
    //       return <>PNS</>;
    //     } else if (row.status_pegawai === 2) {
    //       return <>PTTH</>;
    //     } else if (row.status_pegawai === 3) {
    //       return <>PTTB</>;
    //     }
    //   },
    // },
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
              onClick={() => goToDetail(row.id)}
            >
              Kelengkapan
            </CButton>
            <CButton
              color="success"
              className="btn btn-sm"
              onClick={() => {
                if (row.status_pegawai === 1) {
                  goToEditPNS(row.id);
                } else if (row.status_pegawai === 2) {
                  goToEditPTTH(row.id);
                } else if (row.status_pegawai === 3) {
                  goToEditPTTB(row.id);
                }
              }}
            >
              <CIcon content={cilPen} color="white" />
            </CButton>
            <CButton
              color="danger"
              className="btn btn-sm"
              onClick={() =>
                window.confirm(
                  `Anda yakin ingin hapus data dengan id : ${row.id}`
                )
              }
            >
              <CIcon content={cilTrash} color="white" />
            </CButton>
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

        <CButton type="button" color="info" className="ml-2">
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

  const ExpandableComponent = ({ data }) => {
    let status_pegawai = "";
    if (data.status_pegawai === 1) {
      status_pegawai = "PNS";
    } else if (data.status_pegawai === 2) {
      status_pegawai = "PTTH";
    } else if (data.status_pegawai === 3) {
      status_pegawai = "PTTB";
    }
    return (
      <>
        <div style={{ padding: "10px 63px" }}>
          <CRow className="mb-1">
            <CCol md="2">
              <strong>NIP/NIK</strong>
            </CCol>
            <CCol>{data.nip_nik}</CCol>
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
            <CCol>{status_pegawai}</CCol>
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
            expandOnRowClicked
            highlightOnHover
            expandableRowsComponent={<ExpandableComponent />}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default SemuaPegawai;
