import React from "react";
import { CCard, CCardHeader, CCardBody, CButton } from "@coreui/react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";

const Agama = () => {
  const history = useHistory();

  const data = [
    {
      no: 1,
      id: 1,
      agama: "Islam",
    },
    {
      no: 2,
      id: 2,
      agama: "Kristen",
    },
    {
      no: 3,
      id: 3,
      agama: "Hindu",
    },
  ];

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      maxWidth: "50px",
    },
    {
      name: "Agama",
      selector: "agama",
      sortable: true,
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
    history.push(`/epekerja/admin/master-data/agama-tambah`);
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/master-data/agama-edit/${id}`);
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Data Agama</h3>
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

export default Agama;
