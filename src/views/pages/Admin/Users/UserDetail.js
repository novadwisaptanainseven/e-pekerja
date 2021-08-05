import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CButton,
} from "@coreui/react";
import { BGProfil, LoadAnimationBlue } from "src/assets";
import { useHistory } from "react-router-dom";
import { getUserById } from "src/context/actions/User/getUserById";
import { getImage } from "src/context/actions/DownloadFile";

const UserDetail = ({ match }) => {
  const params = match.params;
  const history = useHistory();
  const [data, setData] = useState("");

  useEffect(() => {
    // Get user by ID
    getUserById(params.id, setData);
  }, [params]);

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
          {data ? (
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
                    src={
                      data && data.level === 1
                        ? getImage(data.foto_profil)
                        : data.foto
                        ? getImage(data.foto)
                        : ""
                    }
                    alt="foto-profil"
                    className="rounded-circle mx-auto shadow"
                    height={200}
                    width={200}
                    style={styleFotoProfil}
                  />
                  <div className="card-body text-center mt-3">
                    <h5 className="card-title">
                      ({data.level === 1 ? "Administrator" : "User"})
                    </h5>
                    <h5 className="card-title">{data.name}</h5>
                    <h5 className="text-muted font-weight-normal">
                      {data.username}
                    </h5>
                  </div>
                </div>
              </CCol>
            </CRow>
          ) : (
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
          )}
        </CCardBody>
      </CCard>
    </div>
  );
};

export default UserDetail;
