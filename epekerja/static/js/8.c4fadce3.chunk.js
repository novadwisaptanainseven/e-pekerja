(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{643:function(e,a,n){"use strict";a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(n){if("filter_tanggal"===n){var t="first_date=".concat(a.startDate,"&last_date=").concat(a.endDate);window.open("".concat(localStorage.baseURL).concat(e,"/export/?").concat(t),"_self")}else if("filter_tahun"===n){var i="tahun=".concat(a);window.open("".concat(localStorage.baseURL).concat(e,"/export/?").concat(i),"_self")}else if("filter_bulan_tahun"===n){var r="bulan=".concat(a.bulan,"&tahun=").concat(a.tahun);window.open("".concat(localStorage.baseURL).concat(e,"/export?").concat(r),"_self")}}else window.open("".concat(localStorage.baseURL).concat(e,"/export"),"_self")}},645:function(e,a,n){"use strict";n.d(a,"d",(function(){return t})),n.d(a,"c",(function(){return i})),n.d(a,"b",(function(){return r})),n.d(a,"e",(function(){return o})),n.d(a,"a",(function(){return c.a}));var t=function(e){var a=e.split("/"),n=a[a.length-1];return"".concat(localStorage.baseURL,"image/").concat(n)},i=function(e){var a=e.split("/"),n=a[a.length-1];return"".concat(localStorage.baseURL,"ijazah/").concat(n)},r=function(e){var a=e.split("/"),n=a[a.length-1];return"".concat(localStorage.baseURL,"document/").concat(n)},o=function(e){window.open("".concat(localStorage.baseURL,"print-riwayat-golongan/").concat(e),"_blank")},c=n(643)},742:function(e,a,n){"use strict";n.r(a);var t=n(1),i=n(794),r=n(632),o=n.n(r),c=n(633),l=n.n(c),s=n(17),m=l()(o.a);a.default=function(){return Object(t.useEffect)((function(){localStorage.token?"2"!==localStorage.level&&m.fire({icon:"error",title:"Akses Diblok",text:"Hanya user non-admin yang bisa akses halaman ini"}).then((function(e){window.location.href="/epekerja/login",localStorage.clear()})):m.fire({icon:"error",title:"Akses Diblok",text:"Anda harus login terlebih dahulu"}).then((function(e){window.location.href="/epekerja/login"}))}),[]),Object(s.jsx)("div",{className:"c-app c-default-layout",children:localStorage.token&&"2"===localStorage.level&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i.f,{}),Object(s.jsxs)("div",{className:"c-wrapper",children:[Object(s.jsx)(i.d,{}),Object(s.jsx)("div",{className:"c-body",children:Object(s.jsx)(i.a,{})}),Object(s.jsx)(i.c,{})]})]})})}},744:function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));var t=n(626),i=function(){t.a.post("logout").then((function(e){localStorage.clear(),window.location.href="/epekerja/login"})).catch((function(e){return console.log(e.response.message)}))}},753:function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));var t=n(626),i=function(e,a){t.a.get("user").then((function(n){console.log(n.data.user),e(n.data.user),a({type:"SAVE_USER",payload:n.data.user})})).catch((function(e){}))}},754:function(e,a,n){"use strict";n.r(a);var t=n(9),i=n(1),r=n(794),o=n(632),c=n.n(o),l=n(633),s=n.n(l),m=n(744),d=n(163),u=n(753),p=n(17),b=s()(c.a);a.default=function(){var e=Object(i.useState)(""),a=Object(t.a)(e,2),n=a[0],o=a[1],c=Object(i.useContext)(d.a).currentUserDispatch;return console.log(n),Object(i.useEffect)((function(){(new Date).getTime()>localStorage.loginTimestamp&&b.fire({icon:"error",title:"Akses Dilarang",text:"Masa Waktu Login Anda Sudah Kadaluarsa. Silahkan Login Ulang!",showConfirmButton:!0}).then((function(e){Object(m.a)()}))}),[]),Object(i.useEffect)((function(){Object(u.a)(o,c)}),[c]),Object(i.useEffect)((function(){localStorage.token?"1"!==localStorage.level&&b.fire({icon:"error",title:"Akses Diblok",text:"Anda bukan admin"}).then((function(e){window.location.href="/epekerja/login",localStorage.clear()})):b.fire({icon:"error",title:"Akses Diblok",text:"Anda harus login terlebih dahulu"}).then((function(e){window.location.href="/epekerja/login"}))}),[]),Object(p.jsx)("div",{className:"c-app c-default-layout",children:localStorage.token&&"1"===localStorage.level&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(r.g,{}),Object(p.jsxs)("div",{className:"c-wrapper",children:[Object(p.jsx)(r.d,{}),Object(p.jsx)("div",{className:"c-body",children:Object(p.jsx)(r.b,{})}),Object(p.jsx)(r.c,{})]})]})})}},794:function(e,a,n){"use strict";n.d(a,"a",(function(){return u})),n.d(a,"b",(function(){return fe})),n.d(a,"c",(function(){return Pe})),n.d(a,"d",(function(){return ye})),n.d(a,"e",(function(){return Be})),n.d(a,"f",(function(){return Me})),n.d(a,"g",(function(){return We}));var t=n(2),i=n(1),r=n.n(i),o=n(20),c=n(628),l=[{path:"/epekerja/user",exact:!0,name:"Home"},{path:"/epekerja/user/dashboard",name:"Dashboard",component:r.a.lazy((function(){return n.e(67).then(n.bind(null,1010))}))},{path:"/epekerja/user/data-kepegawaian",name:"Data Kepegawaian",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(20)]).then(n.bind(null,992))}))},{path:"/epekerja/user/akun",name:"Akun",component:r.a.lazy((function(){return n.e(98).then(n.bind(null,977))}))},{path:"/epekerja/user/akun-edit",name:"Edit Akun",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(96)]).then(n.bind(null,1029))}))},{path:"/epekerja/user/akun-edit-password",name:"Edit Password",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(97)]).then(n.bind(null,1030))}))}],s=n(17),m=Object(s.jsx)("div",{className:"pt-3 text-center",children:Object(s.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),d=function(){return Object(s.jsx)("main",{className:"c-main",children:Object(s.jsx)(c.o,{fluid:!0,children:Object(s.jsx)(i.Suspense,{fallback:m,children:Object(s.jsxs)(o.d,{children:[l.map((function(e,a){return e.component&&Object(s.jsx)(o.b,{path:e.path,exact:e.exact,name:e.name,render:function(a){return Object(s.jsx)(c.u,{children:Object(s.jsx)(e.component,Object(t.a)({},a))})}},a)})),Object(s.jsx)(o.a,{from:"/",to:"/epekerja/user/dashboard"})]})})})})},u=r.a.memo(d),p=r.a.lazy((function(){return Promise.all([n.e(34),n.e(68)]).then(n.bind(null,995))})),b=r.a.lazy((function(){return Promise.all([n.e(1),n.e(70)]).then(n.bind(null,1011))})),j=r.a.lazy((function(){return Promise.all([n.e(0),n.e(82)]).then(n.bind(null,1031))})),h=r.a.lazy((function(){return Promise.all([n.e(0),n.e(81)]).then(n.bind(null,1012))})),g=r.a.lazy((function(){return Promise.all([n.e(1),n.e(73)]).then(n.bind(null,1013))})),k=r.a.lazy((function(){return Promise.all([n.e(0),n.e(90)]).then(n.bind(null,1032))})),f=r.a.lazy((function(){return Promise.all([n.e(0),n.e(89)]).then(n.bind(null,1014))})),x=r.a.lazy((function(){return Promise.all([n.e(1),n.e(72)]).then(n.bind(null,1015))})),P=r.a.lazy((function(){return Promise.all([n.e(0),n.e(88)]).then(n.bind(null,1033))})),w=r.a.lazy((function(){return Promise.all([n.e(0),n.e(87)]).then(n.bind(null,1016))})),O=r.a.lazy((function(){return Promise.all([n.e(1),n.e(51)]).then(n.bind(null,1017))})),y=r.a.lazy((function(){return Promise.all([n.e(0),n.e(86)]).then(n.bind(null,1034))})),v=r.a.lazy((function(){return Promise.all([n.e(0),n.e(85)]).then(n.bind(null,1018))})),S=r.a.lazy((function(){return Promise.all([n.e(1),n.e(71)]).then(n.bind(null,1019))})),z=r.a.lazy((function(){return Promise.all([n.e(0),n.e(84)]).then(n.bind(null,1035))})),N=r.a.lazy((function(){return Promise.all([n.e(0),n.e(83)]).then(n.bind(null,1020))})),C=r.a.lazy((function(){return Promise.all([n.e(1),n.e(59)]).then(n.bind(null,1021))})),T=r.a.lazy((function(){return Promise.all([n.e(0),n.e(63)]).then(n.bind(null,1036))})),_=r.a.lazy((function(){return Promise.all([n.e(0),n.e(62)]).then(n.bind(null,1022))})),D=r.a.lazy((function(){return Promise.all([n.e(1),n.e(74)]).then(n.bind(null,1023))})),E=r.a.lazy((function(){return Promise.all([n.e(0),n.e(92)]).then(n.bind(null,1037))})),A=r.a.lazy((function(){return Promise.all([n.e(0),n.e(91)]).then(n.bind(null,1024))})),I=r.a.lazy((function(){return Promise.all([n.e(1),n.e(27)]).then(n.bind(null,1038))})),B=r.a.lazy((function(){return Promise.all([n.e(0),n.e(37)]).then(n.bind(null,1039))})),K=r.a.lazy((function(){return Promise.all([n.e(0),n.e(30)]).then(n.bind(null,1040))})),R=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(13)]).then(n.bind(null,991))})),U=r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(29)]).then(n.bind(null,1041))})),M=r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(28)]).then(n.bind(null,1042))})),L=r.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(42)]).then(n.bind(null,1043))})),H=r.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(41)]).then(n.bind(null,1044))})),G=r.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(39)]).then(n.bind(null,1045))})),J=r.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(38)]).then(n.bind(null,1046))})),Y=r.a.lazy((function(){return Promise.all([n.e(1),n.e(40)]).then(n.bind(null,1047))})),F=r.a.lazy((function(){return n.e(93).then(n.bind(null,1025))})),Z=r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(36)]).then(n.bind(null,978))})),q=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(15)]).then(n.bind(null,1001))})),V=r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(35)]).then(n.bind(null,979))})),W=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(14)]).then(n.bind(null,1002))})),Q=r.a.lazy((function(){return Promise.all([n.e(1),n.e(52)]).then(n.bind(null,1026))})),X=r.a.lazy((function(){return Promise.all([n.e(2),n.e(53)]).then(n.bind(null,980))})),$=r.a.lazy((function(){return Promise.all([n.e(0),n.e(60)]).then(n.bind(null,1048))})),ee=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(23)]).then(n.bind(null,1003))})),ae=r.a.lazy((function(){return Promise.all([n.e(2),n.e(61)]).then(n.bind(null,981))})),ne=r.a.lazy((function(){return Promise.all([n.e(0),n.e(55)]).then(n.bind(null,982))})),te=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(21)]).then(n.bind(null,998))})),ie=r.a.lazy((function(){return Promise.all([n.e(2),n.e(69)]).then(n.bind(null,996))})),re=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(24)]).then(n.bind(null,994))})),oe=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(31)]).then(n.bind(null,1004))})),ce=r.a.lazy((function(){return Promise.all([n.e(1),n.e(48)]).then(n.bind(null,983))})),le=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(56)]).then(n.bind(null,993))})),se=r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(33)]).then(n.bind(null,999))})),me=r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(47)]).then(n.bind(null,1027))})),de=r.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(80)]).then(n.bind(null,796))})),ue=r.a.lazy((function(){return Promise.all([n.e(0),n.e(79)]).then(n.bind(null,795))})),pe=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(43)]).then(n.bind(null,1005))})),be=r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(32)]).then(n.bind(null,1006))})),je=r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(16)]).then(n.bind(null,984))})),he=[{path:"/epekerja/admin",exact:!0,name:"Home"},{path:"/epekerja/admin/dashboard",name:"Dashboard",component:p},{path:"/epekerja/admin/master-data",name:"Master Data",component:b,exact:!0},{path:"/epekerja/admin/master-data/agama",name:"Agama",component:b},{path:"/epekerja/admin/master-data/agama-tambah",name:"Tambah Agama",component:j},{path:"/epekerja/admin/master-data/agama-edit/:id",name:"Edit Agama",component:h},{path:"/epekerja/admin/master-data/pangkat-golongan",name:"Pangkat Golongan",component:g},{path:"/epekerja/admin/master-data/pangkat-golongan-tambah",name:"Tambah Pangkat Golongan",component:k},{path:"/epekerja/admin/master-data/pangkat-golongan-edit/:id",name:"Edit Pangkat Golongan",component:f},{path:"/epekerja/admin/master-data/pangkat-eselon",name:"Pangkat Eselon",component:x},{path:"/epekerja/admin/master-data/pangkat-eselon-tambah",name:"Tambah Pangkat Eselon",component:P},{path:"/epekerja/admin/master-data/pangkat-eselon-edit/:id",name:"Edit Pangkat Eselon",component:w},{path:"/epekerja/admin/master-data/jabatan",name:"Jabatan",component:O},{path:"/epekerja/admin/master-data/jabatan-tambah",name:"Tambah Jabatan",component:y},{path:"/epekerja/admin/master-data/jabatan-edit/:id",name:"Edit Jabatan",component:v},{path:"/epekerja/admin/master-data/bidang",name:"Bidang",component:S},{path:"/epekerja/admin/master-data/bidang-tambah",name:"Tambah Bidang",component:z},{path:"/epekerja/admin/master-data/bidang-edit/:id",name:"Edit Bidang",component:N},{path:"/epekerja/admin/master-data/sub-bidang",name:"Sub Bidang",component:C},{path:"/epekerja/admin/master-data/sub-bidang-tambah",name:"Tambah Sub Bidang",component:T},{path:"/epekerja/admin/master-data/sub-bidang-edit/:id",name:"Edit Sub Bidang",component:_},{path:"/epekerja/admin/master-data/status-pegawai",name:"Status Pegawai",component:D},{path:"/epekerja/admin/master-data/status-pegawai-tambah",name:"Tambah Status Pegawai",component:E},{path:"/epekerja/admin/master-data/status-pegawai-edit/:id",name:"Edit Status Pegawai",component:A},{path:"/epekerja/admin/pegawai",name:"Pegawai",component:I,exact:!0},{path:"/epekerja/admin/pegawai-tambah",name:"Tambah Pegawai",component:B},{path:"/epekerja/admin/pegawai-edit/:id",name:"Edit Pegawai",component:K},{path:"/epekerja/admin/pegawai-detail/:id",name:"Detail Pegawai",component:R},{path:"/epekerja/admin/pegawai/ptth",name:"PTTH",component:U},{path:"/epekerja/admin/pegawai/ptth-tambah",name:"Tambah PTTH",component:L},{path:"/epekerja/admin/pegawai/ptth-edit/:id",name:"Edit PTTH",component:G},{path:"/epekerja/admin/pegawai/pttb",name:"PTTB",component:M},{path:"/epekerja/admin/pegawai/pttb-tambah",name:"Tambah PTTB",component:H},{path:"/epekerja/admin/pegawai/pttb-edit/:id",name:"Edit PTTB",component:J,exact:!0},{path:"/epekerja/admin/pegawai/semua-pegawai",name:"Semua Pegawai",component:Y},{path:"/epekerja/admin/pegawai/rekap-pegawai",name:"Rekapitulasi Pegawai",component:F},{path:"/epekerja/admin/pembaruan-sk/ptth",name:"Pembaruan SK PTTH",component:Z,exact:!0},{path:"/epekerja/admin/pembaruan-sk/ptth/:id",name:"Riwayat SK",component:q,exact:!0},{path:"/epekerja/admin/pembaruan-sk/pttb",name:"Pembaruan SK PTTB",component:V,exact:!0},{path:"/epekerja/admin/pembaruan-sk/pttb/:id",name:"Riwayat SK",component:W,exact:!0},{path:"/epekerja/admin/duk",name:"DUK PNS",component:Q},{path:"/epekerja/admin/duk-detail/:id/:no_urut",name:"Detail DUK PNS",component:X},{path:"/epekerja/admin/duk-edit/:id",name:"Edit DUK PNS",component:$},{path:"/epekerja/admin/masa-kerja",name:"Daftar Pegawai Negeri Sipil Berdasarkan Masa Kerja",component:ee,exact:!0},{path:"/epekerja/admin/masa-kerja-detail/:id",name:"Detail Masa Kerja Pegawai",component:ae,exact:!0},{path:"/epekerja/admin/masa-kerja-edit/:id",name:"Edit Masa Kerja Pegawai",component:ne,exact:!0},{path:"/epekerja/admin/masa-kerja/pegawai/:id",name:"Riwayat Masa Kerja Pegawai",component:te,exact:!0},{path:"/epekerja/admin/masa-kerja/riwayat",name:"Riwayat Pegawai Berdasarkan Masa Kerja",component:ie,exact:!0},{path:"/epekerja/admin/kenaikan-pangkat",name:"Kenaikan Pangkat PNS",component:re,exact:!0},{path:"/epekerja/admin/kenaikan-pangkat/riwayat/:id",name:"Riwayat Golongan",component:oe,exact:!0},{path:"/epekerja/admin/kgb",name:"Kenaikan Gaji Berkala",component:ce,exact:!0},{path:"/epekerja/admin/kgb/:id/daftar",name:"Daftar Kenaikan Gaji Berkala",component:le,exact:!0},{path:"/epekerja/admin/kgb/semua-kgb",name:"Semua Kenaikan Gaji Berkala Pegawai",component:se,exact:!0},{path:"/epekerja/admin/cuti",name:"Cuti Pegawai",component:me,exact:!0},{path:"/epekerja/admin/cuti/tambah",name:"Tambah Cuti Pegawai",component:de,exact:!0},{path:"/epekerja/admin/cuti/edit/:id",name:"Edit Cuti Pegawai",component:ue,exact:!0},{path:"/epekerja/admin/cuti/riwayat/:id",name:"Riwayat Cuti Pegawai",component:pe,exact:!0},{path:"/epekerja/admin/cuti/cuti-pegawai",name:"Semua Cuti Pegawai",component:be,exact:!0},{path:"/epekerja/admin/absensi",name:"Absensi",component:je,exact:!0},{path:"/epekerja/admin/absensi/pns",name:"Absensi PNS",component:je},{path:"/epekerja/admin/absensi/ptth",name:"Absensi PTTH",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(18)]).then(n.bind(null,985))}))},{path:"/epekerja/admin/absensi/pttb",name:"Absensi PTTB",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(17)]).then(n.bind(null,986))}))},{path:"/epekerja/admin/absensi/riwayat-absensi/:id",name:"Riwayat Absensi Pegawai",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(7),n.e(22)]).then(n.bind(null,997))}))},{path:"/epekerja/admin/absensi/rekap-absensi",name:"Rekap Absensi Pegawai",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(7),n.e(45)]).then(n.bind(null,1007))}))},{path:"/epekerja/admin/penghargaan",name:"Penghargaan",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(26)]).then(n.bind(null,1028))})),exact:!0},{path:"/epekerja/admin/penghargaan/tambah",name:"Tambah Penghargaan",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(57)]).then(n.bind(null,1049))})),exact:!0},{path:"/epekerja/admin/penghargaan/edit/:id",name:"Edit Penghargaan",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(49)]).then(n.bind(null,1050))})),exact:!0},{path:"/epekerja/admin/penghargaan/detail/:id",name:"Detail Penghargaan",component:r.a.lazy((function(){return Promise.all([n.e(2),n.e(54)]).then(n.bind(null,987))})),exact:!0},{path:"/epekerja/admin/pensiun",name:"Pensiun",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(25)]).then(n.bind(null,1e3))})),exact:!0},{path:"/epekerja/admin/pensiun/tambah",name:"Tambah Pensiun",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(58)]).then(n.bind(null,1051))}))},{path:"/epekerja/admin/pensiun/edit/:id",name:"Edit Pensiun",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(66)]).then(n.bind(null,1052))}))},{path:"/epekerja/admin/pensiun/detail/:id",name:"Detail Pensiun",component:r.a.lazy((function(){return Promise.all([n.e(2),n.e(65)]).then(n.bind(null,988))}))},{path:"/epekerja/admin/mutasi",name:"Mutasi",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(19)]).then(n.bind(null,1008))})),exact:!0},{path:"/epekerja/admin/mutasi/tambah",name:"Tambah Mutasi",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(50)]).then(n.bind(null,1053))})),exact:!0},{path:"/epekerja/admin/mutasi/detail/:id",name:"Detail Mutasi",component:r.a.lazy((function(){return Promise.all([n.e(2),n.e(64)]).then(n.bind(null,989))})),exact:!0},{path:"/epekerja/admin/mutasi/edit/:id",name:"Edit Mutasi",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(46)]).then(n.bind(null,1054))})),exact:!0},{path:"/epekerja/admin/users",name:"Users",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(44)]).then(n.bind(null,1055))})),exact:!0},{path:"/epekerja/admin/users/tambah",name:"Tambah User",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(94)]).then(n.bind(null,1056))})),exact:!0},{path:"/epekerja/admin/users/detail/:id",name:"Detail User",component:r.a.lazy((function(){return n.e(95).then(n.bind(null,1057))})),exact:!0},{path:"/epekerja/admin/akun",name:"Akun Saya",component:r.a.lazy((function(){return n.e(76).then(n.bind(null,990))})),exact:!0},{path:"/epekerja/admin/akun/edit/:id",name:"Edit Akun",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(77)]).then(n.bind(null,1058))})),exact:!0},{path:"/epekerja/admin/akun/edit-password/:id",name:"Edit Password",component:r.a.lazy((function(){return Promise.all([n.e(0),n.e(78)]).then(n.bind(null,1059))})),exact:!0}],ge=Object(s.jsx)("div",{className:"pt-3 text-center",children:Object(s.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),ke=function(){return Object(s.jsx)("main",{className:"c-main",children:Object(s.jsx)(c.o,{fluid:!0,children:Object(s.jsx)(i.Suspense,{fallback:ge,children:Object(s.jsxs)(o.d,{children:[he.map((function(e,a){return e.component&&Object(s.jsx)(o.b,{path:e.path,exact:e.exact,name:e.name,render:function(a){return Object(s.jsx)(c.u,{children:Object(s.jsx)(e.component,Object(t.a)({},a))})}},a)})),Object(s.jsx)(o.a,{from:"/",to:"/epekerja/admin/dashboard"})]})})})})},fe=r.a.memo(ke),xe=function(){var e=(new Date).getFullYear();return Object(s.jsx)(c.v,{fixed:!1,children:Object(s.jsx)("div",{children:Object(s.jsxs)("span",{className:"ml-1",children:["\xa9 ",e," IT DISPERKIM"]})})})},Pe=r.a.memo(xe),we=n(170),Oe=n(630),ye=function(){var e=Object(we.b)(),a=Object(we.c)((function(e){return e.sidebarShow}));return Object(s.jsxs)(c.z,{withSubheader:!0,children:[Object(s.jsx)(c.lb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var n=!![!1,"responsive"].includes(a)||"responsive";e({type:"set",sidebarShow:n})}}),Object(s.jsx)(c.lb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var n=![!0,"responsive"].includes(a)&&"responsive";e({type:"set",sidebarShow:n})}}),Object(s.jsxs)(c.A,{className:"mx-auto d-lg-none",to:"/",children:[Object(s.jsx)("img",{src:Oe.e,alt:"logo-pemkot-smd",width:35,className:"mr-2"}),Object(s.jsx)("h2",{children:"E-Pekerja"})]}),Object(s.jsx)(c.B,{className:"d-md-down-none mr-auto"}),Object(s.jsx)(c.B,{className:"px-3",children:Object(s.jsx)(Be,{})}),Object(s.jsxs)(c.gb,{className:"px-3 justify-content-between",children:[Object(s.jsx)(c.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:he}),Object(s.jsx)("div",{className:"d-md-down-none mfe-2 c-subheader-nav"})]})]})},ve=n(9),Se=n(639),ze=n(632),Ne=n.n(ze),Ce=n(633),Te=n.n(Ce),_e=n(744),De=n(753),Ee=n(645),Ae=n(163),Ie=Te()(Ne.a),Be=function(){var e=Object(o.g)(),a=Object(i.useState)(null),n=Object(ve.a)(a,2),t=n[0],r=n[1],l=Object(i.useContext)(Ae.a).userDispatch;Object(i.useEffect)((function(){Object(De.a)(r,l)}),[l]);return Object(s.jsxs)(c.q,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(s.jsx)(c.t,{className:"c-header-nav-link",caret:!1,children:Object(s.jsx)("div",{className:"c-avatar",children:Object(s.jsx)(c.C,{src:t?Object(Ee.d)(t.foto_profil):"",style:{height:"36px"},className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})})}),Object(s.jsxs)(c.s,{className:"pt-0",placement:"bottom-end",children:[Object(s.jsx)(c.r,{header:!0,tag:"div",color:"light",className:"text-center",children:Object(s.jsx)("strong",{children:"Pengaturan"})}),Object(s.jsxs)(c.r,{onClick:function(){e.push("/epekerja/admin/akun")},children:[Object(s.jsx)(Se.a,{name:"cil-user",className:"mfe-2"}),"Akun Saya"]}),Object(s.jsxs)(c.r,{onClick:function(){Ie.fire({icon:"warning",title:"Logout",text:"Anda yakin ingin logout ?",confirmButtonText:"YA",showCancelButton:"TIDAK"}).then((function(e){e.isConfirmed&&Ne.a.fire("Anda berhasil Logout","","success").then((function(e){Object(_e.a)(),localStorage.clear(),window.location.href="/epekerja/login"}))}))},children:[Object(s.jsx)(Se.a,{name:"cil-lock-locked",className:"mfe-2"}),"Log Out"]})]})]})},Ke=(n(742),n(754),n(589)),Re=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/epekerja/user/dashboard",icon:Object(s.jsx)(Se.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Data Kepegawaian Saya",to:"/epekerja/user/data-kepegawaian",icon:Object(s.jsx)(Se.a,{content:Ke.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Akun Saya",to:"/epekerja/user/akun",icon:Object(s.jsx)(Se.a,{content:Ke.a,customClasses:"c-sidebar-nav-icon"})}],Ue=function(){var e=Object(we.b)(),a=Object(we.c)((function(e){return e.sidebarShow}));return Object(s.jsxs)(c.Y,{show:a,onShowChange:function(a){return e({type:"set",sidebarShow:a})},children:[Object(s.jsxs)(c.Z,{className:"d-md-down-none",to:"/",children:[Object(s.jsx)("img",{src:Oe.e,alt:"logo-pemkot-smd",width:35,className:"mr-2"}),Object(s.jsx)("h2",{children:"E-Pekerja"})]}),Object(s.jsx)(c.bb,{children:Object(s.jsx)(c.p,{items:Re,components:{CSidebarNavDivider:c.cb,CSidebarNavDropdown:c.db,CSidebarNavItem:c.eb,CSidebarNavTitle:c.fb}})}),Object(s.jsx)(c.ab,{className:"c-d-md-down-none"})]})},Me=r.a.memo(Ue),Le=n(969),He=n(970),Ge=n(971),Je=n(972),Ye=n(973),Fe=n(535),Ze=n(583),qe=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/epekerja/admin/dashboard",icon:Object(s.jsx)(Se.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavDropdown",name:"Master Data",route:"/epekerja/admin/master-data",icon:Object(s.jsx)(Se.a,{content:Le.a,customClasses:"c-sidebar-nav-icon"}),_children:[{_tag:"CSidebarNavItem",name:"Agama",to:"/epekerja/admin/master-data/agama"},{_tag:"CSidebarNavItem",name:"Pangkat Golongan",to:"/epekerja/admin/master-data/pangkat-golongan"},{_tag:"CSidebarNavItem",name:"Pangkat Eselon",to:"/epekerja/admin/master-data/pangkat-eselon"},{_tag:"CSidebarNavItem",name:"Jabatan",to:"/epekerja/admin/master-data/jabatan"},{_tag:"CSidebarNavItem",name:"Bidang",to:"/epekerja/admin/master-data/bidang"},{_tag:"CSidebarNavItem",name:"Status Pegawai",to:"/epekerja/admin/master-data/status-pegawai"}]},{_tag:"CSidebarNavDropdown",name:"Data Pegawai",to:"/epekerja/admin/pegawai",icon:Object(s.jsx)(Se.a,{content:He.a,customClasses:"c-sidebar-nav-icon"}),_children:[{_tag:"CSidebarNavItem",name:"PNS",to:"/epekerja/admin/pegawai"},{_tag:"CSidebarNavItem",name:"PTTH",to:"/epekerja/admin/pegawai/ptth"},{_tag:"CSidebarNavItem",name:"PTTB",to:"/epekerja/admin/pegawai/pttb"},{_tag:"CSidebarNavItem",name:"Semua Pegawai",to:"/epekerja/admin/pegawai/semua-pegawai"},{_tag:"CSidebarNavItem",name:"Rekapitulasi Pegawai",to:"/epekerja/admin/pegawai/rekap-pegawai"}]},{_tag:"CSidebarNavDropdown",name:"Pembaruan SK Non ASN",to:"/epekerja/admin/pembaruan-sk",icon:Object(s.jsx)(Se.a,{content:He.a,customClasses:"c-sidebar-nav-icon"}),_children:[{_tag:"CSidebarNavItem",name:"PTTH",to:"/epekerja/admin/pembaruan-sk/ptth"},{_tag:"CSidebarNavItem",name:"PTTB",to:"/epekerja/admin/pembaruan-sk/pttb"}]},{_tag:"CSidebarNavItem",name:"Masa Kerja Pegawai",to:"/epekerja/admin/masa-kerja",icon:Object(s.jsx)(Se.a,{content:Ge.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Kenaikan Pangkat PNS",to:"/epekerja/admin/kenaikan-pangkat",icon:Object(s.jsx)(Se.a,{content:Je.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Kenaikan Gaji Berkala",to:"/epekerja/admin/kgb",icon:Object(s.jsx)(Se.a,{content:Ye.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Cuti Pegawai",to:"/epekerja/admin/cuti",icon:Object(s.jsx)(Se.a,{content:Fe.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Penghargaan",to:"/epekerja/admin/penghargaan",icon:Object(s.jsx)(Se.a,{content:Ze.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Data Pensiun",to:"/epekerja/admin/pensiun",icon:Object(s.jsx)(Se.a,{content:He.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Data Mutasi",to:"/epekerja/admin/mutasi",icon:Object(s.jsx)(Se.a,{content:He.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Data Users",to:"/epekerja/admin/users",icon:Object(s.jsx)(Se.a,{content:He.a,customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",name:"Akun Saya",to:"/epekerja/admin/akun",icon:Object(s.jsx)(Se.a,{content:Ke.a,customClasses:"c-sidebar-nav-icon"})}],Ve=function(){var e=Object(we.b)(),a=Object(we.c)((function(e){return e.sidebarShow}));return Object(s.jsxs)(c.Y,{show:a,onShowChange:function(a){return e({type:"set",sidebarShow:a})},children:[Object(s.jsxs)(c.Z,{className:"d-md-down-none",to:"/epekerja/admin",children:[Object(s.jsx)("img",{src:Oe.e,alt:"logo-pemkot-smd",width:35,className:"mr-2"}),Object(s.jsx)("h2",{children:"E-Pekerja"})]}),Object(s.jsx)(c.bb,{children:Object(s.jsx)(c.p,{items:qe,components:{CSidebarNavDivider:c.cb,CSidebarNavDropdown:c.db,CSidebarNavItem:c.eb,CSidebarNavTitle:c.fb}})}),Object(s.jsx)(c.ab,{className:"c-d-md-down-none"})]})},We=r.a.memo(Ve)}}]);
//# sourceMappingURL=8.c4fadce3.chunk.js.map