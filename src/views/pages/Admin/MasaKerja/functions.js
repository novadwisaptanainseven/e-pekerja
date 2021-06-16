export const splitMasaKerja = (mk) => {
  let arr_mk = mk.split(" ");
  let tahun = arr_mk[0];
  let bulan = arr_mk[2];

  return { tahun: tahun, bulan: bulan };
};
