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
  CForm,
  CModalBody,
  CModalFooter,
  CRow,
  CCol,
  CBadge,
} from "@coreui/react";
import DataTable from "react-data-table-component";
// import styled from "styled-components";
import CIcon from "@coreui/icons-react";
import { cilPen, cilTrash, cilPrint } from "@coreui/icons";
import { useHistory } from "react-router-dom";
import TambahCuti from "./TambahCuti";
import EditCuti from "./EditCuti";
import { getPNSById } from "src/context/actions/Pegawai/PNS/getPNSById";
import { getCuti } from "src/context/actions/Cuti/getCuti";
import { deleteCuti } from "src/context/actions/Cuti/deleteCuti";
import { format } from "date-fns";
import { LoadAnimationBlue } from "src/assets";

const MySwal = withReactContent(swal2);

const RiwayatCuti = ({ match }) => {
  const [modalTambah, setModalTambah] = useState(false);
  const params = match.params;
  const history = useHistory();
  const [data, setData] = useState([]);
  const [pegawai, setPegawai] = useState("");
  const [loading, setLoading] = useState(false);

  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });

  const goBackToParent = () => {
    history.goBack();
  };

  useEffect(() => {
    // Get Pegawai by Id Pegawai
    getPNSById(params.id, setPegawai);

    // Get Riwayat Cuti by ID Pegawai
    getCuti(params.id, setLoading, setData);

    // Unmount
    return () => {
      setPegawai("");
      setData([]);
    };
  }, [params]);

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      wrap: true,
      width: "50px",
    },
    {
      name: "Lama Cuti",
      selector: "lama_cuti",
      sortable: true,
      maxWidth: "150px",
      wrap: true,
    },
    {
      name: "Tgl. Mulai Cuti",
      selector: "tgl_mulai",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
      cell: (item) => (
        <div>{format(new Date(item.tgl_mulai), "dd/MM/yyyy")}</div>
      ),
    },
    {
      name: "Tgl. Selesai Cuti",
      selector: "tgl_selesai",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
      cell: (item) => (
        <div>{format(new Date(item.tgl_selesai), "dd/MM/yyyy")}</div>
      ),
    },
    {
      name: "Status Cuti",
      selector: "status_cuti",
      sortable: true,
      wrap: true,
      // cell: (row) => {
      //   if (row.status_cuti === 0) {
      //     return (
      //       <>
      //         <CBadge color="info" shape="pill" className="px-2 py-2">
      //           Akan Cuti
      //         </CBadge>
      //       </>
      //     );
      //   } else if (row.status_cuti === 1) {
      //     return (
      //       <>
      //         <CBadge color="primary" shape="pill" className="px-2 py-2">
      //           Sedang Cuti
      //         </CBadge>
      //       </>
      //     );
      //   } else if (row.status_cuti === 2) {
      //     return (
      //       <>
      //         <CBadge color="dark" shape="pill" className="px-2 py-2">
      //           Masa Cuti Selesai
      //         </CBadge>
      //       </>
      //     );
      //   }
      // },
    },
    {
      maxWidth: "180px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <CButton className="mr-1" color="info" onClick={0}>
            <CIcon content={cilPrint} />
          </CButton>
          <CButton
            color="warning"
            onClick={() => {
              setModalEdit({
                ...modalEdit,
                modal: !modalEdit.modal,
                id: row.id_cuti,
              });
            }}
            className="text-white mr-1"
          >
            <CIcon content={cilPen} />
          </CButton>
          <CButton color="danger" onClick={() => handleDelete(row.id_cuti)}>
            <CIcon content={cilTrash} />
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

  // Menangani tombol hapus
  const handleDelete = (id_cuti) => {
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
        deleteCuti(params.id, id_cuti, setLoading, setData);
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
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <CButton
            color="primary"
            className="btn btn-md"
            onClick={() => setModalTambah(!modalTambah)}
          >
            Tambah Cuti Baru
          </CButton>
          <div className="d-flex">
            <CButton type="button" color="info" className="ml-2">
              Cetak <CIcon content={cilPrint} />
            </CButton>
          </div>
        </div>
      </>
    );
  };

  // Expandable Component
  const ExpandableComponent = ({ data }) => (
    <div style={{ padding: "10px 63px" }}>
      <CRow className="mb-1">
        <CCol md="3">
          <strong>Tgl. Pembuatan Cuti</strong>
        </CCol>
        <CCol>{format(new Date(data.created_at), "dd/MM/y")}</CCol>
      </CRow>
      <CRow className="mb-1">
        <CCol md="3">
          <strong>Keterangan</strong>
        </CCol>
        <CCol>{data.keterangan}</CCol>
      </CRow>
    </div>
  );

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between my-card-header">
          <div className="title mb-2">
            <h3>Riwayat Cuti</h3>
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
          {data.length > 0 ? (
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
              expandableRowsComponent={<ExpandableComponent />}
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
              expandableRowsComponent={<ExpandableComponent />}
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
          <CModalTitle>Buat Cuti Pegawai</CModalTitle>
        </CModalHeader>

        <TambahCuti
          id_pegawai={params.id}
          modalTambah={modalTambah}
          setModalTambah={setModalTambah}
        />
      </CModal>

      {/* Modal Edit Cuti */}
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
          <CModalTitle>Edit Cuti</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <EditCuti id={modalEdit.id} />
          </CModalBody>
          <CModalFooter>
            <CButton type="submit" color="primary">
              Simpan
            </CButton>{" "}
            <CButton
              type="button"
              color="secondary"
              onClick={() => setModalEdit(!modalEdit.modal)}
            >
              Batal
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </>
  );
};

export default RiwayatCuti;
