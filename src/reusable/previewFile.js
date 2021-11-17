const previewFile = (file) => {
  let arr_file = file.split("/");
  let filename = arr_file[arr_file.length - 1];

  return filename;
};

export default previewFile;
