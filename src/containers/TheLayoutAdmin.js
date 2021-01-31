import React from "react";
import {
  // TheContent,
  TheContentAdmin,
  // TheSidebar,
  TheSidebarAdmin,
  TheFooter,
  TheHeader,
} from "./index";

const TheLayoutAdmin = () => {
  return (
    <div className="c-app c-default-layout">
      <TheSidebarAdmin />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContentAdmin />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayoutAdmin;
