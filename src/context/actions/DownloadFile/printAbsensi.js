export const printRekapAbsensiByStatusPegawai = (status) => {
  window.open(
    `${sessionStorage.baseURL}print-rekap-absensi/${status}`,
    "_blank"
  );
};
