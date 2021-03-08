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
import DataKeluarga from "./DataKeluarga";
import DataPendidikan from "./DataPendidikan";
import DataDiklat from "./DataDiklat";
import RiwayatKerja from "./RiwayatKerja";
import DataBerkas from "./DataBerkas/DataBerkas";
import Penghargaan from "./Penghargaan/Penghargaan";

const DetailPegawai = () => {
  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Data Kepegawaian</h3>
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
                <CNavLink>Penghargaan</CNavLink>
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
                <Penghargaan />
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
