import axiosInstance from "src/helpers/axios";

export const logout = () => {
  axiosInstance
    .post("logout")
    .then((res) => {})
    .catch((err) => console.log(err.response.message));
};
