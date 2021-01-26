import React, { useState } from "react";
import { CCard, CCardHeader, CCardBody, CButton } from "@coreui/react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3e5973;
  border: none;
  color: white;
  padding: 0 10px;
  transition: 0.3s;

  &:hover {
    background-color: #283c4f;
  }
`;

// Handle filter pencarian

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Cari sub bidang"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      Reset
    </ClearButton>
  </>
);

const SubBidang = () => {
  const history = useHistory();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const data = [
    {
      no: 1,
      id: 1,
      bidang: "Sekretariat",
      nm_sub_bidang: "Sub. Bagian Umum dan Kepegawaian",
      keterangan: "Urusan administrasi kepegawaian",
    },
    {
      no: 2,
      id: 2,
      bidang: "Sekretariat",
      nm_sub_bidang: "Sub. Bagian Perencanaan Program dan Keuangan",
      keterangan: "Koordinasi administrasi keuangan",
    },
    {
      no: 3,
      id: 3,
      bidang: "Permukiman",
      nm_sub_bidang: "Pembinaan Permukiman",
      keterangan:
        "Melaksanakan kebijakan, program dan Kegiatan di bidang permukiman.",
    },
    {
      no: 4,
      id: 4,
      bidang: "Permukiman",
      nm_sub_bidang: "Pembinaan Permukiman",
      keterangan:
        "Melaksanakan kebijakan, program dan Kegiatan di bidang permukiman.",
    },
    {
      no: 5,
      id: 5,
      bidang: "Permukiman",
      nm_sub_bidang: "Pembinaan Permukiman",
      keterangan:
        "Melaksanakan kebijakan, program dan Kegiatan di bidang permukiman.",
    },
    {
      no: 6,
      id: 6,
      bidang: "Permukiman",
      nm_sub_bidang: "Pembinaan Permukiman",
      keterangan:
        "Melaksanakan kebijakan, program dan Kegiatan di bidang permukiman.",
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item.nm_sub_bidang &&
      item.nm_sub_bidang.toLowerCase().includes(filterText.toLowerCase())
    // console.log(item.nm_sub_bidang)
  );

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      minWidth: "50px",
      maxWidth: "100px",
    },
    {
      name: "Bidang",
      selector: "bidang",
      sortable: true,
      // maxWidth: "200px",
    },
    {
      name: "Sub Bidang",
      selector: "nm_sub_bidang",
      sortable: true,
      // maxWidth: "200px",
      minWidth: '200px',
      wrap: true,
    },
    {
      name: "Keterangan",
      selector: "keterangan",
      sortable: true,
      wrap: true,
      minWidth: "300px",
    },
    {
      maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <CButton
            color="success"
            className="btn btn-sm mr-1"
            onClick={() => goToEdit(row.id)}
          >
            Edit
          </CButton>
          <CButton
            color="danger"
            className="btn btn-sm mr-1"
            onClick={() =>
              window.confirm(
                `Anda yakin ingin hapus data dengan id : ${row.id}`
              )
            }
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

  const SubHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const goToTambah = () => {
    history.push("/epekerja/master-data/sub-bidang-tambah");
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/master-data/sub-bidang-edit/${id}`);
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Data Sub Bidang</h3>
        </CCardHeader>
        <CCardBody>
          <CButton color="primary" className="btn btn-md" onClick={goToTambah}>
            Tambah Data
          </CButton>

          <DataTable
            columns={columns}
            data={filteredData}
            noHeader
            responsive={true}
            customStyles={customStyles}
            pagination
            paginationRowsPerPageOptions={[5, 10, 15]}
            paginationPerPage={5}
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={SubHeaderComponentMemo}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default SubBidang;
