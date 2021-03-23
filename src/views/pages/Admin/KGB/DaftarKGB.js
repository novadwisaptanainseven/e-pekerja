import React, { useEffect, useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CForm,
  CModalBody,
  CModalFooter,
  CRow,
  CCol,
  CBadge,
} from "@coreui/react";
import DataTable from "react-data-table-component";
// import styled from "styled-components";
import EditKGB from "./EditKGB";
import CIcon from "@coreui/icons-react";
import { cilPen, cilTrash, cilPrint } from "@coreui/icons";
import { useHistory } from "react-router-dom";
import TambahKGB from "./TambahKGB";
import { getKGB } from "src/context/actions/KGB/getKGB";
import { deleteKGB } from "src/context/actions/KGB/deleteKGB";
import { getPNSById } from "src/context/actions/Pegawai/PNS/getPNSById";
import { LoadAnimationBlue } from "src/assets";
import { format, getTime } from "date-fns";

const MySwal = withReactContent(swal2);

const DaftarKGB = ({ match }) => {
  const params = match.params;
  const [modalTambah, setModalTambah] = useState(false);
  const [data, setData] = useState([]);
  const [pegawai, setPegawai] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [modalEdit, setModalEdit] = useState({
    modal: false,
    id: null,
  });

  const goBackToParent = () => {
    history.goBack();
  };

  useEffect(() => {
    // Get Pegawai by Id Pegawai
    getPNSById(params.id, setPegawai);

    // Get KGB By Id Pegawai
    getKGB(params.id, setLoading, setData);

    // Unmount
    return () => {
      setPegawai("");
      setData([]);
    };
  }, [params]);

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      wrap: true,
      width: "50px",
    },
    {
      name: "TMT. Kenaikan Gaji",
      selector: "tmt_kenaikan_gaji",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
      cell: (row) => (
        <div>{format(new Date(row.tmt_kenaikan_gaji), "dd/MM/y")}</div>
      ),
    },
    {
      name: "Gaji P. Lama",
      selector: "gaji_pokok_lama",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
      cell: (row) => (
        <div>
          {row.gaji_pokok_lama.toLocaleString("id", {
            style: "currency",
            currency: "IDR",
          })}
        </div>
      ),
    },
    {
      name: "Gaji P. Baru",
      selector: "gaji_pokok_baru",
      sortable: true,
      wrap: true,
      // maxWidth: "150px",
      cell: (row) => (
        <div>
          {row.gaji_pokok_baru.toLocaleString("id", {
            style: "currency",
            currency: "IDR",
          })}
        </div>
      ),
    },
    {
      name: "Kenaikan Gaji YAD",
      selector: "kenaikan_gaji_yad",
      sortable: true,
      wrap: true,
      cell: (row) => (
        <div>{format(new Date(row.kenaikan_gaji_yad), "dd/MM/y")}</div>
      ),
    },
    {
      // maxWidth: "150px",
      name: "Action",
      sortable: true,
      cell: (row) => {
        // Get timestamp from current date
        let timestampCurrent = new Date().getTime();
        // Get timestamp from tmt kenaikan gaji
        let timestampTMTGaji = new Date(row.tmt_kenaikan_gaji).getTime();
        // Get timestamp from kenaikan gaji yad
        let timestampGajiYAD = new Date(row.kenaikan_gaji_yad).getTime();

        let status = false;

        if (timestampCurrent < timestampTMTGaji) {
          status = false;
        } else if (timestampCurrent <= timestampGajiYAD) {
          status = true;
        } else {
          status = false;
        }

        return (
          <div data-tag="allowRowEvents">
            <CButton
              className="mr-1"
              color="info"
              disabled={status ? false : true}
            >
              <CIcon content={cilPrint} />
            </CButton>
            <CButton
              color="warning"
              onClick={() => {
                setModalEdit({
                  ...modalEdit,
                  modal: !modalEdit.modal,
                  id: row.id_kgb,
                });
              }}
              className="text-white mr-1"
            >
              <CIcon content={cilPen} />
            </CButton>
            <CButton color="danger" onClick={() => handleDelete(row.id_kgb)}>
              <CIcon content={cilTrash} />
            </CButton>
          </div>
        );
      },
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: "1.15em",
      },
    },
  };

  // Menangani tombol hapus
  const handleDelete = (id_kgb) => {
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
        deleteKGB(params.id, id_kgb, setData);
        MySwal.fire({
          icon: "success",
          title: "Terhapus",
          text: "Data berhasil dihapus",
        });
      }
    });
  };

  const SubHeaderComponentMemo = () => {
    return (
      <>
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <CButton
            color="primary"
            className="btn btn-md"
            onClick={() => setModalTambah(!modalTambah)}
          >
            Tambah KGB
          </CButton>
          <div className="d-flex">
            <CButton type="button" color="info" className="ml-2">
              Cetak <CIcon content={cilPrint} />
            </CButton>
          </div>
        </div>
      </>
    );
  };

  // Expandable Component
  const ExpandableComponent = ({ data }) => {
    // Get timestamp from current date
    let timestampCurrent = new Date().getTime();
    // Get timestamp from tmt kenaikan gaji
    let timestampTMTGaji = new Date(data.tmt_kenaikan_gaji).getTime();
    // Get timestamp from kenaikan gaji yad
    let timestampGajiYAD = new Date(data.kenaikan_gaji_yad).getTime();

    let status = "";

    if (timestampCurrent < timestampTMTGaji) {
      status = "akan-aktif";
    } else if (timestampCurrent <= timestampGajiYAD) {
      status = "aktif";
    } else {
      status = "tidak-aktif";
    }

    return (
      <div style={{ padding: "10px 63px" }}>
        <CRow className="mb-1">
          <CCol md="4">
            <strong>Tgl. Pembuatan KGB</strong>
          </CCol>
          <CCol>{format(new Date(data.created_at), "dd/MM/y")}</CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="4">
            <strong>Status</strong>
          </CCol>
          <CCol>
            {status === "akan-aktif" && (
              <CBadge className="py-2 px-3" color="dark" shape="pill">
                KGB Belum Aktif
              </CBadge>
            )}
            {status === "aktif" && (
              <CBadge className="py-2 px-3" color="success" shape="pill">
                KGB Aktif
              </CBadge>
            )}
            {status === "tidak-aktif" && (
              <CBadge className="py-2 px-3" color="warning" shape="pill">
                KGB Kadaluarsa
              </CBadge>
            )}
          </CCol>
        </CRow>
        <CRow className="mb-1">
          <CCol md="4">
            <strong>Peraturan</strong>
          </CCol>
          <CCol>{data.peraturan}</CCol>
        </CRow>
      </div>
    );
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between my-card-header">
          <div className="title mb-2">
            <h3>Daftar Kenaikan Gaji Berkala</h3>
            <h5 className="font-weight-normal">{pegawai.nama}</h5>
          </div>
          <CButton
            color="warning"
            className="text-white"
            style={{ height: "40px", width: "100px" }}
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CCardBody>
          {data.length > 0 ? (
            <DataTable
              columns={columns}
              data={data}
              noHeader
              responsive={true}
              customStyles={customStyles}
              pagination
              // paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={<SubHeaderComponentMemo />}
              highlightOnHover
              expandableRows
              expandOnRowClicked
              expandableRowsComponent={<ExpandableComponent />}
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
              pagination
              // paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={<SubHeaderComponentMemo />}
              highlightOnHover
              expandableRows
              expandOnRowClicked
              expandableRowsComponent={<ExpandableComponent />}
            />
          )}
        </CCardBody>
      </CCard>

      {/* Modal Tambah */}
      <CModal
        show={modalTambah}
        onClose={() => setModalTambah(!modalTambah)}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Tambah Kenaikan Gaji Berkala</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <TambahKGB />
          </CModalBody>
          <CModalFooter>
            <CButton type="submit" color="primary">
              Simpan
            </CButton>{" "}
            <CButton
              type="button"
              color="secondary"
              onClick={() => setModalTambah(!modalTambah)}
            >
              Batal
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>

      {/* Modal Edit KGB */}
      <CModal
        show={modalEdit.modal}
        onClose={() => {
          setModalEdit({
            ...modalEdit,
            modal: !modalEdit.modal,
            id: null,
          });
        }}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Perbarui Gaji</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <EditKGB id={modalEdit.id} />
          </CModalBody>
          <CModalFooter>
            <CButton type="submit" color="primary">
              Simpan
            </CButton>{" "}
            <CButton
              type="button"
              color="secondary"
              onClick={() => setModalEdit(!modalEdit.modal)}
            >
              Batal
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </>
  );
};

export default DaftarKGB;
