import { CCol, CRow } from "@coreui/react";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { LoadAnimationBlue } from "src/assets";
import getDokPenghargaan from "src/context/actions/DownloadFile/getDokPenghargaan";
import { getPenghargaanById } from "src/context/actions/UserPage/DataKepegawaian/getPenghargaanById";

const DetailPenghargaan = ({ id }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    if (id) {
      // Get penghargaan by id
      getPenghargaanById(id, setData);
    }
  }, [id]);

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
      {data ? (
        <table className="table table-striped table-borderless">
          <tbody>
            <tr>
              <th>{data.nip ? "NIP" : "NIK"}</th>
              <td>{data.nip ? data.nip : data.nik}</td>
            </tr>
            <tr>
              <th>Nama Penerima</th>
              <td>{data.nama}</td>
            </tr>
            <tr>
              <th>Nama Penghargaan</th>
              <td>{data.nama_penghargaan}</td>
            </tr>
            <tr>
              <th>Pemberi</th>
              <td>{data.pemberi}</td>
            </tr>
            <tr>
              <th>Tgl. Penghargaan</th>
              <td>
                {data && format(new Date(data.tgl_penghargaan), "dd/MM/yyyy")}
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
      ) : (
        <div>
          <CRow>
            <CCol className="text-center">
              <img
                className="mt-3 ml-3"
                width={30}
                src={LoadAnimationBlue}
                alt="load-animation"
              />
            </CCol>
          </CRow>
        </div>
      )}
    </>
  );
};

export default DetailPenghargaan;
