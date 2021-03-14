import React, { useState, useEffect } from "react";
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
import TambahRiwayatKerja from "./TambahRiwayatKerja";
import EditRiwayatKerja from "./EditRiwayatKerja";
import { deleteRiwayatKerja } from "src/context/actions/Pegawai/RiwayatKerja/deleteRiwayatKerja";
import { getRiwayatKerja } from "src/context/actions/Pegawai/RiwayatKerja/getRiwayatKerja";
import { format } from "date-fns/esm";

const MySwal = withReactContent(swal2);

const DataRiwayatKerja = ({ id }) => {
  const [modalTambah, setModalTambah] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get Riwayat Kerja by Id Pegawai
    getRiwayatKerja(id, setData, setLoading);
  }, [id]);

  const columns = [
    {
      name: "Kantor Lama",
      selector: "kantor",
      wrap: true,
      sortable: true,
    },
    {
      name: "Jabatan Lama",
      selector: "jabatan",
      wrap: true,
      sortable: true,
    },
    {
      name: "Tgl. Masuk Kerja",
      selector: "tgl_masuk",
      wrap: true,
      sortable: true,
      cell: (row) => {
        // Ubah format tanggal
        const formattedDate = format(new Date(row.tgl_masuk), "dd/MM/y");
        return formattedDate;
      },
    },
    {
      name: "Tgl. Keluar Kerja",
      selector: "tgl_keluar",
      wrap: true,
      sortable: true,
      cell: (row) => {
        const formattedDate = format(new Date(row.tgl_keluar), "dd/MM/y");
        return formattedDate;
      },
    },
    {
      name: "Aksi",
      selector: "aksi",
      wrap: true,
      maxWidth: "150px",
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
                  id: row.id_riwayat_kerja,
                })
              }
            >
              <CIcon content={cilPen} color="white" />
            </CButton>
            <CButton
              color="danger"
              className="btn btn-sm"
              onClick={() => handleDelete(id, row.id_riwayat_kerja)}
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

  // Menangani tombol hapus
  const handleDelete = (id_pegawai, id_riwayat_kerja) => {
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
        // Memanggil method deleteRiwayatKerja untuk menghapus data RiwayatKerja
        deleteRiwayatKerja(id_pegawai, id_riwayat_kerja, setData);
        MySwal.fire({
          icon: "success",
          title: "Terhapus",
          text: "Data berhasil dihapus",
        }).then((res) => {
          getRiwayatKerja(id_pegawai, setData, setLoading);
        });
      }
    });
  };

  const ExpandableComponent = ({ data }) => (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CRow>
          <CCol md="2">
            <strong>Keterangan</strong>
          </CCol>
          <CCol>{data.keterangan}</CCol>
        </CRow>
      </div>
    </>
  );

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
              <CButton type="button" color="info">
                Cetak <CIcon content={cilPrint} />
              </CButton>
            </div>
            <DataTable
              columns={columns}
              data={data}
              noHeader
              responsive={true}
              customStyles={customStyles}
              expandableRows
              expandOnRowClicked
              highlightOnHover
              expandableRowsComponent={<ExpandableComponent />}
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

        <TambahRiwayatKerja
          id={id}
          modal={modalTambah}
          setModal={setModalTambah}
          riwayatKerja={{
            setLoadingRiwayatKerja: setLoading,
            data: data,
            setData: setData,
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

        <EditRiwayatKerja
          idPegawai={id}
          idRiwayatKerja={modalEdit.id}
          modal={modalEdit.modal}
          setModal={setModalEdit}
          riwayatKerja={{
            setLoadingRiwayatKerja: setLoading,
            data: data,
            setData: setData,
          }}
        />
      </CModal>
    </>
  );
};

export default DataRiwayatKerja;
