import React, { useContext, useEffect } from "react";
import DataTable from "react-data-table-component";
import { CRow, CCol } from "@coreui/react";
import { GlobalContext } from "src/context/Provider";
import { getRiwayatKerja } from "src/context/actions/UserPage/DataKepegawaian/getRiwayatKerja";
import { LoadAnimationBlue } from "src/assets";
import { format } from "date-fns";

const RiwayatKerja = ({ dataActive }) => {
  const { riwayatKerjaState, riwayatKerjaDispatch } = useContext(GlobalContext);
  const { data, loading } = riwayatKerjaState;

  useEffect(() => {
    if (!data) {
      if (dataActive === "riwayat-kerja") {
        // Get data riwayat kerja
        getRiwayatKerja(riwayatKerjaDispatch);
      }
    }
  }, [riwayatKerjaDispatch, dataActive, data]);

  const columns = [
    {
      name: "Kantor Lama",
      selector: "kantor",
      wrap: true,
      sortable: true,
    },
    {
      name: "Jabatan Lama",
      selector: "jabatan",
      wrap: true,
      sortable: true,
    },
    {
      name: "Tgl. Masuk Kerja",
      selector: "tgl_masuk",
      wrap: true,
      sortable: true,
      cell: (row) => <div>{format(new Date(row.tgl_masuk), "dd/MM/yyyy")}</div>,
    },
    {
      name: "Tgl. Keluar Kerja",
      selector: "tgl_keluar",
      wrap: true,
      sortable: true,
      cell: (row) => (
        <div>{format(new Date(row.tgl_keluar), "dd/MM/yyyy")}</div>
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

  const ExpandableComponent = ({ data }) => (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CRow>
          <CCol md="2">
            <strong>Keterangan</strong>
          </CCol>
          <CCol>{data.keterangan}</CCol>
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

export default RiwayatKerja;
