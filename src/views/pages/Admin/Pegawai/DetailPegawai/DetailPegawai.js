import React, { useEffect, useState } from "react";
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
  CButton,
} from "@coreui/react";
import DataDiri from "./DataDiri";
import DataKeluarga from "./DataKeluarga/DataKeluarga";
import DataPendidikan from "./DataPendidikan/DataPendidikan";
import DataDiklat from "./DataDiklat/DataDiklat";
import DataBerkas from "./DataBerkas/DataBerkas";
import RiwayatKerja from "./RiwayatKerja/RiwayatKerja";
import { useHistory } from "react-router-dom";
import Penghargaan from "./Penghargaan/Penghargaan";
import { getPNSById } from "src/context/actions/Pegawai/PNS/getPNSById";

const DetailPegawai = ({ match }) => {
  const params = match.params;
  const history = useHistory();
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("data-diri");

  useEffect(() => {
    // Get Pegawai By Id
    getPNSById(params.id, setData);
  }, [params]);

  const goToParent = () => {
    if (data.id_status_pegawai === 1) {
      history.push(`/epekerja/admin/pegawai`);
    } else if (data.id_status_pegawai === 2) {
      history.push(`/epekerja/admin/pegawai/ptth`);
    } else if (data.id_status_pegawai === 3) {
      history.push(`/epekerja/admin/pegawai/pttb`);
    }
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>
            Detail Pegawai :{" "}
            <span className="font-weight-normal">
              {data ? data.nama : "loading..."}
            </span>
          </h3>
          <CButton color="warning" className="text-white" onClick={goToParent}>
            Kembali
          </CButton>
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
                <DataKeluarga id={params.id} dataActive={activeTab} />
              </CTabPane>
              <CTabPane data-tab="pendidikan">
                <DataPendidikan id={params.id} dataActive={activeTab} />
              </CTabPane>
              <CTabPane data-tab="diklat">
                <DataDiklat id={params.id} dataActive={activeTab} />
              </CTabPane>
              <CTabPane data-tab="riwayat-kerja">
                <RiwayatKerja id={params.id} dataActive={activeTab} />
              </CTabPane>
              <CTabPane data-tab="penghargaan">
                <Penghargaan id={params.id} dataActive={activeTab} />
              </CTabPane>
              <CTabPane data-tab="berkas">
                <DataBerkas id={params.id} dataActive={activeTab} />
              </CTabPane>
            </CTabContent>
          </CTabs>
        </CCardBody>
      </CCard>
    </>
  );
};

export default DetailPegawai;
