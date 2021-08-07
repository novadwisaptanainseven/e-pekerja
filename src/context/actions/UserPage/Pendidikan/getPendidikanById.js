import axiosInstance from "src/helpers/axios";

export const getPendidikanById = (id_pegawai, id_pendidikan, setData) => {
  axiosInstance
    .get(`user/data-kepegawaian/${id_pegawai}/pendidikan/${id_pendidikan}`)
    .then((res) => {
      setData(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
