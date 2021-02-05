import React from "react";
import { CCard, CCardHeader, CCardBody, CRow, CCol, CButton } from "@coreui/react";
import { BGProfil, SampleFotoPegawai } from "src/assets";
import { useHistory } from "react-router-dom";

const UserDetail = () => {
  const history = useHistory();

  const styleFotoProfil = {
    objectFit: "cover",
    marginTop: "-100px",
    border: "10px solid white",
  };

  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <div>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Detail User</h3>
          <CButton
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol md="6">
              <div className="card">
                <img
                  height={200}
                  className="card-img-top"
                  src={BGProfil}
                  style={{
                    objectFit: "cover",
                  }}
                  alt="bg-profil"
                />
                <img
                  src={SampleFotoPegawai}
                  alt="foto-profil"
                  className="rounded-circle mx-auto shadow"
                  height={200}
                  width={200}
                  style={styleFotoProfil}
                />
                <div className="card-body text-center mt-3">
                  <h5 className="card-title">(Administrator)</h5>
                  <h5 className="card-title">
                    Nova Dwi Sapta Nain Seven S.Tr.Kom
                  </h5>
                  <h5 className="text-muted font-weight-normal">
                    novadwisapta
                  </h5>
                </div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default UserDetail;
