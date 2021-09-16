import { cilInfo, cilPen, cilPrint } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CBadge,
  CButtonGroup,
  CButton,
  CRow,
  CCol,
} from "@coreui/react";
import { format } from "date-fns";
import React, { useContext, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  exportExcel,
  printPegawaiBerhenti,
} from "src/context/actions/DownloadFile";
import {
  batalkanPegawaiBerhenti,
  getPegawaiBerhenti,
} from "src/context/actions/PegawaiBerhenti";
import { GlobalContext } from "src/context/Provider";
import customStyles from "src/reusable/customStyles";
import Loading from "src/reusable/Loading";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(swal2);

const PegawaiBerhenti = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const { url } = match;
  const { pegawaiBerhentiState, pegawaiBerhentiDispatch } =
    useContext(GlobalContext);
  const { data } = pegawaiBerhentiState;

  // Functions
  const goToDetail = (id) => {
    history.push(`${url}/${id}/detail`);
  };
  const goToEdit = (id) => {
    history.push(`${url}/${id}/edit`);
  };

  // Get Pegawai Berhenti
  useEffect(() => {
    getPegawaiBerhenti(pegawaiBerhentiDispatch);
  }, [pegawaiBerhentiDispatch]);

  // const data = [
  //   {
  //     id_pegawai_berhenti: 1,
  //     no: 1,
  //     nip: "123123123",
  //     nama: "Topan Nugroho",
  //     status_pegawai: "PNS",
  //     tgl_berhenti: "2021-08-02",
  //     status_berhenti: "berhenti",
  //     keterangan: "Ingin fokus skripsi",
  //   },
  //   {
  //     id_pegawai_berhenti: 2,
  //     no: 2,
  //     nip: "123123123",
  //     nama: "Xoki Pardede",
  //     status_pegawai: "PTTH",
  //     tgl_berhenti: "2021-08-02",
  //     status_berhenti: "akan-berhenti",
  //     keterangan: "Mencari pekerjaan yang lebih baik",
  //   },
  //   {
  //     id_pegawai_berhenti: 3,
  //     no: 3,
  //     nip: "123123123",
  //     nama: "Tretan Muslim",
  //     status_pegawai: "PTTB",
  //     tgl_berhenti: "2021-08-02",
  //     status_berhenti: "berhenti",
  //     keterangan: "Mendapatkan pekerjaan baru",
  //   },
  // ];

  // Column for datatables
  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
      width: "80px",
    },
    {
      name: "Nama",
      selector: (row) => row.nama,
      sortable: true,
      wrap: true,
      cell: (row) => (
        <div>
          {row.nama} <br />({row.nip})
        </div>
      ),
    },
    {
      name: "Status Pegawai",
      selector: (row) => row.status_pegawai,
      sortable: true,
      wrap: true,
    },
    {
      name: "Tgl. Berhenti",
      selector: (row) => row.tgl_berhenti,
      wrap: true,
      cell: (row) => format(new Date(row.tgl_berhenti), "dd/MM/yyyy"),
    },
    {
      name: "Status Berhenti",
      selector: (row) => row.status_berhenti,
      sortable: true,
      wrap: true,
      cell: (row) => (
        <>
          {row.status_berhenti === "berhenti" && (
            <CBadge color="dark" shape="pill" className="px-2 py-2">
              Berhenti
            </CBadge>
          )}
          {row.status_berhenti === "akan-berhenti" && (
            <CBadge color="primary" shape="pill" className="px-2 py-2">
              Akan Berhenti
            </CBadge>
          )}
        </>
      ),
    },
    {
      // maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents" className="my-1">
          <CButtonGroup className="mb-1">
            <CButton
              color="info"
              className="btn btn-sm"
              onClick={() => goToDetail(row.id_pegawai_berhenti)}
            >
              <CIcon content={cilInfo} color="white" />
            </CButton>
            <CButton
              color="success"
              className="btn btn-sm"
              onClick={() => goToEdit(row.id_pegawai_berhenti)}
            >
              <CIcon content={cilPen} color="white" />
            </CButton>
          </CButtonGroup>
          <br />
          <CButton
            color="dark"
            className="btn btn-sm"
            onClick={() =>
              handleBatalkanPegawaiBerhenti(row.id_pegawai_berhenti)
            }
          >
            Batalkan
          </CButton>
        </div>
      ),
    },
  ];

  // Konfirmasi batalkan pegawai berhenti
  const handleBatalkanPegawaiBerhenti = (id) => {
    MySwal.fire({
      icon: "warning",
      title:
        "Anda yakin ingin membatalkan status berhenti kerja untuk pegawai ini ?",
      text: "Jika yakin, klik YA",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YA",
    }).then((res) => {
      if (res.isConfirmed) {
        // Batalkan pegawai berhenti
        batalkanPegawaiBerhenti(id, pegawaiBerhentiDispatch, MySwal);
      }
    });
  };

  const ExpandableComponent = ({ data }) => {
    return (
      <div style={{ padding: "10px 63px" }}>
        <CRow className="mb-1">
          <CCol md="2">
            <strong>Keterangan</strong>
          </CCol>
          <CCol>{data.keterangan}</CCol>
        </CRow>
      </div>
    );
  };

  const SubHeaderComponentMemo = React.useMemo(() => {
    const goToTambah = (id) => {
      history.push(`/epekerja/admin/pegawai-berhenti/tambah`);
    };

    return (
      <>
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <CButton type="button" color="primary" onClick={goToTambah}>
            Tambah Pensiun
          </CButton>
          <div className="d-flex">
            <CButton
              type="button"
              color="info"
              className="ml-2"
              onClick={() => printPegawaiBerhenti()}
            >
              PDF <CIcon content={cilPrint} />
            </CButton>

            <CButton
              type="button"
              color="success"
              className="ml-2"
              onClick={() => exportExcel("pegawai-berhenti")}
            >
              Excel <CIcon content={cilPrint} />
            </CButton>
          </div>
        </div>
      </>
    );
  }, [history]);

  return (
    <div>
      <CCard>
        <CCardHeader>
          <h3>Data Pegawai Berhenti</h3>
        </CCardHeader>
        <CCardBody>
          {data ? (
            <DataTable
              columns={columns}
              data={data}
              noHeader
              responsive={true}
              customStyles={customStyles}
              pagination
              subHeader
              subHeaderComponent={SubHeaderComponentMemo}
              expandableRows
              expandOnRowClicked
              highlightOnHover
              expandableRowsComponent={<ExpandableComponent />}
            />
          ) : (
            <Loading />
          )}
        </CCardBody>
      </CCard>
    </div>
  );
};

export default PegawaiBerhenti;
