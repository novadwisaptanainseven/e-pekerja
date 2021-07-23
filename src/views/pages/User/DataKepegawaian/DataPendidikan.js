import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
  CRow,
  CCol,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
} from "@coreui/react";

import { GlobalContext } from "src/context/Provider";
import { getPendidikan } from "src/context/actions/UserPage/DataKepegawaian/getPendidikan";
import { getIjazah } from "src/context/actions/DownloadFile";
import { LoadAnimationBlue } from "src/assets";

const DataPendidikan = ({ dataActive }) => {
  const { pendidikanState, pendidikanDispatch } = useContext(GlobalContext);
  const { data, loading } = pendidikanState;
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

  return (
    <>
      <div className="my-3">
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
