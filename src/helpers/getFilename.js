const getFilename = (value) => {
  const arr = value.split("/");
  const arr_name = arr[arr.length - 1];

  return arr_name;
};

export default getFilename;
