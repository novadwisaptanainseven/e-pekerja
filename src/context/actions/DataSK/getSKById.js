import axiosInstance from "src/helpers/axios";

const getSKById = (id, setData) => {
  axiosInstance
    .get(`admin/upload-sk/${id}`)
    .then((res) => {
      setData(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export default getSKById;
