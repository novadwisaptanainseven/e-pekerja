import { cilPen, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CModal,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import format from "date-fns/format";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { deleteSK, getSK, getSKByQuery } from "src/context/actions/DataSK";
import getSKFile from "src/context/actions/DownloadFile/getSK";
import { GlobalContext } from "src/context/Provider";
import getFilename from "src/helpers/getFilename";
import customStyles from "src/reusable/customStyles";
import Loading from "src/reusable/Loading";
import LoadingSubmit from "src/reusable/LoadingSubmit";
import SubHeaderComponentMemo from "src/reusable/SubHeaderComponentMemo";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import EditDataSK from "./EditDataSK";
import TambahDataSK from "./TambahDataSK";
const MySwal = withReactContent(swal2);

const DataSK = () => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [modalTambah, setModalTambah] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });
  const [tanggal, setTanggal] = useState({
    dariTanggal: "",
    keTanggal: "",
    errorDari: false,
    errorKe: false,
  });

  const { dataSKState, dataSKDispatch } = useContext(GlobalContext);
  const { data, loading } = dataSKState;

  // Handle filter tanggal
  const handleCariTanggal = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setTanggal({ ...tanggal, [inputName]: inputValue });
  };

  // Handle pencarian data berdasarkan tanggal
  const handleSubmitTanggal = () => {
    getSKByQuery(dataSKDispatch, tanggal);
  };

  useEffect(() => {
    getSK(dataSKDispatch);
  }, [dataSKDispatch]);

  const filteredData = !data
    ? []
    : data.filter((item) => {
        if (
          item.id_sk.toLowerCase().includes(filterText.toLowerCase()) ||
          item.nama_sk.toLowerCase().includes(filterText.toLowerCase()) ||
          item.no_sk.toLowerCase().includes(filterText.toLowerCase()) ||
          item.tanggal.toLowerCase().includes(filterText.toLowerCase())
        ) {
          return true;
        }
        return false;
      });

  const columns = [
    // {
    //   name: "No",
    //   selector: "no",
    //   sortable: true,
    //   width: "80px",
    // },
    {
      name: "ID",
      selector: "id_sk",
      sortable: true,
      wrap: true,
    },
    {
      name: "No. SK",
      selector: "no_sk",
      sortable: true,
      wrap: true,
    },
    {
      name: "Nama SK",
      selector: "nama_sk",
      sortable: true,
      wrap: true,
    },
    {
      name: "Tanggal",
      selector: "tanggal",
      cell: (row) => <div>{format(new Date(row.tanggal), "dd/MM/yyyy")}</div>,
    },
    {
      name: "File SK",
      selector: "file",
      sortable: true,
      wrap: true,
      cell: (row) => (
        <div>
          <a
            href={row.file ? getSKFile(row.file) : "."}
            target="_blank"
            rel="noreferrer"
          >
            {row.file ? getFilename(row.file) : "File SK Belum Ada"}
          </a>
        </div>
      ),
    },
    {
      name: "Action",
      wrap: true,
      cell: (row) => (
        <div data-tag="allowRowEvents" className="my-1">
          <CButtonGroup className="mb-1">
            <CButton
              color="info"
              className="btn btn-sm"
              onClick={() =>
                setModalEdit({
                  ...modalEdit,
                  modal: true,
                  id: row.id_sk,
                })
              }
            >
              <CIcon content={cilPen} color="white" />
            </CButton>
            <CButton
              color="danger"
              className="btn btn-sm"
              onClick={() => handleDelete(row.id_sk)}
            >
              <CIcon content={cilTrash} color="danger" />
            </CButton>
          </CButtonGroup>
        </div>
      ),
    },
  ];

  // hapus data
  const handleDelete = (idSK) => {
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
        deleteSK(idSK, dataSKDispatch, MySwal);
      }
    });
  };

  // Handle Modal Upload
  const handleTambahButton = () => {
    setModalTambah(!modalTambah);
  };

  return (
    <div>
      <CCard>
        <CCardHeader>
          <h3>Data SK</h3>
        </CCardHeader>
        <CCardBody>
          <CRow className="justify-content-end align-items-end">
            <CCol md="3">
              <CFormGroup className="mb-0">
                <CLabel>Dari tanggal</CLabel>
                <CInput
                  type="date"
                  name="dariTanggal"
                  onChange={(e) => handleCariTanggal(e)}
                  onBlur={() =>
                    !tanggal.dariTanggal
                      ? setTanggal({ ...tanggal, errorDari: true })
                      : setTanggal({ ...tanggal, errorDari: false })
                  }
                  className={
                    !tanggal?.dariTanggal && tanggal?.errorDari
                      ? "is-invalid"
                      : null
                  }
                />
              </CFormGroup>
            </CCol>
            <CCol md="3" className="pl-0">
              <CFormGroup className="mb-0">
                <CLabel>Sampai tanggal</CLabel>
                <CInput
                  type="date"
                  name="keTanggal"
                  onChange={(e) => handleCariTanggal(e)}
                  onBlur={() =>
                    !tanggal.keTanggal
                      ? setTanggal({ ...tanggal, errorKe: true })
                      : setTanggal({ ...tanggal, errorKe: false })
                  }
                  className={
                    !tanggal?.keTanggal && tanggal?.errorKe
                      ? "is-invalid"
                      : null
                  }
                />
              </CFormGroup>
            </CCol>
            <CCol md="1" className="pl-0">
              <CButton
                type="button"
                color="info"
                onClick={handleSubmitTanggal}
                disabled={
                  tanggal?.dariTanggal && tanggal?.keTanggal ? false : true
                }
              >
                {loading ? <LoadingSubmit /> : "Cari"}
              </CButton>
            </CCol>
          </CRow>
          {!data ? (
            <>
              <Loading />
            </>
          ) : (
            <DataTable
              columns={columns}
              data={filteredData}
              noHeader
              responsive={true}
              customStyles={customStyles}
              pagination
              paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={
                <SubHeaderComponentMemo
                  handleTambahButton={handleTambahButton}
                  titleTombol="Upload SK"
                  titleCari="Cari SK"
                  filterText={filterText}
                  setFilterText={setFilterText}
                  resetPaginationToggle={resetPaginationToggle}
                  setResetPaginationToggle={setResetPaginationToggle}
                />
              }
              highlightOnHover
            />
          )}
        </CCardBody>
      </CCard>

      {/* Modal Tambah */}
      <CModal show={modalTambah} onClose={() => setModalTambah(!modalTambah)}>
        <CModalHeader closeButton>
          <CModalTitle>Upload SK</CModalTitle>
        </CModalHeader>
        <TambahDataSK
          modal={modalTambah}
          setModal={setModalTambah}
          dispatch={dataSKDispatch}
        />
      </CModal>

      {/* Modal Edit */}
      <CModal
        show={modalEdit.modal}
        onClose={() =>
          setModalEdit({ ...modalEdit, modal: !modalEdit.modal, id: null })
        }
      >
        <CModalHeader closeButton>
          <CModalTitle>Edit SK</CModalTitle>
        </CModalHeader>
        <EditDataSK
          modal={modalEdit}
          setModal={setModalEdit}
          dispatch={dataSKDispatch}
        />
      </CModal>
    </div>
  );
};

export default DataSK;
