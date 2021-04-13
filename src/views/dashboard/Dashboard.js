import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CWidgetIcon,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { CChartPie } from "@coreui/react-chartjs";
import { cilGroup, cilMoney } from "@coreui/icons";
import { GlobalContext } from "src/context/Provider";
import { getImage } from "src/context/actions/DownloadFile";
import { getDashboardInformation } from "src/context/actions/UserPage/Dashboard/getDashboardInformation";

const Dashboard = () => {
  const { userState, dashboardState, dashboardDispatch } = useContext(
    GlobalContext
  );
  const { data } = userState;
  const { data: dataDashboard } = dashboardState;
  const [absen, setAbsen] = useState({
    totHadir: 0,
    totIzin: 0,
    totSakit: 0,
    totCuti: 0,
    totTK: 0,
  });

  useEffect(() => {
    // Get dashboard information
    if (!dataDashboard) {
      getDashboardInformation(dashboardDispatch);
    } else {
      // Set Absen
      setAbsen({
        totHadir: dataDashboard.hadir,
        totIzin: dataDashboard.izin,
        totSakit: dataDashboard.sakit,
        totCuti: dataDashboard.cuti,
        totTK: dataDashboard.tanpa_keterangan,
      });
    }
  }, [dataDashboard, dashboardDispatch]);

  return (
    <>
      <h1>Selamat Datang {data && data.name} di E-Pekerja</h1>
      <hr />
      <CRow>
        <CCol xs="12" sm="4" lg="4">
          <img
            className="img-thumbnail mb-4"
            width={400}
            src={data ? getImage(data.foto_profil) : ""}
            alt="foto-pegawai"
          />
        </CCol>
        <CCol>
          <CRow>
            <CCol>
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
            <CCol>
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
            <CCol>
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
          </CRow>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
