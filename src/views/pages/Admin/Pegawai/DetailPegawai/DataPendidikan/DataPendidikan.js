import React, { useEffect, useState } from "react";

import DataTable from "react-data-table-component";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { LoadAnimationBlue } from "src/assets";

import {
  CButtonGroup,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CCol,
  CRow,
  CModalBody,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPen, cilTrash, cilPrint } from "@coreui/icons";
import TambahDataPendidikan from "./TambahDataPendidikan";
import EditDataPendidikan from "./EditDataPendidikan";
import { getPendidikan } from "src/context/actions/Pegawai/Pendidikan/getPendidikan";
import { deletePendidikan } from "src/context/actions/Pegawai/Pendidikan/deletePendidikan";
import { getIjazah } from "src/context/actions/DownloadFile";
import printLaporan from "src/context/actions/DownloadFile/printLaporan";
import exportExcel from "src/context/actions/DownloadFile/Excel/Pegawai/exportExcel";

const MySwal = withReactContent(swal2);

const DataPendidikan = ({ id, dataActive }) => {
  const [modalTambah, setModalTambah] = useState(false);
  const [previewImage, setPreviewImage] = useState({
    modal: false,
    image: null,
  });
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });
  const [pendidikan, setPendidikan] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pendidikan) {
      if (dataActive === "pendidikan") {
        // Get Pendidikan by Id Pegawai
        getPendidikan(id, setPendidikan, setLoading);
      }
    }
  }, [id, dataActive, pendidikan]);

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
      cell: (row) => <div>{row.jenjang.toUpperCase()}</div>,
    },
    {
      name: "Tahun Lulus",
      selector: "tahun_lulus",
      wrap: true,
      sortable: true,
      // maxWidth: "150px",
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
              onClick={() => handleDelete(id, row.id_pendidikan)}
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
              ) : (
                <a
                  href={getIjazah(data.foto_ijazah)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {filename}
                </a>
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
        deletePendidikan(id_pegawai, id_pendidikan, setPendidikan);
        MySwal.fire({
          icon: "success",
          title: "Terhapus",
          text: "Data berhasil dihapus",
        }).then((res) => {
          getPendidikan(id_pegawai, setPendidikan, setLoading);
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
                  onClick={() => printLaporan(id, "pendidikan")}
                >
                  Cetak <CIcon content={cilPrint} />
                </CButton>
                <CButton
                  type="button"
                  className="ml-2"
                  color="success"
                  onClick={() =>
                    exportExcel("laporan-pegawai/" + id + "/pendidikan")
                  }
                >
                  Excel <CIcon content={cilPrint} />
                </CButton>
              </div>
            </div>
            <DataTable
              columns={columns}
              data={pendidikan || []}
              noHeader
              responsive={true}
              customStyles={customStyles}
              expandableRows
              expandableRowsComponent={ExpandableComponent}
              highlightOnHover
              expandOnRowClicked
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

        <TambahDataPendidikan
          id={id}
          modalTambah={modalTambah}
          setModalTambah={setModalTambah}
          pendidikan={{
            setLoadingPendidikan: setLoading,
            data: pendidikan,
            setData: setPendidikan,
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

        <EditDataPendidikan
          idPegawai={id}
          idPendidikan={modalEdit.id}
          modalEdit={modalEdit.modal}
          setModalEdit={setModalEdit}
          pendidikan={{
            setLoadingPendidikan: setLoading,
            data: pendidikan,
            setData: setPendidikan,
          }}
        />
      </CModal>

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
    </>
  );
};

export default DataPendidikan;
