import React, { useContext, useEffect } from "react";

import DataTable from "react-data-table-component";

import { CRow, CCol, CBadge } from "@coreui/react";
import { format } from "date-fns";
import customStyles from "src/reusable/customStyles";
import { getDocument } from "src/context/actions/DownloadFile";
import getFilename from "src/helpers/getFilename";
import Loading from "src/reusable/Loading";
import { GlobalContext } from "src/context/Provider";
import { getRiwayatGolongan } from "src/context/actions/UserPage/DataKepegawaian/getRiwayatGolongan";

const RiwayatGolongan = ({ dataActive }) => {
  const { riwayatGolonganState, riwayatGolonganDispatch, userState } =
    useContext(GlobalContext);
  const { data: rwg, loading } = riwayatGolonganState;
  const { data: user } = userState;
  console.log(loading);

  useEffect(() => {
    if (!rwg) {
      if (dataActive === "riwayat-golongan")
        // Get Riwayat Golongan by Id Pegawai
        getRiwayatGolongan(user.id_pegawai, riwayatGolonganDispatch);
    }
  }, [user, riwayatGolonganDispatch, dataActive, rwg]);

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
    <div className="mt-2">
      {rwg ? (
        <DataTable
          columns={columns}
          data={rwg.data}
          noHeader
          responsive={true}
          customStyles={customStyles}
          pagination
          expandableRows
          expandOnRowClicked
          expandableRowsComponent={<ExpandableComponent />}
          highlightOnHover
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default RiwayatGolongan;
