import React, { useEffect, useState } from "react";
import { CRow, CCol } from "@coreui/react";
import { LoadAnimationBlue } from "src/assets";
import { getPNSById } from "src/context/actions/Pegawai/PNS/getPNSById";
import DataDiriPNS from "./DataDiriPNS";
import DataDiriPTTH from "./DataDiriPTTH";
import { getPTTHById } from "src/context/actions/Pegawai/PTTH/getPTTHById";
import { getPTTBById } from "src/context/actions/Pegawai/PTTB/getPTTBById";
import DataDiriPTTB from "./DataDiriPTTB";

const DataDiri = ({ id }) => {
  const [data, setData] = useState("");
  const [dataPTTH, setDataPTTH] = useState("");
  const [dataPTTB, setDataPTTB] = useState("");

  useEffect(() => {
    // Get PNS By ID
    getPNSById(id, setData);
    // Get PTTH By ID
    getPTTHById(id, setDataPTTH);
    // Get PTTB By ID
    getPTTBById(id, setDataPTTB);

    return () => {
      setData(null);
    };
  }, [id]);

  return (
    <>
      {data ? (
        <>
          {data.id_status_pegawai === 1 && <DataDiriPNS data={data} />}
          {data.id_status_pegawai === 2 && <DataDiriPTTH data={dataPTTH} />}
          {data.id_status_pegawai === 3 && <DataDiriPTTB data={dataPTTB} />}
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
