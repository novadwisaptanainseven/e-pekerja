import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
  CRow,
  CCol,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CButton,
  CButtonGroup,
} from "@coreui/react";

import { GlobalContext } from "src/context/Provider";
import { getPendidikan } from "src/context/actions/UserPage/DataKepegawaian/getPendidikan";
import { exportExcel, getIjazah } from "src/context/actions/DownloadFile";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CIcon from "@coreui/icons-react";
import { cilPen, cilPrint, cilTrash } from "@coreui/icons";
import printLaporan from "src/context/actions/DownloadFile/printLaporan";
import Loading from "src/reusable/Loading";
import TambahDataPendidikan from "./TambahDataPendidikan";
import EditDataPendidikan from "./EditDataPendidikan";
import { deletePendidikan } from "src/context/actions/UserPage/Pendidikan";
const MySwal = withReactContent(swal2);

const DataPendidikan = ({ dataActive }) => {
  const [modalTambah, setModalTambah] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });
  const { pendidikanState, pendidikanDispatch, userState } =
    useContext(GlobalContext);
  const { data, loading } = pendidikanState;
  const { data: user } = userState;
  const [previewImage, setPreviewImage] = useState({
    modal: false,
    image: null,
  });

  useEffect(() => {
    if (!data) {
      if (dataActive === "pendidikan") {
        getPendidikan(pendidikanDispatch);
      }
    }
  }, [data, pendidikanDispatch, dataActive]);

  const columns = [
    {
      name: "Nama Akademi",
      selector: "nama_akademi",
      wrap: true,
      sortable: true,
    },
    {
      name: "Jurusan",
      selector: "jurusan",
      wrap: true,
      sortable: true,
    },
    {
      name: "Jenjang",
      selector: "jenjang",
      wrap: true,
      sortable: true,
      maxWidth: "100px",
    },
    {
      name: "Tahun Lulus",
      selector: "tahun_lulus",
      wrap: true,
      sortable: true,
      maxWidth: "150px",
    },
    {
      name: "No. Ijazah",
      selector: "no_ijazah",
      wrap: true,
      sortable: true,
    },
    {
      name: "Aksi",
      selector: "aksi",
      wrap: true,
      // maxWidth: "100px",
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
                  id: row.id_pendidikan,
                })
              }
            >
              <CIcon content={cilPen} color="white" />
            </CButton>
            <CButton
              color="danger"
              className="btn btn-sm"
              onClick={() => handleDelete(user.id_pegawai, row.id_pendidikan)}
            >
              <CIcon content={cilTrash} color="white" />
            </CButton>
          </CButtonGroup>
        </>
      ),
    },
  ];

  // Menangani tombol hapus
  const handleDelete = (id_pegawai, id_pendidikan) => {
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
        // Memanggil method deletePendidikan untuk menghapus data Pendidikan
        deletePendidikan(id_pegawai, id_pendidikan, pendidikanDispatch, MySwal);
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

  // Expandable Component
  const ExpandableComponent = ({ data }) => {
    const EXT_IMAGE = ["jpg", "jpeg", "png"];

    let arr_file = data.foto_ijazah.split("/");
    let filename = arr_file[arr_file.length - 1];
    let ext_file = filename.split(".");
    let ext_file2 = ext_file[ext_file.length - 1];

    return (
      <>
        <div style={{ padding: "10px 63px" }}>
          <CRow>
            <CCol md="2">
              <strong>File Ijazah</strong>
            </CCol>
            <CCol>
              {EXT_IMAGE.includes(ext_file2) ? (
                <img
                  width={200}
                  src={getIjazah(data.foto_ijazah)}
                  alt="foto-ijazah"
                  onClick={() => handlePreviewImage(data.foto_ijazah)}
                  style={{ cursor: "pointer" }}
                />
              ) : data.foto_ijazah ? (
                <a
                  href={getIjazah(data.foto_ijazah)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {filename}
                </a>
              ) : (
                "Ijazah belum ada"
              )}
            </CCol>
          </CRow>
        </div>
      </>
    );
  };

  // Menangani preview gambar
  const handlePreviewImage = (foto_ijazah) => {
    // window.open(getIjazah(foto_ijazah), "blank");
    setPreviewImage({
      ...previewImage,
      modal: !previewImage.modal,
      image: foto_ijazah,
    });
  };

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
              onClick={() => printLaporan(user.id_pegawai, "pendidikan")}
            >
              Cetak <CIcon content={cilPrint} />
            </CButton>
            <CButton
              type="button"
              className="ml-2"
              color="success"
              onClick={() =>
                exportExcel(
                  "laporan-pegawai/" + user.id_pegawai + "/pendidikan"
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

      {/* Modal Preview Image */}
      <CModal
        show={previewImage.modal}
        onClose={() =>
          setPreviewImage({
            ...previewImage,
            modal: !previewImage.modal,
            image: null,
          })
        }
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Preview</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {previewImage.image && (
            <img
              style={{ width: "100%" }}
              src={getIjazah(previewImage.image)}
              alt="foto-ijazah"
            />
          )}
        </CModalBody>
      </CModal>

      {/* Modal Tambah */}
      <CModal
        show={modalTambah}
        onClose={() => setModalTambah(!modalTambah)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Tambah Data</CModalTitle>
        </CModalHeader>

        <TambahDataPendidikan
          id={user.id_pegawai}
          modalTambah={modalTambah}
          setModalTambah={setModalTambah}
          dispatch={pendidikanDispatch}
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

        <EditDataPendidikan
          idPegawai={user.id_pegawai}
          idPendidikan={modalEdit.id}
          modalEdit={modalEdit.modal}
          setModalEdit={setModalEdit}
          dispatch={pendidikanDispatch}
        />
      </CModal>
    </>
  );
};

export default DataPendidikan;
