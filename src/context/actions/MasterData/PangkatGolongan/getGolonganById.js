import axiosInstance from "src/helpers/axios";

export const getGolonganById = (id, setGolongan) => {
  axiosInstance
    .get(`admin/master-data/pangkat-golongan/${id}`)
    .then((res) => {
      setGolongan(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
