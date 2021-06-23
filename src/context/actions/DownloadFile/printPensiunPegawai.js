const printPensiunPegawai = (params = null) => {
  const bulan = params.bulan || "";
  const tahun = params.tahun || "";

  window.open(
    `${sessionStorage.baseURL}print-pensiun-pegawai?bulan=${bulan}&tahun=${tahun}`,
    "_blank"
  );
};

export default printPensiunPegawai;
