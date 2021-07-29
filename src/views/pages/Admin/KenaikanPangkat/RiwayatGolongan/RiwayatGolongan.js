import { cilPen, cilPrint, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CBadge,
  CButtonGroup,
  CRow,
  CCol,
} from "@coreui/react";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  exportExcel,
  getDocument,
  printRiwayatGolongan,
} from "src/context/actions/DownloadFile";
import {
  deleteRiwayatGolongan,
  getRiwayatGolongan,
} from "src/context/actions/RiwayatGolongan";
import getFilename from "src/helpers/getFilename";
import customStyles from "src/reusable/customStyles";
import Loading from "src/reusable/Loading";
import ModalEdit from "./ModalEdit";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(swal2);

const RiwayatGolongan = () => {
  const match = useRouteMatch();
  const { params } = match;
  const history = useHistory();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    id: "",
    data: "",
    modal: false,
  });

  console.log(loading);

  // Get riwayat golongan by id pegawai
  useEffect(() => {
    getRiwayatGolongan(params.id, setData, setLoading);
  }, [params]);

  // Columns Data Table
  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
      wrap: true,
      width: "80px",
    },
    {
      name: "Golongan",
      wrap: true,
      cell: (row) => (
        <div>
          {row.keterangan} ({row.golongan})
        </div>
      ),
    },
    {
      name: "No. SK",
      selector: (row) => row.no_sk,
      wrap: true,
    },
    {
      name: "Masa Kerja",
      selector: (row) => row.masa_kerja,
      wrap: true,
    },
    {
      name: "TMT",
      selector: (row) => row.tmt_kenaikan_pangkat,
      wrap: true,
      cell: (row) => (
        <div>{format(new Date(row.tmt_kenaikan_pangkat), "dd/MM/y")}</div>
      ),
    },
    {
      name: "Status",
      selector: (row) => row.pangkat_terkini,
      sortable: true,
      wrap: true,
      cell: (row) => (
        <div>
          {row.pangkat_terkini === 1 ? (
            <CBadge className="p-1" color="success">
              Pangkat Terkini
            </CBadge>
          ) : (
            ""
          )}
        </div>
      ),
    },
    {
      name: "Aksi",
      sortable: true,
      wrap: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <CButtonGroup>
            <CButton
              color="info"
              size="sm"
              onClick={() =>
                setModalEdit({
                  ...modalEdit,
                  modal: true,
                  id: row.id_rw_golongan,
                  data: row,
                })
              }
            >
              <CIcon content={cilPen} />
            </CButton>
            <CButton
              color="danger"
              size="sm"
              onClick={() => handleDelete(row.id_rw_golongan)}
              disabled={row.pangkat_terkini === 1 ? true : false}
            >
              <CIcon content={cilTrash} />
            </CButton>
          </CButtonGroup>
        </div>
      ),
    },
  ];

  // Expandable Component
  const ExpandableComponent = ({ data }) => {
    return (
      <div style={{ padding: "10px 63px" }}>
        <CRow>
          <CCol md="3">
            <strong>Jenis KP</strong>
          </CCol>
          <CCol>{data.jenis_kp}</CCol>
        </CRow>
        <CRow>
          <CCol md="3">
            <strong>Pejabat Penetap</strong>
          </CCol>
          <CCol>{data.pejabat_penetap}</CCol>
        </CRow>
        <CRow>
          <CCol md="3">
            <strong>Tanggal KP</strong>
          </CCol>
          <CCol>{format(new Date(data.tanggal), "dd/MM/y")}</CCol>
        </CRow>
        <CRow>
          <CCol md="3">
            <strong>File</strong>
          </CCol>
          <CCol>
            {data.file ? (
              <a href={getDocument(data.file)} target="_blank" rel="noreferrer">
                {getFilename(data.file)}
              </a>
            ) : (
              "Belum ada file"
            )}
          </CCol>
        </CRow>
      </div>
    );
  };

  // hapus data
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
        deleteRiwayatGolongan(params.id, id, setData, setLoading, MySwal);
      }
    });
  };

  // Sub header component memo
  const SubHeaderComponentMemo = () => {
    return (
      <>
        <div>
          <CButton
            type="button"
            color="info"
            className="ml-2"
            onClick={() => printRiwayatGolongan(params.id)}
          >
            PDF <CIcon content={cilPrint} />
          </CButton>
          <CButton
            type="button"
            color="success"
            className="ml-2"
            onClick={() => exportExcel("riwayat-golongan/" + params.id)}
          >
            Excel <CIcon content={cilPrint} />
          </CButton>
        </div>
      </>
    );
  };

  return (
    <div>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <div>
            <h3>Riwayat Golongan</h3>
            <h4 className="font-weight-normal">{data && data.pegawai.nama}</h4>
          </div>
          <CButton
            style={{ height: "40px" }}
            color="warning"
            onClick={() => history.goBack()}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CCardBody>
          {data ? (
            <DataTable
              columns={columns}
              data={data.data}
              noHeader
              responsive={true}
              customStyles={customStyles}
              pagination
              subHeader
              subHeaderComponent={<SubHeaderComponentMemo />}
              expandableRows
              expandOnRowClicked
              expandableRowsComponent={<ExpandableComponent />}
              highlightOnHover
            />
          ) : (
            <Loading />
          )}
        </CCardBody>
      </CCard>

      {/* Modal Edit */}
      <ModalEdit
        modalEdit={modalEdit}
        setModalEdit={setModalEdit}
        setLoadingGolongan={setLoading}
        setDataGolongan={setData}
      />
    </div>
  );
};

export default RiwayatGolongan;
