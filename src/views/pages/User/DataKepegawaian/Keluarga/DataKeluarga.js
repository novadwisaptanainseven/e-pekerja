import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
  CRow,
  CCol,
  CButtonGroup,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { GlobalContext } from "src/context/Provider";
import { getKeluarga } from "src/context/actions/UserPage/DataKepegawaian/getKeluarga";
import formatTanggal from "src/helpers/formatTanggal";
import CIcon from "@coreui/icons-react";
import { cilPen, cilPrint, cilTrash } from "@coreui/icons";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteKeluarga } from "src/context/actions/UserPage/Keluarga/deleteKeluarga";
import Loading from "src/reusable/Loading";
import printLaporan from "src/context/actions/DownloadFile/printLaporan";
import { exportExcel } from "src/context/actions/DownloadFile";
import TambahDataKeluarga from "./TambahDataKeluarga";
import EditDataKeluarga from "./EditDataKeluarga";
const MySwal = withReactContent(swal2);

const DataKeluarga = ({ dataActive }) => {
  const [modalTambah, setModalTambah] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });
  const { keluargaState, keluargaDispatch, userState } =
    useContext(GlobalContext);
  const { data, loading } = keluargaState;
  const { data: user } = userState;

  useEffect(() => {
    if (!data) {
      if (dataActive === "keluarga") {
        getKeluarga(keluargaDispatch);
      }
    }
  }, [data, keluargaDispatch, dataActive]);

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
        <div>
          {row.tempat_lahir}, {formatTanggal(row.tgl_lahir)}
        </div>
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
              onClick={() => handleDelete(user.id_pegawai, row.id_keluarga)}
            >
              <CIcon content={cilTrash} color="white" />
            </CButton>
          </CButtonGroup>
        </>
      ),
    },
  ];

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
        deleteKeluarga(id_pegawai, id_keluarga, keluargaDispatch, MySwal);
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
              onClick={() => printLaporan(user.id_pegawai, "keluarga")}
            >
              PDF <CIcon content={cilPrint} />
            </CButton>
            <CButton
              type="button"
              className="ml-2"
              color="success"
              onClick={() =>
                exportExcel("laporan-pegawai/" + user.id_pegawai + "/keluarga")
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

        <TambahDataKeluarga
          id={user.id_pegawai}
          modalTambah={modalTambah}
          setModalTambah={setModalTambah}
          dispatch={keluargaDispatch}
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
          idPegawai={user.id_pegawai}
          idKeluarga={modalEdit.id}
          modalEdit={modalEdit.modal}
          setModalEdit={setModalEdit}
          dispatch={keluargaDispatch}
        />
      </CModal>
    </>
  );
};

export default DataKeluarga;
