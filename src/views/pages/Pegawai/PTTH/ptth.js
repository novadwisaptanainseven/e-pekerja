import React, { useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CButtonGroup,
  CRow,
  CCol,
  CBadge,
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
      placeholder="Cari pegawai PTTH"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      Reset
    </ClearButton>
  </>
);

const DataPTTH = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const data = [
    {
      no: 1,
      id: 1,
      nik: "19651127 199301 1 001",
      nama: "Nova Dwi Sapta Nain Seven",
      penetap_sk: "Ir. H. Dadang",
      tgl_penetapan_sk: "27 November 2021",
      no_sk: "102321312",
      tgl_mulai_tugas: "10-11-2021",
      tugas: "Programmer",
    },
    {
      no: 2,
      id: 2,
      nik: "19651127 199301 1 001",
      nama: "Ikwal Ramadhani",
      penetap_sk: "Ir. H. Dadang",
      tgl_penetapan_sk: "27 November 2021",
      no_sk: "102321312",
      tgl_mulai_tugas: "10-11-2021",
      tugas: "IT Support",
    },
    {
      no: 3,
      id: 3,
      nik: "19651127 199301 1 001",
      nama: "Iqbal Wahyudi",
      penetap_sk: "Ir. H. Dadang",
      tgl_penetapan_sk: "27 November 2021",
      no_sk: "102321312",
      tgl_mulai_tugas: "10-11-2021",
      tugas: "Programmer",
    },
    {
      no: 4,
      id: 4,
      nik: "19651127 199301 1 001",
      nama: "Deny Wiranto",
      penetap_sk: "-",
      tgl_penetapan_sk: "-",
      no_sk: "-",
      tgl_mulai_tugas: "-",
      tugas: "-",
    },
  ];

  const filteredData = data.filter((item) =>
    // (
    //   item.nama && item.sub_bidang &&
    //   item.nama.toLowerCase().includes(filterText.toLowerCase())

    // )
    {
      if (item.nama && item.tugas) {
        if (
          item.nama.toLowerCase().includes(filterText.toLowerCase()) ||
          item.tugas.toLowerCase().includes(filterText.toLowerCase())
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
    //   name: "NIK",
    //   selector: "nik",
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
      name: "Penetap SK",
      selector: "penetap_sk",
      sortable: true,
      wrap: true,
      cell: (row) => {
        if (row.penetap_sk !== "-") {
          return <>{row.penetap_sk}</>;
        } else {
          return (
            <>
              <CBadge className="py-2 px-3" color="warning" shape="pill">
                Belum Diisi
              </CBadge>
            </>
          );
        }
      },
    },
    {
      name: "Tugas",
      selector: "tugas",
      sortable: true,
      wrap: true,
      cell: (row) => {
        if (row.tugas !== "-") {
          return <>{row.tugas}</>;
        } else {
          return (
            <>
              <CBadge className="py-2 px-3" color="warning" shape="pill">
                Belum Diisi
              </CBadge>
            </>
          );
        }
      },
    },

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
              onClick={() => goToEdit(row.id)}
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

  const goToTambah = () => {
    history.push("/epekerja/admin/pegawai/ptth-tambah");
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/pegawai/ptth-edit/${id}`);
  };

  const goToDetail = (id) => {
    history.push(`/epekerja/admin/pegawai-detail/${id}`);
  };

  const ExpandableComponent = ({ data }) => (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>NIK</strong>
          </CCol>
          <CCol>{data.nik}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>Tgl. Penetapan SK</strong>
          </CCol>
          <CCol>
            {data.tgl_penetapan_sk === "-" ? (
              <CBadge className="py-2 px-3" color="warning" shape="pill">
                Belum Diisi,{" "}
                <a
                  href="."
                  onClick={(e) => {
                    e.preventDefault();
                    goToEdit(data.id);
                  }}
                >
                  Klik Disini
                </a>{" "}
                untuk mengubah
              </CBadge>
            ) : (
              data.tgl_penetapan_sk
            )}
          </CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>No. SK</strong>
          </CCol>
          <CCol>
            {data.no_sk === "-" ? (
              <CBadge className="py-2 px-3" color="warning" shape="pill">
                Belum Diisi,{" "}
                <a
                  href="."
                  onClick={(e) => {
                    e.preventDefault();
                    goToEdit(data.id);
                  }}
                >
                  Klik Disini
                </a>{" "}
                untuk mengubah
              </CBadge>
            ) : (
              data.no_sk
            )}
          </CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>Tgl. Mulai Tugas</strong>
          </CCol>
          <CCol>
            {data.tgl_mulai_tugas === "-" ? (
              <CBadge className="py-2 px-3" color="warning" shape="pill">
                Belum Diisi,{" "}
                <a
                  href="."
                  onClick={(e) => {
                    e.preventDefault();
                    goToEdit(data.id);
                  }}
                >
                  Klik Disini
                </a>{" "}
                untuk mengubah
              </CBadge>
            ) : (
              data.tgl_mulai_tugas
            )}
          </CCol>
        </CRow>
      </div>
    </>
  );

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Data PTTH</h3>
        </CCardHeader>
        <CCardBody>
          <CButton color="primary" className="btn btn-md" onClick={goToTambah}>
            Tambah Data
          </CButton>

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

export default DataPTTH;
