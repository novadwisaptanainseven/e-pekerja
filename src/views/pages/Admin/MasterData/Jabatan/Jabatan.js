import React, { useContext, useEffect, useState } from "react";
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

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { GlobalContext } from "src/context/Provider";
import { getJabatan } from "src/context/actions/MasterData/Jabatan/getJabatan";
import { deleteJabatan } from "src/context/actions/MasterData/Jabatan/deleteJabatan";
import { LoadAnimationBlue } from "src/assets";
import FilterComponent from "src/reusable/FilterSearchComponent/FilterComponent";
const MySwal = withReactContent(swal2);

const Jabatan = () => {
  const [filterText, setFilterText] = useState("");
  const history = useHistory();
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const { jabatanState, jabatanDispatch } = useContext(GlobalContext);
  const { data, loading } = jabatanState;

  useEffect(() => {
    // Get data jabatan
    getJabatan(jabatanDispatch);
  }, [jabatanDispatch]);

  const filteredData = data.filter((item) => {
    if (item.nama_jabatan) {
      if (item.nama_jabatan.toLowerCase().includes(filterText.toLowerCase())) {
        return true;
      }
    }
    return false;
  });

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

  const SubHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <>
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
      </>
    );
  }, [filterText, resetPaginationToggle]);

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

          {data.length > 0 ? (
            <DataTable
              columns={columns}
              data={filteredData}
              noHeader
              responsive={true}
              customStyles={customStyles}
              pagination
              subHeader
              subHeaderComponent={SubHeaderComponentMemo}
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

export default Jabatan;
