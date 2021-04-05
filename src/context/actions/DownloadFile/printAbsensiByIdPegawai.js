export const printRekapAbsensiByIdPegawai = (idPegawai) => {
  window.open(
    `${sessionStorage.baseURL}print-rekap-absensi-pegawai/${idPegawai}`,
    "_blank"
  );
};
