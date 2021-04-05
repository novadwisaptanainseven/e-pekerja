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
import { getAbsensiById } from "src/context/actions/Absensi/getAbsensiById";
import { editAbsensi } from "src/context/actions/Absensi/editAbsensi";

const EditAbsen = ({
  modal,
  setModal,
  idPegawai,
  setRiwayatAbsen,
  setRekapAbsensi,
  setLoadingRiwayatAbsen,
  setLoadingRekapAbsensi,
  formattedDateRiwayatAbsen,
}) => {
  const [tglAbsen, setTglAbsen] = useState(data ? data.tglAbsen : "");
  const [absen, setAbsen] = useState(data ? data.absen : "");
  const [keterangan, setKeterangan] = useState("");
  const [namaHari, setNamaHari] = useState(data ? data.namaHari : "");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  const getNamaHari = useCallback(($tgl = null) => {
    let hari = "";

    if ($tgl) {
      hari = format(new Date($tgl), "EEEEEE");
    } else {
      hari = format(new Date(), "EEEEEE");
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
  }, []);

  useEffect(() => {
    if (modal.id) {
      // Get Absensi by Id
      getAbsensiById(idPegawai, modal.id, setData);
    }

    return () => {
      setTglAbsen("");
      setNamaHari("");
      setKeterangan("");
      setAbsen("");
    };
  }, [idPegawai, modal]);

  useEffect(() => {
    if (data) {
      setTglAbsen(data.tgl_absen);
      setNamaHari(data.hari);
      setKeterangan(data.keterangan);
      setAbsen(data.absen);
    }
  }, [data]);

  useEffect(() => {
    setNamaHari(getNamaHari(tglAbsen));
  }, [tglAbsen]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const saveData = {
      tgl_absen: tglAbsen,
      hari: namaHari,
      absen: parseInt(absen),
      keterangan: keterangan,
    };

    // console.log(saveData);

    editAbsensi(
      idPegawai,
      modal.id,
      setLoading,
      saveData,
      setModal,
      setRiwayatAbsen,
      setRekapAbsensi,
      setLoadingRiwayatAbsen,
      setLoadingRekapAbsensi,
      formattedDateRiwayatAbsen
    );
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
                required
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="2">
              <CLabel>Hari</CLabel>
            </CCol>
            <CCol>
              <CSelect
                custom
                name="hari"
                id="hari"
                value={namaHari || ""}
                onChange={(e) => setNamaHari(e.target.value)}
                required
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
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="2">
              <CLabel>Absen</CLabel>
            </CCol>
            <CCol>
              <CSelect
                custom
                name="absen"
                id="absen"
                value={absen || ""}
                onChange={(e) => setAbsen(e.target.value)}
              >
                <option value="">-- Pilih Absen --</option>
                <option value="5">Tanpa Keterangan</option>
                <option value="1">Hadir</option>
                <option value="2">Izin</option>
                <option value="3">Sakit</option>
                <option value="4">Cuti</option>
              </CSelect>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="2">
              <CLabel>Keterangan</CLabel>
            </CCol>
            <CCol>
              <CInput
                type="text"
                name="keterangan"
                id="keterangan"
                value={keterangan || ""}
                onChange={(e) => setKeterangan(e.target.value)}
                placeholder="Masukkan keterangan"
                required
              />
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
          <CButton
            type="button"
            color="secondary"
            onClick={() =>
              setModal({
                ...modal,
                modal: false,
                id: null,
              })
            }
          >
            Batal
          </CButton>
        </CModalFooter>
      </CForm>
    </>
  );
};

export default EditAbsen;
