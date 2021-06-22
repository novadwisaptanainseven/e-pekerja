const printKGBSemuaPegawai = (params) => {
  const bulan = params.bulan || "";
  const tahun = params.tahun || "";

  window.open(
    `${sessionStorage.baseURL}print-kgb?bulan=${bulan}&tahun=${tahun}`,
    "_blank"
  );
};

export default printKGBSemuaPegawai;
