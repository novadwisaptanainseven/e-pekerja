const exportExcel = (data) => {
  window.open(`${sessionStorage.baseURL}${data}/export`, "_blank");
};

export default exportExcel;
