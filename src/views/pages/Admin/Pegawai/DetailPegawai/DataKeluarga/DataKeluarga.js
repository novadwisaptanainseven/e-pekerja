import React, { useEffect, useState } from "react";

import DataTable from "react-data-table-component";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { LoadAnimationBlue } from "src/assets";

import {
  CButtonGroup,
  CButton,
  CRow,
  CCol,
  CModal,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPen, cilTrash, cilPrint } from "@coreui/icons";
import TambahDataKeluarga from "./TambahDataKeluarga";
import EditDataKeluarga from "./EditDataKeluarga";
import { getKeluarga } from "src/context/actions/Pegawai/Keluarga/getKeluarga";
import { deleteKeluarga } from "src/context/actions/Pegawai/Keluarga/deleteKeluarga";
import printLaporan from "src/context/actions/DownloadFile/printLaporan";
import formatTanggal from "src/helpers/formatTanggal";
import exportExcel from "src/context/actions/DownloadFile/Excel/Pegawai/exportExcel";

const MySwal = withReactContent(swal2);

const DataKeluarga = ({ id, dataActive }) => {
  const [modalTambah, setModalTambah] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });
  const [keluarga, setKeluarga] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!keluarga) {
      if (dataActive === "keluarga")
        // Get Keluarga by Id Pegawai
        getKeluarga(id, setKeluarga, setLoading);
    }
  }, [id, dataActive, keluarga]);

  const columns = [
    {
      name: "NIK / NIP",
      selector: "nik_nip",
      wrap: true,
      sortable: true,
    },
    {
      name: "Nama",
      selector: "nama",
      wrap: true,
      sortable: true,
    },
    {
      name: "Hubungan",
      selector: "hubungan",
      wrap: true,
      sortable: true,
    },
    {
      name: "TTL",
      selector: "ttl",
      wrap: true,
      sortable: true,
      cell: (row) => (
        <>
          <div>{`${row.tempat_lahir}, ${formatTanggal(row.tgl_lahir)}`}</div>
        </>
      ),
    },
    {
      name: "Pekerjaan",
      selector: "pekerjaan",
      wrap: true,
      sortable: true,
    },
    {
      name: "Aksi",
      selector: "aksi",
      wrap: true,
      cell: (row) => (
        <>
          <CButtonGroup>
            <CButton
              color="success"
              className="btn btn-sm"
              onClick={() =>
                setModalEdit({
                  ...modalEdit,
                  modal: !modalEdit.modal,
                  id: row.id_keluarga,
                })
              }
            >
              <CIcon content={cilPen} color="white" />
            </CButton>
            <CButton
              color="danger"
              className="btn btn-sm"
              onClick={() => handleDelete(id, row.id_keluarga)}
            >
              <CIcon content={cilTrash} color="white" />
            </CButton>
          </CButtonGroup>
        </>
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

  const ExpandableComponent = ({ data }) => (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CRow>
          <CCol md="2">
            <strong>Agama</strong>
          </CCol>
          <CCol>{data.agama}</CCol>
        </CRow>
        <CRow>
          <CCol md="2">
            <strong>Jenis Kelamin</strong>
          </CCol>
          <CCol>{data.jenis_kelamin}</CCol>
        </CRow>
        <CRow>
          <CCol md="2">
            <strong>Telepon</strong>
          </CCol>
          <CCol>{data.telepon}</CCol>
        </CRow>
        <CRow>
          <CCol md="2">
            <strong>Alamat</strong>
          </CCol>
          <CCol>{data.alamat}</CCol>
        </CRow>
      </div>
    </>
  );

  // Menangani tombol hapus
  const handleDelete = (id_pegawai, id_keluarga) => {
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
        // Memanggil method deleteKeluarga untuk menghapus data Keluarga
        deleteKeluarga(id_pegawai, id_keluarga, setKeluarga);
        MySwal.fire({
          icon: "success",
          title: "Terhapus",
          text: "Data berhasil dihapus",
        }).then((res) => {
          getKeluarga(id_pegawai, setKeluarga, setLoading);
        });
      }
    });
  };

  return (
    <>
      {!loading && (
        <>
          <div className="my-3">
            <div className="button-control mb-2">
              <CButton
                color="primary"
                className="btn btn-md"
                onClick={() => setModalTambah(!modalTambah)}
              >
                Tambah Data
              </CButton>
              <div>
                <CButton
                  type="button"
                  color="info"
                  onClick={() => printLaporan(id, "keluarga")}
                >
                  PDF <CIcon content={cilPrint} />
                </CButton>
                <CButton
                  type="button"
                  className="ml-2"
                  color="success"
                  onClick={() =>
                    exportExcel("laporan-pegawai/" + id + "/keluarga")
                  }
                >
                  Excel <CIcon content={cilPrint} />
                </CButton>
              </div>
            </div>
            <DataTable
              columns={columns}
              data={keluarga || []}
              noHeader
              responsive={true}
              customStyles={customStyles}
              expandableRows
              expandableRowsComponent={<ExpandableComponent />}
              expandOnRowClicked
              highlightOnHover
            />
          </div>
        </>
      )}

      {loading && (
        <>
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
        </>
      )}

      {/* Modal Tambah */}
      <CModal
        show={modalTambah}
        onClose={() => setModalTambah(!modalTambah)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Tambah Data</CModalTitle>
        </CModalHeader>

        <TambahDataKeluarga
          id={id}
          modalTambah={modalTambah}
          setModalTambah={setModalTambah}
          keluarga={{
            setLoadingKeluarga: setLoading,
            data: keluarga,
            setData: setKeluarga,
          }}
        />
      </CModal>

      {/* Modal Edit */}
      <CModal
        show={modalEdit.modal}
        onClose={() =>
          setModalEdit({ ...modalEdit, modal: !modalEdit.modal, id: null })
        }
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Edit Data</CModalTitle>
        </CModalHeader>

        <EditDataKeluarga
          idPegawai={id}
          idKeluarga={modalEdit.id}
          modalEdit={modalEdit.modal}
          setModalEdit={setModalEdit}
          keluarga={{
            setLoadingKeluarga: setLoading,
            data: keluarga,
            setData: setKeluarga,
          }}
        />
      </CModal>
    </>
  );
};

export default DataKeluarga;
