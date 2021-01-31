import React, { useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CRow,
  CCol,
  CBadge,
  CModal,
  CModalHeader,
  CModalTitle,
  CForm,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import CIcon from "@coreui/icons-react";
import { cilPrint } from "@coreui/icons";
import EditKGB from "./EditKGB";

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

const KGB = () => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });

  const data = [
    {
      no: 1,
      id: 1,
      nip: "19651127 199301 1 001",
      nama: "Ir. H. Dadang Airlangga Nopandani, MMT",
      jabatan: "Kepala Dinas",
      gaji_pokok_lama: "Rp. 3.831.900",
      gaji_pokok_baru: "Rp. 3.952.600",
      tmt_kenaikan_gaji: "1 Februari 2021",
      peraturan: "PP No.30 Tahun 2015",
      kenaikan_gaji_yad: "1 Februari 2023",
      status_kgb: 1,
    },
    {
      no: 2,
      id: 2,
      nip: "19651127 199301 1 001",
      nama: "NELLY KALA, ST",
      jabatan: "Sekretaris",
      gaji_pokok_lama: "Rp. 3.831.900",
      gaji_pokok_baru: "-",
      tmt_kenaikan_gaji: "-",
      peraturan: "-",
      kenaikan_gaji_yad: "-",
      status_kgb: 0,
    },
    {
      no: 3,
      id: 3,
      nip: "19651127 199301 1 001",
      nama: "Nova Dwi Sapta",
      jabatan: "Programmer",
      gaji_pokok_lama: "Rp. 3.831.900",
      gaji_pokok_baru: "-",
      tmt_kenaikan_gaji: "1 Februari 2021",
      peraturan: "PP No.30 Tahun 2015",
      kenaikan_gaji_yad: "1 Februari 2023",
      status_kgb: 0,
      expired: 1,
      status_kenaikan_gaji_yad: 1,
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
    // {
    //   name: "NIP",
    //   selector: "nip",
    //   sortable: true,
    //   wrap: true,
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
      name: "Gaji. P Lama",
      selector: "gaji_pokok_lama",
      sortable: true,
      wrap: true,
    },
    {
      name: "Gaji. P Baru",
      selector: "gaji_pokok_baru",
      sortable: true,
      wrap: true,
    },
    {
      name: "Status KGB",
      selector: "status_kgb",
      sortable: true,
      wrap: true,
      cell: (row) => {
        if (row.gaji_pokok_baru !== "-") {
          return (
            <>
              <CBadge color="info" shape="pill" className="py-1 px-2">
                Ada Kenaikan Gaji
              </CBadge>
            </>
          );
        } else {
          return (
            <>
              <CBadge color="dark" shape="pill" className="py-1 px-2">
                Tidak Ada Kenaikan Gaji
              </CBadge>
            </>
          );
        }
      },
    },
    {
      maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          {row.status_kgb === 1 ? (
            <CButton
              color="danger"
              className="btn btn-sm"
              onClick={() =>
                window.confirm(
                  `Anda yakin ingin batalkan kenaikan gaji pegawai ini ?`
                )
              }
            >
              Batalkan Kenaikan
            </CButton>
          ) : (
            <CButton
              color="success"
              className="btn btn-sm"
              onClick={() =>
                setModalEdit({
                  ...modalEdit,
                  modal: !modalEdit.modal,
                  id: row.id,
                })
              }
            >
              Perbarui Gaji
            </CButton>
          )}
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

  const ExpandableComponent = ({ data }) => (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>NIP</strong>
          </CCol>
          <CCol>{data.nip}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>TMT. Kenaikan Gaji</strong>
          </CCol>
          <CCol>
            {data.tmt_kenaikan_gaji}{" "}
            {data.expired === 1 ? (
              <CBadge
                color="danger"
                shape="pill"
                className="py-1 px-2"
                style={{
                  cursor: "pointer",
                }}
                onClick={() =>
                  setModalEdit({
                    ...modalEdit,
                    modal: !modalEdit.modal,
                  })
                }
              >
                Masa Gaji Selesai
              </CBadge>
            ) : (
              ""
            )}
          </CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Peraturan</strong>
          </CCol>
          <CCol>{data.peraturan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Kenaikan Gaji YAD</strong>
          </CCol>
          <CCol>
            {data.kenaikan_gaji_yad}{" "}
            {data.status_kenaikan_gaji_yad === 1 ? (
              <CBadge
                color="warning"
                shape="pill"
                className="py-1 px-2"
                style={{
                  cursor: "pointer",
                }}
                onClick={() =>
                  setModalEdit({
                    ...modalEdit,
                    modal: !modalEdit.modal,
                  })
                }
              >
                Perbarui Gaji
              </CBadge>
            ) : (
              ""
            )}
          </CCol>
        </CRow>
        <CRow className="mb-1 mt-3">
          <CCol md="3">
            <CButton
              color="info"
              disabled={data.status_kgb === 1 ? false : true}
            >
              Cetak KGB Pegawai
            </CButton>
          </CCol>
          <CCol></CCol>
        </CRow>
      </div>
    </>
  );

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Kenaikan Gaji Berkala Pegawai</h3>
        </CCardHeader>
        <CCardBody>
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
            expandableRows={true}
            expandOnRowClicked={true}
            highlightOnHover
            expandableRowsComponent={<ExpandableComponent />}
          />
        </CCardBody>
      </CCard>

      {/* Modal Edit KGB */}
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
          <CModalTitle>Perbarui Gaji</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <EditKGB id={modalEdit.id} />
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

export default KGB;
