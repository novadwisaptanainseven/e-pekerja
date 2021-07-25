const getDocument = (file) => {
  let arr_file = file.split("/");
  let name = arr_file[arr_file.length - 1];

  return `${localStorage.baseURL}document/${name}`;
};

export default getDocument;
