import { cilPen, cilTrash } from "@coreui/icons";
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
import { getDocument } from "src/context/actions/DownloadFile";
import { getRiwayatGolongan } from "src/context/actions/RiwayatGolongan";
import getFilename from "src/helpers/getFilename";
import customStyles from "src/reusable/customStyles";
import Loading from "src/reusable/Loading";
import ModalEdit from "./ModalEdit";

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
      selector: "no",
      sortable: true,
      wrap: true,
      width: "80px",
    },
    {
      name: "Golongan",
      sortable: true,
      wrap: true,
      cell: (row) => (
        <div>
          {row.keterangan} ({row.golongan})
        </div>
      ),
    },
    {
      name: "No. SK",
      selector: "no_sk",
      wrap: true,
    },
    {
      name: "Masa Kerja",
      selector: "masa_kerja",
      wrap: true,
    },
    {
      name: "TMT",
      selector: "tmt_kenaikan_pangkat",
      wrap: true,
      cell: (row) => (
        <div>{format(new Date(row.tmt_kenaikan_pangkat), "dd/MM/y")}</div>
      ),
    },
    {
      name: "Status",
      selector: "pangkat_terkini",
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
            <CButton color="danger" size="sm">
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
              // subHeaderComponent={SubHeaderComponentMemo}
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
