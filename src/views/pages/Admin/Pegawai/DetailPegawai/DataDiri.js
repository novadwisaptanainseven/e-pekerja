import React, { useEffect, useState } from "react";
import { CRow, CCol } from "@coreui/react";
import { LoadAnimationBlue } from "src/assets";
import DataDiriPNS from "./DataDiriPNS";
import DataDiriPTTH from "./DataDiriPTTH";
import { getPTTHById } from "src/context/actions/Pegawai/PTTH/getPTTHById";
import { getPTTBById } from "src/context/actions/Pegawai/PTTB/getPTTBById";
import DataDiriPTTB from "./DataDiriPTTB";

const DataDiri = ({ data: mainData }) => {
  const [dataPTTH, setDataPTTH] = useState("");
  const [dataPTTB, setDataPTTB] = useState("");

  useEffect(() => {
    if (mainData) {
      if (mainData.id_status_pegawai === 2) {
        // Get PTTH By ID
        getPTTHById(mainData.id_pegawai, setDataPTTH);
      } else if (mainData.id_status_pegawai === 3) {
        // Get PTTB By ID
        getPTTBById(mainData.id_pegawai, setDataPTTB);
      }
    }
  }, [mainData]);

  return (
    <>
      {mainData ? (
        <>
          {mainData.id_status_pegawai === 1 && <DataDiriPNS data={mainData} />}
          {mainData.id_status_pegawai === 2 && <DataDiriPTTH data={dataPTTH} />}
          {mainData.id_status_pegawai === 3 && <DataDiriPTTB data={dataPTTB} />}
        </>
      ) : (
        <>
          <div>
            <CRow>
              <CCol className="text-center">
                <img
                  className="mt-4 ml-3"
                  width={30}
                  src={LoadAnimationBlue}
                  alt="load-animation"
                />
              </CCol>
            </CRow>
          </div>
        </>
      )}
    </>
  );
};

export default DataDiri;
