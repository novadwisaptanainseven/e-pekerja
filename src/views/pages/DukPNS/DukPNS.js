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
import { cilPrint, cilInfo} from "@coreui/icons";

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

const DukPNS = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const data = [
    {
      no: 1,
      id: 1,
      nip: "19651127 199301 1 001",
      nama: "Ir. H. Dadang Airlangga N, MMT",
      pangkat_golongan: "IV/c (Pembina Utama)",
      tmt_golongan: "01/04/14",
      jabatan: "Kepala Dinas (Eselon II.b)",
      mk_golongan: "10 Tahun 5 Bulan",
      pendidikan: "Magister Manajemen Teknologi",
      tgl_lahir: "27-11-1965",
      catatan_mutasi: "Kepala Dinas Kebersihan dan Pertamanan",
      tmt_cpns: "01-02-1989",
    },
    {
      no: 2,
      id: 2,
      nip: "19640315 199203 1 014",
      nama: "H. Akhmad Husein, ST, MT",
      pangkat_golongan: "IV/b (Pembina Utama Muda)",
      tmt_golongan: "01/10/20",
      jabatan: "Sekretaris (Eselon III.a)",
      mk_golongan: "10 Tahun 5 Bulan",
      pendidikan: "Magister Teknik Sipil",
      tgl_lahir: "15/03/64",
      catatan_mutasi: "Dinas Bina Marga dan Pengairan",
      tmt_cpns: "01/03/92",
    },
    {
      no: 3,
      id: 3,
      nip: "19660425 199312 1 001",
      nama: "Joko Karyono, ST, MT",
      pangkat_golongan: "IV/a (Pembina Utama)",
      tmt_golongan: "01/10/16",
      jabatan: "Kabid Kawasan Permukiman",
      mk_golongan: "17 Tahun 10 Bulan",
      pendidikan: "Magister Tehnik Sipil",
      tgl_lahir: "25/04/66",
      catatan_mutasi: "Dinas Bina Marga dan Pengairan",
      tmt_cpns: "01/12/93",
    },
    {
      no: 4,
      id: 4,
      nip: "19660425 199312 1 001",
      nama: "Joko Karyono, ST, MT",
      pangkat_golongan: "IV/a (Pembina Utama)",
      tmt_golongan: "01/10/16",
      jabatan: "Kabid Kawasan Permukiman",
      mk_golongan: "17 Tahun 10 Bulan",
      pendidikan: "Magister Tehnik Sipil",
      tgl_lahir: "25/04/66",
      catatan_mutasi: "-",
      tmt_cpns: "01/12/93",
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
      name: "No. Urut",
      selector: "no",
      sortable: true,
      width: "50px",
    },
    {
      name: "NIP",
      selector: "nip",
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
      name: "Pangkat/Gol",
      selector: "pangkat_golongan",
      sortable: true,
      wrap: true,
    },
    // {
    //   name: "TMT. Golongan",
    //   selector: "tmt_golongan",
    //   sortable: true,
    //   wrap: true,
    // },
    {
      name: "Jabatan",
      selector: "jabatan",
      sortable: true,
      wrap: true,
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
              <CIcon content={cilInfo} color="white" />
            </CButton>
            <CButton
              color="success"
              className="btn btn-sm"
              onClick={() => goToEdit(row.id)}
            >
              Catatan Mutasi
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

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/duk-edit/${id}`);
  };

  const goToDetail = (id) => {
    history.push(`/epekerja/admin/duk-detail/${id}`);
  };

  const ExpandableComponent = ({ data }) => (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>TMT. Golongan</strong>
          </CCol>
          <CCol>{data.tmt_golongan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Masa Kerja Golongan</strong>
          </CCol>
          <CCol>{data.mk_golongan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Pendidikan</strong>
          </CCol>
          <CCol>{data.pendidikan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Tgl. Lahir</strong>
          </CCol>
          <CCol>{data.tgl_lahir}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Catatan Mutasi</strong>
          </CCol>
          <CCol>
            {data.catatan_mutasi === "-" ? (
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
              data.catatan_mutasi
            )}
          </CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>TMT. CPNS</strong>
          </CCol>
          <CCol>{data.tmt_cpns}</CCol>
        </CRow>
      </div>
    </>
  );

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Daftar Urut Kepangkatan Pegawai Negeri Sipil</h3>
        </CCardHeader>
        <CCardBody>
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
            expandableRows={true}
            expandableRowsComponent={<ExpandableComponent />}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default DukPNS;
