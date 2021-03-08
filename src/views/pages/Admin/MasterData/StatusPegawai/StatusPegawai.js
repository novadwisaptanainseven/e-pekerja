import { CButton, CCard, CCardBody, CCardHeader } from "@coreui/react";
import React, { useContext, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import { deleteStatusPegawai } from "src/context/actions/StatusPegawai/deleteStatusPegawai";
import { getStatusPegawai } from "src/context/actions/StatusPegawai/getStatusPegawai";
import { GlobalContext } from "src/context/Provider";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(swal2);

const StatusPegawai = () => {
  const history = useHistory();
  const { statusPegawaiState, statusPegawaiDispatch } = useContext(
    GlobalContext
  );
  const { data, loading, error } = statusPegawaiState;

  // const data = [
  //   {
  //     no: 1,
  //     id: 1,
  //     status_pegawai: "PNS",
  //     keterangan: "Pegawai Negeri Sipil",
  //   },
  //   {
  //     no: 2,
  //     id: 2,
  //     status_pegawai: "PTTH",
  //     keterangan: "Pegawai Tidak Tetap Harian",
  //   },
  //   {
  //     no: 3,
  //     id: 3,
  //     status_pegawai: "PTTB",
  //     keterangan: "Pegawai Tidak Tetap Bulanan",
  //   },
  // ];

  useEffect(() => {
    getStatusPegawai(statusPegawaiDispatch);
  }, []);

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
      maxWidth: "150px",
    },
    {
      name: "Keterangan",
      selector: "keterangan",
      sortable: true,
      wrap: true,
    },
    {
      maxWidth: "200px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <CButton
            color="success"
            className="btn btn-sm mr-1"
            onClick={() => goToEdit(row.id_status_pegawai)}
          >
            Ubah
          </CButton>
          <CButton
            color="danger"
            className="btn btn-sm mr-1"
            onClick={() => handleDelete(row.id_status_pegawai)}
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

  // Menangani tombol hapus
  const handleDelete = (id) => {
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
        // Delete pesan
        deleteStatusPegawai(id, statusPegawaiDispatch);
        MySwal.fire({
          icon: "success",
          title: "Terhapus",
          text: "Data berhasil dihapus",
        });
      }
    });
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
