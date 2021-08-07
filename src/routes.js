import React from "react";

// Import Dashboard
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

// Import Data Kepegawaian
const DataKepegawaian = React.lazy(() =>
  import("./views/pages/User/DataKepegawaian")
);
const EditPegawai = React.lazy(() =>
  import("./views/pages/User/DataKepegawaian/DataDiri/PNS/EditPegawai")
);

// Import Akun
const Akun = React.lazy(() => import("./views/pages/User/Akun"));
const EditAkun = React.lazy(() => import("./views/pages/User/Akun/EditAkun"));
const EditPassword = React.lazy(() =>
  import("./views/pages/User/Akun/EditPassword")
);

const routes = [
  // Dashboard
  { path: "/epekerja/user", exact: true, name: "Home" },
  {
    path: "/epekerja/user/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },

  // Data Kepegawaian
  {
    path: "/epekerja/user/data-kepegawaian",
    name: "Data Kepegawaian",
    component: DataKepegawaian,
    exact: true,
  },
  {
    path: "/epekerja/user/data-kepegawaian/edit-data-diri/:id",
    name: "Edit Data Diri",
    component: EditPegawai,
    exact: true,
  },

  // Data Akun
  {
    path: "/epekerja/user/akun",
    name: "Akun",
    component: Akun,
  },
  {
    path: "/epekerja/user/akun-edit",
    name: "Edit Akun",
    component: EditAkun,
  },
  {
    path: "/epekerja/user/akun-edit-password",
    name: "Edit Password",
    component: EditPassword,
  },
];

export default routes;
