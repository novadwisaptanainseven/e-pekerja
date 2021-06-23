const printPegawaiStatusCuti = (params) => {
  const bulan = params.bulan || "";
  const tahun = params.tahun || "";

  window.open(
    `${sessionStorage.baseURL}print-pegawai-status-cuti?bulan=${bulan}&tahun=${tahun}`,
    "_blank"
  );
};

export default printPegawaiStatusCuti;
