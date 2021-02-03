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
} from "@coreui/react";
import DataTable from "react-data-table-component";
// import styled from "styled-components";
import EditKGB from "./EditKGB";
import CIcon from "@coreui/icons-react";
import { cilPen, cilTrash, cilPrint } from "@coreui/icons";
import { useHistory } from "react-router-dom";

// const TextField = styled.input`
//   height: 37px;
//   width: 200px;
//   border-radius: 3px;
//   border-top-left-radius: 5px;
//   border-bottom-left-radius: 5px;
//   border-top-right-radius: 0;
//   border-bottom-right-radius: 0;
//   border: 1px solid #e5e5e5;
//   padding: 0 32px 0 16px;

//   &:hover {
//     cursor: pointer;
//   }
// `;

// const ClearButton = styled.button`
//   border-top-left-radius: 0;
//   border-bottom-left-radius: 0;
//   border-top-right-radius: 5px;
//   border-bottom-right-radius: 5px;
//   height: 37px;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #3e5973;
//   border: none;
//   color: white;
//   padding: 0 10px;
//   transition: 0.3s;

//   &:hover {
//     background-color: #283c4f;
//   }
// `;

// Handle filter pencarian

// const FilterComponent = ({ filterText, onFilter, onClear }) => (
//   <>
//     <TextField
//       id="search"
//       type="text"
//       placeholder="Cari pegawai"
//       aria-label="Search Input"
//       value={filterText}
//       onChange={onFilter}
//     />
//     <ClearButton type="button" onClick={onClear}>
//       Reset
//     </ClearButton>
//   </>
// );

const DaftarKGB = () => {
  // const [filterText, setFilterText] = useState("");

  // const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
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
            Cetak KGB
          </CButton>
          <CButton
            color="warning"
            onClick={0}
            className="text-white mr-1"
            style={{ height: "35px" }}
          >
            <CIcon content={cilPen} />
          </CButton>
          <CButton color="danger" onClick={0} style={{ height: "35px" }}>
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
    // const handleClear = () => {
    //   if (filterText) {
    //     setResetPaginationToggle(!resetPaginationToggle);
    //     setFilterText("");
    //   }
    // };

    return (
      <>
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          {/* <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        /> */}
          <CButton color="primary" className="btn btn-md" onClick={0}>
            Tambah KGB
          </CButton>
          <div className="d-flex">
            <CButton type="button" color="info" className="ml-2">
              Cetak <CIcon content={cilPrint} />
            </CButton>
            <CButton
              onClick={goBackToParent}
              type="button"
              color="warning"
              className="ml-2 text-white"
            >
              Kembali
            </CButton>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between my-card-header">
          <h3>Daftar Kenaikan Gaji Berkala</h3>
          <span className="font-weight-normal">
            Nova Dwi Sapta Nain Seven S.Tr.Kom
          </span>
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
          />
        </CCardBody>
      </CCard>

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
