import React from "react";
import { CRow, CCol } from "@coreui/react";
import { LoadAnimationBlue } from "src/assets";
import DataDiriPNS from "./DataDiriPNS";
import DataDiriPTTH from "./DataDiriPTTH";
import DataDiriPTTB from "./DataDiriPTTB";

const DataDiri = ({ data }) => {
  return (
    <>
      {data ? (
        <>
          {data.id_status_pegawai === 1 && <DataDiriPNS data={data} />}
          {data.id_status_pegawai === 2 && <DataDiriPTTH data={data} />}
          {data.id_status_pegawai === 3 && <DataDiriPTTB data={data} />}
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
