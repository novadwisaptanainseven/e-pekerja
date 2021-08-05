import axiosInstance from "src/helpers/axios";
import { getUser } from "./getUser";

export const deleteUser = (id_user, dispatch) => {
  axiosInstance
    .delete(`admin/users/${id_user}`)
    .then((res) => {
      getUser(dispatch);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
