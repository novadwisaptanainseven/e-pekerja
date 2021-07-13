import axiosInstance from "src/helpers/axios";

export const logout = () => {
  axiosInstance
    .post("logout")
    .then((res) => {
      localStorage.clear();
      window.location.href = "/epekerja/login";
    })
    .catch((err) => console.log(err.response.message));
};
