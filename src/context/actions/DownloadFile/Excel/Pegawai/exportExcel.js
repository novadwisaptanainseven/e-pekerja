const exportExcel = (data, request = null, type = "") => {
  if (!type) {
    window.open(`${sessionStorage.baseURL}${data}/export`, "_blank");
  } else if (type === "filter_tanggal") {
    let params = `first_date=${request.startDate}&last_date=${request.endDate}`;
    window.open(`${sessionStorage.baseURL}${data}/export/?${params}`, "_blank");
  } else if (type === "filter_tahun") {
    let params = `tahun=${request}`;
    window.open(`${sessionStorage.baseURL}${data}/export/?${params}`, "_blank");
  }
};

export default exportExcel;
