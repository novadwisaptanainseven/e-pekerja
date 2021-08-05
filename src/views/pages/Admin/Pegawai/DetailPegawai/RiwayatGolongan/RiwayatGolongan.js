import React, { useEffect, useState } from "react";

import DataTable from "react-data-table-component";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { CButtonGroup, CButton, CRow, CCol, CBadge } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPen, cilTrash, cilPrint } from "@coreui/icons";
import ModalEdit from "./ModalEdit";
import {
  getRiwayatGolongan,
  deleteRiwayatGolongan,
} from "src/context/actions/RiwayatGolongan";
import { format } from "date-fns";
import customStyles from "src/reusable/customStyles";
import {
  exportExcel,
  getDocument,
  printRiwayatGolongan,
} from "src/context/actions/DownloadFile";
import getFilename from "src/helpers/getFilename";
import Loading from "src/reusable/Loading";
import ModalTambah from "./ModalTambah";

const MySwal = withReactContent(swal2);

const RiwayatGolongan = ({ id, dataActive, setPegawai }) => {
  const [modalTambah, setModalTambah] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });
  const [rwg, setRwg] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(loading);

  useEffect(() => {
    if (!rwg) {
      if (dataActive === "riwayat-golongan")
        // Get Riwayat Golongan by Id Pegawai
        getRiwayatGolongan(id, setRwg, setLoading);
    }
  }, [id, dataActive, rwg]);

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
  const handleDelete = (idRiwayatKerja) => {
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
        deleteRiwayatGolongan(id, idRiwayatKerja, setRwg, setLoading, MySwal);
      }
    });
  };

  // Sub header component memo
  const SubHeaderComponentMemo = () => {
    return (
      <>
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <CButton color="primary" onClick={() => setModalTambah(true)}>
            Tambah Golongan
          </CButton>
          <div>
            <CButton
              type="button"
              color="info"
              className="ml-2"
              onClick={() => printRiwayatGolongan(id)}
            >
              PDF <CIcon content={cilPrint} />
            </CButton>
            <CButton
              type="button"
              color="success"
              className="ml-2"
              onClick={() => exportExcel("riwayat-golongan/" + id)}
            >
              Excel <CIcon content={cilPrint} />
            </CButton>
          </div>
        </div>
      </>
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

      {/* Modal Tambah */}
      <ModalTambah
        idPegawai={id}
        modal={modalTambah}
        setModal={setModalTambah}
        setDataGolongan={setRwg}
        setLoadingGolongan={setLoading}
        setPegawai={setPegawai}
      />

      {/* Modal Edit */}
      <ModalEdit
        idPegawai={id}
        modalEdit={modalEdit}
        setModalEdit={setModalEdit}
        setLoadingGolongan={setLoading}
        setDataGolongan={setRwg}
        setPegawai={setPegawai}
      />
    </div>
  );
};

export default RiwayatGolongan;
