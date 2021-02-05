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

// Import Sub Bidang
const SubBidang = React.lazy(() =>
  import("./views/pages/master_data/SubBidang/SubBidang")
);
const TambahSubBidang = React.lazy(() =>
  import("./views/pages/master_data/SubBidang/TambahSubBidang")
);
const EditSubBidang = React.lazy(() =>
  import("./views/pages/master_data/SubBidang/EditSubBidang")
);

// Import Status Pegawai
const StatusPegawai = React.lazy(() =>
  import("./views/pages/master_data/StatusPegawai/StatusPegawai")
);
const TambahStatusPegawai = React.lazy(() =>
  import("./views/pages/master_data/StatusPegawai/TambahStatusPegawai")
);
const EditStatusPegawai = React.lazy(() =>
  import("./views/pages/master_data/StatusPegawai/EditStatusPegawai")
);

// Import Pegawai
const Pegawai = React.lazy(() => import("./views/pages/Pegawai/PNS/Pegawai"));
const TambahPegawai = React.lazy(() =>
  import("./views/pages/Pegawai/PNS/TambahPegawai")
);
const EditPegawai = React.lazy(() =>
  import("./views/pages/Pegawai/PNS/EditPegawai")
);
const DetailPegawai = React.lazy(() =>
  import("./views/pages/Pegawai/DetailPegawai/DetailPegawai")
);
const DataPTTH = React.lazy(() => import("./views/pages/Pegawai/PTTH/ptth"));
const DataPTTB = React.lazy(() => import("./views/pages/Pegawai/PTTB/pttb"));
const TambahPTTH = React.lazy(() =>
  import("./views/pages/Pegawai/PTTH/ptthTambah")
);
const TambahPTTB = React.lazy(() =>
  import("./views/pages/Pegawai/PTTB/pttbTambah")
);
const EditPTTH = React.lazy(() =>
  import("./views/pages/Pegawai/PTTH/ptthEdit")
);
const EditPTTB = React.lazy(() =>
  import("./views/pages/Pegawai/PTTB/pttbEdit")
);
const SemuaPegawai = React.lazy(() =>
  import("./views/pages/Pegawai/SemuaPegawai")
);

// DUK PNS
const DataDukPNS = React.lazy(() => import("./views/pages/DukPNS/DukPNS"));
const DetailDukPNS = React.lazy(() =>
  import("./views/pages/DukPNS/DetailDukPNS")
);
const EditDukPNS = React.lazy(() => import("./views/pages/DukPNS/EditDukPNS"));

// Masa Kerja Pegawai
const DataMasaKerja = React.lazy(() =>
  import("./views/pages/MasaKerja/MasaKerja")
);
const DetailMasaKerja = React.lazy(() =>
  import("./views/pages/MasaKerja/DetailMasaKerja")
);
const EditMasaKerja = React.lazy(() =>
  import("./views/pages/MasaKerja/EditMasaKerja")
);

// Kenaikan Gaji Berkala
const KGB = React.lazy(() => import("./views/pages/KGB/KGB"));
const DaftarKGB = React.lazy(() => import("./views/pages/KGB/DaftarKGB"));

// Cuti Pegawai
const Cuti = React.lazy(() => import("./views/pages/Cuti/Cuti"));
const TambahCuti = React.lazy(() => import("./views/pages/Cuti/TambahCuti"));
const EditCuti = React.lazy(() => import("./views/pages/Cuti/EditCuti"));
const RiwayatCuti = React.lazy(() => import("./views/pages/Cuti/RiwayatCuti"));

// Absensi Pegawai
const AbsensiPNS = React.lazy(() => import("./views/pages/Absensi/AbsensiPNS"));
const AbsensiPTTH = React.lazy(() =>
  import("./views/pages/Absensi/AbsensiPTTH")
);
const AbsensiPTTB = React.lazy(() =>
  import("./views/pages/Absensi/AbsensiPTTB")
);
const RiwayatAbsensi = React.lazy(() =>
  import("./views/pages/Absensi/RiwayatAbsensi")
);
const RekapAbsensi = React.lazy(() =>
  import("./views/pages/Absensi/RekapAbsensi")
);

// Penghargaan
const Penghargaan = React.lazy(() =>
  import("./views/pages/Penghargaan/Penghargaan")
);
const TambahPenghargaan = React.lazy(() =>
  import("./views/pages/Penghargaan/TambahPenghargaan")
);
const EditPenghargaan = React.lazy(() =>
  import("./views/pages/Penghargaan/EditPenghargaan")
);
const DetailPenghargaan = React.lazy(() =>
  import("./views/pages/Penghargaan/DetailPenghargaan")
);

// Pensiun
const Pensiun = React.lazy(() => import("./views/pages/Pensiun/Pensiun"));
const TambahPensiun = React.lazy(() =>
  import("./views/pages/Pensiun/TambahPensiun")
);
const EditPensiun = React.lazy(() =>
  import("./views/pages/Pensiun/EditPensiun")
);
const DetailPensiun = React.lazy(() =>
  import("./views/pages/Pensiun/DetailPensiun")
);

// Users
const Users = React.lazy(() => import("./views/pages/Users/Users"));
const UserDetail = React.lazy(() => import("./views/pages/Users/UserDetail"));

// Akun
const Akun = React.lazy(() => import("./views/pages/Akun/Akun"));
const EditAkun = React.lazy(() => import("./views/pages/Akun/EditAkun"));
const EditPassword = React.lazy(() => import("./views/pages/Akun/EditPassword"));

const routes = [
  { path: "/epekerja/admin", exact: true, name: "Home" },
  {
    path: "/epekerja/admin/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/epekerja/admin/master-data",
    name: "Master Data",
    component: Agama,
    exact: true,
  },

  // Agama
  {
    path: "/epekerja/admin/master-data/agama",
    name: "Agama",
    component: Agama,
  },
  {
    path: "/epekerja/admin/master-data/agama-tambah",
    name: "Tambah Agama",
    component: TambahAgama,
  },
  {
    path: "/epekerja/admin/master-data/agama-edit/:id",
    name: "Edit Agama",
    component: EditAgama,
  },

  // Pangkat Golongan
  {
    path: "/epekerja/admin/master-data/pangkat-golongan",
    name: "Pangkat Golongan",
    component: PangkatGolongan,
  },
  {
    path: "/epekerja/admin/master-data/pangkat-golongan-tambah",
    name: "Tambah Pangkat Golongan",
    component: TambahPangkatGolongan,
  },
  {
    path: "/epekerja/admin/master-data/pangkat-golongan-edit/:id",
    name: "Edit Pangkat Golongan",
    component: EditPangkatGolongan,
  },

  // Pangkat Eselon
  {
    path: "/epekerja/admin/master-data/pangkat-eselon",
    name: "Pangkat Eselon",
    component: PangkatEselon,
  },
  {
    path: "/epekerja/admin/master-data/pangkat-eselon-tambah",
    name: "Tambah Pangkat Eselon",
    component: TambahPangkatEselon,
  },
  {
    path: "/epekerja/admin/master-data/pangkat-eselon-edit/:id",
    name: "Edit Pangkat Eselon",
    component: EditPangkatEselon,
  },

  // Jabatan
  {
    path: "/epekerja/admin/master-data/jabatan",
    name: "Jabatan",
    component: Jabatan,
  },
  {
    path: "/epekerja/admin/master-data/jabatan-tambah",
    name: "Tambah Jabatan",
    component: TambahJabatan,
  },
  {
    path: "/epekerja/admin/master-data/jabatan-edit/:id",
    name: "Edit Jabatan",
    component: EditJabatan,
  },

  // Bidang
  {
    path: "/epekerja/admin/master-data/bidang",
    name: "Bidang",
    component: Bidang,
  },
  {
    path: "/epekerja/admin/master-data/bidang-tambah",
    name: "Tambah Bidang",
    component: TambahBidang,
  },
  {
    path: "/epekerja/admin/master-data/bidang-edit/:id",
    name: "Edit Bidang",
    component: EditBidang,
  },

  // Sub Bidang
  {
    path: "/epekerja/admin/master-data/sub-bidang",
    name: "Sub Bidang",
    component: SubBidang,
  },
  {
    path: "/epekerja/admin/master-data/sub-bidang-tambah",
    name: "Tambah Sub Bidang",
    component: TambahSubBidang,
  },
  {
    path: "/epekerja/admin/master-data/sub-bidang-edit/:id",
    name: "Edit Sub Bidang",
    component: EditSubBidang,
  },

  // Status Pegawai
  {
    path: "/epekerja/admin/master-data/status-pegawai",
    name: "Status Pegawai",
    component: StatusPegawai,
  },
  {
    path: "/epekerja/admin/master-data/status-pegawai-tambah",
    name: "Tambah Status Pegawai",
    component: TambahStatusPegawai,
  },
  {
    path: "/epekerja/admin/master-data/status-pegawai-edit/:id",
    name: "Edit Status Pegawai",
    component: EditStatusPegawai,
  },

  // Pegawai
  {
    path: "/epekerja/admin/pegawai",
    name: "Pegawai",
    component: Pegawai,
    exact: true,
  },
  {
    path: "/epekerja/admin/pegawai-tambah",
    name: "Tambah Pegawai",
    component: TambahPegawai,
  },
  {
    path: "/epekerja/admin/pegawai-edit/:id",
    name: "Edit Pegawai",
    component: EditPegawai,
  },
  {
    path: "/epekerja/admin/pegawai-detail/:id",
    name: "Detail Pegawai",
    component: DetailPegawai,
  },
  {
    path: "/epekerja/admin/pegawai/ptth",
    name: "PTTH",
    component: DataPTTH,
  },
  {
    path: "/epekerja/admin/pegawai/ptth-tambah",
    name: "Tambah PTTH",
    component: TambahPTTH,
  },
  {
    path: "/epekerja/admin/pegawai/ptth-edit/:id",
    name: "Edit PTTH",
    component: EditPTTH,
  },
  {
    path: "/epekerja/admin/pegawai/pttb",
    name: "PTTB",
    component: DataPTTB,
  },
  {
    path: "/epekerja/admin/pegawai/pttb-tambah",
    name: "Tambah PTTB",
    component: TambahPTTB,
  },
  {
    path: "/epekerja/admin/pegawai/pttb-edit/:id",
    name: "Edit PTTB",
    component: EditPTTB,
  },
  {
    path: "/epekerja/admin/pegawai/semua-pegawai",
    name: "Semua Pegawai",
    component: SemuaPegawai,
  },

  // DUK PNS
  {
    path: "/epekerja/admin/duk",
    name: "DUK PNS",
    component: DataDukPNS,
  },
  {
    path: "/epekerja/admin/duk-detail/:id",
    name: "Detail DUK PNS",
    component: DetailDukPNS,
  },
  {
    path: "/epekerja/admin/duk-edit/:id",
    name: "Edit DUK PNS",
    component: EditDukPNS,
  },

  // Masa Kerja Pegawai
  {
    path: "/epekerja/admin/masa-kerja",
    name: "Daftar Pegawai Negeri Sipil Berdasarkan Masa Kerja",
    component: DataMasaKerja,
  },
  {
    path: "/epekerja/admin/masa-kerja-detail/:id",
    name: "Detail Masa Kerja Pegawai",
    component: DetailMasaKerja,
  },
  {
    path: "/epekerja/admin/masa-kerja-edit/:id",
    name: "Edit Masa Kerja Pegawai",
    component: EditMasaKerja,
  },

  // Kenaikan Gaji Berkala
  {
    path: "/epekerja/admin/kgb",
    name: "Kenaikan Gaji Berkala",
    component: KGB,
  },
  {
    path: "/epekerja/admin/kgb-daftar/:id",
    name: "Daftar Kenaikan Gaji Berkala",
    component: DaftarKGB,
  },

  // Cuti Pegawai
  {
    path: "/epekerja/admin/cuti",
    name: "Cuti Pegawai",
    component: Cuti,
  },
  {
    path: "/epekerja/admin/cuti-tambah",
    name: "Tambah Cuti Pegawai",
    component: TambahCuti,
  },
  {
    path: "/epekerja/admin/cuti-edit/:id",
    name: "Edit Cuti Pegawai",
    component: EditCuti,
  },
  {
    path: "/epekerja/admin/cuti-pegawai/:id",
    name: "Riwayat Cuti Pegawai",
    component: RiwayatCuti,
  },

  // Absensi Pegawai
  {
    path: "/epekerja/admin/absensi",
    name: "Absensi",
    component: AbsensiPNS,
    exact: true,
  },
  {
    path: "/epekerja/admin/absensi/pns",
    name: "Absensi PNS",
    component: AbsensiPNS,
  },
  {
    path: "/epekerja/admin/absensi/ptth",
    name: "Absensi PTTH",
    component: AbsensiPTTH,
  },
  {
    path: "/epekerja/admin/absensi/pttb",
    name: "Absensi PTTB",
    component: AbsensiPTTB,
  },
  {
    path: "/epekerja/admin/absensi/riwayat-absensi/:id",
    name: "Riwayat Absensi Pegawai",
    component: RiwayatAbsensi,
  },
  {
    path: "/epekerja/admin/absensi/rekap-absensi",
    name: "Rekap Absensi Pegawai",
    component: RekapAbsensi,
  },

  // Penghargaan
  {
    path: "/epekerja/admin/penghargaan",
    name: "Penghargaan",
    component: Penghargaan,
    exact: true,
  },
  {
    path: "/epekerja/admin/penghargaan-tambah",
    name: "Tambah Penghargaan",
    component: TambahPenghargaan,
  },
  {
    path: "/epekerja/admin/penghargaan-edit/:id",
    name: "Edit Penghargaan",
    component: EditPenghargaan,
  },
  {
    path: "/epekerja/admin/penghargaan-detail/:id",
    name: "Detail Penghargaan",
    component: DetailPenghargaan,
  },

  // Pensiun
  {
    path: "/epekerja/admin/pensiun",
    name: "Pensiun",
    component: Pensiun,
    exact: true,
  },
  {
    path: "/epekerja/admin/pensiun-tambah",
    name: "Tambah Pensiun",
    component: TambahPensiun,
  },
  {
    path: "/epekerja/admin/pensiun-edit/:id",
    name: "Edit Pensiun",
    component: EditPensiun,
  },
  {
    path: "/epekerja/admin/pensiun-detail/:id",
    name: "Detail Pensiun",
    component: DetailPensiun,
  },

  // Users
  {
    path: "/epekerja/admin/users",
    name: "Users",
    component: Users,
    exact: true,
  },
  {
    path: "/epekerja/admin/user-detail/:id",
    name: "Detail User",
    component: UserDetail,
  },

  // Akun
  {
    path: "/epekerja/admin/akun",
    name: "Akun Saya",
    component: Akun,
    exact: true,
  },
  {
    path: "/epekerja/admin/akun-edit/:id",
    name: "Edit Akun",
    component: EditAkun,
  },
  {
    path: "/epekerja/admin/akun-edit-password/:id",
    name: "Edit Password",
    component: EditPassword,
  },
];

export default routes;
