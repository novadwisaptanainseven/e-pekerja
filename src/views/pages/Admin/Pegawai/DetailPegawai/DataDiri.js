import React, { useEffect, useState } from "react";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import { LoadAnimationBlue, SampleFotoPegawai } from "src/assets";
import { getPNSById } from "src/context/actions/Pegawai/PNS/getPNSById";
import { format } from "date-fns";
import { getImage } from "src/context/actions/DownloadFile";

const DataDiri = ({ id }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    // Get PNS By ID
    getPNSById(id, setData);
  }, [id]);

  return (
    <>
      {data ? (
        <>
          <div className="my-3">
            <CRow>
              <CCol md="8">
                <table className="table table-sm table-striped">
                  <tbody>
                    <tr>
                      <th>NIP</th>
                      <td>{data.nip}</td>
                    </tr>
                    <tr>
                      <th>Nama</th>
                      <td>{data.nama}</td>
                    </tr>
                    <tr>
                      <th>Agama</th>
                      <td>{data.agama}</td>
                    </tr>
                    <tr>
                      <th>Jenis Kelamin</th>
                      <td>{data.jenis_kelamin}</td>
                    </tr>
                    <tr>
                      <th>TTL</th>
                      <td>{`${data.tempat_lahir}, ${
                        data.tgl_lahir &&
                        format(new Date(data.tgl_lahir), "d MMMM Y")
                      }`}</td>
                    </tr>
                    <tr>
                      <th>Alamat</th>
                      <td>{data.alamat}</td>
                    </tr>
                    <tr>
                      <th>No. HP</th>
                      <td>{data.no_hp}</td>
                    </tr>
                    <tr>
                      <th>Jabatan</th>
                      <td>{data.jabatan}</td>
                    </tr>
                    <tr>
                      <th>Bidang</th>
                      <td>{data.bidang}</td>
                    </tr>
                    <tr>
                      <th>Sub Bidang</th>
                      <td>{data.sub_bidang}</td>
                    </tr>
                    <tr>
                      <th>Pangkat / Golongan</th>
                      <td>
                        {data.ket_golongan} / {data.golongan}
                      </td>
                    </tr>
                    <tr>
                      <th>Eselon</th>
                      <td>{data.eselon}</td>
                    </tr>
                    <tr>
                      <th>Status Pegawai</th>
                      <td>
                        {data.ket_status_pegawai} ({data.status_pegawai})
                      </td>
                    </tr>
                    <tr>
                      <th>Karpeg</th>
                      <td>{data.karpeg}</td>
                    </tr>
                    <tr>
                      <th>BPJS</th>
                      <td>{data.bpjs}</td>
                    </tr>
                    <tr>
                      <th>NPWP</th>
                      <td>{data.npwp}</td>
                    </tr>
                    <tr>
                      <th>TMT. Golongan</th>
                      <td>{`${
                        data.tgl_lahir &&
                        format(new Date(data.tmt_golongan), "d-M-Y")
                      }`}</td>
                    </tr>
                    <tr>
                      <th>TMT. CPNS</th>
                      <td>{`${
                        data.tgl_lahir &&
                        format(new Date(data.tmt_cpns), "d-M-Y")
                      }`}</td>
                    </tr>
                    <tr>
                      <th>TMT. jabatan</th>
                      <td>{`${
                        data.tgl_lahir &&
                        format(new Date(data.tmt_jabatan), "d-M-Y")
                      }`}</td>
                    </tr>
                    <tr>
                      <th>Masa Kerja Jabatan</th>
                      <td>{data.mk_jabatan}</td>
                    </tr>
                    <tr>
                      <th>Masa Kerja Sebelum CPNS</th>
                      <td>{data.mk_sebelum_cpns}</td>
                    </tr>
                    <tr>
                      <th>Masa Kerja Golongan</th>
                      <td>{data.mk_golongan}</td>
                    </tr>
                    <tr>
                      <th>Masa Kerja Seluruhnya</th>
                      <td>{data.mk_seluruhnya}</td>
                    </tr>
                    <tr>
                      <th>Gaji Pokok</th>
                      <td>
                        {data && data.kgb
                          ? data.kgb.gaji_pokok_baru.toLocaleString("id", {
                              style: "currency",
                              currency: "IDR",
                            })
                          : 0}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CCol>
              <CCol>
                <CCard>
                  <CCardHeader className="bg-dark text-center">
                    <h4 className="font-weight-normal mb-0">Foto Pegawai</h4>
                  </CCardHeader>
                  <CCardBody>
                    <img
                      width="100%"
                      src={data ? getImage(data.foto) : ""}
                      alt="foto-pegawai"
                    />
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default DataDiri;
