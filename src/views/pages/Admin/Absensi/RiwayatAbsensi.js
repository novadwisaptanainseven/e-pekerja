import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CBadge,
  CRow,
  CCol,
  CCollapse,
  CCardFooter,
  CPopover,
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
import TambahAbsen from "./TambahAbsen";
import EditAbsen from "./EditAbsensi";
import { getRiwayatAbsensiPegawai } from "src/context/actions/Absensi/getRiwayatAbsensiPegawai";
import { LoadAnimationBlue } from "src/assets";
import { getRekapAbsensiPerTahun } from "src/context/actions/Absensi/getRekapAbsensiPerTahun";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteAbsensi } from "src/context/actions/Absensi/deleteAbsensi";
import capitalizeFirst from "src/helpers/capitalizeFirst";
import { printAbsensiByFilterTanggal } from "src/context/actions/DownloadFile/printAbsensiByFilterTanggal";
import { printRekapAbsensiByIdPegawai } from "src/context/actions/DownloadFile/printAbsensiByIdPegawai";
import { getPNSById } from "src/context/actions/Pegawai/PNS/getPNSById";

const MySwal = withReactContent(swal2);

const RiwayatAbsensi = ({ match }) => {
  const params = match.params;
  const [modalTambah, setModalTambah] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const history = useHistory();
  const [data, setData] = useState([]);
  const [rekap, setRekap] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [pegawai, setPegawai] = useState("");
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [formattedDate, setFormattedDate] = useState({
    startDate: "",
    endDate: "",
  });

  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });

  const goBackToParent = () => {
    history.goBack();
  };

  console.log(loading2);

  useEffect(() => {
    // Get Pegawai by ID
    getPNSById(params.id, setPegawai);
    // Get riwayat absensi
    getRiwayatAbsensiPegawai(params.id, setLoading, setData, formattedDate);
    // Get Rekap Absensi
    getRekapAbsensiPerTahun(params.id, setLoading2, setRekap);
  }, [params, formattedDate]);

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
      cell: (item) => (
        <div>{format(new Date(item.tgl_absen), "dd/MM/yyyy")}</div>
      ),
    },
    {
      name: "Hari",
      selector: "hari",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
      cell: (row) => {
        return <div>{capitalizeFirst(row.hari)}</div>;
      },
    },
    {
      name: "Absen",
      selector: "absen",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
      cell: (row) => {
        switch (row.absen) {
          case 5:
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
              <CBadge color="dark" shape="pill" className="px-2 py-2">
                Izin
              </CBadge>
            );
          case 3:
            return (
              <CBadge color="warning" shape="pill" className="px-2 py-2">
                Sakit
              </CBadge>
            );
          case 4:
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
      name: "Keterangan",
      selector: "keterangan",
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
          <CButton
            color="warning"
            onClick={() => {
              setModalEdit({
                ...modalEdit,
                modal: !modalEdit.modal,
                id: row.id_absensi,
              });
            }}
            className="text-white mr-1"
          >
            <CIcon content={cilPen} />
          </CButton>
          <CButton color="danger" onClick={() => handleDelete(row.id_absensi)}>
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

  // Menangani tombol hapus
  const handleDelete = (id_absensi) => {
    MySwal.fire({
      icon: "warning",
      title: "Anda yakin ingin menghapus data ini ?",
      text: "Jika yakin, klik YA",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YA",
    }).then((res) => {
      if (res.isConfirmed) {
        deleteAbsensi(
          params.id,
          id_absensi,
          setLoading,
          setLoading2,
          setData,
          setRekap,
          formattedDate
        );
        MySwal.fire({
          icon: "success",
          title: "Terhapus",
          text: "Data berhasil dihapus",
        });
      }
    });
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
          <div className="d-flex"></div>
        </div>
      </>
    );
  };

  const InformasiComponent = () => {
    // const arr = [2020, 2021, 2022];

    return (
      <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Tahun</th>
              <th>Hadir</th>
              <th>Izin</th>
              <th>Sakit</th>
              <th>Cuti</th>
              <th>TK</th>
            </tr>
          </thead>
          <tbody>
            {rekap.map((item, index) => (
              <tr key={index}>
                <td>{item.tahun}</td>
                <td>{item.hadir}</td>
                <td>{item.izin}</td>
                <td>{item.sakit}</td>
                <td>{item.cuti}</td>
                <td>{item.tanpa_keterangan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  const handleDateChange = (item) => {
    setState([item.selection]);
    let timestampStartDate = Date.parse(item.selection.startDate);
    let timestampEndDate = Date.parse(item.selection.endDate);

    let startDate = format(timestampStartDate, "y-MM-dd");
    let endDate = format(timestampEndDate, "y-MM-dd");

    setFormattedDate({
      ...formattedDate,
      startDate: startDate,
      endDate: endDate,
    });
    // console.log(formattedDate);
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
          <div className="title mb-2">
            <h3>Riwayat Absensi Pegawai</h3>
            <h5 className="font-weight-normal">{pegawai.nama}</h5>
          </div>
          <CButton
            color="warning"
            className="text-white"
            style={{ height: "40px", width: "100px" }}
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol md="6">
              <CCard className="shadow">
                <CCardHeader className="bg-dark">
                  <h5 className="mb-0">Informasi Absensi Per Tahun</h5>
                </CCardHeader>
                <CCollapse show={collapse}>
                  <CCardBody>
                    <InformasiComponent />
                  </CCardBody>
                </CCollapse>
                <CCardFooter className="d-flex justify-content-between">
                  <CButton
                    type="button"
                    color="secondary"
                    onClick={() => setCollapse(!collapse)}
                  >
                    {!collapse ? "Klik untuk melihat" : "Tutup"}
                  </CButton>
                  <CPopover content="Cetak Rekapan Absensi Pegawai">
                    <CButton
                      type="button"
                      color="info"
                      className="ml-2"
                      onClick={() => printRekapAbsensiByIdPegawai(params.id)}
                    >
                      <span className="my-text-button">
                        Cetak Rekapan Absensi
                      </span>{" "}
                      <CIcon content={cilPrint} />
                    </CButton>
                  </CPopover>
                </CCardFooter>
              </CCard>
            </CCol>
            <CCol md="6">
              <CCard className="shadow">
                <CCardHeader className="bg-dark">
                  <h5 className="mb-0">Filter berdasarkan Tanggal</h5>
                </CCardHeader>
                <CCollapse show={collapse2}>
                  <CCardBody className="text-center">
                    <p>Atur range tanggal untuk menampilkan data absensi</p>
                    <Kalender />
                  </CCardBody>
                </CCollapse>
                <CCardFooter className="d-flex justify-content-between">
                  <div>
                    <CButton
                      type="button"
                      color="secondary"
                      className="mr-2"
                      onClick={() => setCollapse2(!collapse2)}
                    >
                      {!collapse2 ? "Klik untuk melihat" : "Tutup"}
                    </CButton>
                    <CButton
                      type="button"
                      color="danger"
                      onClick={() =>
                        setFormattedDate({
                          ...formattedDate,
                          startDate: "",
                          endDate: "",
                        })
                      }
                    >
                      Reset
                    </CButton>
                  </div>

                  <CPopover content="Cetak Riwayat Absensi Pegawai">
                    <CButton
                      type="button"
                      color="info"
                      className="ml-2"
                      onClick={() =>
                        printAbsensiByFilterTanggal(params.id, formattedDate)
                      }
                    >
                      <span className="my-text-button">
                        Cetak Riwayat Absensi
                      </span>{" "}
                      <CIcon content={cilPrint} />
                    </CButton>
                  </CPopover>
                </CCardFooter>
              </CCard>
            </CCol>
          </CRow>

          {!loading ? (
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
          ) : (
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
          )}
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

        <TambahAbsen
          modal={{
            setModal: setModalTambah,
            modal: modalTambah,
          }}
          idPegawai={params.id}
          setRiwayatAbsen={setData}
          setRekapAbsensi={setRekap}
          setLoadingRiwayatAbsen={setLoading}
          setLoadingRekapAbsensi={setLoading2}
          formattedDateRiwayatAbsen={formattedDate}
        />
      </CModal>

      {/* Modal Edit */}
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
        <EditAbsen
          modal={modalEdit}
          setModal={setModalEdit}
          idPegawai={params.id}
          setRiwayatAbsen={setData}
          setRekapAbsensi={setRekap}
          setLoadingRiwayatAbsen={setLoading}
          setLoadingRekapAbsensi={setLoading2}
          formattedDateRiwayatAbsen={formattedDate}
        />
      </CModal>
    </>
  );
};

export default RiwayatAbsensi;
