import axiosInstance from "src/helpers/axios";

export const getJabatanById = (id, setJabatan) => {
  axiosInstance
    .get(`admin/master-data/jabatan/${id}`)
    .then((res) => {
      setJabatan(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
