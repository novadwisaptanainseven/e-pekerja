import React from "react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { SampleAvatar } from "src/assets";
import { useHistory } from "react-router-dom";

const TheHeaderDropdown = () => {
  const history = useHistory();

  const goToAkun = () => {
    history.push(`/epekerja/admin/akun`);
  }
  const logout = () => {
    history.push(`/epekerja/login`);
  }

  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={SampleAvatar}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Pengaturan</strong>
        </CDropdownItem>
        <CDropdownItem onClick={goToAkun}>
          <CIcon name="cil-user" className="mfe-2" />
          Profil
        </CDropdownItem>

        <CDropdownItem onClick={logout}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Log Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
