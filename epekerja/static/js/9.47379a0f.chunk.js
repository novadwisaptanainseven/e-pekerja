(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[9],{646:function(e,a,n){"use strict";n.d(a,"b",(function(){return t})),n.d(a,"a",(function(){return i}));var t=function(e){var a=e.split("/"),n=a[a.length-1];return"".concat(localStorage.baseURL,"image/").concat(n)},i=function(e){var a=e.split("/"),n=a[a.length-1];return"".concat(localStorage.baseURL,"ijazah/").concat(n)}},740:function(e,a,n){"use strict";n.r(a);var t=n(1),i=n(790),r=n(632),o=n.n(r),l=n(633),m=n.n(l),c=n(17),s=m()(o.a);a.default=function(){return Object(t.useEffect)((function(){localStorage.token?"2"!==localStorage.level&&s.fire({icon:"error",title:"Akses Diblok",text:"Hanya user non-admin yang bisa akses halaman ini"}).then((function(e){window.location.href="/epekerja/admin"})):s.fire({icon:"error",title:"Akses Diblok",text:"Anda harus login terlebih dahulu"}).then((function(e){window.location.href="/epekerja/login"}))}),[]),Object(c.jsx)("div",{className:"c-app c-default-layout",children:localStorage.token&&"2"===localStorage.level&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.f,{}),Object(c.jsxs)("div",{className:"c-wrapper",children:[Object(c.jsx)(i.d,{}),Object(c.jsx)("div",{className:"c-body",children:Object(c.jsx)(i.a,{})}),Object(c.jsx)(i.c,{})]})]})})}},750:function(e,a,n){"use strict";n.r(a);var t=n(1),i=n(790),r=n(632),o=n.n(r),l=n(633),m=n.n(l),c=n(17),s=m()(o.a);a.default=function(){return Object(t.useEffect)((function(){localStorage.token?"1"!==localStorage.level&&s.fire({icon:"error",title:"Akses Diblok",text:"Anda bukan admin"}).then((function(e){window.location.href="/epekerja/user"})):s.fire({icon:"error",title:"Akses Diblok",text:"Anda harus login terlebih dahulu"}).then((function(e){window.location.href="/epekerja/login"}))}),[]),Object(c.jsx)("div",{className:"c-app c-default-layout",children:localStorage.token&&"1"===localStorage.level&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.g,{}),Object(c.jsxs)("div",{className:"c-wrapper",children:[Object(c.jsx)(i.d,{}),Object(c.jsx)("div",{className:"c-body",children:Object(c.jsx)(i.b,{})}),Object(c.jsx)(i.c,{})]})]})})}},790:function(e,a,n){"use strict";n.d(a,"a",(function(){return u})),n.d(a,"b",(function(){return ge})),n.d(a,"c",(function(){return Pe})),n.d(a,"d",(function(){return ye})),n.d(a,"e",(function(){return Ie})),n.d(a,"f",(function(){return Me})),n.d(a,"g",(function(){return qe}));var t=n(2),i=n(1),r=n.n(i),o=n(20),l=n(628),m=[{path:"/epekerja/user",exact:!0,name:"Home"},{path:"/epekerja/user/dashboard",name:"Dashboard",component:r.a.lazy((function(){return n.e(74).then(n.bind(null,1022))}))},{path:"/epekerja/user/data-kepegawaian",name:"Data Kepegawaian",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(36)]).then(n.bind(null,988))}))},{path:"/epekerja/user/akun",name:"Akun",component:r.a.lazy((function(){return n.e(97).then(n.bind(null,973))}))},{path:"/epekerja/user/akun-edit",name:"Edit Akun",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(95)]).then(n.bind(null,1023))}))},{path:"/epekerja/user/akun-edit-password",name:"Edit Password",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(96)]).then(n.bind(null,1024))}))}],c=n(17),s=Object(c.jsx)("div",{className:"pt-3 text-center",children:Object(c.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),d=function(){return Object(c.jsx)("main",{className:"c-main",children:Object(c.jsx)(l.o,{fluid:!0,children:Object(c.jsx)(i.Suspense,{fallback:s,children:Object(c.jsxs)(o.d,{children:[m.map((function(e,a){return e.component&&Object(c.jsx)(o.b,{path:e.path,exact:e.exact,name:e.name,render:function(a){return Object(c.jsx)(l.u,{children:Object(c.jsx)(e.component,Object(t.a)({},a))})}},a)})),Object(c.jsx)(o.a,{from:"/",to:"/epekerja/user/dashboard"})]})})})})},u=r.a.memo(d),p=r.a.lazy((function(){return Promise.all([n.e(38),n.e(75)]).then(n.bind(null,1025))})),b=r.a.lazy((function(){return Promise.all([n.e(1),n.e(68)]).then(n.bind(null,1004))})),j=r.a.lazy((function(){return Promise.all([n.e(0),n.e(82)]).then(n.bind(null,1026))})),h=r.a.lazy((function(){return Promise.all([n.e(0),n.e(81)]).then(n.bind(null,1005))})),k=r.a.lazy((function(){return Promise.all([n.e(1),n.e(71)]).then(n.bind(null,1006))})),g=r.a.lazy((function(){return Promise.all([n.e(0),n.e(90)]).then(n.bind(null,1027))})),f=r.a.lazy((function(){return Promise.all([n.e(0),n.e(89)]).then(n.bind(null,1007))})),P=r.a.lazy((function(){return Promise.all([n.e(1),n.e(70)]).then(n.bind(null,1008))})),x=r.a.lazy((function(){return Promise.all([n.e(0),n.e(88)]).then(n.bind(null,1028))})),w=r.a.lazy((function(){return Promise.all([n.e(0),n.e(87)]).then(n.bind(null,1009))})),y=r.a.lazy((function(){return Promise.all([n.e(1),n.e(52)]).then(n.bind(null,1010))})),O=r.a.lazy((function(){return Promise.all([n.e(0),n.e(86)]).then(n.bind(null,1029))})),v=r.a.lazy((function(){return Promise.all([n.e(0),n.e(85)]).then(n.bind(null,1011))})),S=r.a.lazy((function(){return Promise.all([n.e(1),n.e(69)]).then(n.bind(null,1012))})),z=r.a.lazy((function(){return Promise.all([n.e(0),n.e(84)]).then(n.bind(null,1030))})),N=r.a.lazy((function(){return Promise.all([n.e(0),n.e(83)]).then(n.bind(null,1013))})),C=r.a.lazy((function(){return Promise.all([n.e(1),n.e(58)]).then(n.bind(null,1014))})),T=r.a.lazy((function(){return Promise.all([n.e(0),n.e(63)]).then(n.bind(null,1031))})),D=r.a.lazy((function(){return Promise.all([n.e(0),n.e(62)]).then(n.bind(null,1015))})),_=r.a.lazy((function(){return Promise.all([n.e(1),n.e(72)]).then(n.bind(null,1016))})),E=r.a.lazy((function(){return Promise.all([n.e(0),n.e(92)]).then(n.bind(null,1032))})),I=r.a.lazy((function(){return Promise.all([n.e(0),n.e(91)]).then(n.bind(null,1017))})),A=r.a.lazy((function(){return Promise.all([n.e(1),n.e(25)]).then(n.bind(null,1033))})),B=r.a.lazy((function(){return Promise.all([n.e(0),n.e(37)]).then(n.bind(null,1034))})),K=r.a.lazy((function(){return Promise.all([n.e(0),n.e(33)]).then(n.bind(null,1035))})),M=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(15)]).then(n.bind(null,987))})),R=r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(27)]).then(n.bind(null,1036))})),H=r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(26)]).then(n.bind(null,1037))})),U=r.a.lazy((function(){return Promise.all([n.e(0),n.e(46)]).then(n.bind(null,1038))})),G=r.a.lazy((function(){return Promise.all([n.e(0),n.e(45)]).then(n.bind(null,1039))})),J=r.a.lazy((function(){return Promise.all([n.e(0),n.e(42)]).then(n.bind(null,1040))})),L=r.a.lazy((function(){return Promise.all([n.e(0),n.e(41)]).then(n.bind(null,1041))})),Y=r.a.lazy((function(){return Promise.all([n.e(1),n.e(34)]).then(n.bind(null,1042))})),F=r.a.lazy((function(){return n.e(60).then(n.bind(null,1018))})),Z=r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(31)]).then(n.bind(null,974))})),q=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(14)]).then(n.bind(null,995))})),V=r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(30)]).then(n.bind(null,975))})),Q=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(13)]).then(n.bind(null,996))})),W=r.a.lazy((function(){return Promise.all([n.e(1),n.e(40)]).then(n.bind(null,1019))})),X=r.a.lazy((function(){return Promise.all([n.e(2),n.e(53)]).then(n.bind(null,976))})),$=r.a.lazy((function(){return Promise.all([n.e(0),n.e(59)]).then(n.bind(null,1043))})),ee=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(21)]).then(n.bind(null,997))})),ae=r.a.lazy((function(){return Promise.all([n.e(2),n.e(61)]).then(n.bind(null,977))})),ne=r.a.lazy((function(){return Promise.all([n.e(0),n.e(55)]).then(n.bind(null,978))})),te=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(20)]).then(n.bind(null,993))})),ie=r.a.lazy((function(){return Promise.all([n.e(2),n.e(67)]).then(n.bind(null,992))})),re=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(22)]).then(n.bind(null,990))})),oe=r.a.lazy((function(){return Promise.all([n.e(1),n.e(49)]).then(n.bind(null,979))})),le=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(44)]).then(n.bind(null,989))})),me=r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(29)]).then(n.bind(null,998))})),ce=r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(48)]).then(n.bind(null,1020))})),se=r.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(80)]).then(n.bind(null,792))})),de=r.a.lazy((function(){return Promise.all([n.e(0),n.e(79)]).then(n.bind(null,791))})),ue=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(35)]).then(n.bind(null,999))})),pe=r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(28)]).then(n.bind(null,1e3))})),be=r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(16)]).then(n.bind(null,980))})),je=[{path:"/epekerja/admin",exact:!0,name:"Home"},{path:"/epekerja/admin/dashboard",name:"Dashboard",component:p},{path:"/epekerja/admin/master-data",name:"Master Data",component:b,exact:!0},{path:"/epekerja/admin/master-data/agama",name:"Agama",component:b},{path:"/epekerja/admin/master-data/agama-tambah",name:"Tambah Agama",component:j},{path:"/epekerja/admin/master-data/agama-edit/:id",name:"Edit Agama",component:h},{path:"/epekerja/admin/master-data/pangkat-golongan",name:"Pangkat Golongan",component:k},{path:"/epekerja/admin/master-data/pangkat-golongan-tambah",name:"Tambah Pangkat Golongan",component:g},{path:"/epekerja/admin/master-data/pangkat-golongan-edit/:id",name:"Edit Pangkat Golongan",component:f},{path:"/epekerja/admin/master-data/pangkat-eselon",name:"Pangkat Eselon",component:P},{path:"/epekerja/admin/master-data/pangkat-eselon-tambah",name:"Tambah Pangkat Eselon",component:x},{path:"/epekerja/admin/master-data/pangkat-eselon-edit/:id",name:"Edit Pangkat Eselon",component:w},{path:"/epekerja/admin/master-data/jabatan",name:"Jabatan",component:y},{path:"/epekerja/admin/master-data/jabatan-tambah",name:"Tambah Jabatan",component:O},{path:"/epekerja/admin/master-data/jabatan-edit/:id",name:"Edit Jabatan",component:v},{path:"/epekerja/admin/master-data/bidang",name:"Bidang",component:S},{path:"/epekerja/admin/master-data/bidang-tambah",name:"Tambah Bidang",component:z},{path:"/epekerja/admin/master-data/bidang-edit/:id",name:"Edit Bidang",component:N},{path:"/epekerja/admin/master-data/sub-bidang",name:"Sub Bidang",component:C},{path:"/epekerja/admin/master-data/sub-bidang-tambah",name:"Tambah Sub Bidang",component:T},{path:"/epekerja/admin/master-data/sub-bidang-edit/:id",name:"Edit Sub Bidang",component:D},{path:"/epekerja/admin/master-data/status-pegawai",name:"Status Pegawai",component:_},{path:"/epekerja/admin/master-data/status-pegawai-tambah",name:"Tambah Status Pegawai",component:E},{path:"/epekerja/admin/master-data/status-pegawai-edit/:id",name:"Edit Status Pegawai",component:I},{path:"/epekerja/admin/pegawai",name:"Pegawai",component:A,exact:!0},{path:"/epekerja/admin/pegawai-tambah",name:"Tambah Pegawai",component:B},{path:"/epekerja/admin/pegawai-edit/:id",name:"Edit Pegawai",component:K},{path:"/epekerja/admin/pegawai-detail/:id",name:"Detail Pegawai",component:M},{path:"/epekerja/admin/pegawai/ptth",name:"PTTH",component:R},{path:"/epekerja/admin/pegawai/ptth-tambah",name:"Tambah PTTH",component:U},{path:"/epekerja/admin/pegawai/ptth-edit/:id",name:"Edit PTTH",component:J},{path:"/epekerja/admin/pegawai/pttb",name:"PTTB",component:H},{path:"/epekerja/admin/pegawai/pttb-tambah",name:"Tambah PTTB",component:G},{path:"/epekerja/admin/pegawai/pttb-edit/:id",name:"Edit PTTB",component:L,exact:!0},{path:"/epekerja/admin/pegawai/semua-pegawai",name:"Semua Pegawai",component:Y},{path:"/epekerja/admin/pegawai/rekap-pegawai",name:"Rekapitulasi Pegawai",component:F},{path:"/epekerja/admin/pembaruan-sk/ptth",name:"Pembaruan SK PTTH",component:Z,exact:!0},{path:"/epekerja/admin/pembaruan-sk/ptth/:id",name:"Riwayat SK",component:q,exact:!0},{path:"/epekerja/admin/pembaruan-sk/pttb",name:"Pembaruan SK PTTB",component:V,exact:!0},{path:"/epekerja/admin/pembaruan-sk/pttb/:id",name:"Riwayat SK",component:Q,exact:!0},{path:"/epekerja/admin/duk",name:"DUK PNS",component:W},{path:"/epekerja/admin/duk-detail/:id/:no_urut",name:"Detail DUK PNS",component:X},{path:"/epekerja/admin/duk-edit/:id",name:"Edit DUK PNS",component:$},{path:"/epekerja/admin/masa-kerja",name:"Daftar Pegawai Negeri Sipil Berdasarkan Masa Kerja",component:ee,exact:!0},{path:"/epekerja/admin/masa-kerja-detail/:id",name:"Detail Masa Kerja Pegawai",component:ae,exact:!0},{path:"/epekerja/admin/masa-kerja-edit/:id",name:"Edit Masa Kerja Pegawai",component:ne,exact:!0},{path:"/epekerja/admin/masa-kerja/pegawai/:id",name:"Riwayat Masa Kerja Pegawai",component:te,exact:!0},{path:"/epekerja/admin/masa-kerja/riwayat",name:"Riwayat Pegawai Berdasarkan Masa Kerja",component:ie,exact:!0},{path:"/epekerja/admin/kenaikan-pangkat",name:"Kenaikan Pangkat PNS",component:re,exact:!0},{path:"/epekerja/admin/kgb",name:"Kenaikan Gaji Berkala",component:oe,exact:!0},{path:"/epekerja/admin/kgb/:id/daftar",name:"Daftar Kenaikan Gaji Berkala",component:le,exact:!0},{path:"/epekerja/admin/kgb/semua-kgb",name:"Semua Kenaikan Gaji Berkala Pegawai",component:me,exact:!0},{path:"/epekerja/admin/cuti",name:"Cuti Pegawai",component:ce,exact:!0},{path:"/epekerja/admin/cuti/tambah",name:"Tambah Cuti Pegawai",component:se,exact:!0},{path:"/epekerja/admin/cuti/edit/:id",name:"Edit Cuti Pegawai",component:de,exact:!0},{path:"/epekerja/admin/cuti/riwayat/:id",name:"Riwayat Cuti Pegawai",component:ue,exact:!0},{path:"/epekerja/admin/cuti/cuti-pegawai",name:"Semua Cuti Pegawai",component:pe,exact:!0},{path:"/epekerja/admin/absensi",name:"Absensi",component:be,exact:!0},{path:"/epekerja/admin/absensi/pns",name:"Absensi PNS",component:be},{path:"/epekerja/admin/absensi/ptth",name:"Absensi PTTH",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(18)]).then(n.bind(null,981))}))},{path:"/epekerja/admin/absensi/pttb",name:"Absensi PTTB",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(17)]).then(n.bind(null,982))}))},{path:"/epekerja/admin/absensi/riwayat-absensi/:id",name:"Riwayat Absensi Pegawai",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(7),n.e(24)]).then(n.bind(null,991))}))},{path:"/epekerja/admin/absensi/rekap-absensi",name:"Rekap Absensi Pegawai",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(7),n.e(39)]).then(n.bind(null,1001))}))},{path:"/epekerja/admin/penghargaan",name:"Penghargaan",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(32)]).then(n.bind(null,1021))})),exact:!0},{path:"/epekerja/admin/penghargaan/tambah",name:"Tambah Penghargaan",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(56)]).then(n.bind(null,1044))})),exact:!0},{path:"/epekerja/admin/penghargaan/edit/:id",name:"Edit Penghargaan",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(50)]).then(n.bind(null,1045))})),exact:!0},{path:"/epekerja/admin/penghargaan/detail/:id",name:"Detail Penghargaan",component:r.a.lazy((function(){return Promise.all([n.e(2),n.e(54)]).then(n.bind(null,983))})),exact:!0},{path:"/epekerja/admin/pensiun",name:"Pensiun",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(23)]).then(n.bind(null,994))})),exact:!0},{path:"/epekerja/admin/pensiun/tambah",name:"Tambah Pensiun",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(57)]).then(n.bind(null,1046))}))},{path:"/epekerja/admin/pensiun/edit/:id",name:"Edit Pensiun",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(66)]).then(n.bind(null,1047))}))},{path:"/epekerja/admin/pensiun/detail/:id",name:"Detail Pensiun",component:r.a.lazy((function(){return Promise.all([n.e(2),n.e(65)]).then(n.bind(null,984))}))},{path:"/epekerja/admin/mutasi",name:"Mutasi",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(19)]).then(n.bind(null,1002))})),exact:!0},{path:"/epekerja/admin/mutasi/tambah",name:"Tambah Mutasi",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(51)]).then(n.bind(null,1048))})),exact:!0},{path:"/epekerja/admin/mutasi/detail/:id",name:"Detail Mutasi",component:r.a.lazy((function(){return Promise.all([n.e(2),n.e(64)]).then(n.bind(null,985))})),exact:!0},{path:"/epekerja/admin/mutasi/edit/:id",name:"Edit Mutasi",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(47)]).then(n.bind(null,1049))})),exact:!0},{path:"/epekerja/admin/users",name:"Users",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(43)]).then(n.bind(null,1050))})),exact:!0},{path:"/epekerja/admin/users/tambah",name:"Tambah User",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(93)]).then(n.bind(null,1051))})),exact:!0},{path:"/epekerja/admin/users/detail/:id",name:"Detail User",component:r.a.lazy((function(){return n.e(94).then(n.bind(null,1052))})),exact:!0},{path:"/epekerja/admin/akun",name:"Akun Saya",component:r.a.lazy((function(){return n.e(76).then(n.bind(null,986))})),exact:!0},{path:"/epekerja/admin/akun/edit/:id",name:"Edit Akun",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(77)]).then(n.bind(null,1053))})),exact:!0},{path:"/epekerja/admin/akun/edit-password/:id",name:"Edit Password",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(78)]).then(n.bind(null,1054))})),exact:!0}],he=Object(c.jsx)("div",{className:"pt-3 text-center",children:Object(c.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),ke=function(){return Object(c.jsx)("main",{className:"c-main",children:Object(c.jsx)(l.o,{fluid:!0,children:Object(c.jsx)(i.Suspense,{fallback:he,children:Object(c.jsxs)(o.d,{children:[je.map((function(e,a){return e.component&&Object(c.jsx)(o.b,{path:e.path,exact:e.exact,name:e.name,render:function(a){return Object(c.jsx)(l.u,{children:Object(c.jsx)(e.component,Object(t.a)({},a))})}},a)})),Object(c.jsx)(o.a,{from:"/",to:"/epekerja/admin/dashboard"})]})})})})},ge=r.a.memo(ke),fe=function(){var e=(new Date).getFullYear();return Object(c.jsx)(l.v,{fixed:!1,children:Object(c.jsx)("div",{children:Object(c.jsxs)("span",{className:"ml-1",children:["\xa9 ",e," IT DISPERKIM"]})})})},Pe=r.a.memo(fe),xe=n(170),we=n(630),ye=function(){var e=Object(xe.b)(),a=Object(xe.c)((function(e){return e.sidebarShow}));return Object(c.jsxs)(l.z,{withSubheader:!0,children:[Object(c.jsx)(l.lb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var n=!![!1,"responsive"].includes(a)||"responsive";e({type:"set",sidebarShow:n})}}),Object(c.jsx)(l.lb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var n=![!0,"responsive"].includes(a)&&"responsive";e({type:"set",sidebarShow:n})}}),Object(c.jsxs)(l.A,{className:"mx-auto d-lg-none",to:"/",children:[Object(c.jsx)("img",{src:we.e,alt:"logo-pemkot-smd",width:35,className:"mr-2"}),Object(c.jsx)("h2",{children:"E-Pekerja"})]}),Object(c.jsx)(l.B,{className:"d-md-down-none mr-auto"}),Object(c.jsx)(l.B,{className:"px-3",children:Object(c.jsx)(Ie,{})}),Object(c.jsxs)(l.gb,{className:"px-3 justify-content-between",children:[Object(c.jsx)(l.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:je}),Object(c.jsx)("div",{className:"d-md-down-none mfe-2 c-subheader-nav"})]})]})},Oe=n(10),ve=n(639),Se=n(632),ze=n.n(Se),Ne=n(633),Ce=n.n(Ne),Te=n(626),De=n(646),_e=n(163),Ee=Ce()(ze.a),Ie=function(){var e=Object(o.g)(),a=Object(i.useState)(null),n=Object(Oe.a)(a,2),t=n[0],r=n[1],m=Object(i.useContext)(_e.a).userDispatch;Object(i.useEffect)((function(){!function(e,a){Te.a.get("user").then((function(n){console.log(n.data.user),e(n.data.user),a({type:"SAVE_USER",payload:n.data.user})})).catch((function(e){}))}(r,m)}),[m]);return Object(c.jsxs)(l.q,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(c.jsx)(l.t,{className:"c-header-nav-link",caret:!1,children:Object(c.jsx)("div",{className:"c-avatar",children:Object(c.jsx)(l.C,{src:t?Object(De.b)(t.foto_profil):"",style:{height:"36px"},className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})})}),Object(c.jsxs)(l.s,{className:"pt-0",placement:"bottom-end",children:[Object(c.jsx)(l.r,{header:!0,tag:"div",color:"light",className:"text-center",children:Object(c.jsx)("strong",{children:"Pengaturan"})}),Object(c.jsxs)(l.r,{onClick:function(){e.push("/epekerja/admin/akun")},children:[Object(c.jsx)(ve.a,{name:"cil-user",className:"mfe-2"}),"Akun Saya"]}),Object(c.jsxs)(l.r,{onClick:function(){Ee.fire({icon:"warning",title:"Logout",text:"Anda yakin ingin logout ?",confirmButtonText:"YA",showCancelButton:"TIDAK"}).then((function(e){e.isConfirmed&&ze.a.fire("Anda berhasil Logout","","success").then((function(e){Te.a.post("logout").then((function(e){})).catch((function(e){return console.log(e.response.message)})),localStorage.clear(),window.location.href="/epekerja/login"}))}))},children:[Object(c.jsx)(ve.a,{name:"cil-lock-locked",className:"mfe-2"}),"Log Out"]})]})]})},Ae=(n(740),n(750),n(589)),Be=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/epekerja/user/dashboard",icon:Object(c.jsx)(ve.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Data Kepegawaian Saya",to:"/epekerja/user/data-kepegawaian",icon:Object(c.jsx)(ve.a,{content:Ae.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Akun Saya",to:"/epekerja/user/akun",icon:Object(c.jsx)(ve.a,{content:Ae.a,customClasses:"c-sidebar-nav-icon"})}],Ke=function(){var e=Object(xe.b)(),a=Object(xe.c)((function(e){return e.sidebarShow}));return Object(c.jsxs)(l.Y,{show:a,onShowChange:function(a){return e({type:"set",sidebarShow:a})},children:[Object(c.jsxs)(l.Z,{className:"d-md-down-none",to:"/",children:[Object(c.jsx)("img",{src:we.e,alt:"logo-pemkot-smd",width:35,className:"mr-2"}),Object(c.jsx)("h2",{children:"E-Pekerja"})]}),Object(c.jsx)(l.bb,{children:Object(c.jsx)(l.p,{items:Be,components:{CSidebarNavDivider:l.cb,CSidebarNavDropdown:l.db,CSidebarNavItem:l.eb,CSidebarNavTitle:l.fb}})}),Object(c.jsx)(l.ab,{className:"c-d-md-down-none"})]})},Me=r.a.memo(Ke),Re=n(965),He=n(966),Ue=n(967),Ge=n(968),Je=n(969),Le=n(535),Ye=n(583),Fe=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/epekerja/admin/dashboard",icon:Object(c.jsx)(ve.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavDropdown",name:"Master Data",route:"/epekerja/admin/master-data",icon:Object(c.jsx)(ve.a,{content:Re.a,customClasses:"c-sidebar-nav-icon"}),_children:[{_tag:"CSidebarNavItem",name:"Agama",to:"/epekerja/admin/master-data/agama"},{_tag:"CSidebarNavItem",name:"Pangkat Golongan",to:"/epekerja/admin/master-data/pangkat-golongan"},{_tag:"CSidebarNavItem",name:"Pangkat Eselon",to:"/epekerja/admin/master-data/pangkat-eselon"},{_tag:"CSidebarNavItem",name:"Jabatan",to:"/epekerja/admin/master-data/jabatan"},{_tag:"CSidebarNavItem",name:"Bidang",to:"/epekerja/admin/master-data/bidang"},{_tag:"CSidebarNavItem",name:"Status Pegawai",to:"/epekerja/admin/master-data/status-pegawai"}]},{_tag:"CSidebarNavDropdown",name:"Data Pegawai",to:"/epekerja/admin/pegawai",icon:Object(c.jsx)(ve.a,{content:He.a,customClasses:"c-sidebar-nav-icon"}),_children:[{_tag:"CSidebarNavItem",name:"PNS",to:"/epekerja/admin/pegawai"},{_tag:"CSidebarNavItem",name:"PTTH",to:"/epekerja/admin/pegawai/ptth"},{_tag:"CSidebarNavItem",name:"PTTB",to:"/epekerja/admin/pegawai/pttb"},{_tag:"CSidebarNavItem",name:"Semua Pegawai",to:"/epekerja/admin/pegawai/semua-pegawai"},{_tag:"CSidebarNavItem",name:"Rekapitulasi Pegawai",to:"/epekerja/admin/pegawai/rekap-pegawai"}]},{_tag:"CSidebarNavDropdown",name:"Pembaruan SK Non ASN",to:"/epekerja/admin/pembaruan-sk",icon:Object(c.jsx)(ve.a,{content:He.a,customClasses:"c-sidebar-nav-icon"}),_children:[{_tag:"CSidebarNavItem",name:"PTTH",to:"/epekerja/admin/pembaruan-sk/ptth"},{_tag:"CSidebarNavItem",name:"PTTB",to:"/epekerja/admin/pembaruan-sk/pttb"}]},{_tag:"CSidebarNavItem",name:"Masa Kerja Pegawai",to:"/epekerja/admin/masa-kerja",icon:Object(c.jsx)(ve.a,{content:Ue.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Kenaikan Pangkat PNS",to:"/epekerja/admin/kenaikan-pangkat",icon:Object(c.jsx)(ve.a,{content:Ge.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Kenaikan Gaji Berkala",to:"/epekerja/admin/kgb",icon:Object(c.jsx)(ve.a,{content:Je.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Cuti Pegawai",to:"/epekerja/admin/cuti",icon:Object(c.jsx)(ve.a,{content:Le.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Penghargaan",to:"/epekerja/admin/penghargaan",icon:Object(c.jsx)(ve.a,{content:Ye.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Data Pensiun",to:"/epekerja/admin/pensiun",icon:Object(c.jsx)(ve.a,{content:He.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Data Mutasi",to:"/epekerja/admin/mutasi",icon:Object(c.jsx)(ve.a,{content:He.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Data Users",to:"/epekerja/admin/users",icon:Object(c.jsx)(ve.a,{content:He.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Akun Saya",to:"/epekerja/admin/akun",icon:Object(c.jsx)(ve.a,{content:Ae.a,customClasses:"c-sidebar-nav-icon"})}],Ze=function(){var e=Object(xe.b)(),a=Object(xe.c)((function(e){return e.sidebarShow}));return Object(c.jsxs)(l.Y,{show:a,onShowChange:function(a){return e({type:"set",sidebarShow:a})},children:[Object(c.jsxs)(l.Z,{className:"d-md-down-none",to:"/epekerja/admin",children:[Object(c.jsx)("img",{src:we.e,alt:"logo-pemkot-smd",width:35,className:"mr-2"}),Object(c.jsx)("h2",{children:"E-Pekerja"})]}),Object(c.jsx)(l.bb,{children:Object(c.jsx)(l.p,{items:Fe,components:{CSidebarNavDivider:l.cb,CSidebarNavDropdown:l.db,CSidebarNavItem:l.eb,CSidebarNavTitle:l.fb}})}),Object(c.jsx)(l.ab,{className:"c-d-md-down-none"})]})},qe=r.a.memo(Ze)}}]);
//# sourceMappingURL=9.47379a0f.chunk.js.map