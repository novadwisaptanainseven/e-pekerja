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
import { cilInfo, cilPen } from "@coreui/icons";
import { SampleFotoPegawai } from "src/assets";

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

const Users = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const data = [
    {
      no: 1,
      id: 1,
      nip_nik: "19651127 199301 1 001",
      nama: "Nova Dwi Sapta Nain Seven",
      username: "novadwisapta",
      level: 1,
    },
    {
      no: 2,
      id: 2,
      nip_nik: "19640315 199203 1 014",
      nama: "H. Akhmad Husein, ST, MT",
      username: "akhmadhusein",
      level: 2,
    },
    {
      no: 3,
      id: 3,
      nip_nik: "19660425 199312 1 001",
      nama: "Ikwal Ramadhani",
      tgl_pensiun: "2021-02-02",
      username: "ikwalramadhani",
      level: 2,
    },
  ];

  const filteredData = data.filter((item) =>
    // (
    //   item.nama && item.sub_bidang &&
    //   item.nama.toLowerCase().includes(filterText.toLowerCase())

    // )
    {
      if (item.nama && item.nip_nik && item.username) {
        if (
          item.nama.toLowerCase().includes(filterText.toLowerCase()) ||
          item.username.toLowerCase().includes(filterText.toLowerCase()) ||
          item.nip_nik.toLowerCase().includes(filterText.toLowerCase())
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
    {
      name: "NIP / NIK",
      selector: "nip_nik",
      sortable: true,
      wrap: true,
      // maxWidth: "200px",
    },
    {
      name: "Nama",
      selector: "nama",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Username",
      selector: "username",
      sortable: true,
      wrap: true,
      // maxWidth: "100px",
    },
    {
      name: "Level",
      selector: "level",
      sortable: true,
      wrap: true,
      // maxWidth: "100px",
      cell: (row) => {
        if (row.level === 1) {
          return "Administrator";
        } else {
          return "User";
        }
      },
    },
    {
      maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <CButtonGroup>
            <CButton
              color="info"
              className="btn btn-sm"
              onClick={row.id === 1 ? () => goToAkun() : () => goToDetail(row.id)}
            >
              <CIcon content={cilInfo} color="white" />
            </CButton>
            <CButton
              disabled={row.level !== 1 ? true : false}
              color="success"
              className="btn btn-sm"
              onClick={() => goToEdit(row.id)}
            >
              <CIcon content={cilPen} color="white" />
            </CButton>
            {/* <CButton
              color="danger"
              className="btn btn-sm"
              onClick={() =>
                window.confirm("Anda yakin ingin menghapus data ini ?")
              }
            >
              <CIcon content={cilTrash} color="white" />
            </CButton> */}
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

        {/* <CButton type="button" color="info" className="ml-2">
          Cetak <CIcon content={cilPrint} />
        </CButton> */}
      </>
    );
  }, [filterText, resetPaginationToggle]);

  // const goToTambah = (id) => {
  //   history.push(`/epekerja/admin/pensiun-tambah`);
  // };

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/pensiun-edit/${id}`);
  };
  const goToAkun = () => {
    history.push(`/epekerja/admin/akun`);
  };

  const goToDetail = (id) => {
    history.push(`/epekerja/admin/user-detail/${id}`);
  };

  const ExpandableComponent = ({ data }) => {
    return (
      <>
        <div style={{ padding: "10px 63px" }}>
          <CRow>
            <CCol md="2">
              <strong>Foto Profil</strong>
            </CCol>
            <CCol>
              <img
                className="img-thumbnail"
                width={100}
                src={SampleFotoPegawai}
                alt="foto-profil"
              />
            </CCol>
          </CRow>
        </div>
      </>
    );
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Data Users</h3>
        </CCardHeader>
        <CCardBody>
          {/* <CButton type="button" color="primary" onClick={goToTambah}>
            Tambah Pensiun
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
            expandableRowsComponent={<ExpandableComponent />}
            highlightOnHover
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Users;
