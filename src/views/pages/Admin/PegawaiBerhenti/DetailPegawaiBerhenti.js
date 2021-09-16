import { CCard, CCardHeader, CCardBody, CButton, CBadge } from "@coreui/react";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { getImage } from "src/context/actions/DownloadFile";
import { getPegawaiBerhentiById } from "src/context/actions/PegawaiBerhenti";

const DetailPegawaiBerhenti = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { params } = match;
  const [data, setData] = useState("");

  const goBackToParent = () => {
    history.goBack();
  };

  // Get Pegawai Berhenti by ID
  useEffect(() => {
    getPegawaiBerhentiById(params.id, setData);
  }, [params]);

  const StatusBerhenti = ({ statusBerhenti }) => {
    return (
      <>
        {statusBerhenti === "akan-berhenti" ? (
          <CBadge color="primary" shape="pill" className="px-2 py-2">
            Akan Berhenti
          </CBadge>
        ) : (
          <CBadge color="dark" shape="pill" className="px-2 py-2">
            Berhenti
          </CBadge>
        )}
      </>
    );
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
          <table className="table table-striped table-borderless">
            <tbody>
              <tr>
                <th>NIP/NIK/NIPTTB</th>
                <td>{data.nip ? data.nip : data.nik}</td>
              </tr>
              <tr>
                <th>Nama</th>
                <td>{data ? data.nama : "Loading..."}</td>
              </tr>
              <tr>
                <th>Status Pegawai</th>
                <td>{data ? data.status_pegawai : "Loading..."}</td>
              </tr>
              <tr>
                <th>Tanggal Berhenti</th>
                <td>
                  {data
                    ? format(new Date(data.tgl_berhenti), "dd/MM/yyyy")
                    : "Loading..."}
                </td>
              </tr>
              <tr>
                <th>Status Berhenti</th>
                <td>
                  {data ? (
                    <StatusBerhenti statusBerhenti={data.status_berhenti} />
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
          </table>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default DetailPegawaiBerhenti;
