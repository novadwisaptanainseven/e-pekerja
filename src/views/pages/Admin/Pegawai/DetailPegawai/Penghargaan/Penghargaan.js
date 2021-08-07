import React, { useState, useEffect } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  CButton,
  CButtonGroup,
  CRow,
  CCol,
  CModal,
  CModalHeader,
  CModalTitle,
  CForm,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import DataTable from "react-data-table-component";
import CIcon from "@coreui/icons-react";
import { cilPrint, cilInfo, cilPen, cilTrash } from "@coreui/icons";
import TambahPenghargaan from "./TambahPenghargaan";
import EditPenghargaan from "./EditPenghargaan";
import DetailPenghargaan from "./DetailPenghargaan";
import { getPenghargaan } from "src/context/actions/Pegawai/Penghargaan/getPenghargaan";
import { format } from "date-fns/esm";
import { deletePenghargaan } from "src/context/actions/Pegawai/Penghargaan/deletePenghargaan";
import getDokPenghargaan from "src/context/actions/DownloadFile/getDokPenghargaan";
import printLaporan from "src/context/actions/DownloadFile/printLaporan";
import exportExcel from "src/context/actions/DownloadFile/Excel/Pegawai/exportExcel";
import Loading from "src/reusable/Loading";

const MySwal = withReactContent(swal2);

const Penghargaan = ({ id, dataActive }) => {
  const [modalTambah, setModalTambah] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });
  const [modalDetail, setModalDetail] = useState({
    modal: false,
    id: null,
  });
  const [previewImage, setPreviewImage] = useState({
    modal: false,
    image: null,
  });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!data) {
      if (dataActive === "penghargaan") {
        // Get Penghargaan by Id Pegawai
        if (id) {
          getPenghargaan(id, setData, setLoading);
        }
      }
    }
  }, [id, dataActive, data]);

  const columns = [
    {
      name: "Nama Penghargaan",
      selector: "nama_penghargaan",
      sortable: true,
      wrap: true,
    },
    {
      name: "Pemberi",
      selector: "pemberi",
      sortable: true,
      wrap: true,
    },
    {
      name: "Tgl. Penghargaan",
      selector: "tgl_penghargaan",
      sortable: true,
      wrap: true,
      cell: (row) => format(new Date(row.tgl_penghargaan), "dd/MM/y"),
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
              onClick={() =>
                setModalDetail({
                  ...modalDetail,
                  modal: !modalDetail.modal,
                  id: row.id_penghargaan,
                })
              }
            >
              <CIcon content={cilInfo} color="white" />
            </CButton>
            <CButton
              color="success"
              className="btn btn-sm"
              onClick={() =>
                setModalEdit({
                  ...modalEdit,
                  modal: !modalEdit.modal,
                  id: row.id_penghargaan,
                })
              }
            >
              <CIcon content={cilPen} color="white" />
            </CButton>
            <CButton
              color="danger"
              className="btn btn-sm"
              onClick={() => handleDelete(id, row.id_penghargaan)}
            >
              <CIcon content={cilTrash} color="white" />
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

  // Menangani tombol hapus
  const handleDelete = (id_pegawai, id_penghargaan) => {
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
        // Memanggil method deletePenghargaan untuk menghapus data Penghargaan
        deletePenghargaan(id_pegawai, id_penghargaan, setData);
        MySwal.fire({
          icon: "success",
          title: "Terhapus",
          text: "Data berhasil dihapus",
        }).then((res) => {
          getPenghargaan(id_pegawai, setData, setLoading);
        });
      }
    });
  };

  // Menangani preview gambar
  const handlePreviewImage = (dokumentasi) => {
    setPreviewImage({
      ...previewImage,
      modal: !previewImage.modal,
      image: dokumentasi,
    });
  };

  const ExpandableComponent = ({ data }) => {
    const EXT_IMAGE = ["jpg", "jpeg", "png"];

    let arr_file = data.dokumentasi.split("/");
    let filename = arr_file[arr_file.length - 1];
    let ext_file = filename.split(".");
    let ext_file2 = ext_file[ext_file.length - 1];

    return (
      <>
        <div style={{ padding: "10px 63px" }}>
          <CRow className="mb-1">
            <CCol md="3">
              <strong>Dokumentasi</strong>
            </CCol>
            <CCol>
              {EXT_IMAGE.includes(ext_file2.toLowerCase()) ? (
                <img
                  width={200}
                  src={getDokPenghargaan(data.dokumentasi)}
                  alt="dokumentasi-penghargaan"
                  onClick={() => handlePreviewImage(data.dokumentasi)}
                  style={{ cursor: "pointer" }}
                />
              ) : data.dokumentasi ? (
                <a
                  href={getDokPenghargaan(data.dokumentasi)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {filename}
                </a>
              ) : (
                "Belum ada file"
              )}
            </CCol>
          </CRow>
        </div>
      </>
    );
  };

  return (
    <>
      {!loading && (
        <>
          <div className="button-control mb-2 mt-4">
            <CButton
              color="primary"
              className="btn btn-md"
              onClick={() => setModalTambah(!modalTambah)}
            >
              Tambah Penghargaan
            </CButton>
            <div>
              <CButton
                type="button"
                color="info"
                onClick={() => printLaporan(id, "penghargaan")}
              >
                Cetak <CIcon content={cilPrint} />
              </CButton>
              <CButton
                type="button"
                className="ml-2"
                color="success"
                onClick={() =>
                  exportExcel("laporan-pegawai/" + id + "/penghargaan")
                }
              >
                Excel <CIcon content={cilPrint} />
              </CButton>
            </div>
          </div>

          <DataTable
            columns={columns}
            data={data || []}
            noHeader
            responsive={true}
            customStyles={customStyles}
            pagination
            // paginationRowsPerPageOptions={[5, 10, 15]}
            // paginationPerPage={5}
            expandableRows={true}
            expandableRowsComponent={<ExpandableComponent />}
            expandOnRowClicked
            highlightOnHover
          />
        </>
      )}

      {loading && (
        <Loading />
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

        <TambahPenghargaan
          id={id}
          modal={modalTambah}
          setModal={setModalTambah}
          penghargaan={{
            setLoading: setLoading,
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

        <EditPenghargaan
          idPegawai={id}
          idPenghargaan={modalEdit.id}
          modal={modalEdit}
          setModal={setModalEdit}
          penghargaan={{
            setLoading: setLoading,
            data: data,
            setData: setData,
          }}
        />
      </CModal>

      {/* Modal Detail */}
      <CModal
        show={modalDetail.modal}
        onClose={() =>
          setModalDetail({
            ...modalDetail,
            modal: !modalDetail.modal,
            id: null,
          })
        }
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Detail Penghargaan</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <DetailPenghargaan idPegawai={id} idPenghargaan={modalDetail.id} />
          </CModalBody>
          <CModalFooter>
            <CButton
              type="button"
              color="secondary"
              onClick={() => setModalDetail(!modalDetail.modal)}
            >
              Batal
            </CButton>
          </CModalFooter>
        </CForm>
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
              src={getDokPenghargaan(previewImage.image)}
              alt="dokumentasi-penghargaan"
            />
          )}
        </CModalBody>
      </CModal>
    </>
  );
};

export default Penghargaan;
