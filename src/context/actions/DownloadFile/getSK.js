const getSK = (file) => {
  let arr_file = file.split("/");
  let name = arr_file[arr_file.length - 1];

  return `${sessionStorage.baseURL}sk/${name}`;
};

export default getSK;
