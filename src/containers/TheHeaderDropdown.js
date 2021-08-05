import React, { useContext, useEffect, useState } from "react";
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
import { GlobalContext } from "src/context/Provider";
import { useHistory } from "react-router-dom";

const MySwal = withReactContent(Swal);

const TheHeaderDropdown = () => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState("");
  const { userDispatch } = useContext(GlobalContext);

  useEffect(() => {
    cekUser(setCurrentUser, userDispatch);
  }, [userDispatch]);

  const goToAkun = () => {
    history.push(`/epekerja/admin/akun`);
  };

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
          localStorage.clear();
          window.location.href = "/epekerja/login";
        });
      }
    });
  };

  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <span>{currentUser && currentUser.username}</span>
        <div className="c-avatar ml-2">
          <CImg
            src={
              currentUser && currentUser.level === 1
                ? getImage(currentUser.foto_profil)
                : currentUser.pegawai
                ? getImage(currentUser.pegawai.foto)
                : ""
            }
            style={{
              height: "36px",
            }}
            className="c-avatar-img"
            alt="foto-pegawai"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Pengaturan</strong>
        </CDropdownItem>
        <CDropdownItem onClick={goToAkun}>
          <CIcon name="cil-user" className="mfe-2" />
          Akun Saya
        </CDropdownItem>

        <CDropdownItem onClick={handleLogout}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Log Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
