const getDokPenghargaan = (file) => {
  let arr_file = file.split("/");
  let name = arr_file[arr_file.length - 1];

  return `${localStorage.baseURL}dok_penghargaan/${name}`;
};

export default getDokPenghargaan;
