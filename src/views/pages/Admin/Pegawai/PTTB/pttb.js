import React, { useContext, useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { GlobalContext } from "src/context/Provider";
import { LoadAnimationBlue } from "src/assets";

import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CButtonGroup,
  CRow,
  CCol,
} from "@coreui/react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilPrint, cilPen, cilTrash } from "@coreui/icons";
import { getPTTB } from "src/context/actions/Pegawai/PTTB/getPTTB";
import { deletePTTB } from "src/context/actions/Pegawai/PTTB/deletePTTB";
import { format } from "date-fns";
import FilterComponent from "src/reusable/FilterSearchComponent/FilterComponent";
import FilterPrint from "./FilterPrint";

const MySwal = withReactContent(swal2);

const DataPTTB = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const { pttbState, pttbDispatch } = useContext(GlobalContext);
  const { data, loading } = pttbState;
  const [modalPrint, setModalPrint] = useState({
    type: "",
    modal: false,
  });

  useEffect(() => {
    // Get data PTTB
    getPTTB(pttbDispatch);
  }, [pttbDispatch]);

  const filteredData = data.filter((item) =>
    // (
    //   item.nama && item.sub_bidang &&
    //   item.nama.toLowerCase().includes(filterText.toLowerCase())

    // )
    {
      if (item.nama && item.jabatan) {
        if (
          item.nama.toLowerCase().includes(filterText.toLowerCase()) ||
          item.jabatan.toLowerCase().includes(filterText.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    }
  );

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      width: "75px",
    },
    {
      name: "Nama",
      selector: "nama",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Penetap SK",
      selector: "penetap_sk",
      sortable: true,
      wrap: true,
    },
    {
      name: "Tugas Pokok",
      selector: "jabatan",
      sortable: true,
      wrap: true,
    },
    {
      name: "Bidang",
      selector: "bidang",
      sortable: true,
      wrap: true,
    },
    {
      // maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <CButtonGroup>
            <CButton
              color="info"
              className="btn btn-sm"
              onClick={() => goToDetail(row.id_pegawai)}
            >
              Kelengkapan
            </CButton>
            <CButton
              color="success"
              className="btn btn-sm"
              onClick={() => goToEdit(row.id_pegawai)}
            >
              <CIcon content={cilPen} color="white" />
            </CButton>
            <CButton
              color="danger"
              className="btn btn-sm"
              onClick={() => handleDelete(row.id_pegawai)}
            >
              <CIcon content={cilTrash} color="white" />
            </CButton>
          </CButtonGroup>
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

        <CButton
          type="button"
          color="info"
          className="ml-2"
          onClick={() =>
            setModalPrint({
              ...modalPrint,
              type: "print",
              modal: true,
            })
          }
        >
          PDF <CIcon content={cilPrint} />
        </CButton>

        <CButton
          type="button"
          color="success"
          className="ml-2"
          onClick={() =>
            setModalPrint({
              ...modalPrint,
              type: "excel",
              modal: true,
            })
          }
        >
          Excel <CIcon content={cilPrint} />
        </CButton>
      </>
    );
  }, [filterText, resetPaginationToggle, modalPrint]);

  const goToTambah = () => {
    history.push("/epekerja/admin/pegawai/pttb-tambah");
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/pegawai/pttb-edit/${id}`);
  };

  const goToDetail = (id) => {
    history.push(`/epekerja/admin/pegawai-detail/${id}`);
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
        // Memanggil method deletePTTB untuk menghapus data PTTB
        deletePTTB(id, pttbDispatch);
        MySwal.fire({
          icon: "success",
          title: "Terhapus",
          text: "Data berhasil dihapus",
        });
      }
    });
  };

  const ExpandableComponent = ({ data }) => (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>NIP</strong>
          </CCol>
          <CCol>{data.nip}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>Tgl. Penetapan SK</strong>
          </CCol>
          <CCol>{format(new Date(data.tgl_penetapan_sk), "dd/MM/y")}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>No. SK</strong>
          </CCol>
          <CCol>{data.no_sk}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>Tgl. Mulai Tugas</strong>
          </CCol>
          <CCol>{data.tgl_mulai_tugas}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>Kontrak Ke</strong>
          </CCol>
          <CCol>{data.kontrak_ke}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>Masa Kerja</strong>
          </CCol>
          <CCol>{data.masa_kerja}</CCol>
        </CRow>
      </div>
    </>
  );

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Data Pegawai Tidak Tetap Bulanan (PTTB)</h3>
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
              // paginationRowsPerPageOptions={[5, 10, 15]}
              // paginationPerPage={5}
              paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={SubHeaderComponentMemo}
              expandableRows
              expandOnRowClicked
              highlightOnHover
              expandableRowsComponent={<ExpandableComponent />}
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
              data={filteredData}
              noHeader
              responsive={true}
              customStyles={customStyles}
            />
          )}
        </CCardBody>
      </CCard>

      {/* Modal Filter Print */}
      <FilterPrint modal={modalPrint} setModal={setModalPrint} />
    </>
  );
};

export default DataPTTB;
