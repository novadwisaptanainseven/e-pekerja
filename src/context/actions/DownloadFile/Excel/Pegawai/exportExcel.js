const exportExcel = (data, request = null, type = "") => {
  if (!type) {
    window.open(`${sessionStorage.baseURL}${data}/export`, "_self");
  } else if (type === "filter_tanggal") {
    let params = `first_date=${request.startDate}&last_date=${request.endDate}`;
    window.open(`${sessionStorage.baseURL}${data}/export/?${params}`, "_self");
  } else if (type === "filter_tahun") {
    let params = `tahun=${request}`;
    window.open(`${sessionStorage.baseURL}${data}/export/?${params}`, "_self");
  } else if (type === "filter_bulan_tahun") {
    let params = `bulan=${request.bulan}&tahun=${request.tahun}`;
    window.open(`${sessionStorage.baseURL}${data}/export?${params}`, "_self");
  }
};

export default exportExcel;
