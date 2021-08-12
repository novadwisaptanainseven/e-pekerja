const getFileBerkasKp = (file) => {
  let arr_file = file.split("/");
  let name = arr_file[arr_file.length - 1];

  return `${localStorage.baseURL}berkas-kp/${name}`;
};

export default getFileBerkasKp;
