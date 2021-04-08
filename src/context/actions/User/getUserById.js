import axiosInstance from "src/helpers/axios";

export const getUserById = (id_user, setUser) => {
  axiosInstance
    .get(`admin/users/${id_user}`)
    .then((res) => {
      setUser(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
