import React, { useContext, useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CWidgetIcon,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { CChartBar, CChartPie } from "@coreui/react-chartjs";
import { GlobalContext } from "src/context/Provider";
import { getDashboardInformation } from "src/context/actions/Dashboard/getDashboardInformation";

const Dashboard = () => {
  const { dashboardState, dashboardDispatch } = useContext(GlobalContext);
  const { data, loading } = dashboardState;

  useEffect(() => {
    getDashboardInformation(dashboardDispatch);
  }, [dashboardDispatch]);

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
        </>
      )}
    </>
  );
};

export default Dashboard;
