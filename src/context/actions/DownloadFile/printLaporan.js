const printLaporan = (id, data) => {
  window.open(`${localStorage.baseURL}print-pegawai/${id}/${data}`, "_blank");
};

export default printLaporan;
