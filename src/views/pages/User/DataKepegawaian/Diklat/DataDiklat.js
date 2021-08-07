import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
  CRow,
  CCol,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CButtonGroup,
  CButton,
} from "@coreui/react";
import { GlobalContext } from "src/context/Provider";
import { getDiklat } from "src/context/actions/UserPage/DataKepegawaian/getDiklat";
import getDokDiklat from "src/context/actions/DownloadFile/getDokDiklat";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CIcon from "@coreui/icons-react";
import { cilPen, cilPrint, cilTrash } from "@coreui/icons";
import { deleteDiklat } from "src/context/actions/UserPage/Diklat";
import printLaporan from "src/context/actions/DownloadFile/printLaporan";
import { exportExcel } from "src/context/actions/DownloadFile";
import Loading from "src/reusable/Loading";
import TambahDataDiklat from "./TambahDataDiklat";
import EditDataDiklat from "./EditDataDiklat";
const MySwal = withReactContent(swal2);

const DataDiklat = ({ dataActive }) => {
  const [modalTambah, setModalTambah] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });
  const { diklatState, diklatDispatch, userState } = useContext(GlobalContext);
  const { data, loading } = diklatState;
  const { data: user } = userState;
  const [previewImage, setPreviewImage] = useState({
    modal: false,
    image: null,
  });

  useEffect(() => {
    if (!data) {
      if (dataActive === "diklat") {
        getDiklat(diklatDispatch);
      }
    }
  }, [diklatDispatch, dataActive, data]);

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
              onClick={() => handleDelete(user.id_pegawai, row.id_diklat)}
            >
              <CIcon content={cilTrash} color="white" />
            </CButton>
          </CButtonGroup>
        </>
      ),
    },
  ];
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
        deleteDiklat(id_pegawai, id_diklat, diklatDispatch, MySwal);
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
              ) : data.dokumentasi ? (
                <a
                  href={getDokDiklat(data.dokumentasi)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {dokumentasiDisplay.filename}
                </a>
              ) : (
                "Belum ada file"
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
              ) : data.sertifikat ? (
                <a
                  href={getDokDiklat(data.sertifikat)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {sertifikatDisplay.filename}
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
              onClick={() => printLaporan(user.id_pegawai, "diklat")}
            >
              Cetak <CIcon content={cilPrint} />
            </CButton>
            <CButton
              type="button"
              className="ml-2"
              color="success"
              onClick={() =>
                exportExcel("laporan-pegawai/" + user.id_pegawai + "/diklat")
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
              src={getDokDiklat(previewImage.image)}
              alt="dokumentasi-diklat"
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

        <TambahDataDiklat
          id={user.id_pegawai}
          modalTambah={modalTambah}
          setModalTambah={setModalTambah}
          dispatch={diklatDispatch}
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
          idPegawai={user.id_pegawai}
          idDiklat={modalEdit.id}
          modalEdit={modalEdit.modal}
          setModalEdit={setModalEdit}
          dispatch={diklatDispatch}
        />
      </CModal>
    </>
  );
};

export default DataDiklat;
