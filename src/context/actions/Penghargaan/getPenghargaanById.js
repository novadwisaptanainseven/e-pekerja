import axiosInstance from "src/helpers/axios";

export const getPenghargaanById = (id, setPenghargaan) => {
  axiosInstance
    .get(`admin/penghargaan/${id}`)
    .then((res) => {
      setPenghargaan(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
