import React from "react";
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

const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" sm="6" lg="4">
          <CWidgetIcon
            text="Total Pegawai"
            header="100"
            color="info"
            iconPadding={false}
          >
            <CIcon width={24} name="cil-user" />
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="4">
          <CWidgetIcon
            text="Pegawai Cuti"
            header="100"
            color="primary"
            iconPadding={false}
          >
            <CIcon width={24} name="cil-user" />
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="4">
          <CWidgetIcon
            text="Total Pengguna"
            header="100"
            color="success"
            iconPadding={false}
          >
            <CIcon width={24} name="cil-user" />
          </CWidgetIcon>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>Klasifikasi Data Pegawai</CCardHeader>
            <CCardBody>
              <CChartPie
                datasets={[
                  {
                    backgroundColor: ["#41B883", "#FFCE56", "#00D8FF"],
                    data: [50, 20, 30],
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
                    data: [30, 10],
                  },
                ]}
                labels={["Pria", "Wanita"]}
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
  );
};

export default Dashboard;
