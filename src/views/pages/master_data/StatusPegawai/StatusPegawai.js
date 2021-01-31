import React from "react";
import { CCard, CCardHeader, CCardBody, CButton } from "@coreui/react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";

const StatusPegawai = () => {
  const history = useHistory();

  const data = [
    {
      no: 1,
      id: 1,
      status_pegawai: "PNS",
      keterangan: "Pegawai Negeri Sipil",
    },
    {
      no: 2,
      id: 2,
      status_pegawai: "PTTH",
      keterangan: "Pegawai Tidak Tetap Harian",
    },
    {
      no: 3,
      id: 3,
      status_pegawai: "PTTB",
      keterangan: "Pegawai Tidak Tetap Bulanan",
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
      name: "Status",
      selector: "status_pegawai",
      sortable: true,
      maxWidth: '150px'
    },
    {
      name: "Keterangan",
      selector: "keterangan",
      sortable: true,
      wrap: true
    },
    {
      maxWidth: '200px',
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
    history.push(`/epekerja/admin/master-data/status-pegawai-tambah`);
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/master-data/status-pegawai-edit/${id}`);
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Status Pegawai</h3>
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

export default StatusPegawai;
