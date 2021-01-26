import React from "react";
import CIcon from "@coreui/icons-react";
import { cilBriefcase } from "@coreui/icons";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/epekerja/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Master Data",
    route: "/epekerja/master-data",
    icon: <CIcon content={cilBriefcase} customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Agama",
        to: "/epekerja/master-data/agama",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Pangkat Golongan",
        to: "/epekerja/master-data/pangkat-golongan",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Pangkat Eselon",
        to: "/epekerja/master-data/pangkat-eselon",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Jabatan",
        to: "/epekerja/master-data/jabatan",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Bidang",
        to: "/epekerja/master-data/bidang",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Sub Bidang",
        to: "/epekerja/master-data/sub-bidang",
      },
    ],
  },
];

export default _nav;
