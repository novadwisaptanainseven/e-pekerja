import { cilPen, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
} from "@coreui/react";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import customStyles from "src/reusable/customStyles";
import SubHeaderComponentMemo from "src/reusable/SubHeaderComponentMemo";

const DataSK = () => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const data = [
    {
      no: "1",
      no_sk: "800.333.555",
      nama_pegawai: "Nova Dwi Sapta",
      status_pegawai: "PTTH",
      file: "file-sk.pdf",
    },
    {
      no: "2",
      no_sk: "800.123.123",
      nama_pegawai: "Lyntom Irfan",
      status_pegawai: "PTTH",
      file: "file-sk.pdf",
    },
  ];

  const filteredData = data.filter((item) => {
    if (
      item.nama_pegawai.toLowerCase().includes(filterText.toLowerCase()) ||
      item.no_sk.toLowerCase().includes(filterText.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      width: "80px",
    },
    {
      name: "No. SK",
      selector: "no_sk",
      sortable: true,
      wrap: true,
    },
    {
      name: "Pegawai",
      selector: "nama_pegawai",
      sortable: true,
      wrap: true,
    },
    {
      name: "Status Pegawai",
      selector: "status_pegawai",
      sortable: true,
      wrap: true,
    },
    {
      name: "File SK",
      selector: "file",
      sortable: true,
      wrap: true,
      cell: (row) => (
        <div>
          <a href=".">{row.file}</a>
        </div>
      ),
    },
    {
      name: "Action",
      wrap: true,
      cell: (row) => (
        <div data-tag="allowRowEvents" className="my-1">
          <CButtonGroup className="mb-1">
            <CButton color="info" className="btn btn-sm">
              <CIcon content={cilPen} color="white" />
            </CButton>
            <CButton color="danger" className="btn btn-sm">
              <CIcon content={cilTrash} color="danger" />
            </CButton>
          </CButtonGroup>
        </div>
      ),
    },
  ];

  return (
    <div>
      <CCard>
        <CCardHeader>
          <h3>Data SK</h3>
        </CCardHeader>
        <CCardBody>
          <DataTable
            columns={columns}
            data={filteredData}
            noHeader
            responsive={true}
            customStyles={customStyles}
            pagination
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={
              <SubHeaderComponentMemo
                titleTombol="Upload SK"
                titleCari="Cari SK"
                filterText={filterText}
                setFilterText={setFilterText}
                resetPaginationToggle={resetPaginationToggle}
                setResetPaginationToggle={setResetPaginationToggle}
              />
            }
            highlightOnHover
          />
        </CCardBody>
      </CCard>
    </div>
  );
};

export default DataSK;
