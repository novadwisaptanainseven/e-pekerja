import { CCard, CCardHeader, CCardBody, CButton } from "@coreui/react";
import React from "react";
import { useHistory } from "react-router-dom";

const DetailPegawaiBerhenti = () => {
  const history = useHistory();

  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <div>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Detail Pensiun </h3>
          <CButton
            type="button"
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CCardBody>
          {/* <table className="table table-striped table-borderless">
            <tbody>
              <tr>
                <th>NIP/NIK</th>
                <td>{data.nip ? data.nip : data.nik}</td>
              </tr>
              <tr>
                <th>Nama</th>
                <td>{data ? data.nama : "Loading..."}</td>
              </tr>
              <tr>
                <th>Tanggal Pensiun</th>
                <td>
                  {data
                    ? format(new Date(data.tgl_pensiun), "dd/MM/yyyy")
                    : "Loading..."}
                </td>
              </tr>
              <tr>
                <th>Status Pensiun</th>
                <td>
                  {data ? (
                    <StatusPensiun tglPensiun={data.tgl_pensiun} />
                  ) : (
                    "Loading..."
                  )}
                </td>
              </tr>
              <tr>
                <th>Keterangan</th>
                <td>{data ? data.keterangan : "Loading..."}</td>
              </tr>
              <tr>
                <th>Foto Pegawai</th>
                <td>
                  {data ? (
                    <img
                      width={200}
                      src={getImage(data.foto)}
                      alt="foto-pegawai"
                    />
                  ) : (
                    "Loading..."
                  )}
                </td>
              </tr>
            </tbody>
          </table> */}
        </CCardBody>
      </CCard>
    </div>
  );
};

export default DetailPegawaiBerhenti;
