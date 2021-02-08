import React, { useState } from "react";
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
} from "@coreui/react";
import DataTable from "react-data-table-component";
// import styled from "styled-components";
import EditKGB from "./EditKGB";
import CIcon from "@coreui/icons-react";
import { cilPen, cilTrash, cilPrint } from "@coreui/icons";
import { useHistory } from "react-router-dom";
import TambahKGB from "./TambahKGB";

const DaftarKGB = () => {
  const [modalTambah, setModalTambah] = useState(false);

  const history = useHistory();

  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });

  const goBackToParent = () => {
    history.goBack();
  };

  const data = [
    {
      no: 1,
      id: 1,
      gaji_pokok_lama: "Rp. 3.831.900",
      gaji_pokok_baru: "Rp. 3.952.600",
      tmt_kenaikan_gaji: "1 Februari 2021",
      peraturan: "PP No.30 Tahun 2015",
      kenaikan_gaji_yad: "1 Februari 2023",
      status_kgb: 1,
      pangkat_golongan: "IV/c (Pembina Utama Muda)",
      created_at: "03-02-2021",
    },
    {
      no: 2,
      id: 2,
      gaji_pokok_lama: "Rp. 3.952.600",
      gaji_pokok_baru: "Rp. 4.500.000",
      tmt_kenaikan_gaji: "1 Februari 2023",
      peraturan: "PP No.30 Tahun 2015",
      kenaikan_gaji_yad: "1 Februari 2025",
      status_kgb: 1,
      pangkat_golongan: "IV/c (Pembina Utama Muda)",
      created_at: "05-02-2021",
    },
    {
      no: 3,
      id: 3,
      gaji_pokok_lama: "Rp. 4.500.000",
      gaji_pokok_baru: "Rp. 5.000.000",
      tmt_kenaikan_gaji: "1 Februari 2025",
      peraturan: "PP No.30 Tahun 2015",
      kenaikan_gaji_yad: "3 April 2028",
      status_kgb: 1,
      pangkat_golongan: "IV/c (Pembina Utama Muda)",
      created_at: "05-02-2021",
    },
  ];

  // const filteredData = data.filter((item) =>

  //   {
  //     if (item.nama) {
  //       if (item.nama.toLowerCase().includes(filterText.toLowerCase())) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   }
  // );

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      wrap: true,
      width: "50px",
    },
    {
      name: "TMT. Kenaikan Gaji",
      selector: "tmt_kenaikan_gaji",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Gaji P. Lama",
      selector: "gaji_pokok_lama",
      sortable: true,
      wrap: true,
      maxWidth: "150px",
    },
    {
      name: "Gaji P. Baru",
      selector: "gaji_pokok_baru",
      sortable: true,
      wrap: true,
      maxWidth: "150px",
    },
    {
      name: "Kenaikan Gaji YAD",
      selector: "kenaikan_gaji_yad",
      sortable: true,
      wrap: true,
    },
    {
      // maxWidth: "150px",
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
                id: row.id,
              });
            }}
            className="text-white mr-1"
          >
            <CIcon content={cilPen} />
          </CButton>
          <CButton
            color="danger"
            onClick={() =>
              window.confirm(`Anda yakin ingin menghapus data ini ?`)
            }
          >
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
            Tambah KGB
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
          <strong>Tgl. Pembuatan KGB</strong>
        </CCol>
        <CCol>{data.created_at}</CCol>
      </CRow>
      <CRow className="mb-1">
        <CCol md="3">
          <strong>Peraturan</strong>
        </CCol>
        <CCol>{data.peraturan}</CCol>
      </CRow>
    </div>
  );

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between my-card-header">
          <div className="title mb-2">
            <h3>Daftar Kenaikan Gaji Berkala</h3>
            <h5 className="font-weight-normal">Nova Dwi Sapta Nain Seven</h5>
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
        </CCardBody>
      </CCard>

      {/* Modal Tambah */}
      <CModal
        show={modalTambah}
        onClose={() => setModalTambah(!modalTambah)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Tambah Kenaikan Gaji Berkala</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <TambahKGB />
          </CModalBody>
          <CModalFooter>
            <CButton type="submit" color="primary">
              Simpan
            </CButton>{" "}
            <CButton
              type="button"
              color="secondary"
              onClick={() => setModalTambah(!modalTambah)}
            >
              Batal
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>

      {/* Modal Edit KGB */}
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
          <CModalTitle>Perbarui Gaji</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <EditKGB id={modalEdit.id} />
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

export default DaftarKGB;
