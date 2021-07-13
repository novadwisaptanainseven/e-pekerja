import React, { useContext, useEffect, useState } from "react";
import {
  // TheContent,
  TheContentAdmin,
  // TheSidebar,
  TheSidebarAdmin,
  TheFooter,
  TheHeader,
} from "./index";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { logout } from "src/context/actions/Auth/logout";
import { GlobalContext } from "src/context/Provider";
import { cekUser } from "src/context/actions/Auth/cekUser";

const MySwal = withReactContent(Swal);

const TheLayoutAdmin = () => {
  const [currentUser, setCurrentUser] = useState("");
  const { currentUserDispatch } = useContext(GlobalContext);

  console.log(currentUser);

  // Cek Masa Kadaluarsa Login
  useEffect(() => {
    let tsNow = new Date().getTime();

    if (tsNow > localStorage.loginTimestamp) {
      // Jika login kadaluarsa
      MySwal.fire({
        icon: "error",
        title: "Akses Dilarang",
        text: "Masa Waktu Login Anda Sudah Kadaluarsa. Silahkan Login Ulang!",
        showConfirmButton: true,
      }).then((result) => {
        logout();
      });
    }
  }, []);

  // Get Current User
  useEffect(() => {
    cekUser(setCurrentUser, currentUserDispatch);
  }, [currentUserDispatch]);

  useEffect(() => {
    if (!localStorage.token) {
      MySwal.fire({
        icon: "error",
        title: "Akses Diblok",
        text: "Anda harus login terlebih dahulu",
      }).then((result) => {
        window.location.href = "/epekerja/login";
      });
    } else {
      if (localStorage.level !== "1") {
        MySwal.fire({
          icon: "error",
          title: "Akses Diblok",
          text: "Anda bukan admin",
        }).then((result) => {
          window.location.href = "/epekerja/login";
          localStorage.clear();
        });
      }
    }
  }, []);

  return (
    <div className="c-app c-default-layout">
      {localStorage.token && localStorage.level === "1" && (
        <>
          <TheSidebarAdmin />
          <div className="c-wrapper">
            <TheHeader />
            <div className="c-body">
              <TheContentAdmin />
            </div>
            <TheFooter />
          </div>
        </>
      )}
    </div>
  );
};

export default TheLayoutAdmin;
