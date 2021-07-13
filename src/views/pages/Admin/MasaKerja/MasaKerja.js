import React, { useContext, useEffect, useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CButtonGroup,
  CRow,
  CCol,
  CAlert,
  CModal,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilPrint } from "@coreui/icons";
import { GlobalContext } from "src/context/Provider";
import { getMasaKerja } from "src/context/actions/MasaKerja/getMasaKerja";
import { format } from "date-fns";
import { LoadAnimationBlue } from "src/assets";
import printMasaKerja from "src/context/actions/DownloadFile/printMasaKerja";
import exportExcel from "src/context/actions/DownloadFile/Excel/Pegawai/exportExcel";
import ModalSimpanRiwayat from "./ModalSimpanRiwayat";
import FilterComponent from "src/reusable/FilterSearchComponent/FilterComponent";
import PerbaruiMasaKerja from "./PerbaruiMasaKerja";

const MasaKerja = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const { masaKerjaState, masaKerjaDispatch } = useContext(GlobalContext);
  const { data, loading } = masaKerjaState;
  const [modalSimpanRiwayat, setModalSimpanRiwayat] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [modalTambah, setModalTambah] = useState({
    modal: false,
    id: null,
  });

  useEffect(() => {
    // Get all masa kerja
    getMasaKerja(masaKerjaDispatch);
  }, [masaKerjaDispatch]);

  const filteredData = data.filter(
    (item) =>
      item.nama && item.nama.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns = [
    {
      name: "Nama",
      selector: "nama",
      sortable: true,
      wrap: true,
      // maxWidth: "200px",
    },
    {
      name: "MK. Gol",
      selector: "mk_golongan",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "MK. Jabatan",
      selector: "mk_jabatan",
      sortable: true,
      wrap: true,
    },
    {
      name: "MK. CPNS",
      selector: "mk_sebelum_cpns",
      sortable: true,
      wrap: true,
    },
    {
      name: "MK. Seluruhnya",
      selector: "mk_seluruhnya",
      sortable: true,
      wrap: true,
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
              onClick={() => goToDetail(row.id_masa_kerja)}
            >
              Detail
            </CButton>
            <CButton
              color="success"
              className="btn btn-sm"
              // onClick={() => goToRiwayat(row.id_pegawai)}
              onClick={() =>
                setModalTambah({
                  ...modalTambah,
                  modal: true,
                  id: row.id_masa_kerja,
                })
              }
            >
              Perbarui
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

        <CButton
          type="button"
          color="secondary"
          className="ml-2"
          onClick={() => history.push("/epekerja/admin/masa-kerja/riwayat")}
        >
          Riwayat Pegawai Berdasarkan Masa Kerja
        </CButton>

        <CButton
          type="button"
          color="info"
          className="ml-2"
          onClick={printMasaKerja}
        >
          PDF <CIcon content={cilPrint} />
        </CButton>

        <CButton
          type="button"
          color="success"
          className="ml-2"
          onClick={() => exportExcel("masa-kerja")}
        >
          Excel <CIcon content={cilPrint} />
        </CButton>
      </>
    );
  }, [filterText, resetPaginationToggle, history]);

  // const goToRiwayat = (id) => {
  //   history.push(`/epekerja/admin/masa-kerja/pegawai/${id}`);
  // };

  const goToRiwayatMasaKerjaFile = () => {
    history.push(`/epekerja/admin/masa-kerja/riwayat`);
  };

  const goToDetail = (id) => {
    history.push(`/epekerja/admin/masa-kerja-detail/${id}`);
  };

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
            <strong>Jabatan</strong>
          </CCol>
          <CCol>{data.nama_jabatan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>TMT. Jabatan</strong>
          </CCol>
          <CCol>{format(new Date(data.tmt_jabatan), "dd/MM/y")}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Golongan</strong>
          </CCol>
          <CCol>{data.golongan}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>TMT. Golongan</strong>
          </CCol>
          <CCol>{format(new Date(data.tmt_golongan), "dd/MM/y")}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Eselon</strong>
          </CCol>
          <CCol>{data.eselon}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>TMT. CPNS</strong>
          </CCol>
          <CCol>{format(new Date(data.tmt_cpns), "dd/MM/y")}</CCol>
        </CRow>
      </div>
    </>
  );

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Masa Kerja Pegawai Negeri Sipil</h3>
        </CCardHeader>
        <CCardBody>
          {/* Alert Success Perbarui Masa Kerja */}
          <CAlert
            show={alertSuccess}
            color="success"
            closeButton
            onShowChange={(show) => setAlertSuccess(show)}
          >
            Berhasil menyimpan riwayat masa kerja pegawai. Silahkan cek di{" "}
            <a
              href="."
              onClick={(e) => {
                e.preventDefault();
                goToRiwayatMasaKerjaFile();
              }}
            >
              Riwayat Pegawai Berdasarkan Masa Kerja
            </a>
          </CAlert>
          {/* End of Alert Success Perbarui Masa Kerja */}
          <CButton
            type="button"
            color="primary"
            className="ml-2"
            onClick={() => setModalSimpanRiwayat(true)}
          >
            Simpan ke Riwayat
          </CButton>
          {data.length > 0 ? (
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
              expandOnRowClicked
              highlightOnHover
              expandableRowsComponent={ExpandableComponent}
            />
          ) : loading ? (
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
              expandableRows={true}
              expandOnRowClicked
              highlightOnHover
              expandableRowsComponent={ExpandableComponent}
            />
          )}
        </CCardBody>
      </CCard>

      {/* Modal Simpan Riwayat */}
      <ModalSimpanRiwayat
        modal={modalSimpanRiwayat}
        setModal={setModalSimpanRiwayat}
        setAlertSuccess={setAlertSuccess}
      />
      {/* End of Modal Simpan Riwayat */}

      {/* Modal Perbarui Masa Kerja */}
      <CModal
        show={modalTambah.modal}
        onClose={() => setModalTambah({ ...modalTambah, modal: false })}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Perbarui Masa Kerja</CModalTitle>
        </CModalHeader>

        <PerbaruiMasaKerja
          masaKerjaDispatch={masaKerjaDispatch}
          modalTambah={modalTambah}
          setModalTambah={setModalTambah}
          id_pegawai={modalTambah.id}
          setAlertSuccess={setAlertSuccess}
        />
      </CModal>
    </>
  );
};

export default MasaKerja;
