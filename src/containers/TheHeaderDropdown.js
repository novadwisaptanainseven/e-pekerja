import React, { useEffect, useState } from "react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { logout } from "src/context/actions/Auth/logout";
import { cekUser } from "src/context/actions/Auth/cekUser";
import { getImage } from "src/context/actions/DownloadFile";

const MySwal = withReactContent(Swal);

const TheHeaderDropdown = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    cekUser(setCurrentUser);
  }, []);

  const handleLogout = () => {
    MySwal.fire({
      icon: "warning",
      title: "Logout",
      text: "Anda yakin ingin logout ?",
      confirmButtonText: "YA",
      showCancelButton: "TIDAK",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Anda berhasil Logout", "", "success").then((res) => {
          logout();
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("level");
          window.location.href = "/epekerja/login";
        });
      }
    });
  };

  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={currentUser ? getImage(currentUser.foto_profil) : ""}
            style={{
              height: "36px",
            }}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Pengaturan</strong>
        </CDropdownItem>
        {/* <CDropdownItem onClick={goToAkun}>
          <CIcon name="cil-user" className="mfe-2" />
          Profil
        </CDropdownItem> */}

        <CDropdownItem onClick={handleLogout}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Log Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
