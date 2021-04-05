// Ini merupakan fungsi untuk memberi huruf kapital setiap kata
const capitalizeFirst = (str) => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

export default capitalizeFirst;
