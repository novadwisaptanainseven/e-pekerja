import React, { useCallback, useEffect, useState } from "react";
import {
  CFormGroup,
  CInput,
  CLabel,
  CCol,
  CSelect,
  CForm,
  CModalBody,
  CModalFooter,
  CButton,
} from "@coreui/react";
import { format } from "date-fns";

const TambahAbsen = ({ data, modal }) => {
  const [tglAbsen, setTglAbsen] = useState("");
  const [absen, setAbsen] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [namaHari, setNamaHari] = useState("");

  const getNamaHari = useCallback(() => {
    let hari = format(
      new Date(data.filterYear, data.filterMonth, data.tgl),
      "EEEEEE"
    );

    switch (hari) {
      case "Su":
        hari = "minggu";
        break;
      case "Mo":
        hari = "senin";
        break;
      case "Tu":
        hari = "selasa";
        break;
      case "We":
        hari = "rabu";
        break;
      case "Th":
        hari = "kamis";
        break;
      case "Fr":
        hari = "jumat";
        break;
      case "Sa":
        hari = "sabtu";
        break;

      default:
        break;
    }

    return hari;
  }, [data]);

  useEffect(() => {
    let tgl_absen = null;

    // Cek apakah data dan properti tgl ada
    if (data && data.tgl) {
      tgl_absen = format(
        new Date(data.filterYear, data.filterMonth, data.tgl),
        "yyyy-MM-dd"
      );
      setTglAbsen(tgl_absen);
      setAbsen(data.absen);
      setKeterangan(data.keterangan);
      // Get Nama Hari
      setNamaHari(getNamaHari());
    }
  }, [data, getNamaHari]);

  // Handle kosongkan input keterangan ketika tombol close modal diklik
  const handleCloseModal = () => {
    setKeterangan("");
    modal.setModal(!modal.modal);

    let inputKeterangan = document.getElementById("keterangan");
    inputKeterangan.setAttribute("value", "");
  };

  // Handle ketika data disimpan
  const handleOnSubmit = (e) => {
    e.preventDefault();

    let valTanggal = document.getElementById("tgl_absen").getAttribute("value");
    let valHari = document.getElementById("hari").getAttribute("value");
    // let valAbsen = document.getElementById("absen").getAttribute("value");

    let valKeterangan = document
      .getElementById("keterangan")
      .getAttribute("value");

    const saveData = {
      tgl: valTanggal,
      hari: valHari,
      absen: absen === "empty" ? "" : parseInt(absen),
      keterangan: valKeterangan,
    };

    console.log(saveData);
  };

  // console.log(absen);

  return (
    <>
      <CForm onSubmit={(e) => handleOnSubmit(e)}>
        <CModalBody>
          <CFormGroup row>
            <CCol md="2">
              <CLabel>Tanggal Absen</CLabel>
            </CCol>
            <CCol>
              <CInput
                type="date"
                name="tgl_absen"
                id="tgl_absen"
                value={tglAbsen || ""}
                placeholder="Masukkan tanggal absen"
                readOnly={data && data.tgl ? true : false}
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="2">
              <CLabel>Hari</CLabel>
            </CCol>
            <CCol>
              {namaHari ? (
                // Jika ada nama hari
                <CInput
                  name="hari"
                  id="hari"
                  value={namaHari || ""}
                  readOnly={data && data.tgl ? true : false}
                />
              ) : (
                // Jika Tidak Ada nama hari
                <CSelect custom name="hari" id="hari">
                  <option value="">-- Pilih Hari --</option>
                  <option value="senin">Senin</option>
                  <option value="selasa">Selasa</option>
                  <option value="rabu">Rabu</option>
                  <option value="kamis">Kamis</option>
                  <option value="jumat">Jumat</option>
                  <option value="sabtu">Sabtu</option>
                  <option value="minggu">Minggu</option>
                </CSelect>
              )}
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="2">
              <CLabel>Absen</CLabel>
            </CCol>
            <CCol>
              {absen ? (
                <CSelect
                  custom
                  name="absen"
                  id="absen"
                  onChange={(e) => setAbsen(e.target.value)}
                >
                  <option
                    value="empty"
                    selected={absen === "empty" ? true : false}
                  >
                    -- Pilih absen --
                  </option>
                  <option value="0" selected={absen === 0 ? true : false}>
                    Tanpa Keterangan
                  </option>
                  <option value="1" selected={absen === 1 ? true : false}>
                    Hadir
                  </option>
                  <option value="2" selected={absen === 2 ? true : false}>
                    Izin
                  </option>
                  <option value="3" selected={absen === 3 ? true : false}>
                    Sakit
                  </option>
                  <option value="4" selected={absen === 4 ? true : false}>
                    Cuti
                  </option>
                </CSelect>
              ) : (
                <CSelect custom name="absen" id="absen">
                  <option value="" selected>
                    -- Pilih absen --
                  </option>
                  <option value="0">Tanpa Keterangan</option>
                  <option value="1">Hadir</option>
                  <option value="2">Izin</option>
                  <option value="3">Sakit</option>
                  <option value="4">Cuti</option>
                </CSelect>
              )}
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="2">
              <CLabel>Keterangan</CLabel>
            </CCol>
            <CCol>
              {keterangan ? (
                <CInput
                  type="text"
                  name="keterangan"
                  id="keterangan"
                  value={keterangan || ""}
                  onChange={(e) => setKeterangan(e.target.value)}
                />
              ) : (
                <CInput
                  type="text"
                  name="keterangan"
                  id="keterangan"
                  value={keterangan}
                  onChange={(e) => setKeterangan(e.target.value)}
                />
              )}
            </CCol>
          </CFormGroup>
        </CModalBody>
        <CModalFooter>
          <CButton type="submit" color="primary">
            Simpan
          </CButton>{" "}
          <CButton type="button" color="secondary" onClick={handleCloseModal}>
            Batal
          </CButton>
        </CModalFooter>
      </CForm>
    </>
  );
};

export default TambahAbsen;
