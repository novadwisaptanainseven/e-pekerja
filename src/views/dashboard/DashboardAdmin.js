import React, { useContext, useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CWidgetIcon,
  CTabs,
  CNav,
  CNavItem,
  CTabContent,
  CTabPane,
  CNavLink,
  CButton,
  CFormGroup,
  CInput,
  CFormText,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { CChartBar, CChartPie } from "@coreui/react-chartjs";
import { GlobalContext } from "src/context/Provider";
import { getDashboardInformation } from "src/context/actions/Dashboard/getDashboardInformation";
import {
  deleteGambarStruktur,
  getStruktur,
  insertGambarStruktur,
} from "src/context/actions/StrukturOrganisasi";
import capitalizeFirst from "src/helpers/capitalizeFirst";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getDocument } from "src/context/actions/DownloadFile";
import { cilTrash } from "@coreui/icons";

const Swal = withReactContent(swal2);

const Dashboard = () => {
  const { dashboardState, dashboardDispatch, strukturState, strukturDispatch } =
    useContext(GlobalContext);
  const { data, loading } = dashboardState;
  const { data: dataStruktur } = strukturState;
  const [activeTab, setActiveTab] = useState("1");
  const [gambar, setGambar] = useState({
    id: "1",
    file: undefined,
    errorInput: "",
  });
  const [loadingUpload, setLoadingUpload] = useState(false);

  useEffect(() => {
    getDashboardInformation(dashboardDispatch);
  }, [dashboardDispatch]);

  useEffect(() => {
    getStruktur(strukturDispatch);
  }, [strukturDispatch]);

  useEffect(() => {
    console.log(gambar);
  }, [gambar]);

  const validationInput = (val) => {
    const extValid = ["image/jpg", "image/jpeg", "image/png"];

    // Validasi
    if (!val) {
      setGambar({ ...gambar, file: val, errorInput: "Gambar belum ada!" });
    } else if (!extValid.includes(val.type)) {
      setGambar({
        ...gambar,
        file: val,
        errorInput: "Gambar hanya boleh bertipe jpg, jpeg, atau png!",
      });
    } else if (val.size > 1048000) {
      setGambar({
        ...gambar,
        file: val,
        errorInput: "Gambar tidak boleh lebih dari 1 mb!",
      });
    } else {
      setGambar({
        ...gambar,
        file: val,
        errorInput: "",
      });
    }
  };

  // Fungsi untuk menampilkan alert success tambah data
  const showAlertSuccess = () => {
    Swal.fire({
      icon: "success",
      title: "Upload Berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then((res) => {});
  };

  // Fungsi untuk menampilkan alert error tambah data
  const showAlertError = (message) => {
    let err_message = "";

    for (const key in message) {
      err_message += `${message[key]}, `;
    }

    Swal.fire({
      icon: "error",
      title: "Upload Gagal",
      text: err_message,
    }).then((result) => {});
  };

  // hapus data
  const handleDelete = () => {
    Swal.fire({
      icon: "warning",
      title: "Anda yakin ingin menghapus gambar struktur ini ?",
      text: "Jika yakin, klik YA",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YA",
    }).then((res) => {
      if (res.isConfirmed) {
        // Delete gambar struktur
        deleteGambarStruktur(
          gambar.id,
          strukturDispatch,
          setLoadingUpload,
          Swal
        );
      }
    });
  };

  // Handle upload gambar
  const handleUploadGambar = () => {
    console.log(gambar);
    const formData = new FormData();
    formData.append("gambar", gambar.file);

    for (let pair of formData.entries()) {
      console.log(pair);
    }
    insertGambarStruktur(
      gambar.id,
      formData,
      strukturDispatch,
      showAlertSuccess,
      showAlertError,
      setLoadingUpload
    );
  };

  const FormInputGambar = () => {
    return (
      <div className="d-flex justify-content-between">
        <div>
          <CFormGroup
            className="d-flex mb-0"
            style={{
              width: "350px",
            }}
          >
            <CInput
              className={gambar.errorInput ? "is-invalid" : null}
              type="file"
              name="file"
              onChange={(e) => {
                validationInput(e.target.files[0]);
              }}
            />
            
            <CButton
              className="ml-1"
              color="secondary"
              disabled={
                !gambar.file || gambar.errorInput || loadingUpload
                  ? true
                  : false
              }
              onClick={() => handleUploadGambar()}
            >
              {loadingUpload ? "Loading..." : "Upload"}
            </CButton>
          </CFormGroup>
          <CFormText>
            <b>Input File: </b>
            {gambar.file && gambar.file.name}
          </CFormText>
          {gambar.errorInput && (
            <div className="text-danger">{gambar.errorInput}</div>
          )}
        </div>

        {/* Button Hapus Gambar */}
        <CButton
          color="danger"
          style={{ height: "40px" }}
          onClick={() => handleDelete()}
        >
          <CIcon content={cilTrash} />
        </CButton>
      </div>
    );
  };

  return (
    <>
      <CRow>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon
            text="Total Pegawai"
            header={data ? `${data.total_pegawai}` : "..."}
            color="info"
            iconPadding={false}
          >
            <CIcon width={24} name="cil-user" />
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon
            text="Pegawai Cuti"
            header={data ? `${data.total_cuti}` : "..."}
            color="primary"
            iconPadding={false}
          >
            <CIcon width={24} name="cil-user" />
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon
            text="Pegawai Pensiun"
            header={data ? `${data.total_pensiun}` : "..."}
            color="warning"
            iconPadding={false}
          >
            <CIcon width={24} name="cil-user" />
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon
            text="Pegawai Mutasi"
            header={data ? `${data.total_mutasi}` : "..."}
            color="success"
            iconPadding={false}
          >
            <CIcon width={24} name="cil-user" />
          </CWidgetIcon>
        </CCol>
      </CRow>

      {data && !loading && (
        <>
          <CRow>
            <CCol xs="12" lg="6">
              <CCard>
                <CCardHeader>Klasifikasi Data Pegawai</CCardHeader>
                <CCardBody>
                  <CChartPie
                    datasets={[
                      {
                        backgroundColor: ["#41B883", "#FFCE56", "#00D8FF"],
                        data: [
                          data.total_pns,
                          data.total_pttb,
                          data.total_ptth,
                        ],
                      },
                    ]}
                    labels={["PNS", "PTTB", "PTTH"]}
                    options={{
                      tooltips: {
                        enabled: true,
                      },
                    }}
                  />
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs="12" lg="6">
              <CCard>
                <CCardHeader>Gender Pegawai</CCardHeader>
                <CCardBody>
                  <CChartPie
                    datasets={[
                      {
                        backgroundColor: ["#36A2EB", "#FF6384"],
                        data: [data.total_pria, data.total_wanita],
                      },
                    ]}
                    labels={["Laki-Laki", "Perempuan"]}
                    options={{
                      tooltips: {
                        enabled: true,
                      },
                    }}
                  />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <CCard>
                <CCardHeader>Total Pegawai Berdasarkan Bidang</CCardHeader>
                <CCardBody>
                  <CChartBar
                    datasets={[
                      {
                        label: "Total Pegawai",
                        backgroundColor: "#f87979",
                        data: [
                          0,
                          data.total_pegawai_bidang.sekretariat,
                          data.total_pegawai_bidang.permukiman,
                          data.total_pegawai_bidang.perumahan,
                          data.total_pegawai_bidang.psu,
                          0,
                        ],
                      },
                    ]}
                    labels={[
                      "",
                      "Sekretariat",
                      "Permukiman",
                      "Perumahan",
                      "PSU",
                      "",
                    ]}
                    options={{
                      tooltips: {
                        enabled: true,
                      },
                    }}
                  />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

          {/* Struktur Organisasi */}
          <CRow>
            <CCol>
              <CCard>
                <CCardHeader>Struktur Organisasi</CCardHeader>
                <CCardBody>
                  <CTabs
                    activeTab={activeTab}
                    onActiveTabChange={(tab) => {
                      setActiveTab(tab);
                      setGambar({
                        ...gambar,
                        id: tab,
                        file: undefined,
                        errorInput: "",
                      });
                    }}
                  >
                    <CNav variant="pills">
                      {dataStruktur &&
                        dataStruktur.map((item, index) => (
                          <CNavItem key={index}>
                            <CNavLink data-tab={item.id}>
                              {capitalizeFirst(item.nama_struktur)}
                            </CNavLink>
                          </CNavItem>
                        ))}
                    </CNav>
                    <CTabContent>
                      {dataStruktur &&
                        dataStruktur.map((item, index) => (
                          <CTabPane key={index} data-tab={item.id}>
                            <div className="mt-3">
                              <FormInputGambar />

                              {item.gambar ? (
                                <div className="mt-3">
                                  <img
                                    style={{ width: "100%" }}
                                    src={getDocument(item.gambar)}
                                    alt="struktur-organisasi-img"
                                  />
                                </div>
                              ) : (
                                <div className="text-center mt-3">
                                  Belum ada Gambar. Silahkan upload terlebih
                                  dahulu
                                </div>
                              )}
                            </div>
                          </CTabPane>
                        ))}
                    </CTabContent>
                  </CTabs>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </>
      )}
    </>
  );
};

export default Dashboard;
