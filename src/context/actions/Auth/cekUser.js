import axiosInstance from "src/helpers/axios";

export const cekUser = (setCurrentUser) => {
  axiosInstance
    .get("user")
    .then((res) => {
      console.log(res.data.user);
      setCurrentUser(res.data.user);
    })
    .catch((err) => {
      //   console.log(err.response.data);
    });
};
