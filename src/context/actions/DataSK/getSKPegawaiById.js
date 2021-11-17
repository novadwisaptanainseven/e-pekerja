import axiosInstance from "src/helpers/axios";

const getSKPegawaiById = (id, setData) => {
  axiosInstance
    .get(`admin/pegawai/sk/${id}`)
    .then((res) => {
      setData(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export default getSKPegawaiById;
