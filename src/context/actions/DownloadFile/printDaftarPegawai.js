const printDaftarPegawai = (data) => {
  window.open(
    `${sessionStorage.baseURL}print-daftar-pegawai/${data}`,
    "_blank"
  );
};

export default printDaftarPegawai;
