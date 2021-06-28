export const printRekapAbsensiByStatusPegawai = (status, tahun = "") => {
  window.open(
    `${localStorage.baseURL}print-rekap-absensi/${status}?tahun=${tahun}`,
    "_blank"
  );
};
