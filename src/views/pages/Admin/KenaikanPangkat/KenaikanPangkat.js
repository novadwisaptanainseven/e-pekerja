import { cilPrint, cilSend } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CBadge,
  CRow,
  CCol,
} from "@coreui/react";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import customStyles from "src/reusable/customStyles";
import FilterComponent from "src/reusable/FilterSearchComponent/FilterComponent";
import Loading from "src/reusable/Loading";
import ModalKenaikanPangkat from "./ModalKenaikanPangkat";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ModalKirimWa from "./ModalKirimWa";
import { format } from "date-fns";
import { GlobalContext } from "src/context/Provider";
import { getKenaikanPangkat } from "src/context/actions/KenaikanPangkat/getKenaikanPangkat";
import { batalkanKenaikanPangkat } from "src/context/actions/KenaikanPangkat/batalkanKenaikanPangkat";
import printKenaikanPangkat from "src/context/actions/DownloadFile/printKenaikanPangkat";
import exportExcel from "src/context/actions/DownloadFile/Excel/Pegawai/exportExcel";
import { useHistory, useRouteMatch } from "react-router-dom";
import ModalGmail from "./ModalGmail";
import PenjagaanKP from "./PenjagaanKP";

const MySwal = withReactContent(swal2);

const KenaikanPangkat = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { path } = match;
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const { kenaikanPangkatState, kenaikanPangkatDispatch } =
    useContext(GlobalContext);
  const { data, loading } = kenaikanPangkatState;
  const [modalKenaikanPangkat, setModalKenaikanPangkat] = useState({
    modal: false,
    data: null,
    type: null,
  });
  const [penjagaanKP, setPenjagaanKP] = useState({
    modal: false,
    data: null,
    type: null,
  });
  const [modalKirimWa, setModalKirimWa] = useState({
    modal: false,
  });
  const [modalGmail, setModalGmail] = useState({
    modal: false,
    data: "",
    type: "",
  });

  // Go To Cek Berkas PNS
  const goToCekBerkas = (e, idPegawai) => {
    e.preventDefault();

    history.push(`${path}/pegawai/${idPegawai}/berkas`);
  };

  useEffect(() => {
    getKenaikanPangkat(kenaikanPangkatDispatch);
  }, [kenaikanPangkatDispatch]);

  const filteredData = data.filter(
    (item) =>
      item.nip.toLowerCase().includes(filterText.toLowerCase()) ||
      item.nama.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      wrap: true,
      width: "80px",
    },
    {
      name: "NIP",
      selector: "nip",
      sortable: true,
      wrap: true,
    },
    {
      name: "Nama",
      selector: "nama",
      sortable: true,
      wrap: true,
    },
    {
      name: "Pangkat / Gol",
      wrap: true,
      cell: (row) => {
        return (
          <span>
            {row.keterangan} ({row.golongan})
          </span>
        );
      },
    },
    {
      name: "Kenaikan Pangkat",
      selector: "pangkat_baru",
      wrap: true,
      cell: (row) => {
        return (
          <div className="text-center">
            {row.pangkat_baru && (
              <span>
                {row.pangkat_baru} <br />
                Tgl. {format(new Date(row.tanggal), "dd/MM/y")} <br />(
                {row.jenis_kp})
              </span>
            )}
            {!row.pangkat_baru && (
              <CButton
                className="my-1"
                color="danger"
                onClick={() =>
                  setPenjagaanKP({
                    ...penjagaanKP,
                    modal: true,
                    id: row.id,
                    data: row,
                  })
                }
              >
                Tidak ada kenaikan pangkat
              </CButton>
            )}
          </div>
        );
      },
    },
    {
      name: "Aksi",
      cell: (row) => (
        <div data-tag="allowRowEvents" className="my-1">
          {row.pangkat_baru && (
            <CButton
              color="dark"
              onClick={() => handleBatalkanKenaikan(row.id)}
              disabled={!row.pangkat_baru ? true : false}
            >
              {row.status_updated === 0 ? "Batalkan KP" : "Reset"}
            </CButton>
          )}
        </div>
      ),
    },
  ];

  // Konfirmasi batalkan status kenaikan pangkat
  const handleBatalkanKenaikan = (id) => {
    MySwal.fire({
      icon: "warning",
      title:
        "Anda yakin ingin membatalkan kenaikan pangkat untuk pegawai ini ?",
      text: "Jika yakin, klik YA",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YA",
    }).then((res) => {
      if (res.isConfirmed) {
        // Batalkan kenaikan pangkat
        batalkanKenaikanPangkat(id, kenaikanPangkatDispatch);
        MySwal.fire({
          icon: "success",
          title: "Sukses",
          text: "Kenaikan Pangkat Berhasil Dibatalkan",
        });
      }
    });
  };

  // const handleUpdatePangkat = (data) => {
  //   MySwal.fire({
  //     title: "Pangkat Golongan Sedang Diperbarui!",
  //     html: "Loading...",
  //     timer: 1000,
  //     timerProgressBar: true,
  //     didOpen: () => {
  //       MySwal.showLoading();
  //       // Update Pangkat
  //       updatePangkatPegawai(data.id, kenaikanPangkatDispatch);
  //       // MySwal.close();
  //     },
  //   }).then((result) => {
  //     if (result.dismiss === MySwal.DismissReason.timer) {
  //       MySwal.fire({
  //         icon: "warning",
  //         title: "Anda ingin mengirim notifikasi WA ?",
  //         showConfirmButton: true,
  //         showCancelButton: true,
  //         confirmButtonColor: "#1c9c25",
  //         cancelButtonColor: "#d33",
  //         confirmButtonText: "YA",
  //         cancelButtonText: "TIDAK",
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           setModalKirimWa({
  //             ...modalKirimWa,
  //             modal: true,
  //             data: data,
  //             type: "pangkat-updated",
  //           });
  //           // MySwal.close();
  //         }
  //       });
  //     }
  //   });
  // };

  const SubHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <>
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
        <CButton
          type="button"
          color="info"
          className="ml-2"
          onClick={() => printKenaikanPangkat()}
        >
          PDF <CIcon content={cilPrint} />
        </CButton>
        <CButton
          type="button"
          color="success"
          className="ml-2"
          onClick={() => exportExcel(`kenaikan-pangkat`)}
        >
          Excel <CIcon content={cilPrint} />
        </CButton>
      </>
    );
  }, [filterText, resetPaginationToggle]);

  // Menuju halaman Riwayat Golongan
  const goToRiwayat = (id) => {
    history.push(`${path}/riwayat/${id}`);
  };

  // Expandable Component
  const ExpandableComponent = ({ data }) => {
    let status = "";
    let currentTimestamp = Date.parse(new Date());
    let tglKenaikanPangkat = data.tanggal
      ? Date.parse(new Date(data.tanggal))
      : "";
      
    if (tglKenaikanPangkat) {
      if (currentTimestamp < tglKenaikanPangkat) {
        status = "akan-naik-pangkat";
      } else {
        status = "naik-pangkat";
      }
    }

    return (
      <div style={{ padding: "10px 63px" }}>
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Status Kenaikan Pangkat</strong>
          </CCol>
          <CCol>
            {data.status_updated === 0 ? (
              <>
                {status === "akan-naik-pangkat" && (
                  <CBadge color="primary">Akan Naik Pangkat</CBadge>
                )}
                {status === "naik-pangkat" && (
                  <CButton
                    disabled={data.status_validasi === 0 ? true : false}
                    color="info"
                    onClick={() =>
                      setModalKenaikanPangkat({
                        ...modalKenaikanPangkat,
                        modal: true,
                        id: data.id,
                        data: data,
                      })
                    }
                  >
                    Update Pangkat
                  </CButton>
                )}
                {!status && (
                  <CBadge color="danger">Tidak ada kenaikan pangkat</CBadge>
                )}
              </>
            ) : (
              <>
                <CBadge color="success">Pangkat telah diperbarui</CBadge>
              </>
            )}
          </CCol>
        </CRow>

        {status && (
          <>
            <CRow className="mb-1">
              <CCol md="3">
                <strong>Pemberitahuan</strong>
              </CCol>
              <CCol>
                {data.status_updated === 0 ? (
                  <>
                    {status === "akan-naik-pangkat" && (
                      <span>
                        Pegawai ini akan mengalami kenaikan pangkat menjadi{" "}
                        {data.pangkat_baru} pada tanggal{" "}
                        {format(new Date(data.tanggal), "dd/MM/y")} <br />
                        <CButton
                          color="warning"
                          className="mt-1"
                          size="sm"
                          onClick={() =>
                            setModalKirimWa({
                              ...modalKirimWa,
                              modal: true,
                              data: data,
                              type: "akan-naik-pangkat",
                            })
                          }
                        >
                          Notifikasi WA <CIcon content={cilSend} />
                        </CButton>
                        <CButton
                          color="warning"
                          className="mt-1 ml-1"
                          size="sm"
                          onClick={() =>
                            setModalGmail({
                              ...modalGmail,
                              modal: true,
                              data: data,
                              type: "akan-naik-pangkat",
                            })
                          }
                        >
                          GMAIL <CIcon content={cilSend} />
                        </CButton>
                      </span>
                    )}
                    {status === "naik-pangkat" && (
                      <>
                        <span>
                          Pegawai ini pangkat golongannya sudah bisa diupdate.{" "}
                          <b>Note: </b> harus sudah{" "}
                          <span style={{ textDecoration: "underline" }}>
                            tervalidasi
                          </span>
                        </span>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <span className="mr-2">
                      Pegawai ini pangkat golongannya telah diperbarui
                    </span>{" "}
                    <CButton
                      color="warning"
                      size="sm"
                      className="mt-1"
                      onClick={() =>
                        setModalKirimWa({
                          ...modalKirimWa,
                          modal: true,
                          data: data,
                          type: "pangkat-updated",
                        })
                      }
                    >
                      Notifikasi WA <CIcon content={cilSend} />
                    </CButton>
                    <CButton
                      color="warning"
                      size="sm"
                      className="mt-1 ml-1"
                      onClick={() =>
                        setModalGmail({
                          ...modalGmail,
                          modal: true,
                          data: data,
                          type: "pangkat-updated",
                        })
                      }
                    >
                      GMAIL <CIcon content={cilSend} />
                    </CButton>
                    <br />
                  </>
                )}
              </CCol>
            </CRow>
            <CRow className="mb-1">
              <CCol md="3">
                <strong>Status</strong>
              </CCol>
              <CCol>
                {data.status_validasi === 1 ? (
                  <>
                    <CBadge className="mr-2" color="success">
                      Tervalidasi
                    </CBadge>
                    <a
                      href="."
                      onClick={(e) => goToCekBerkas(e, data.id_pegawai)}
                    >
                      Cek Berkas
                    </a>
                  </>
                ) : (
                  <>
                    <CBadge className="mr-2" color="danger">
                      Belum Divalidasi
                    </CBadge>
                    <a
                      href="."
                      onClick={(e) => goToCekBerkas(e, data.id_pegawai)}
                    >
                      Cek Berkas
                    </a>
                  </>
                )}
              </CCol>
            </CRow>
          </>
        )}
        <CRow className="mb-1">
          <CCol md="3">
            <strong>Riwayat Golongan</strong>
          </CCol>
          <CCol>
            <CButton
              color="primary"
              onClick={() => goToRiwayat(data.id_pegawai)}
            >
              Lihat
            </CButton>
          </CCol>
        </CRow>
      </div>
    );
  };

  return (
    <div>
      <CCard>
        <CCardHeader>
          <h3>Kenaikan Pangkat PNS</h3>
        </CCardHeader>
        <CCardBody>
          {data.length > 0 ? (
            <DataTable
              columns={columns}
              data={filteredData}
              noHeader
              responsive={true}
              customStyles={customStyles}
              pagination
              paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={SubHeaderComponentMemo}
              expandableRows
              expandOnRowClicked
              expandableRowsComponent={<ExpandableComponent />}
              highlightOnHover
            />
          ) : loading ? (
            <Loading />
          ) : (
            // Jika data kosong
            <DataTable
              columns={columns}
              data={filteredData}
              noHeader
              responsive={true}
              customStyles={customStyles}
            />
          )}
        </CCardBody>
      </CCard>

      {/* Modal Penjagaan Kenaikan Pangkat */}
      <PenjagaanKP
        modal={penjagaanKP}
        setModal={setPenjagaanKP}
        dispatch={kenaikanPangkatDispatch}
      />

      {/* Modal Kenaikan Pangkat */}
      <ModalKenaikanPangkat
        modal={modalKenaikanPangkat}
        setModal={setModalKenaikanPangkat}
        dispatch={kenaikanPangkatDispatch}
      />

      <ModalKirimWa modal={modalKirimWa} setModal={setModalKirimWa} />
      <ModalGmail modal={modalGmail} setModal={setModalGmail} />
    </div>
  );
};

export default KenaikanPangkat;
