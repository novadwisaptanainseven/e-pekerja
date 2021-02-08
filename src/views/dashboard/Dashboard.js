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
import { SampleFotoPegawai } from "src/assets";
import { cilGroup } from "@coreui/icons";

const Dashboard = () => {
  return (
    <>
      <h1>Selamat Datang User di E-Pekerja</h1>
      <hr />
      <CRow>
        <CCol xs="12" sm="4" lg="4">
          <img
            className="img-thumbnail mb-4"
            width={400}
            src={SampleFotoPegawai}
            alt="foto-pegawai"
          />
        </CCol>
        <CCol>
          <CRow>
            <CCol>
              <CWidgetIcon
                text="Jumlah Keluarga"
                header="5"
                color="primary"
                iconPadding={false}
              >
                <CIcon width={24} content={cilGroup} />
              </CWidgetIcon>
            </CCol>
            <CCol>
              <CWidgetIcon
                text="Status Pegawai"
                header="PTTH"
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
                        data: [120, 20, 10, 5, 3],
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
