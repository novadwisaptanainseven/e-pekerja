import axiosInstance from "src/helpers/axios";

export const cekUser = (setCurrentUser, userDispatch) => {
  axiosInstance
    .get("user")
    .then((res) => {
      console.log(res.data.user);
      setCurrentUser(res.data.user);
      userDispatch({
        type: "SAVE_USER",
        payload: res.data.user,
      });
    })
    .catch((err) => {
        // console.log(err.response.data);
    });
};
