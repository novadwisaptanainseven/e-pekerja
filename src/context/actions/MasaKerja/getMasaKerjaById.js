import axiosInstance from "src/helpers/axios";

export const getMasaKerjaById = (id, setMasaKerja) => {
  axiosInstance
    .get(`admin/masa-kerja/${id}`)
    .then((res) => {
      setMasaKerja(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
