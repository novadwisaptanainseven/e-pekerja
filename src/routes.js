import React from "react";

// Import Dashboard
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

// Import DataKepegawaian
const DataKepegawaian = React.lazy(() => import("./views/pages/User/DataKepegawaian"));

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
  },
];

export default routes;
