import React, { useState, useEffect } from "react";

import DataTable from "react-data-table-component";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { LoadAnimationBlue } from "src/assets";

import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CRow,
  CCol,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilTrash } from "@coreui/icons";
import TambahBerkas from "./TambahBerkas";
import { getBerkas } from "src/context/actions/Pegawai/Berkas/getBerkas";
import { deleteBerkas } from "src/context/actions/Pegawai/Berkas/deleteBerkas";
import getFileBerkas from "src/context/actions/DownloadFile/getFileBerkas";
import { format } from "date-fns";

const MySwal = withReactContent(swal2);

const DataBerkas = ({ id, dataActive }) => {
  const [modalTambah, setModalTambah] = useState(false);

  const [previewImage, setPreviewImage] = useState({
    modal: false,
    image: null,
  });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!data) {
      if (dataActive === "berkas") {
        // Get Berkas by Id Pegawai
        getBerkas(id, setData, setLoading);
      }
    }
  }, [id, data, dataActive]);

  const columns = [
    {
      name: "Berkas",
      selector: "nama_berkas",
      wrap: true,
      sortable: true,
      maxWidth: "250px",
      cell: (row) => {
        const EXT_IMAGE = ["jpg", "jpeg", "png"];

        let arr_file = row.nama_berkas.split("/");
        let filename = arr_file[arr_file.length - 1];
        let ext_file = filename.split(".");
        let ext_file2 = ext_file[ext_file.length - 1];

        return (
          <>
            {EXT_IMAGE.includes(ext_file2.toLowerCase()) ? (
              <img
                width={100}
                src={getFileBerkas(row.nama_berkas)}
                alt={filename}
                onClick={() => handlePreviewImage(row.nama_berkas)}
                style={{ cursor: "pointer" }}
                className="img-thumbnail m-3"
              />
            ) : (
              <a
                href={getFileBerkas(row.nama_berkas)}
                target="_blank"
                rel="noreferrer"
              >
                {filename}
              </a>
            )}
          </>
        );
      },
    },
    {
      name: "Tgl dan Jam Upload",
      selector: "created_at",
      wrap: true,
      sortable: true,
      maxWidth: "250px",
      cell: (row) => {
        const arr_date = row.created_at.split(" ");
        const formattedDate = format(new Date(arr_date[0]), "dd/MM/y");
        return formattedDate + " " + arr_date[1];
      },
    },
    {
      name: "Keterangan",
      selector: "keterangan",
      wrap: true,
      sortable: true,
      // maxWidth: "150px",
    },
    {
      name: "Aksi",
      selector: "aksi",
      wrap: true,
      maxWidth: "100px",
      cell: (row) => (
        <>
          <CButton
            color="danger"
            className="btn btn-sm"
            onClick={() => handleDelete(id, row.id_berkas)}
          >
            <CIcon content={cilTrash} color="white" />
          </CButton>
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
  const handleDelete = (id_pegawai, id_berkas) => {
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
        // Memanggil method deleteBerkas untuk menghapus data Berkas
        deleteBerkas(id_pegawai, id_berkas, setData);
        MySwal.fire({
          icon: "success",
          title: "Terhapus",
          text: "Data berhasil dihapus",
        }).then((res) => {
          getBerkas(id_pegawai, setData, setLoading);
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

  return (
    <>
      {!loading && (
        <>
          <div className="my-3">
            <CButton
              type="button"
              color="primary"
              onClick={() => setModalTambah(!modalTambah)}
            >
              Tambah Berkas
            </CButton>
            <DataTable
              columns={columns}
              data={data || []}
              noHeader
              responsive={true}
              customStyles={customStyles}
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

        <TambahBerkas
          id={id}
          modal={modalTambah}
          setModal={setModalTambah}
          berkas={{
            setLoading: setLoading,
            data: data,
            setData: setData,
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
              src={getFileBerkas(previewImage.image)}
              alt="dokumentasi-penghargaan"
            />
          )}
        </CModalBody>
      </CModal>
    </>
  );
};

export default DataBerkas;
