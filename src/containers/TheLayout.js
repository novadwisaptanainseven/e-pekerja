import React, { useEffect } from "react";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const TheLayout = () => {
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
      if (localStorage.level !== "2") {
        MySwal.fire({
          icon: "error",
          title: "Akses Diblok",
          text: "Hanya user non-admin yang bisa akses halaman ini",
        }).then((result) => {
          window.location.href = "/epekerja/admin";
        });
      }
    }
  }, []);

  return (
    <div className="c-app c-default-layout">
      {localStorage.token && localStorage.level === "2" && (
        <>
          <TheSidebar />
          <div className="c-wrapper">
            <TheHeader />
            <div className="c-body">
              <TheContent />
            </div>
            <TheFooter />
          </div>
        </>
      )}
    </div>
  );
};

export default TheLayout;
