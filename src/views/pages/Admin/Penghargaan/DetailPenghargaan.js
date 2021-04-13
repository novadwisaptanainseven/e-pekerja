import React, { useEffect, useState } from "react";
import { CCard, CCardBody, CCardHeader, CForm, CButton } from "@coreui/react";
import { useHistory } from "react-router-dom";
import { getPenghargaanById } from "src/context/actions/Penghargaan/getPenghargaanById";
import { format } from "date-fns";
import getDokPenghargaan from "src/context/actions/DownloadFile/getDokPenghargaan";

const DetailPenghargaan = ({ match }) => {
  const params = match.params;
  const history = useHistory();
  const [data, setData] = useState("");

  const goBackToParent = () => {
    history.goBack();
  };

  useEffect(() => {
    // Get penghargaan by ID
    getPenghargaanById(params.id, setData);
  }, [params]);

  // Menangani Preview Dokumentasi
  const PreviewDokumentasi = ({ dokumentasi }) => {
    const EXT_IMAGE = ["jpg", "jpeg", "png"];

    let arr_file = dokumentasi.split("/");
    let filename = arr_file[arr_file.length - 1];
    let ext_file = filename.split(".");
    let ext_file2 = ext_file[ext_file.length - 1];

    return (
      <>
        {EXT_IMAGE.includes(ext_file2.toLowerCase()) ? (
          <img
            src={getDokPenghargaan(dokumentasi)}
            alt="dokumentasi-penghargaan"
            style={{ width: "100%" }}
          />
        ) : (
          <a
            href={getDokPenghargaan(dokumentasi)}
            target="_blank"
            rel="noreferrer"
          >
            {filename}
          </a>
        )}
      </>
    );
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Detail Penghargaan</h3>
          <CButton
            type="button"
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CForm className="form-horizontal">
          <CCardBody>
            <table className="table table-striped table-borderless">
              <tbody>
                {/* <tr>
                  <th>NIP / NIK</th>
                  <td>{data ? data.nip : "Loading..."}</td>
                </tr> */}
                <tr>
                  <th>Nama Penerima</th>
                  <td>{data ? data.nama : "Loading..."}</td>
                </tr>
                <tr>
                  <th>Nama Penghargaan</th>
                  <td>{data ? data.nama_penghargaan : "Loading..."}</td>
                </tr>
                <tr>
                  <th>Pemberi</th>
                  <td>{data ? data.pemberi : "Loading..."}</td>
                </tr>
                <tr>
                  <th>Tgl. Penghargaan</th>
                  <td>
                    {data
                      ? format(new Date(data.tgl_penghargaan), "dd/MM/yyyy")
                      : "Loading..."}
                  </td>
                </tr>
                <tr>
                  <th>Dokumentasi</th>
                  <td>
                    {data ? (
                      <PreviewDokumentasi dokumentasi={data.dokumentasi} />
                    ) : (
                      "Loading..."
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </CCardBody>
        </CForm>
      </CCard>
    </>
  );
};

export default DetailPenghargaan;
