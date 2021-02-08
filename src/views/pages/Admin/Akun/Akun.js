import React from "react";
import { CCard, CCardHeader, CCardBody, CRow, CCol } from "@coreui/react";
import { BGProfil, SampleFotoPegawai } from "src/assets";
import { useHistory } from "react-router-dom";

const Akun = () => {
  const history = useHistory();

  const styleFotoProfil = {
    objectFit: "cover",
    marginTop: "-100px",
    border: "10px solid white",
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/akun-edit/${id}`);
  };
  const goToEditPassword = (id) => {
    history.push(`/epekerja/admin/akun-edit-password/${id}`);
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

                  <button
                    type="button"
                    className="btn btn-primary mt-4"
                    onClick={() => goToEdit(1)}
                  >
                    Edit Akun
                  </button>
                  <button
                    type="button"
                    className="btn btn-info mt-4 ml-2"
                    onClick={() => goToEditPassword(1)}
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
