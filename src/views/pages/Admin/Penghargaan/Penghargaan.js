import React, { useContext, useState, useEffect } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CButtonGroup,
  CRow,
  CCol,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
} from "@coreui/react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilInfo, cilPen, cilTrash } from "@coreui/icons";
import { LoadAnimationBlue } from "src/assets";
import { GlobalContext } from "src/context/Provider";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getPenghargaan } from "src/context/actions/Penghargaan/getPenghargaan";
import { deletePenghargaan } from "src/context/actions/Penghargaan/deletePenghargaan";
import { format } from "date-fns";
import getDokPenghargaan from "src/context/actions/DownloadFile/getDokPenghargaan";

const MySwal = withReactContent(swal2);

const TextField = styled.input`
  height: 37px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 37px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3e5973;
  border: none;
  color: white;
  padding: 0 10px;
  transition: 0.3s;

  &:hover {
    background-color: #283c4f;
  }
`;

// Handle filter pencarian

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Cari pegawai"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      Reset
    </ClearButton>
  </>
);

const Penghargaan = () => {
  const history = useHistory();
  const { penghargaanState, penghargaanDispatch } = useContext(GlobalContext);
  const { data } = penghargaanState;
  const [previewImage, setPreviewImage] = useState({
    modal: false,
    image: null,
  });

  useEffect(() => {
    getPenghargaan(penghargaanDispatch);
  }, [penghargaanDispatch]);

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      width: "50px",
    },
    // {
    //   name: "NIP",
    //   selector: "nip",
    //   sortable: true,
    //   wrap: true,
    // },
    {
      name: "Nama",
      selector: "nama",
      sortable: true,
      wrap: true,
    },
    {
      name: "Nama Penghargaan",
      selector: "nama_penghargaan",
      sortable: true,
      wrap: true,
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
              onClick={() => goToDetail(row.id_penghargaan)}
            >
              <CIcon content={cilInfo} color="white" />
            </CButton>
            <CButton
              color="success"
              className="btn btn-sm"
              onClick={() => goToEdit(row.id_penghargaan)}
            >
              <CIcon content={cilPen} color="white" />
            </CButton>
            <CButton
              color="danger"
              className="btn btn-sm"
              onClick={() => handleDelete(row.id_penghargaan)}
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

  const SubHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <>
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />

        {/* <CButton type="button" color="info" className="ml-2">
          Cetak <CIcon content={cilPrint} />
        </CButton> */}
      </>
    );
  }, [filterText, resetPaginationToggle]);

  const goToTambah = (id) => {
    history.push(`/epekerja/admin/penghargaan/tambah`);
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/penghargaan/edit/${id}`);
  };

  const goToDetail = (id) => {
    history.push(`/epekerja/admin/penghargaan/detail/${id}`);
  };

  // hapus data
  const handleDelete = (id) => {
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
        // Delete pesan
        deletePenghargaan(id, penghargaanDispatch);
        MySwal.fire({
          icon: "success",
          title: "Terhapus",
          text: "Data berhasil dihapus",
        });
      }
    });
  };

  const filteredData = data.filter((item) => {
    if (item.nama && item.nama_penghargaan) {
      if (
        item.nama.toLowerCase().includes(filterText.toLowerCase()) ||
        item.nama_penghargaan.toLowerCase().includes(filterText.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  });

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
              <strong>Pemberi</strong>
            </CCol>
            <CCol>{data.pemberi}</CCol>
          </CRow>
          <CRow className="mb-1">
            <CCol md="3">
              <strong>Tgl. Penghargaan</strong>
            </CCol>
            <CCol>{format(new Date(data.tgl_penghargaan), "dd/MM/yyyy")}</CCol>
          </CRow>
          <CRow className="mb-1">
            <CCol md="3">
              <strong>Dokumentasi</strong>
            </CCol>
            <CCol>
              {EXT_IMAGE.includes(ext_file2.toLowerCase()) ? (
                <img
                  width={200}
                  style={{ cursor: "pointer" }}
                  onClick={() => handlePreviewImage(data.dokumentasi)}
                  src={getDokPenghargaan(data.dokumentasi)}
                  alt="dokumentasi-penghargaan"
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
      <CCard>
        <CCardHeader>
          <h3>Penghargaan</h3>
        </CCardHeader>
        <CCardBody>
          <CButton type="button" color="primary" onClick={goToTambah}>
            Tambah Penghargaan
          </CButton>

          {data.length > 0 ? (
            <DataTable
              columns={columns}
              data={filteredData}
              noHeader
              responsive={true}
              customStyles={customStyles}
              pagination
              // paginationRowsPerPageOptions={[5, 10, 15]}
              // paginationPerPage={5}
              paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={SubHeaderComponentMemo}
              expandableRows={true}
              expandableRowsComponent={<ExpandableComponent />}
              expandOnRowClicked
              highlightOnHover
            />
          ) : (
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
          )}
        </CCardBody>
      </CCard>

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
