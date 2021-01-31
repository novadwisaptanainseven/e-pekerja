import React from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CTabs,
  CNav,
  CNavItem,
  CTabContent,
  CTabPane,
  CNavLink,
} from "@coreui/react";
import DataDiri from "./DataDiri";
import DataKeluarga from "./DataKeluarga/DataKeluarga";
import DataPendidikan from "./DataPendidikan/DataPendidikan";
import DataDiklat from "./DataDiklat/DataDiklat";
import DataBerkas from "./DataBerkas";
import RiwayatKerja from "./RiwayatKerja/RiwayatKerja";

const DetailPegawai = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Detail Pegawai</h3>
        </CCardHeader>
        <CCardBody>
          <CTabs>
            <CNav variant="tabs">
              <CNavItem>
                <CNavLink>Data Diri</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink>Keluarga</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink>Pendidikan</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink>Diklat / Pelatihan</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink>Riwayat Kerja</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink>Berkas</CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent>
              <CTabPane>
                <DataDiri />
              </CTabPane>
              <CTabPane>
                <DataKeluarga />
              </CTabPane>
              <CTabPane>
                <DataPendidikan />
              </CTabPane>
              <CTabPane>
                <DataDiklat />
              </CTabPane>
              <CTabPane>
                <RiwayatKerja />
              </CTabPane>
              <CTabPane>
                <DataBerkas />
              </CTabPane>
            </CTabContent>
          </CTabs>
        </CCardBody>
      </CCard>
    </>
  );
};

export default DetailPegawai;
