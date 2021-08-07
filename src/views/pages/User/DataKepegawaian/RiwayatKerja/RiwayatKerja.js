import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
  CRow,
  CCol,
  CButtonGroup,
  CButton,
  CModalTitle,
  CModalHeader,
  CModal,
} from "@coreui/react";
import { GlobalContext } from "src/context/Provider";
import { getRiwayatKerja } from "src/context/actions/UserPage/DataKepegawaian/getRiwayatKerja";
import { format } from "date-fns";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { cilPen, cilPrint, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { deleteRiwayatKerja } from "src/context/actions/UserPage/RiwayatKerja";
import printLaporan from "src/context/actions/DownloadFile/printLaporan";
import { exportExcel } from "src/context/actions/DownloadFile";
import Loading from "src/reusable/Loading";
import TambahRiwayatKerja from "./TambahRiwayatKerja";
import EditRiwayatKerja from "./EditRiwayatKerja";
const MySwal = withReactContent(swal2);

const RiwayatKerja = ({ dataActive }) => {
  const [modalTambah, setModalTambah] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });
  const { riwayatKerjaState, riwayatKerjaDispatch, userState } =
    useContext(GlobalContext);
  const { data, loading } = riwayatKerjaState;
  const { data: user } = userState;

  useEffect(() => {
    if (!data) {
      if (dataActive === "riwayat-kerja") {
        // Get data riwayat kerja
        getRiwayatKerja(riwayatKerjaDispatch);
      }
    }
  }, [riwayatKerjaDispatch, dataActive, data]);

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
      cell: (row) => <div>{format(new Date(row.tgl_masuk), "dd/MM/yyyy")}</div>,
    },
    {
      name: "Tgl. Keluar Kerja",
      selector: "tgl_keluar",
      wrap: true,
      sortable: true,
      cell: (row) => (
        <div>{format(new Date(row.tgl_keluar), "dd/MM/yyyy")}</div>
      ),
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
              onClick={() =>
                handleDelete(user.id_pegawai, row.id_riwayat_kerja)
              }
            >
              <CIcon content={cilTrash} color="white" />
            </CButton>
          </CButtonGroup>
        </>
      ),
    },
  ];

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
        deleteRiwayatKerja(
          id_pegawai,
          id_riwayat_kerja,
          riwayatKerjaDispatch,
          MySwal
        );
      }
    });
  };

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
            <strong>Keterangan</strong>
          </CCol>
          <CCol>{data.keterangan}</CCol>
        </CRow>
      </div>
    </>
  );

  return (
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
              onClick={() => printLaporan(user.id_pegawai, "riwayat-kerja")}
            >
              Cetak <CIcon content={cilPrint} />
            </CButton>
            <CButton
              type="button"
              className="ml-2"
              color="success"
              onClick={() =>
                exportExcel(
                  "laporan-pegawai/" + user.id_pegawai + "/riwayat-kerja"
                )
              }
            >
              Excel <CIcon content={cilPrint} />
            </CButton>
          </div>
        </div>
        {data.length > 0 ? (
          <DataTable
            columns={columns}
            data={data}
            noHeader
            responsive={true}
            customStyles={customStyles}
            expandableRows
            expandableRowsComponent={<ExpandableComponent />}
            expandOnRowClicked
            highlightOnHover
          />
        ) : loading ? (
          <Loading />
        ) : (
          <DataTable
            columns={columns}
            data={data}
            noHeader
            responsive={true}
            customStyles={customStyles}
          />
        )}
      </div>
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
          id={user.id_pegawai}
          modal={modalTambah}
          setModal={setModalTambah}
          dispatch={riwayatKerjaDispatch}
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
          idPegawai={user.id_pegawai}
          idRiwayatKerja={modalEdit.id}
          modal={modalEdit.modal}
          setModal={setModalEdit}
          dispatch={riwayatKerjaDispatch}
        />
      </CModal>
    </>
  );
};

export default RiwayatKerja;
