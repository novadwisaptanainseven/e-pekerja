import React from "react";
import { CCard, CCardHeader, CCardBody, CButton } from "@coreui/react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";

const Bidang = () => {
  const history = useHistory();

  const data = [
    {
      no: 1,
      id: 1,
      nama_bidang: "Sekretariat",
      keterangan:
        "Pelayanan administrasi kepegawaian, umum, keuangan dan program",
    },
    {
      no: 2,
      id: 2,
      nama_bidang: "Permukiman",
      keterangan:
        "Unsur pelaksana pemerintah Kota Samarinda dalam bidang Permukiman",
    },
    {
      no: 3,
      id: 3,
      nama_bidang: "Perumahan",
      keterangan:
        "Unsur pelaksana Pemerintah Kota Samarinda dalam bidang Perumahan",
    },
  ];

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      minWidth: "50px",
      maxWidth: "100px",
    },
    {
      name: "Nama Bidang",
      selector: "nama_bidang",
      sortable: true,
      maxWidth: "200px",
    },
    {
      name: "Keterangan",
      selector: "keterangan",
      sortable: true,
      wrap: true,
      minWidth: '300px'
    },
    {
      maxWidth: '150px',
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <CButton
            color="success"
            className="btn btn-sm mr-1"
            onClick={() => goToEdit(row.id)}
          >
            Edit
          </CButton>
          <CButton
            color="danger"
            className="btn btn-sm mr-1"
            onClick={() =>
              window.confirm(
                `Anda yakin ingin hapus data dengan id : ${row.id}`
              )
            }
          >
            Hapus
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

  const goToTambah = () => {
    history.push("/epekerja/admin/master-data/bidang-tambah");
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/master-data/bidang-edit/${id}`);
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Data Bidang</h3>
        </CCardHeader>
        <CCardBody>
          <CButton color="primary" className="btn btn-md" onClick={goToTambah}>
            Tambah Data
          </CButton>

          <DataTable
            columns={columns}
            data={data}
            noHeader
            responsive={true}
            customStyles={customStyles}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Bidang;
