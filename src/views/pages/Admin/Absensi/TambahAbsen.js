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
import { insertOrUpdateAbsensi } from "src/context/actions/Absensi/insertOrUpdateAbsensi";
import { insertAbsensi } from "src/context/actions/Absensi/insertAbsensi";

const TambahAbsen = ({
  data,
  modal,
  idPegawai,
  setRiwayatAbsen,
  setRekapAbsensi,
  setLoadingRiwayatAbsen,
  setLoadingRekapAbsensi,
  formattedDateRiwayatAbsen,
}) => {
  const [tglAbsen, setTglAbsen] = useState("");
  const [absen, setAbsen] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [namaHari, setNamaHari] = useState("");
  const [loading, setLoading] = useState(false);
  const getNamaHari = useCallback(
    ($tgl = null) => {
      let hari = "";
      if (data) {
        hari = format(
          new Date(data.filterYear, data.filterMonth, data.tgl),
          "EEEEEE"
        );
      } else {
        hari = format(new Date(), "EEEEEE");
      }

      if ($tgl) {
        hari = format(new Date($tgl), "EEEEEE");
      }

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
    },
    [data]
  );

  useEffect(() => {
    let tgl_absen = null;

    // Cek apakah data dan properti tgl ada
    if (!data) {
      tgl_absen = format(new Date(), "yyyy-MM-dd");
      setTglAbsen(tgl_absen);
      // Get Nama Hari
      setNamaHari(getNamaHari());
    }
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

  useEffect(() => {
    setNamaHari(getNamaHari(tglAbsen));
  }, [tglAbsen]);

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

    // let valTanggal = document.getElementById("tgl_absen").getAttribute("value");
    // let valHari = document.getElementById("hari").getAttribute("value");
    // let valAbsen = document.getElementById("absen").getAttribute("value");

    // let valKeterangan = document
    //   .getElementById("keterangan")
    //   .getAttribute("value");

    let id_pegawai = data ? data.id_pegawai : idPegawai;

    const saveData = {
      // id_pegawai: idPegawai ? idPegawai : data.id_pegawai,
      id_absensi: data ? data.id_absensi : "",
      tgl_absen: tglAbsen,
      hari: namaHari,
      absen: absen === "empty" ? "" : parseInt(absen),
      keterangan: keterangan,
    };

    console.log(saveData);
    // Insert or Update Absensi

    if (data) {
      insertOrUpdateAbsensi(
        id_pegawai,
        setLoading,
        saveData,
        data.setTriggerUpdateData,
        modal.setModal
      );
    } else {
      insertAbsensi(
        id_pegawai,
        setLoading,
        saveData,
        modal.setModal,
        setRiwayatAbsen,
        setRekapAbsensi,
        setLoadingRiwayatAbsen,
        setLoadingRekapAbsensi,
        formattedDateRiwayatAbsen
      );
    }
  };

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
                onChange={(e) => setTglAbsen(e.target.value)}
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
              {data ? (
                // Jika ada nama hari
                <CInput
                  name="hari"
                  id="hari"
                  value={namaHari || ""}
                  onChange={(e) => setNamaHari(e.target.value)}
                  readOnly={data && data.tgl ? true : false}
                />
              ) : (
                // Jika Tidak Ada nama hari
                <CSelect
                  custom
                  name="hari"
                  id="hari"
                  required
                  value={namaHari || ""}
                  onChange={(e) => setNamaHari(e.target.value)}
                  disabled
                >
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
              {data ? (
                <CSelect
                  custom
                  name="absen"
                  id="absen"
                  onChange={(e) => setAbsen(e.target.value)}
                  required={true}
                >
                  <option value="" selected={absen === "empty" ? true : false}>
                    -- Pilih Absen --
                  </option>
                  <option value="5" selected={absen === 5 ? true : false}>
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
                <CSelect
                  custom
                  name="absen"
                  id="absen"
                  required
                  value={absen}
                  onChange={(e) => setAbsen(e.target.value)}
                >
                  <option value="">-- Pilih Absen --</option>
                  <option value="5">Tanpa Keterangan</option>
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
                  required
                />
              ) : (
                <CInput
                  type="text"
                  name="keterangan"
                  id="keterangan"
                  value={keterangan || ""}
                  onChange={(e) => setKeterangan(e.target.value)}
                  required
                />
              )}
            </CCol>
          </CFormGroup>
        </CModalBody>
        <CModalFooter>
          <CButton
            type="submit"
            color="primary"
            disabled={loading ? true : false}
          >
            {loading ? "Sedang menyimpan..." : "Simpan"}
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
