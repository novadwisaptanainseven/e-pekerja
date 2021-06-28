import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
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
import { GlobalContext } from "src/context/Provider";
import { getBerkas } from "src/context/actions/UserPage/DataKepegawaian/getBerkas";
import getFileBerkas from "src/context/actions/DownloadFile/getFileBerkas";
import { format } from "date-fns";
import { LoadAnimationBlue } from "src/assets";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteBerkas } from "src/context/actions/UserPage/DataKepegawaian/deleteBerkas";

const MySwal = withReactContent(swal2);

const DataBerkas = ({dataActive}) => {
  const [modalTambah, setModalTambah] = useState(false);
  const { berkasState, berkasDispatch } = useContext(GlobalContext);
  const { data, loading } = berkasState;
  const [previewImage, setPreviewImage] = useState({
    modal: false,
    image: null,
  });

  useEffect(() => {
    if (!data) {
      if (dataActive === "berkas") {
        // Get data berkas
        getBerkas(berkasDispatch);
      }
    }
  }, [berkasDispatch, data, dataActive]);

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
      name: "Tgl. Upload",
      selector: "tgl_upload",
      wrap: true,
      sortable: true,
      maxWidth: "150px",
      cell: (row) => (
        <div>{format(new Date(row.tgl_upload), "dd/MM/yyyy")}</div>
      ),
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
            onClick={() => handleDelete(row.id_berkas)}
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

  // Menangani preview gambar
  const handlePreviewImage = (dokumentasi) => {
    setPreviewImage({
      ...previewImage,
      modal: !previewImage.modal,
      image: dokumentasi,
    });
  };

  // Menangani tombol hapus
  const handleDelete = (id_berkas) => {
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
        // Memanggil method delete Berkas untuk menghapus data Berkas
        deleteBerkas(id_berkas, berkasDispatch);
        MySwal.fire({
          icon: "success",
          title: "Terhapus",
          text: "Data berhasil dihapus",
        });
      }
    });
  };

  return (
    <>
      <div className="my-3">
        <CButton
          type="button"
          color="primary"
          onClick={() => setModalTambah(!modalTambah)}
        >
          Tambah Berkas
        </CButton>
        {data.length > 0 ? (
          <>
            <DataTable
              columns={columns}
              data={data}
              noHeader
              responsive={true}
              customStyles={customStyles}
            />
          </>
        ) : loading ? (
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

        <TambahBerkas
          modal={modalTambah}
          setModal={setModalTambah}
          dispatch={berkasDispatch}
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
