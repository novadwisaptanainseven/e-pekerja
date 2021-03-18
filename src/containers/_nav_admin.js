import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBriefcase,
  cilGroup,
  cilBadge,
  cilAvTimer,
  cilMoney,
  cilEnvelopeClosed,
  cilShortText,
  cilStar,
  cilUser,
} from "@coreui/icons";

const _nav_admin = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/epekerja/admin/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Master Data",
    route: "/epekerja/admin/master-data",
    icon: <CIcon content={cilBriefcase} customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Agama",
        to: "/epekerja/admin/master-data/agama",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Pangkat Golongan",
        to: "/epekerja/admin/master-data/pangkat-golongan",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Pangkat Eselon",
        to: "/epekerja/admin/master-data/pangkat-eselon",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Jabatan",
        to: "/epekerja/admin/master-data/jabatan",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Bidang",
        to: "/epekerja/admin/master-data/bidang",
      },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Sub Bidang",
      //   to: "/epekerja/admin/master-data/sub-bidang",
      // },
      {
        _tag: "CSidebarNavItem",
        name: "Status Pegawai",
        to: "/epekerja/admin/master-data/status-pegawai",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Data Pegawai",
    to: "/epekerja/admin/pegawai",
    icon: <CIcon content={cilGroup} customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "PNS",
        to: "/epekerja/admin/pegawai",
      },
      {
        _tag: "CSidebarNavItem",
        name: "PTTH",
        to: "/epekerja/admin/pegawai/ptth",
      },
      {
        _tag: "CSidebarNavItem",
        name: "PTTB",
        to: "/epekerja/admin/pegawai/pttb",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Semua Pegawai",
        to: "/epekerja/admin/pegawai/semua-pegawai",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "DUK Pegawai Negeri Sipil",
    to: "/epekerja/admin/duk",
    icon: <CIcon content={cilBadge} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Masa Kerja Pegawai",
    to: "/epekerja/admin/masa-kerja",
    icon: <CIcon content={cilAvTimer} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Kenaikan Gaji Berkala",
    to: "/epekerja/admin/kgb",
    icon: <CIcon content={cilMoney} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Cuti Pegawai",
    to: "/epekerja/admin/cuti",
    icon: (
      <CIcon content={cilEnvelopeClosed} customClasses="c-sidebar-nav-icon" />
    ),
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Absensi Pegawai",
    to: "/epekerja/admin/absensi",
    icon: <CIcon content={cilShortText} customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Absensi PNS",
        to: "/epekerja/admin/absensi/pns",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Absensi PTTH",
        to: "/epekerja/admin/absensi/ptth",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Absensi PTTB",
        to: "/epekerja/admin/absensi/pttb",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Rekap Absensi",
        to: "/epekerja/admin/absensi/rekap-absensi",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Penghargaan",
    to: "/epekerja/admin/penghargaan",
    icon: <CIcon content={cilStar} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Data Pensiun",
    to: "/epekerja/admin/pensiun",
    icon: <CIcon content={cilGroup} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Data Users",
    to: "/epekerja/admin/users",
    icon: <CIcon content={cilGroup} customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Akun Saya",
    to: "/epekerja/admin/akun",
    icon: <CIcon content={cilUser} customClasses="c-sidebar-nav-icon" />,
  },
];

export default _nav_admin;
