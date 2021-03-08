import React from "react";
import DataTable from "react-data-table-component";
import { CRow, CCol } from "@coreui/react";
import { SampleIjazah } from "src/assets";

const DataDiklat = () => {
  const data = [
    {
      id: 1,
      nama_diklat: "Adumla",
      jenis_diklat: "Jenis Diklat",
      penyelenggara: "Penyelenggara",
      tahun_diklat: "1997",
      jml_jam: "500",
      dokumentasi: "dokumentasi_diklat.jpg",
    },
    {
      id: 2,
      nama_diklat: "Diklatpim Tk. III",
      jenis_diklat: "Jenis Diklat",
      penyelenggara: "Penyelenggara",
      tahun_diklat: "2003",
      jml_jam: "360",
      dokumentasi: "dokumentasi_diklat.pdf",
    },
  ];

  const columns = [
    {
      name: "Nama Diklat",
      selector: "nama_diklat",
      wrap: true,
      sortable: true,
    },
    {
      name: "Jenis Diklat",
      selector: "jenis_diklat",
      wrap: true,
      sortable: true,
    },
    {
      name: "Penyelenggara",
      selector: "penyelenggara",
      wrap: true,
      sortable: true,
      // maxWidth: "100px",
    },
    {
      name: "Tahun Diklat",
      selector: "tahun_diklat",
      wrap: true,
      sortable: true,
      // maxWidth: "150px",
    },
    {
      name: "Jumlah Jam",
      selector: "jml_jam",
      wrap: true,
      sortable: true,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: "1.15em",
      },
    },
  };

  // Expandable Component
  const ExpandableComponent = ({ data }) => {
    let ext_file = data.dokumentasi.split(".");
    let ext_status = ext_file[ext_file.length - 1];

    return (
      <>
        <div style={{ padding: "10px 63px" }}>
          <CRow>
            <CCol md="2">
              <strong>Dokumentasi</strong>
            </CCol>
            <CCol>
              {ext_status === "jpg" ? (
                <img width={200} src={SampleIjazah} alt={data.dokumentasi} />
              ) : (
                <a href=".">{data.dokumentasi}</a>
              )}
            </CCol>
          </CRow>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="my-3">
        <DataTable
          columns={columns}
          data={data}
          noHeader
          responsive={true}
          customStyles={customStyles}
          expandableRows
          expandableRowsComponent={<ExpandableComponent />}
          expandOnRowClicked
          highlightOnHover
        />
      </div>
    </>
  );
};

export default DataDiklat;
