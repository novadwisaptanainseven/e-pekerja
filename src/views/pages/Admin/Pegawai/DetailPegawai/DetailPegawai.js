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

  useEffect(() => {
    // Get Pegawai By Id
    getPNSById(params.id, setData);
  }, [params]);

  const goToParent = () => {
    history.goBack();
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
                <DataDiri id={params.id} />
              </CTabPane>
              <CTabPane>
                <DataKeluarga id={params.id} />
              </CTabPane>
              <CTabPane>
                <DataPendidikan id={params.id} />
              </CTabPane>
              <CTabPane>
                <DataDiklat id={params.id} />
              </CTabPane>
              <CTabPane>
                <RiwayatKerja id={params.id} />
              </CTabPane>
              <CTabPane>
                <Penghargaan id={params.id} />
              </CTabPane>
              <CTabPane>
                <DataBerkas id={params.id} />
              </CTabPane>
            </CTabContent>
          </CTabs>
        </CCardBody>
      </CCard>
    </>
  );
};

export default DetailPegawai;
