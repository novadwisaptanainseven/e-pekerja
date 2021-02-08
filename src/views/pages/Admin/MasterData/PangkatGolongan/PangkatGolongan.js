import React from "react";
import { CCard, CCardHeader, CCardBody, CButton } from "@coreui/react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";

const PangkatGolongan = () => {
  const history = useHistory();

  const data = [
    {
      no: 1,
      id: 1,
      golongan: "IIa",
      keterangan: "Pengatur Muda",
    },
    {
      no: 2,
      id: 2,
      golongan: "IIb",
      keterangan: "Pengatur Muda Tingkat 1",
    },
    {
      no: 3,
      id: 3,
      golongan: "IIc",
      keterangan: "Pengatur",
    },
  ];

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      // width: "50px",
      minWidth: "50px",
      maxWidth: "100px",
    },
    {
      name: "Golongan",
      selector: "golongan",
      sortable: true,
    },
    {
      name: "Keterangan",
      selector: "keterangan",
      minWidth: "150px",
      sortable: true,
      wrap: true,
    },
    {
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <CButton
            color="success"
            className="btn btn-sm mr-1"
            onClick={() => goToEdit(row.id)}
          >
            Ubah
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
    history.push("/epekerja/admin/master-data/pangkat-golongan-tambah");
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/master-data/pangkat-golongan-edit/${id}`);
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Data Golongan</h3>
        </CCardHeader>
        <CCardBody>
          <CButton color="primary" className="btn btn-md" onClick={goToTambah}>
            Tambah Data
          </CButton>

          <DataTable
            title="Data Agama"
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

export default PangkatGolongan;
