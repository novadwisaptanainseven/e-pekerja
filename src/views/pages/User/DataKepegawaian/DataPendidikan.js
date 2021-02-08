import React from "react";
import DataTable from "react-data-table-component";
import { CRow, CCol } from "@coreui/react";

import { SampleIjazah } from "src/assets";

const DataPendidikan = () => {
  const data = [
    {
      id: 1,
      nama_akademi: "Politeknik Negeri Samarinda",
      jurusan: "Teknologi Informasi",
      jenjang: "D4/S1",
      tahun_lulus: "2020",
      no_ijazah: "12-AD-IA-39",
    },
    {
      id: 2,
      nama_akademi: "Universitas Mulawarman",
      jurusan: "Ilmu Komputer",
      jenjang: "S1",
      tahun_lulus: "2020",
      no_ijazah: "12-AD-IA-39",
    },
  ];

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

    // {
    //   name: "Aksi",
    //   selector: "aksi",
    //   wrap: true,
    //   maxWidth: "100px",
    //   cell: (row) => (
    //     <>
    //       <CButtonGroup>
    //         <CButton
    //           color="success"
    //           className="btn btn-sm"
    //           onClick={() =>
    //             setModalEdit({
    //               ...modalEdit,
    //               modal: !modalEdit.modal,
    //               id: row.id,
    //             })
    //           }
    //         >
    //           <CIcon content={cilPen} color="white" />
    //         </CButton>
    //         <CButton
    //           color="danger"
    //           className="btn btn-sm"
    //           onClick={() =>
    //             window.confirm(
    //               `Anda yakin ingin hapus data dengan id : ${row.id}`
    //             )
    //           }
    //         >
    //           <CIcon content={cilTrash} color="white" />
    //         </CButton>
    //       </CButtonGroup>
    //     </>
    //   ),
    // },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: "1.15em",
      },
    },
  };

  const ExpandableComponent = ({ data }) => (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CRow>
          <CCol md="3">
            <strong>Foto / Scan Ijazah</strong>
          </CCol>
          <CCol>
            <img
              className="img-thumbnail"
              width={200}
              src={SampleIjazah}
              alt="foto-ijazah"
            />
          </CCol>
        </CRow>
      </div>
    </>
  );

  return (
    <>
      <div className="my-3">
        {/* <div className="button-control mb-2">
          <CButton
            color="primary"
            className="btn btn-md"
            onClick={() => setModalTambah(!modalTambah)}
          >
            Tambah Data
          </CButton>
          <CButton type="button" color="info">
            Cetak <CIcon content={cilPrint} />
          </CButton>
        </div> */}
        <DataTable
          columns={columns}
          data={data}
          noHeader
          responsive={true}
          customStyles={customStyles}
          expandableRows
          expandOnRowClicked
          expandableRowsComponent={<ExpandableComponent />}
          highlightOnHover
        />
      </div>
    </>
  );
};

export default DataPendidikan;
