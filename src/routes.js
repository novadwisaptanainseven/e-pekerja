import React from "react";

// Import Dashboard
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

// Import Agama
const Agama = React.lazy(() => import("./views/pages/master_data/Agama/Agama"));
const TambahAgama = React.lazy(() =>
  import("./views/pages/master_data/Agama/TambahAgama")
);
const EditAgama = React.lazy(() =>
  import("./views/pages/master_data/Agama/EditAgama")
);

// Import Pangkat Golongan
const PangkatGolongan = React.lazy(() =>
  import("./views/pages/master_data/PangkatGolongan/PangkatGolongan")
);
const TambahPangkatGolongan = React.lazy(() =>
  import("./views/pages/master_data/PangkatGolongan/TambahPangkatGolongan")
);
const EditPangkatGolongan = React.lazy(() =>
  import("./views/pages/master_data/PangkatGolongan/EditPangkatGolongan")
);

// Import Pangkat Eselon
const PangkatEselon = React.lazy(() =>
  import("./views/pages/master_data/PangkatEselon/PangkatEselon")
);
const TambahPangkatEselon = React.lazy(() =>
  import("./views/pages/master_data/PangkatEselon/TambahPangkatEselon")
);
const EditPangkatEselon = React.lazy(() =>
  import("./views/pages/master_data/PangkatEselon/EditPangkatEselon")
);

// Import Jabatan
const Jabatan = React.lazy(() =>
  import("./views/pages/master_data/Jabatan/Jabatan")
);
const TambahJabatan = React.lazy(() =>
  import("./views/pages/master_data/Jabatan/TambahJabatan")
);
const EditJabatan = React.lazy(() =>
  import("./views/pages/master_data/Jabatan/EditJabatan")
);

// Import Bidang
const Bidang = React.lazy(() =>
  import("./views/pages/master_data/Bidang/Bidang")
);
const TambahBidang = React.lazy(() =>
  import("./views/pages/master_data/Bidang/TambahBidang")
);
const EditBidang = React.lazy(() =>
  import("./views/pages/master_data/Bidang/EditBidang")
);

// Import SubBidang
const SubBidang = React.lazy(() =>
  import("./views/pages/master_data/SubBidang/SubBidang")
);
const TambahSubBidang = React.lazy(() =>
  import("./views/pages/master_data/SubBidang/TambahSubBidang")
);
const EditSubBidang = React.lazy(() =>
  import("./views/pages/master_data/SubBidang/EditSubBidang")
);


const routes = [
  { path: "/epekerja", exact: true, name: "Home" },
  { path: "/epekerja/dashboard", name: "Dashboard", component: Dashboard },
  {
    path: "/epekerja/master-data",
    name: "Master Data",
    component: Agama,
    exact: true,
  },

  // Agama
  { path: "/epekerja/master-data/agama", name: "Agama", component: Agama },
  {
    path: "/epekerja/master-data/agama-tambah",
    name: "Tambah Agama",
    component: TambahAgama,
  },
  {
    path: "/epekerja/master-data/agama-edit/:id",
    name: "Edit Agama",
    component: EditAgama,
  },

  // Pangkat Golongan
  {
    path: "/epekerja/master-data/pangkat-golongan",
    name: "Pangkat Golongan",
    component: PangkatGolongan,
  },
  {
    path: "/epekerja/master-data/pangkat-golongan-tambah",
    name: "Tambah Pangkat Golongan",
    component: TambahPangkatGolongan,
  },
  {
    path: "/epekerja/master-data/pangkat-golongan-edit/:id",
    name: "Edit Pangkat Golongan",
    component: EditPangkatGolongan,
  },

  // Pangkat Eselon
  {
    path: "/epekerja/master-data/pangkat-eselon",
    name: "Pangkat Eselon",
    component: PangkatEselon,
  },
  {
    path: "/epekerja/master-data/pangkat-eselon-tambah",
    name: "Tambah Pangkat Eselon",
    component: TambahPangkatEselon,
  },
  {
    path: "/epekerja/master-data/pangkat-eselon-edit/:id",
    name: "Edit Pangkat Eselon",
    component: EditPangkatEselon,
  },

  // Jabatan
  {
    path: "/epekerja/master-data/jabatan",
    name: "Jabatan",
    component: Jabatan,
  },
  {
    path: "/epekerja/master-data/jabatan-tambah",
    name: "Tambah Jabatan",
    component: TambahJabatan,
  },
  {
    path: "/epekerja/master-data/jabatan-edit/:id",
    name: "Edit Jabatan",
    component: EditJabatan,
  },

  // Bidang
  {
    path: "/epekerja/master-data/bidang",
    name: "Bidang",
    component: Bidang,
  },
  {
    path: "/epekerja/master-data/bidang-tambah",
    name: "Tambah Bidang",
    component: TambahBidang,
  },
  {
    path: "/epekerja/master-data/bidang-edit/:id",
    name: "Edit Bidang",
    component: EditBidang,
  },

  // SubBidang
  {
    path: "/epekerja/master-data/sub-bidang",
    name: "Sub Bidang",
    component: SubBidang,
  },
  {
    path: "/epekerja/master-data/sub-bidang-tambah",
    name: "Tambah Sub Bidang",
    component: TambahSubBidang,
  },
  {
    path: "/epekerja/master-data/sub-bidang-edit/:id",
    name: "Edit Sub Bidang",
    component: EditSubBidang,
  },
];

export default routes;
