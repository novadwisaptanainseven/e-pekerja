import React, { useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CRow,
  CCol,
  CButtonGroup,
} from "@coreui/react";
import DataTable from "react-data-table-component";
// import styled from "styled-components";
import CIcon from "@coreui/icons-react";
import { cilPen, cilTrash, cilPrint, cilInfo, cilUser } from "@coreui/icons";
import { useHistory } from "react-router-dom";
import { getPNSById } from "src/context/actions/Pegawai/PNS/getPNSById";
import { LoadAnimationBlue } from "src/assets";
import { format } from "date-fns";
import exportExcel from "src/context/actions/DownloadFile/Excel/Pegawai/exportExcel";
import PerbaruiSK from "./PerbaruiSK";
import { getRiwayatSK } from "src/context/actions/PembaruanSK/getRiwayatSK";
import getSK from "src/context/actions/DownloadFile/getSK";
import EditSK from "./EditSK";
import DetailSK from "./DetailSK";
import getFilename from "src/helpers/getFilename";
import { deleteRiwayatSK } from "src/context/actions/PembaruanSK/deleteRiwayatSK";
import printSK from "src/context/actions/DownloadFile/printSK";

const MySwal = withReactContent(swal2);

const RiwayatSK = ({ match }) => {
  const params = match.params;
  const [modalTambah, setModalTambah] = useState(false);
  const [data, setData] = useState([]);
  const [pegawai, setPegawai] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });
  const [modalDetail, setModalDetail] = useState({
    modal: false,
    id: null,
  });

  const goToDetailPegawai = (id) => {
    history.push(`/epekerja/admin/pegawai-detail/${id}`);
  };

  const goBackToParent = () => {
    history.goBack();
  };

  // Get Pegawai by Id Pegawai
  useEffect(() => {
    getPNSById(params.id, setPegawai);

    // Unmount
    return () => {
      setPegawai("");
    };
  }, [params]);

  // Get Riwayat SK
  useEffect(() => {
    getRiwayatSK(params.id, setLoading, setData);
  }, [params]);

  const columns = [
    {
      name: "No. SK",
      selector: "no_sk",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Penetap SK",
      selector: "penetap_sk",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
    },
    {
      name: "Tgl. Penetapan SK",
      selector: "tgl_penetapan_sk",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
      cell: (row) => (
        <div>{format(new Date(row.tgl_penetapan_sk), "dd/MM/y")}</div>
      ),
    },
    {
      name: "Tgl. Mulai Tugas",
      selector: "tgl_mulai_tugas",
      sortable: true,
      wrap: true,
      cell: (row) => (
        <div>{format(new Date(row.tgl_mulai_tugas), "dd/MM/y")}</div>
      ),
    },
    {
      // maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => {
        return (
          <div data-tag="allowRowEvents">
            <CButtonGroup>
              <CButton
                color="info"
                size="sm"
                onClick={() => {
                  setModalDetail({
                    ...modalDetail,
                    modal: !modalDetail.modal,
                    id: row.id_riwayat_sk,
                  });
                }}
                className="text-white"
              >
                <CIcon content={cilInfo} />
              </CButton>
              <CButton
                color="warning"
                size="sm"
                onClick={() => {
                  setModalEdit({
                    ...modalEdit,
                    modal: !modalEdit.modal,
                    id: row.id_riwayat_sk,
                  });
                }}
                className="text-white"
              >
                <CIcon content={cilPen} />
              </CButton>
              <CButton
                color="danger"
                size="sm"
                onClick={() => handleDelete(row.id_riwayat_sk)}
              >
                <CIcon content={cilTrash} />
              </CButton>
            </CButtonGroup>
          </div>
        );
      },
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
  const handleDelete = (id_riwayat_sk) => {
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
        deleteRiwayatSK(params.id, id_riwayat_sk, setLoading, setData);
        MySwal.fire({
          icon: "success",
          title: "Terhapus",
          text: "Data berhasil dihapus",
        });
      }
    });
  };

  const SubHeaderComponentMemo = () => {
    return (
      <>
        <CButton
          type="button"
          color="secondary"
          className="ml-2"
          onClick={() => goToDetailPegawai(params.id)}
        >
          Detail Pegawai <CIcon content={cilUser} />
        </CButton>
        <CButton
          type="button"
          color="info"
          className="ml-2"
          onClick={() => printSK(params.id)}
        >
          PDF <CIcon content={cilPrint} />
        </CButton>
        <CButton
          type="button"
          color="success"
          className="ml-2"
          onClick={() => exportExcel(`riwayat-sk/` + params.id)}
        >
          Excel <CIcon content={cilPrint} />
        </CButton>
      </>
    );
  };

  // Expandable Component
  const ExpandableComponent = ({ data }) => {
    return (
      <div style={{ padding: "10px 63px" }}>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>Gaji Pokok</strong>
          </CCol>
          <CCol>
            {data.gaji_pokok.toLocaleString("id", {
              style: "currency",
              currency: "IDR",
            })}
          </CCol>
        </CRow>

        <CRow className="mb-1">
          <CCol md="2">
            <strong>Tugas</strong>
          </CCol>
          <CCol>{data.nama_jabatan}</CCol>
        </CRow>

        <CRow className="mb-1">
          <CCol md="2">
            <strong>Kontrak Ke</strong>
          </CCol>
          <CCol>{data.kontrak_ke}</CCol>
        </CRow>

        <CRow className="mb-1">
          <CCol md="2">
            <strong>Masa Kerja</strong>
          </CCol>
          <CCol>{data.masa_kerja}</CCol>
        </CRow>

        <CRow className="mb-1">
          <CCol md="2">
            <strong>File SK</strong>
          </CCol>
          <CCol>
            <a href={getSK(data.file)} target="_blank" rel="noreferrer">
              {getFilename(data.file)}
            </a>
          </CCol>
        </CRow>
      </div>
    );
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between my-card-header">
          <div className="title mb-2">
            <h3>Pembaruan SK Pegawai</h3>
            <h5 className="font-weight-normal">{pegawai.nama}</h5>
          </div>
          <CButton
            color="warning"
            className="text-white"
            style={{ height: "40px", width: "100px" }}
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CButton
            color="primary"
            className="btn btn-md"
            onClick={() => setModalTambah(!modalTambah)}
          >
            Perbarui SK
          </CButton>
          <h3 className="font-weight-normal text-center">Riwayat SK Pegawai</h3>
          {data.length > 0 ? (
            <DataTable
              columns={columns}
              data={data}
              responsive={true}
              customStyles={customStyles}
              pagination
              // paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={<SubHeaderComponentMemo />}
              highlightOnHover
              expandableRows
              expandOnRowClicked
              expandableRowsComponent={ExpandableComponent}
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
              pagination
              // paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={<SubHeaderComponentMemo />}
              highlightOnHover
              expandableRows
              expandOnRowClicked
              expandableRowsComponent={ExpandableComponent}
            />
          )}
        </CCardBody>
      </CCard>

      {/* Modal Tambah */}
      <CModal
        show={modalTambah}
        onClose={() => setModalTambah(!modalTambah)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Perbarui SK</CModalTitle>
        </CModalHeader>

        <PerbaruiSK
          modalTambah={modalTambah}
          setModalTambah={setModalTambah}
          id_pegawai={params.id}
        />
      </CModal>

      {/* Modal Edit Riwayat SK */}
      <CModal
        show={modalEdit.modal}
        onClose={() => {
          setModalEdit({
            ...modalEdit,
            modal: !modalEdit.modal,
            id: null,
          });
        }}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Edit Riwayat SK</CModalTitle>
        </CModalHeader>

        <EditSK
          id_riwayat_sk={modalEdit.id}
          id_pegawai={params.id}
          modalEdit={modalEdit}
          setModalEdit={setModalEdit}
        />
      </CModal>

      {/* Detail Riwayat SK */}
      <CModal
        show={modalDetail.modal}
        onClose={() => {
          setModalDetail({
            ...modalDetail,
            modal: !modalDetail.modal,
            id: null,
          });
        }}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Detail Riwayat SK</CModalTitle>
        </CModalHeader>

        <DetailSK
          id_riwayat_sk={modalDetail.id}
          id_pegawai={params.id}
          modalDetail={modalDetail}
          setModalDetail={setModalDetail}
        />
      </CModal>
    </>
  );
};

export default RiwayatSK;
