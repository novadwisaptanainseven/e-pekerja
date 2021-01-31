import React from "react";
import { CCard, CCardHeader, CCardBody, CButton } from "@coreui/react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";

const PangkatEselon = () => {
  const history = useHistory();

  const data = [
    {
      no: 1,
      id: 1,
      eselon: "II. b",
      keterangan: "Kepala Dinas",
    },
    {
      no: 2,
      id: 2,
      eselon: "III. a",
      keterangan: "Sekretaris",
    },
    {
      no: 3,
      id: 3,
      eselon: "III. b",
      keterangan: "Kepala Bidang",
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
      name: "Tingkat Eselon",
      selector: "eselon",
      sortable: true,
    },
    {
      name: "Keterangan",
      selector: "keterangan",
      sortable: true,
      wrap: true
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
    history.push("/epekerja/admin/master-data/pangkat-eselon-tambah");
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/master-data/pangkat-eselon-edit/${id}`);
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Data Eselon</h3>
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

export default PangkatEselon;
