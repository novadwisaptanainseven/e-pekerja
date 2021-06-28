export const printRekapAbsensiByIdPegawai = (idPegawai) => {
  window.open(
    `${localStorage.baseURL}print-rekap-absensi-pegawai/${idPegawai}`,
    "_blank"
  );
};
