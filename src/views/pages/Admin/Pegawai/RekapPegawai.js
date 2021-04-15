import React, { useContext, useEffect, useState } from "react";

import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CButton,
} from "@coreui/react";
import { GlobalContext } from "src/context/Provider";
import { getRekapPegawai } from "src/context/actions/Pegawai/PNS/getRekapPegawai";
import { LoadAnimationBlue } from "src/assets";
import CIcon from "@coreui/icons-react";
import { cilPrint } from "@coreui/icons";

const RekapPegawai = () => {
  const { rekapPegawaiState, rekapPegawaiDispatch } = useContext(GlobalContext);
  const { data } = rekapPegawaiState;
  let totalBidang = 0;

  useEffect(() => {
    // Get Rekap Pegawai
    getRekapPegawai(rekapPegawaiDispatch);
  }, [rekapPegawaiDispatch]);

  const loopObject = (data) => {
    let arr = [];
    for (const key in data) {
      arr.push({
        key: key,
        val: data[key],
      });
    }

    // console.log(arr);
    return arr;
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Rekapitulasi Pegawai </h3>
        </CCardHeader>
        <CCardBody>
          {!data ? (
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
          ) : (
            <>
              <div className="d-flex justify-content-end">
                <CButton color="info" className="mb-3">
                  Cetak <CIcon content={cilPrint} />
                </CButton>
              </div>
              <CCard>
                <CCardHeader className="bg-dark">
                  Klasifikasi PNS berdasarkan Golongan / Eselon / Pendidikan
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol>
                      <h5>Golongan</h5>
                      <table className="table table-bordered table-sm table-striped table-striped">
                        <thead>
                          <tr>
                            <th>Gol.</th>
                            <th>Jumlah</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data &&
                            loopObject(data.pns.rekap_golongan).map(
                              (item, index) => (
                                <tr key={index}>
                                  <td>{item.key}</td>
                                  <td>{item.val}</td>
                                </tr>
                              )
                            )}
                        </tbody>
                      </table>
                    </CCol>
                    <CCol>
                      <h5>Eselon</h5>
                      <table className="table table-bordered table-sm table-striped">
                        <thead>
                          <tr>
                            <th>Eselon</th>
                            <th>Jumlah</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data &&
                            loopObject(data.pns.rekap_eselon).map(
                              (item, index) => (
                                <tr key={index}>
                                  <td>{item.key}</td>
                                  <td>{item.val}</td>
                                </tr>
                              )
                            )}
                        </tbody>
                      </table>
                    </CCol>
                    <CCol>
                      <h5>Pendidikan</h5>
                      <table className="table table-bordered table-sm table-striped">
                        <thead>
                          <tr>
                            <th>Jenjang</th>
                            <th>Jumlah</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data &&
                            loopObject(data.pns.rekap_jenjang_pendidikan).map(
                              (item, index) => (
                                <tr key={index}>
                                  <td>{item.key}</td>
                                  <td>{item.val}</td>
                                </tr>
                              )
                            )}
                        </tbody>
                      </table>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
              <CCard>
                <CCardHeader className="bg-dark">
                  Rincian Jumlah PNS Berdasarkan Golongan dan Jenis Kelamin
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol>
                      <h5>Golongan</h5>
                      <table className="table table-bordered table-sm table-striped">
                        <thead>
                          <tr>
                            <th>Gol.</th>
                            <th>Jumlah</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data &&
                            loopObject(data.pns.rekap_golongan_romawi).map(
                              (item, index) => (
                                <tr key={index}>
                                  <td>{item.key}</td>
                                  <td>{item.val}</td>
                                </tr>
                              )
                            )}
                        </tbody>
                      </table>
                    </CCol>
                    <CCol>
                      <h5>Jenis Kelamin</h5>
                      <table className="table table-bordered table-sm table-striped">
                        <thead>
                          <tr>
                            <th>Jenis Kelamin</th>
                            <th>Jumlah</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Laki - Laki</td>
                            <td>{data.pns.rekap_jenis_kelamin.pria}</td>
                          </tr>
                          <tr>
                            <td>Perempuan</td>
                            <td>{data.pns.rekap_jenis_kelamin.wanita}</td>
                          </tr>
                        </tbody>
                      </table>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
              <CCard>
                <CCardHeader className="bg-dark">
                  Rincian Jumlah PTTB / PTTH Berdasarkan Pendidikan dan Jenis
                  Kelamin
                </CCardHeader>
                <CCardBody>
                  <h5>PTTB</h5>
                  <CRow>
                    <CCol>
                      <table className="table table-bordered table-sm table-striped">
                        <thead>
                          <tr>
                            <th colSpan="2" className="text-center">
                              Pendidikan
                            </th>
                          </tr>
                          <tr>
                            <th>Jenjang</th>
                            <th>Jumlah</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data &&
                            loopObject(data.pttb.rekap_jenjang_pendidikan).map(
                              (item, index) => (
                                <tr key={index}>
                                  <td>{item.key}</td>
                                  <td>{item.val}</td>
                                </tr>
                              )
                            )}
                        </tbody>
                      </table>
                    </CCol>
                    <CCol>
                      <table className="table table-bordered table-sm table-striped">
                        <thead>
                          <tr>
                            <th colSpan="2" className="text-center">
                              Jenis Kelamin
                            </th>
                          </tr>
                          <tr>
                            <th>Jenis Kelamin</th>
                            <th>Jumlah</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Laki - Laki</td>
                            <td>{data.pttb.rekap_jenis_kelamin.pria}</td>
                          </tr>
                          <tr>
                            <td>Perempuan</td>
                            <td>{data.pttb.rekap_jenis_kelamin.wanita}</td>
                          </tr>
                        </tbody>
                      </table>
                    </CCol>
                  </CRow>
                  <hr />
                  <h5>PTTH</h5>
                  <CRow>
                    <CCol>
                      <table className="table table-bordered table-sm table-striped">
                        <thead>
                          <tr>
                            <th colSpan="2" className="text-center">
                              Pendidikan
                            </th>
                          </tr>
                          <tr>
                            <th>Jenjang</th>
                            <th>Jumlah</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data &&
                            loopObject(data.ptth.rekap_jenjang_pendidikan).map(
                              (item, index) => (
                                <tr key={index}>
                                  <td>{item.key}</td>
                                  <td>{item.val}</td>
                                </tr>
                              )
                            )}
                        </tbody>
                      </table>
                    </CCol>
                    <CCol>
                      <table className="table table-bordered table-sm table-striped">
                        <thead>
                          <tr>
                            <th colSpan="2" className="text-center">
                              Jenis Kelamin
                            </th>
                          </tr>
                          <tr>
                            <th>Jenis Kelamin</th>
                            <th>Jumlah</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Laki - Laki</td>
                            <td>{data.ptth.rekap_jenis_kelamin.pria}</td>
                          </tr>
                          <tr>
                            <td>Perempuan</td>
                            <td>{data.ptth.rekap_jenis_kelamin.wanita}</td>
                          </tr>
                        </tbody>
                      </table>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
              <CCard>
                <CCardHeader className="bg-dark">
                  Total Pegawai berdasarkan Status Pegawai dan Bidang
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol>
                      <h5>Status Pegawai</h5>
                      <table className="table table-bordered table-sm table-striped table-striped">
                        <thead>
                          <tr>
                            <th>Status Pegawai</th>
                            <th>Jumlah</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>PNS</td>
                            <td>{data.jumlah_pns}</td>
                          </tr>
                          <tr>
                            <td>PTTH</td>
                            <td>{data.jumlah_ptth}</td>
                          </tr>
                          <tr>
                            <td>PTTB</td>
                            <td>{data.jumlah_pttb}</td>
                          </tr>
                          {/* Kolom Total Pegawai */}
                          <tr>
                            <td>
                              <b>Total</b>
                            </td>
                            <td>{data.total_pegawai}</td>
                          </tr>
                        </tbody>
                      </table>
                    </CCol>
                    <CCol>
                      <h5>Bidang</h5>
                      <table className="table table-bordered table-sm table-striped">
                        <thead>
                          <tr>
                            <th>Bidang</th>
                            <th>Jumlah</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data &&
                            loopObject(data.total_per_bidang).map(
                              (item, index) => {
                                totalBidang += item.val;
                                return (
                                  <tr key={index}>
                                    <td>{item.key}</td>
                                    <td>{item.val}</td>
                                  </tr>
                                );
                              }
                            )}
                          {/* Kolom Total Pegawai */}
                          <tr>
                            <td>
                              <b>Total</b>
                            </td>
                            <td>{totalBidang}</td>
                          </tr>
                        </tbody>
                      </table>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </>
          )}
        </CCardBody>
      </CCard>
    </>
  );
};

export default RekapPegawai;
