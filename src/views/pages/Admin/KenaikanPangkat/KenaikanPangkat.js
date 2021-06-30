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
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import customStyles from "src/reusable/customStyles";
import FilterComponent from "src/reusable/FilterSearchComponent/FilterComponent";
import Loading from "src/reusable/Loading";
import ModalKenaikanPangkat from "./ModalKenaikanPangkat";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ModalKirimWa from "./ModalKirimWa";
import { format } from "date-fns";

const MySwal = withReactContent(swal2);

const KenaikanPangkat = () => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [modalKenaikanPangkat, setModalKenaikanPangkat] = useState({
    modal: false,
    data: null,
    type: null,
  });
  const [modalKirimWa, setModalKirimWa] = useState({
    modal: false,
  });

  const dataDummy = [
    {
      id: 1,
      no: 1,
      id_pegawai: 1,
      nip: "199727",
      nama: "Nova Dwi Sapta Nain Seven",
      pangkat_golongan: "Pranata (IIIa)",
      pangkat_baru: "Pembina Utama (IVa)",
      tmt_kenaikan_pangkat: "2021-06-30",
    },
    {
      id: 2,
      no: 2,
      id_pegawai: 2,
      nip: "199727",
      nama: "Muhammad Firdaus",
      pangkat_golongan: "Pembina Utama (VIa)",
      pangkat_baru: "Pembina Utama (VIa)",
      tmt_kenaikan_pangkat: "2021-08-10",
    },
    {
      id: 3,
      no: 3,
      id_pegawai: 3,
      nip: "199727",
      nama: "Ronaldo",
      pangkat_golongan: "Pembina Utama (VIa)",
      pangkat_baru: "",
      tmt_kenaikan_pangkat: "",
    },
  ];

  const filteredData = dataDummy.filter(
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
      selector: "pangkat_golongan",
      wrap: true,
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
                {format(new Date(row.tmt_kenaikan_pangkat), "dd/MM/y")}
              </span>
            )}
            {!row.pangkat_baru && (
              <CButton
                className="my-1"
                color="danger"
                onClick={() =>
                  setModalKenaikanPangkat({
                    ...modalKenaikanPangkat,
                    modal: true,
                    id: row.id,
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
              Batalkan Kenaikan
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
        // batalkanPensiun(id, pensiunDispatch);
        MySwal.fire({
          icon: "success",
          title: "Sukses",
          text: "Kenaikan Pangkat Berhasil Dibatalkan",
        });
      }
    });
  };

  const handleUpdatePangkat = (data) => {
    let timerInterval;
    MySwal.fire({
      title: "Pangkat Golongan Sedang Diperbarui!",
      html: "Loading...",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        MySwal.showLoading();
        // Update Pangkat
        // MySwal.close();
      },
    }).then((result) => {
      if (result.dismiss === MySwal.DismissReason.timer) {
        MySwal.fire({
          icon: "warning",
          title: "Anda ingin mengirim notifikasi WA ?",
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonColor: "#1c9c25",
          cancelButtonColor: "#d33",
          confirmButtonText: "YA",
          cancelButtonText: "TIDAK",
        }).then((result) => {
          if (result.isConfirmed) {
            setModalKirimWa({
              ...modalKirimWa,
              modal: true,
              data: data,
              type: "pangkat-updated",
            });
            // MySwal.close();
          }
        });
      }
    });
  };

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
          // onClick={() => printKGBPegawai(params.id)}
        >
          PDF <CIcon content={cilPrint} />
        </CButton>
        <CButton
          type="button"
          color="success"
          className="ml-2"
          // onClick={() => exportExcel(`kgb-pegawai/` + params.id)}
        >
          Excel <CIcon content={cilPrint} />
        </CButton>
      </>
    );
  }, [filterText, resetPaginationToggle]);

  // Expandable Component
  const ExpandableComponent = ({ data }) => {
    let status = "";
    let currentTimestamp = Date.parse(new Date());
    let tmtKenaikanPangkat = data.tmt_kenaikan_pangkat
      ? Date.parse(new Date(data.tmt_kenaikan_pangkat))
      : "";

    if (tmtKenaikanPangkat) {
      if (currentTimestamp < tmtKenaikanPangkat) {
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
            {status === "akan-naik-pangkat" && (
              <CBadge color="primary">Akan Naik Pangkat</CBadge>
            )}
            {status === "naik-pangkat" && (
              <CButton color="info" onClick={() => handleUpdatePangkat(data)}>
                Update Pangkat
              </CButton>
            )}
            {!status && (
              <CBadge color="danger">Tidak ada kenaikan pangkat</CBadge>
            )}
          </CCol>
        </CRow>

        <CRow className="mb-1">
          <CCol md="3">
            <strong>Pemberitahuan</strong>
          </CCol>
          <CCol>
            {status === "akan-naik-pangkat" && (
              <span>
                Pegawai ini akan mengalami kenaikan pangkat menjadi{" "}
                {data.pangkat_baru} pada tanggal {data.tmt_kenaikan_pangkat}{" "}
                <br />
                <CButton
                  color="success"
                  className="mt-1"
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
              </span>
            )}
            {status === "naik-pangkat" && (
              <span>Pegawai ini pangkatnya sudah bisa diupdate</span>
            )}
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
          {dataDummy.length > 0 ? (
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
          ) : (
            <Loading />
          )}
        </CCardBody>
      </CCard>

      {/* Modal Kenaikan Pangkat */}
      <ModalKenaikanPangkat
        modal={modalKenaikanPangkat}
        setModal={setModalKenaikanPangkat}
      />

      <ModalKirimWa modal={modalKirimWa} setModal={setModalKirimWa} />
    </div>
  );
};

export default KenaikanPangkat;
