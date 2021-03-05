import axiosInstance from "src/helpers/axios";

export const getAgamaById = (id, setAgama) => {
  axiosInstance
    .get(`admin/master-data/agama/${id}`)
    .then((res) => {
      setAgama(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
