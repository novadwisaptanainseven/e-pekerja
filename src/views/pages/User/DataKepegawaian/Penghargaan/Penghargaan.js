import React, { useContext, useEffect, useState } from "react";
import {
  CButton,
  CRow,
  CCol,
  CModal,
  CModalHeader,
  CModalTitle,
  CForm,
  CModalBody,
} from "@coreui/react";
import DataTable from "react-data-table-component";
import CIcon from "@coreui/icons-react";
import { cilInfo } from "@coreui/icons";
import DetailPenghargaan from "./DetailPenghargaan";
import { GlobalContext } from "src/context/Provider";
import { getPenghargaan } from "src/context/actions/UserPage/DataKepegawaian/getPenghargaan";
import getDokPenghargaan from "src/context/actions/DownloadFile/getDokPenghargaan";
import { LoadAnimationBlue } from "src/assets";
import { format } from "date-fns";

const Penghargaan = ({ dataActive }) => {
  const { penghargaanUserState, penghargaanUserDispatch } =
    useContext(GlobalContext);
  const { data, loading } = penghargaanUserState;
  const [modalDetail, setModalDetail] = useState({
    modal: false,
    id: null,
  });
  const [previewImage, setPreviewImage] = useState({
    modal: false,
    image: null,
  });

  useEffect(() => {
    if (!data) {
      if (dataActive === "penghargaan") {
        // Get data penghargaan
        getPenghargaan(penghargaanUserDispatch);
      }
    }
  }, [data, penghargaanUserDispatch, dataActive]);

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
      cell: (row) => (
        <div>{format(new Date(row.tgl_penghargaan), "dd/MM/yyyy")}</div>
      ),
    },
    {
      maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
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
              ) : (
                <a
                  href={getDokPenghargaan(data.dokumentasi)}
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

  return (
    <>
      {data.length > 0 ? (
        <DataTable
          columns={columns}
          data={data}
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
            <DetailPenghargaan id={modalDetail.id} />
          </CModalBody>
        </CForm>
      </CModal>
    </>
  );
};

export default Penghargaan;
