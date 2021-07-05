import React, { useContext, useEffect } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CRow,
  CCol,
} from "@coreui/react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "src/context/Provider";
import { getAgama } from "src/context/actions/MasterData/Agama/getAgama";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteAgama } from "src/context/actions/MasterData/Agama/deleteAgama";
import { LoadAnimationBlue } from "src/assets";

const MySwal = withReactContent(swal2);

const Agama = () => {
  const history = useHistory();
  const { agamaState, agamaDispatch } = useContext(GlobalContext);
  const { data, loading } = agamaState;

  useEffect(() => {
    // Get Data Agama
    getAgama(agamaDispatch);
  }, [agamaDispatch]);

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
            onClick={() => goToEdit(row.id_agama)}
          >
            Ubah
          </CButton>
          <CButton
            color="danger"
            className="btn btn-sm mr-1"
            onClick={() => handleDelete(row.id_agama)}
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
        deleteAgama(id, agamaDispatch);
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
          <h3>Data Agama</h3>
        </CCardHeader>
        <CCardBody>
          <CButton color="primary" className="btn btn-md" onClick={goToTambah}>
            Tambah Data
          </CButton>
          {data.length > 0 ? (
            <DataTable
              // title="Data Agama"
              columns={columns}
              data={data}
              noHeader
              responsive={true}
              customStyles={customStyles}
            />
          ) : loading ? (
            <>
              <div>
                <CRow>
                  <CCol className="text-center">
                    <img
                      className="mt-4 ml-3"
                      width={30}
                      src={LoadAnimationBlue}
                      alt="load-animation"
                    />
                  </CCol>
                </CRow>
              </div>
            </>
          ) : (
            <DataTable
              columns={columns}
              noHeader
              responsive={true}
              customStyles={customStyles}
            />
          )}
        </CCardBody>
      </CCard>
    </>
  );
};

export default Agama;
