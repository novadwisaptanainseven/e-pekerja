import { CCol, CRow } from "@coreui/react";
import React from "react";
import { LoadAnimationBlue } from "src/assets";

const Loading = () => {
  return (
    <CRow className="mb-3">
      <CCol className="text-center">
        <img
          className="mt-4 ml-3"
          width={30}
          src={LoadAnimationBlue}
          alt="load-animation"
        />
      </CCol>
    </CRow>
  );
};

export default Loading;
