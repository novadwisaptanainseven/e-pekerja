const exportExcel = (data, request = null, type = "") => {
  if (!type) {
    window.open(`${localStorage.baseURL}${data}/export`, "_self");
  } else if (type === "filter_tanggal") {
    let params = `first_date=${request.startDate}&last_date=${request.endDate}`;
    window.open(`${localStorage.baseURL}${data}/export/?${params}`, "_self");
  } else if (type === "filter_tahun") {
    let params = `tahun=${request}`;
    window.open(`${localStorage.baseURL}${data}/export/?${params}`, "_self");
  } else if (type === "filter_bulan_tahun") {
    let params = `bulan=${request.bulan}&tahun=${request.tahun}`;
    window.open(`${localStorage.baseURL}${data}/export?${params}`, "_self");
  } else if (type === "filter_pegawai") {
    let params = `pendidikan=${request.pendidikan}`;
    window.open(`${localStorage.baseURL}${data}/export?${params}`, "_self");
  }
};

export default exportExcel;
