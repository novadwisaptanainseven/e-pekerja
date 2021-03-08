import React, { useContext, useEffect } from "react";
import { CCard, CCardHeader, CCardBody, CButton, CRow, CCol } from "@coreui/react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { GlobalContext } from "src/context/Provider";
import { getGolongan } from "src/context/actions/MasterData/PangkatGolongan/getGolongan";
import { deleteGolongan } from "src/context/actions/MasterData/PangkatGolongan/deleteGolongan";
import { LoadAnimationBlue } from "src/assets";

const MySwal = withReactContent(swal2);

const PangkatGolongan = () => {
  const history = useHistory();
  const { golonganState, golonganDispatch } = useContext(GlobalContext);
  const { data, loading, error } = golonganState;

  useEffect(() => {
    // Get data golongan
    getGolongan(golonganDispatch);
  }, []);

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
            onClick={() => goToEdit(row.id_pangkat_golongan)}
          >
            Ubah
          </CButton>
          <CButton
            color="danger"
            className="btn btn-sm mr-1"
            onClick={() => handleDelete(row.id_pangkat_golongan)}
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
        deleteGolongan(id, golonganDispatch);
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
          <h3>Data Golongan</h3>
        </CCardHeader>
        <CCardBody>
          <CButton color="primary" className="btn btn-md" onClick={goToTambah}>
            Tambah Data
          </CButton>

          {data.length > 0 ? (
            <DataTable
              columns={columns}
              data={data}
              noHeader
              responsive={true}
              customStyles={customStyles}
            />
          ) : (
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
          )}
        </CCardBody>
      </CCard>
    </>
  );
};

export default PangkatGolongan;
