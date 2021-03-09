import axiosInstance from "src/helpers/axios";

export const getPensiunById = (id, setPensiun) => {
  axiosInstance
    .get(`admin/pensiun/${id}`)
    .then((res) => {
      setPensiun(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
