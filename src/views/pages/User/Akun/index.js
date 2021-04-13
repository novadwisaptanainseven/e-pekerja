import React, { useContext } from "react";
import { CCard, CCardHeader, CCardBody, CRow, CCol } from "@coreui/react";
import { BGProfil } from "src/assets";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "src/context/Provider";
import { getImage } from "src/context/actions/DownloadFile";

const Akun = () => {
  const history = useHistory();
  const { userState } = useContext(GlobalContext);
  const { data } = userState;

  const styleFotoProfil = {
    objectFit: "cover",
    marginTop: "-100px",
    border: "10px solid white",
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/user/akun-edit`);
  };
  const goToEditPassword = (id) => {
    history.push(`/epekerja/user/akun-edit-password`);
  };

  return (
    <div>
      <CCard>
        <CCardHeader>
          <h3>Akun Saya</h3>
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
                  src={data ? getImage(data.foto_profil) : ""}
                  alt="foto-profil"
                  className="rounded-circle mx-auto shadow"
                  height={200}
                  width={200}
                  style={styleFotoProfil}
                />
                <div className="card-body text-center mt-3">
                  <h5 className="card-title">
                    ({data && data.level === 2 ? "User" : "Administrator"})
                  </h5>
                  <h5 className="card-title">{data && data.name}</h5>
                  <h5 className="text-muted font-weight-normal">
                    {data && data.username}
                  </h5>

                  <button
                    type="button"
                    className="btn btn-primary mt-4"
                    onClick={() => goToEdit(data.id)}
                  >
                    Edit Akun
                  </button>
                  <button
                    type="button"
                    className="btn btn-info mt-4 ml-2"
                    onClick={() => goToEditPassword(data.id)}
                  >
                    Ganti Password
                  </button>
                </div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default Akun;
