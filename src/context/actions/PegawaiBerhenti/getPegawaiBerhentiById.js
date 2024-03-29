import axiosInstance from "src/helpers/axios";

const getPegawaiBerhentiById = (id, setData) => {
  axiosInstance
    .get(`admin/pegawai-berhenti/${id}`)
    .then((res) => {
      setData(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export default getPegawaiBerhentiById;
