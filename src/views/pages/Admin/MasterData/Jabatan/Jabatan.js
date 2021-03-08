import React, { useContext, useEffect } from "react";
import { CCard, CCardHeader, CCardBody, CButton } from "@coreui/react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { GlobalContext } from "src/context/Provider";
import { getJabatan } from "src/context/actions/MasterData/Jabatan/getJabatan";
import { deleteJabatan } from "src/context/actions/MasterData/Jabatan/deleteJabatan";
const MySwal = withReactContent(swal2);

const Jabatan = () => {
  const history = useHistory();
  const { jabatanState, jabatanDispatch } = useContext(GlobalContext);
  const { data, loading, error } = jabatanState;

  useEffect(() => {
    // Get data jabatan
    getJabatan(jabatanDispatch);
  }, []);

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      minWidth: "50px",
      maxWidth: "100px",
    },
    {
      name: "Jabatan",
      selector: "nama_jabatan",
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
            onClick={() => goToEdit(row.id_jabatan)}
          >
            Ubah
          </CButton>
          <CButton
            color="danger"
            className="btn btn-sm mr-1"
            onClick={() => handleDelete(row.id_jabatan)}
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
    history.push("/epekerja/admin/master-data/jabatan-tambah");
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/master-data/jabatan-edit/${id}`);
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
        // Memanggil method deleteJabatan untuk menghapus data Jabatan
        deleteJabatan(id, jabatanDispatch);
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
          <h3>Data Jabatan</h3>
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

export default Jabatan;
