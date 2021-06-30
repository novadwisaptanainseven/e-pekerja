import axiosInstance from "src/helpers/axios";

export const getMutasiById = (id, setMutasi) => {
  axiosInstance
    .get(`admin/mutasi/${id}`)
    .then((res) => {
      setMutasi(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
