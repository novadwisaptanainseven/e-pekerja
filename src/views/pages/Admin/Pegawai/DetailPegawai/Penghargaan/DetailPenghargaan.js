import React, { useState, useEffect } from "react";
import { getPenghargaanById } from "src/context/actions/Pegawai/Penghargaan/getPenghargaanById";
import { format } from "date-fns";
import getDokPenghargaan from "src/context/actions/DownloadFile/getDokPenghargaan";

const DetailPenghargaan = ({ idPegawai, idPenghargaan }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    // Get Penghargaan by Id
    if (idPegawai && idPenghargaan) {
      getPenghargaanById(idPegawai, idPenghargaan, setData);
    }

    return () => setData("");
  }, [idPegawai, idPenghargaan]);

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
      <table className="table table-striped table-borderless">
        <tbody>
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
                ? format(new Date(data.tgl_penghargaan), "dd/MM/y")
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
    </>
  );
};

export default DetailPenghargaan;
