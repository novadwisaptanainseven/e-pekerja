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
import DataKeluarga from "./Keluarga/DataKeluarga";
import DataPendidikan from "./Pendidikan/DataPendidikan";
import DataDiklat from "./Diklat/DataDiklat";
import RiwayatKerja from "./RiwayatKerja/RiwayatKerja";
import DataBerkas from "./DataBerkas/DataBerkas";
import Penghargaan from "./Penghargaan/Penghargaan";
import { GlobalContext } from "src/context/Provider";
import { getDataDiri } from "src/context/actions/UserPage/DataKepegawaian/getDataDiri";
import RiwayatGolongan from "./RiwayatGolongan";
import RiwayatSK from "./RiwayatSK/RiwayatSK";

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
              {data && data.id_status_pegawai === 1 && (
                <CNavItem>
                  <CNavLink data-tab="riwayat-golongan">Golongan</CNavLink>
                </CNavItem>
              )}
              {data &&
                (data.id_status_pegawai === 2 ||
                  data.id_status_pegawai === 3) && (
                  <CNavItem>
                    <CNavLink data-tab="riwayat-sk">Riwayat SK</CNavLink>
                  </CNavItem>
                )}
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
              {data && data.id_status_pegawai === 1 && (
                <CTabPane data-tab="riwayat-golongan">
                  <RiwayatGolongan
                    id={localStorage.id_user}
                    dataActive={activeTab}
                    dataDiriDispatch={dataDiriDispatch}
                  />
                </CTabPane>
              )}
              {data &&
                (data.id_status_pegawai === 2 ||
                  data.id_status_pegawai === 3) && (
                  <CTabPane data-tab="riwayat-sk">
                    <RiwayatSK
                      id={localStorage.id_user}
                      dataActive={activeTab}
                      dataDiriDispatch={dataDiriDispatch}
                      pegawai={data}
                    />
                  </CTabPane>
                )}
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
