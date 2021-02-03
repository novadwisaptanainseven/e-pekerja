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
  CBadge,
  CRow,
  CCol,
  CCollapse,
  CCardFooter,
} from "@coreui/react";
import DataTable from "react-data-table-component";
// import styled from "styled-components";
import CIcon from "@coreui/icons-react";
import { cilPen, cilTrash, cilPrint } from "@coreui/icons";
import { useHistory } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const RiwayatAbsensi = () => {
  const [modalTambah, setModalTambah] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const history = useHistory();
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

  const goBackToParent = () => {
    history.goBack();
  };

  const data = [
    {
      no: 1,
      id: 1,
      tgl_absen: "15-02-2021",
      hari: "Senin",
      keterangan: 1,
    },
    {
      no: 2,
      id: 2,
      tgl_absen: "16-02-2021",
      hari: "Selasa",
      keterangan: 1,
    },
    {
      no: 3,
      id: 3,
      tgl_absen: "17-02-2021",
      hari: "Rabu",
      keterangan: 0,
    },
    {
      no: 4,
      id: 4,
      tgl_absen: "18-02-2021",
      hari: "Kamis",
      keterangan: 2,
    },
    {
      no: 5,
      id: 5,
      tgl_absen: "19-02-2021",
      hari: "Jumat",
      keterangan: 3,
    },
  ];

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      wrap: true,
      width: "50px",
    },
    {
      name: "Tgl. Absen",
      selector: "tgl_absen",
      sortable: true,
      // maxWidth: "150px",
      wrap: true,
    },
    {
      name: "Hari",
      selector: "hari",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
    },
    {
      name: "Keterangan",
      selector: "keterangan",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
      cell: (row) => {
        switch (row.keterangan) {
          case 0:
            return (
              <CBadge color="secondary" shape="pill" className="px-2 py-2">
                Tanpa Keterangan
              </CBadge>
            );
          case 1:
            return (
              <CBadge color="success" shape="pill" className="px-2 py-2">
                Hadir
              </CBadge>
            );
          case 2:
            return (
              <CBadge color="danger" shape="pill" className="px-2 py-2">
                Tidak Hadir
              </CBadge>
            );
          case 3:
            return (
              <CBadge color="dark" shape="pill" className="px-2 py-2">
                Izin
              </CBadge>
            );
          case 4:
            return (
              <CBadge color="warning" shape="pill" className="px-2 py-2">
                Sakit
              </CBadge>
            );
          case 5:
            return (
              <CBadge color="info" shape="pill" className="px-2 py-2">
                Cuti
              </CBadge>
            );
          default:
            return (
              <CBadge color="dark" shape="pill" className="px-2 py-2">
                Tanpa Keterangan
              </CBadge>
            );
        }
      },
    },
    {
      maxWidth: "180px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <CButton
            color="warning"
            onClick={() => {
              setModalEdit({
                ...modalEdit,
                modal: !modalEdit.modal,
                id: row.id,
              });
            }}
            className="text-white mr-1"
          >
            <CIcon content={cilPen} />
          </CButton>
          <CButton
            color="danger"
            onClick={() =>
              window.confirm(`Anda yakin ingin menghapus data ini ?`)
            }
          >
            <CIcon content={cilTrash} />
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

  const SubHeaderComponentMemo = () => {
    return (
      <>
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <CButton
            color="primary"
            className="btn btn-md"
            onClick={() => setModalTambah(!modalTambah)}
          >
            Tambah Absen
          </CButton>
          <div className="d-flex">
            <CButton type="button" color="info" className="ml-2">
              Cetak <CIcon content={cilPrint} />
            </CButton>
            <CButton
              onClick={goBackToParent}
              type="button"
              color="warning"
              className="ml-2 text-white"
            >
              Kembali
            </CButton>
          </div>
        </div>
      </>
    );
  };

  const InformasiComponent = () => (
    <>
      <CRow className="text-center">
        <CCol>
          <CCard className="pt-3 bg-success text-white">
            <h6>Hadir</h6>
            <p>2</p>
          </CCard>
        </CCol>
        <CCol>
          <CCard className="pt-3 bg-danger text-white">
            <h6>Tidak Hadir</h6>
            <p>2</p>
          </CCard>
        </CCol>
        <CCol>
          <CCard className="pt-3 bg-dark text-white">
            <h6>Izin</h6>
            <p>2</p>
          </CCard>
        </CCol>
      </CRow>
      <CRow className="text-center">
        <CCol>
          <CCard className="pt-3 bg-warning text-white">
            <h6>Sakit</h6>
            <p>2</p>
          </CCard>
        </CCol>
        <CCol>
          <CCard className="pt-3 bg-info text-white">
            <h6>Cuti</h6>
            <p>2</p>
          </CCard>
        </CCol>
      </CRow>
      <CRow className="text-center">
        <CCol>
          <CCard className="pt-3 bg-secondary">
            <h6>Tanpa Keterangan</h6>
            <p>2</p>
          </CCard>
        </CCol>
      </CRow>
    </>
  );

  const handleDateChange = (item) => {
    setState([item.selection]);
    let timestampStartDate = Date.parse(item.selection.startDate);
    let timestampEndDate = Date.parse(item.selection.endDate);

    let startDate = format(timestampStartDate, "dd-MM-Y");
    let endDate = format(timestampEndDate, "dd-MM-Y");

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

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between my-card-header">
          <h3>Riwayat Absensi Pegawai</h3>
          <span className="font-weight-normal">
            Nova Dwi Sapta Nain Seven S.Tr.Kom
          </span>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol md="6">
              <CCard className="shadow">
                <CCardHeader className="bg-dark">
                  <h5 className="mb-0">Informasi Absensi</h5>
                </CCardHeader>
                <CCollapse show={collapse}>
                  <CCardBody>
                    <InformasiComponent />
                  </CCardBody>
                </CCollapse>
                <CCardFooter>
                  <CButton
                    type="button"
                    color="secondary"
                    onClick={() => setCollapse(!collapse)}
                  >
                    Klik untuk melihat
                  </CButton>
                </CCardFooter>
              </CCard>
            </CCol>
            <CCol md="6">
              <CCard className="shadow">
                <CCardHeader className="bg-dark">
                  <h5 className="mb-0">Kalender</h5>
                </CCardHeader>
                <CCollapse show={collapse2}>
                  <CCardBody className="text-center">
                    <p>Atur range tanggal untuk menampilkan data absensi</p>
                    <Kalender />
                  </CCardBody>
                </CCollapse>
                <CCardFooter>
                  <CButton
                    type="button"
                    color="secondary"
                    onClick={() => setCollapse2(!collapse2)}
                  >
                    Klik untuk melihat
                  </CButton>
                </CCardFooter>
              </CCard>
            </CCol>
          </CRow>

          <DataTable
            columns={columns}
            data={data}
            noHeader
            responsive={true}
            customStyles={customStyles}
            pagination
            // paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={<SubHeaderComponentMemo />}
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
          <CModalTitle>Buat Cuti Pegawai</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>{/* <TambahCuti /> */}</CModalBody>
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
          <CModalTitle>Edit Cuti</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>{/* <EditCuti id={modalEdit.id} /> */}</CModalBody>
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

export default RiwayatAbsensi;
