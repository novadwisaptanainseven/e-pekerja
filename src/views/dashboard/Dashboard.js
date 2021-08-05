import React, { useContext, useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CTabs,
  CWidgetIcon,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

// import { CChartPie } from "@coreui/react-chartjs";
import { cilGroup, cilMoney } from "@coreui/icons";
import { GlobalContext } from "src/context/Provider";
import { getDocument, getImage } from "src/context/actions/DownloadFile";
import { getDashboardInformation } from "src/context/actions/UserPage/Dashboard/getDashboardInformation";
import { getStruktur } from "src/context/actions/UserPage/Dashboard/getStruktur";
import capitalizeFirst from "src/helpers/capitalizeFirst";

const Dashboard = () => {
  const {
    // userState,
    dashboardState,
    dashboardDispatch,
    strukturState,
    strukturDispatch,
  } = useContext(GlobalContext);
  // const { data } = userState;
  const { data: dataDashboard } = dashboardState;
  const { data: dataStruktur } = strukturState;
  const [activeTab, setActiveTab] = useState("1");

  // Get dashboard information
  useEffect(() => {
    if (!dataDashboard) {
      getDashboardInformation(dashboardDispatch);
    }
  }, [dataDashboard, dashboardDispatch]);

  // Get struktur organisasi
  useEffect(() => {
    getStruktur(strukturDispatch);
  }, [strukturDispatch]);

  return (
    <>
      <h1>
        Selamat Datang {dataDashboard && dataDashboard.nama_pegawai} di
        E-Pekerja
      </h1>
      <hr />
      <CRow>
        <CCol xs="12" sm="4" lg="4">
          <img
            className="img-thumbnail mb-4"
            width={400}
            src={dataDashboard ? getImage(dataDashboard.foto_pegawai) : ""}
            alt="foto-pegawai"
          />
        </CCol>
        <CCol>
          <CRow>
            <CCol md="4">
              <CWidgetIcon
                text="Jumlah Keluarga"
                header={
                  dataDashboard
                    ? dataDashboard.total_keluarga.toString()
                    : "..."
                }
                color="primary"
                iconPadding={false}
              >
                <CIcon width={24} content={cilGroup} />
              </CWidgetIcon>
            </CCol>
            <CCol md="4">
              <CWidgetIcon
                text="Gaji Pokok"
                header={
                  dataDashboard
                    ? dataDashboard.gaji_pokok.toLocaleString("id", {
                        style: "currency",
                        currency: "IDR",
                      })
                    : "..."
                }
                color="success"
                iconPadding={false}
              >
                <CIcon width={24} content={cilMoney} />
              </CWidgetIcon>
            </CCol>
            <CCol md="4">
              <CWidgetIcon
                text="Status Pegawai"
                header={dataDashboard ? dataDashboard.status_pegawai : "..."}
                color="info"
                iconPadding={false}
              >
                <CIcon width={24} name="cil-user" />
              </CWidgetIcon>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <CCard>
                <CCardHeader>
                  <CCardTitle>Biodata Singkat</CCardTitle>
                </CCardHeader>
                <CCardBody>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>Nama</th>
                        <th>:</th>
                        <td>{dataDashboard && dataDashboard.pegawai.nama}</td>
                      </tr>
                      <tr>
                        <th>Alamat</th>
                        <th>:</th>
                        <td>{dataDashboard && dataDashboard.pegawai.alamat}</td>
                      </tr>
                      <tr>
                        <th>No. HP</th>
                        <th>:</th>
                        <td>{dataDashboard && dataDashboard.pegawai.no_hp}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <th>:</th>
                        <td>{dataDashboard && dataDashboard.pegawai.email}</td>
                      </tr>
                    </tbody>
                  </table>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          {/* <CRow>
            <CCol>
              <CCard>
                <CCardHeader>Informasi Absensi Pegawai</CCardHeader>
                <CCardBody>
                  <CChartPie
                    datasets={[
                      {
                        backgroundColor: [
                          "#41B883",
                          "#FFCE56",
                          "#e55353",
                          "#00D8FF",
                          "#636f83",
                        ],
                        data: [
                          absen.totHadir,
                          absen.totIzin,
                          absen.totSakit,
                          absen.totCuti,
                          absen.totTK,
                        ],
                      },
                    ]}
                    labels={[
                      "Hadir",
                      "Izin",
                      "Sakit",
                      "Cuti",
                      "Tanpa Keterangan",
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
          </CRow> */}
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
                              Belum ada Gambar. Silahkan upload terlebih dahulu
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
  );
};

export default Dashboard;
