import axiosInstance from "src/helpers/axios";

export const getPTTHById = (id, setPTTH) => {
  axiosInstance
    .get(`admin/pegawai/ptth/${id}`)
    .then((res) => {
      setPTTH(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
