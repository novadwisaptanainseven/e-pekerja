import React, { useState, useEffect } from "react";

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
  CModalBody,
  CCol,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPen, cilTrash, cilPrint } from "@coreui/icons";
import TambahDataDiklat from "./TambahDataDiklat";
import EditDataDiklat from "./EditDataDiklat";
import { getDiklat } from "src/context/actions/Pegawai/Diklat/getDiklat";
import { deleteDiklat } from "src/context/actions/Pegawai/Diklat/deleteDiklat";
import getDokDiklat from "src/context/actions/DownloadFile/getDokDiklat";
import printLaporan from "src/context/actions/DownloadFile/printLaporan";
import exportExcel from "src/context/actions/DownloadFile/Excel/Pegawai/exportExcel";

const MySwal = withReactContent(swal2);

const DataDiklat = ({ id, dataActive }) => {
  const [modalTambah, setModalTambah] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });
  const [previewImage, setPreviewImage] = useState({
    modal: false,
    image: null,
  });
  const [diklat, setDiklat] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!diklat) {
      if (dataActive === "diklat") {
        // Get Diklat by Id Pegawai
        getDiklat(id, setDiklat, setLoading);
      }
    }
  }, [id, dataActive, diklat]);

  const columns = [
    {
      name: "Nama Diklat",
      selector: "nama_diklat",
      wrap: true,
      sortable: true,
    },
    {
      name: "Jenis Diklat",
      selector: "jenis_diklat",
      wrap: true,
      sortable: true,
    },
    {
      name: "Penyelenggara",
      selector: "penyelenggara",
      wrap: true,
      sortable: true,
      // maxWidth: "100px",
    },
    {
      name: "Tahun Diklat",
      selector: "tahun_diklat",
      wrap: true,
      sortable: true,
      // maxWidth: "150px",
    },
    {
      name: "Jumlah Jam",
      selector: "jumlah_jam",
      wrap: true,
      sortable: true,
    },

    {
      name: "Aksi",
      selector: "aksi",
      wrap: true,
      maxWidth: "100px",
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
                  id: row.id_diklat,
                })
              }
            >
              <CIcon content={cilPen} color="white" />
            </CButton>
            <CButton
              color="danger"
              className="btn btn-sm"
              onClick={() => handleDelete(id, row.id_diklat)}
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
  const handleDelete = (id_pegawai, id_diklat) => {
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
        // Memanggil method deleteDiklat untuk menghapus data Diklat
        deleteDiklat(id_pegawai, id_diklat, setDiklat);
        MySwal.fire({
          icon: "success",
          title: "Terhapus",
          text: "Data berhasil dihapus",
        }).then((res) => {
          getDiklat(id_pegawai, setDiklat, setLoading);
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

  // Expandable Component
  const ExpandableComponent = ({ data }) => {
    const EXT_IMAGE = ["jpg", "jpeg", "png"];

    const splitFile = (file) => {
      let arr_file = file.split("/");
      let filename = arr_file[arr_file.length - 1];
      let ext_file = filename.split(".");
      let ext_file2 = ext_file[ext_file.length - 1];

      return { ext: ext_file2, filename: filename };
    };

    let dokumentasiDisplay = splitFile(data.dokumentasi);
    let sertifikatDisplay = splitFile(data.sertifikat);

    return (
      <>
        <div style={{ padding: "10px 63px" }}>
          <CRow className="mb-2">
            <CCol md="2">
              <strong>Dokumentasi</strong>
            </CCol>
            <CCol>
              {EXT_IMAGE.includes(dokumentasiDisplay.ext.toLowerCase()) ? (
                <img
                  width={200}
                  src={getDokDiklat(data.dokumentasi)}
                  alt="dokumentasi-diklat"
                  onClick={() => handlePreviewImage(data.dokumentasi)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <a
                  href={getDokDiklat(data.dokumentasi)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {dokumentasiDisplay.filename}
                </a>
              )}
            </CCol>
          </CRow>
          <CRow>
            <CCol md="2">
              <strong>Sertifikat</strong>
            </CCol>
            <CCol>
              {EXT_IMAGE.includes(sertifikatDisplay.ext.toLowerCase()) ? (
                <img
                  width={200}
                  src={getDokDiklat(data.sertifikat)}
                  alt="sertifikat-diklat"
                  onClick={() => handlePreviewImage(data.sertifikat)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <a
                  href={getDokDiklat(data.sertifikat)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {sertifikatDisplay.filename}
                </a>
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
                  onClick={() => printLaporan(id, "diklat")}
                >
                  Cetak <CIcon content={cilPrint} />
                </CButton>
                <CButton
                  type="button"
                  className="ml-2"
                  color="success"
                  onClick={() =>
                    exportExcel("laporan-pegawai/" + id + "/diklat")
                  }
                >
                  Excel <CIcon content={cilPrint} />
                </CButton>
              </div>
            </div>
            <DataTable
              columns={columns}
              data={diklat || []}
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

        <TambahDataDiklat
          id={id}
          modalTambah={modalTambah}
          setModalTambah={setModalTambah}
          diklat={{
            setLoadingDiklat: setLoading,
            data: diklat,
            setData: setDiklat,
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

        <EditDataDiklat
          idPegawai={id}
          idDiklat={modalEdit.id}
          modalEdit={modalEdit.modal}
          setModalEdit={setModalEdit}
          diklat={{
            setLoadingDiklat: setLoading,
            data: diklat,
            setData: setDiklat,
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
              src={getDokDiklat(previewImage.image)}
              alt="dokumentasi-diklat"
            />
          )}
        </CModalBody>
      </CModal>
    </>
  );
};

export default DataDiklat;
