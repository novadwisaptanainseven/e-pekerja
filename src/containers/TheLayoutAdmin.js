import React, { useEffect } from "react";
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

const MySwal = withReactContent(Swal);

const TheLayoutAdmin = () => {
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
          window.location.href = "/epekerja/user";
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
