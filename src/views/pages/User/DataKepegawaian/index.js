import React, { useContext, useEffect, useState } from "react";
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
import DataDiri from "./DataDiri/DataDiri";
import DataKeluarga from "./DataKeluarga";
import DataPendidikan from "./DataPendidikan";
import DataDiklat from "./DataDiklat";
import RiwayatKerja from "./RiwayatKerja";
import DataBerkas from "./DataBerkas/DataBerkas";
import Penghargaan from "./Penghargaan/Penghargaan";
import { GlobalContext } from "src/context/Provider";
import { getDataDiri } from "src/context/actions/UserPage/DataKepegawaian/getDataDiri";

const DetailPegawai = () => {
  const { dataDiriState, dataDiriDispatch } = useContext(GlobalContext);
  const { data } = dataDiriState;
  const [activeTab, setActiveTab] = useState("data-diri");

  useEffect(() => {
    if (!data) {
      // Get data diri
      getDataDiri(dataDiriDispatch);
    }
  }, [dataDiriDispatch, data]);

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Data Kepegawaian</h3>
        </CCardHeader>
        <CCardBody>
          <CTabs
            activeTab="data-diri"
            onActiveTabChange={(tab) => setActiveTab(tab)}
          >
            <CNav variant="tabs">
              <CNavItem>
                <CNavLink data-tab="data-diri">Data Diri</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink data-tab="keluarga">Keluarga</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink data-tab="pendidikan">Pendidikan</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink data-tab="diklat">Diklat / Pelatihan</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink data-tab="riwayat-kerja">Riwayat Kerja</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink data-tab="penghargaan">Penghargaan</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink data-tab="berkas">Berkas</CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent>
              <CTabPane data-tab="data-diri">
                <DataDiri data={data} />
              </CTabPane>
              <CTabPane data-tab="keluarga">
                <DataKeluarga dataActive={activeTab} />
              </CTabPane>
              <CTabPane data-tab="pendidikan">
                <DataPendidikan dataActive={activeTab} />
              </CTabPane>
              <CTabPane data-tab="diklat">
                <DataDiklat dataActive={activeTab} />
              </CTabPane>
              <CTabPane data-tab="riwayat-kerja">
                <RiwayatKerja dataActive={activeTab} />
              </CTabPane>
              <CTabPane data-tab="penghargaan">
                <Penghargaan dataActive={activeTab} />
              </CTabPane>
              <CTabPane data-tab="berkas">
                <DataBerkas dataActive={activeTab} />
              </CTabPane>
            </CTabContent>
          </CTabs>
        </CCardBody>
      </CCard>
    </>
  );
};

export default DetailPegawai;
