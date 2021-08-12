import React from "react";
import CIcon from "@coreui/icons-react";
import { cilBadge, cilUser } from "@coreui/icons";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/epekerja/user/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Data Kepegawaian Saya",
    to: "/epekerja/user/data-kepegawaian",
    icon: <CIcon content={cilUser} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Kenaikan Pangkat",
    to: "/epekerja/user/kenaikan-pangkat",
    icon: <CIcon content={cilBadge} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Akun Saya",
    to: "/epekerja/user/akun",
    icon: <CIcon content={cilUser} customClasses="c-sidebar-nav-icon" />,
  },
];

export default _nav;
