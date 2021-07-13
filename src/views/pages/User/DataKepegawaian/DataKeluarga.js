import React, { useContext, useEffect } from "react";
import DataTable from "react-data-table-component";
import { CRow, CCol } from "@coreui/react";
import { GlobalContext } from "src/context/Provider";
import { getKeluarga } from "src/context/actions/UserPage/DataKepegawaian/getKeluarga";
import formatTanggal from "src/helpers/formatTanggal";
import { LoadAnimationBlue } from "src/assets";

const DataKeluarga = ({ dataActive }) => {
  const { keluargaState, keluargaDispatch } = useContext(GlobalContext);
  const { data, loading } = keluargaState;

  useEffect(() => {
    if (!data) {
      if (dataActive === "keluarga") {
        getKeluarga(keluargaDispatch);
      }
    }
  }, [data, keluargaDispatch, dataActive]);

  const columns = [
    {
      name: "NIK / NIP",
      selector: "nik_nip",
      wrap: true,
      sortable: true,
    },
    {
      name: "Nama",
      selector: "nama",
      wrap: true,
      sortable: true,
    },
    {
      name: "Hubungan",
      selector: "hubungan",
      wrap: true,
      sortable: true,
    },
    {
      name: "TTL",
      selector: "ttl",
      wrap: true,
      sortable: true,
      cell: (row) => (
        <div>
          {row.tempat_lahir}, {formatTanggal(row.tgl_lahir)}
        </div>
      ),
    },
    {
      name: "Pekerjaan",
      selector: "pekerjaan",
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

  const ExpandableComponent = ({ data }) => (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CRow>
          <CCol md="2">
            <strong>Agama</strong>
          </CCol>
          <CCol>{data.agama}</CCol>
        </CRow>
        <CRow>
          <CCol md="2">
            <strong>Jenis Kelamin</strong>
          </CCol>
          <CCol>{data.jenis_kelamin}</CCol>
        </CRow>
        <CRow>
          <CCol md="2">
            <strong>Telepon</strong>
          </CCol>
          <CCol>{data.telepon}</CCol>
        </CRow>
        <CRow>
          <CCol md="2">
            <strong>Alamat</strong>
          </CCol>
          <CCol>{data.alamat}</CCol>
        </CRow>
      </div>
    </>
  );

  return (
    <>
      <div className="my-3">
        {data.length > 0 ? (
          <DataTable
            columns={columns}
            data={data}
            noHeader
            responsive={true}
            customStyles={customStyles}
            expandableRows
            expandableRowsComponent={ExpandableComponent}
            expandOnRowClicked
            highlightOnHover
          />
        ) : loading ? (
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
        ) : (
          <DataTable
            columns={columns}
            data={data}
            noHeader
            responsive={true}
            customStyles={customStyles}
          />
        )}
      </div>
    </>
  );
};

export default DataKeluarga;
