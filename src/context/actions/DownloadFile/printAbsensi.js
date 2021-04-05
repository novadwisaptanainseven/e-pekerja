export const printRekapAbsensiByStatusPegawai = (status, tahun = "") => {
  window.open(
    `${sessionStorage.baseURL}print-rekap-absensi/${status}?tahun=${tahun}`,
    "_blank"
  );
};
