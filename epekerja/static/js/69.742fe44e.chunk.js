(this.webpackJsonpEPekerja=this.webpackJsonpEPekerja||[]).push([[69],{1054:function(e,t,a){"use strict";a.r(t);var c=a(7),n=a(1),s=a(627),r=a(637),i=a(982),j=a(984),d=a(163),l=a(642),b=a(656),h=a(40),o=a(626),O=a(704),x=a(17);t.default=function(){var e=Object(n.useContext)(d.a),t=e.dashboardState,a=e.dashboardDispatch,u=e.strukturState,m=e.strukturDispatch,g=t.data,p=u.data,f=Object(n.useState)("1"),S=Object(c.a)(f,2),k=S[0],w=S[1];return Object(n.useEffect)((function(){g||Object(b.a)(a)}),[g,a]),Object(n.useEffect)((function(){var e;(e=m)({type:h.LOADING}),o.a.get("user/struktur").then((function(t){e({type:h.SUCCESS,payload:t.data.data}),console.log(t.data)})).catch((function(t){e({type:h.ERROR,payload:t.response.data.message}),console.log(t.response.data)}))}),[m]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("h1",{children:["Selamat Datang ",g&&g.nama_pegawai," di E-Pekerja"]}),Object(x.jsx)("hr",{}),Object(x.jsxs)(s.X,{children:[Object(x.jsx)(s.n,{xs:"12",sm:"4",lg:"4",children:Object(x.jsx)("img",{className:"img-thumbnail mb-4",width:400,src:g?Object(l.d)(g.foto_pegawai):"",alt:"foto-pegawai"})}),Object(x.jsxs)(s.n,{children:[Object(x.jsxs)(s.X,{children:[Object(x.jsx)(s.n,{md:"4",children:Object(x.jsx)(s.nb,{text:"Jumlah Keluarga",header:g?g.total_keluarga.toString():"...",color:"primary",iconPadding:!1,children:Object(x.jsx)(r.a,{width:24,content:i.a})})}),Object(x.jsx)(s.n,{md:"4",children:Object(x.jsx)(s.nb,{text:"Gaji Pokok",header:g?g.gaji_pokok.toLocaleString("id",{style:"currency",currency:"IDR"}):"...",color:"success",iconPadding:!1,children:Object(x.jsx)(r.a,{width:24,content:j.a})})}),Object(x.jsx)(s.n,{md:"4",children:Object(x.jsx)(s.nb,{text:"Status Pegawai",header:g?g.status_pegawai:"...",color:"info",iconPadding:!1,children:Object(x.jsx)(r.a,{width:24,name:"cil-user"})})})]}),Object(x.jsx)(s.X,{children:Object(x.jsx)(s.n,{children:Object(x.jsxs)(s.h,{children:[Object(x.jsx)(s.l,{children:Object(x.jsx)(s.m,{children:"Biodata Singkat"})}),Object(x.jsx)(s.i,{children:Object(x.jsx)("table",{className:"table",children:Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Nama"}),Object(x.jsx)("th",{children:":"}),Object(x.jsx)("td",{children:g&&g.pegawai.nama})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Alamat"}),Object(x.jsx)("th",{children:":"}),Object(x.jsx)("td",{children:g&&g.pegawai.alamat})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"No. HP"}),Object(x.jsx)("th",{children:":"}),Object(x.jsx)("td",{children:g&&g.pegawai.no_hp})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Email"}),Object(x.jsx)("th",{children:":"}),Object(x.jsx)("td",{children:g&&g.pegawai.email})]})]})})})]})})})]})]}),Object(x.jsx)(s.X,{children:Object(x.jsx)(s.n,{children:Object(x.jsxs)(s.h,{children:[Object(x.jsx)(s.l,{children:"Struktur Organisasi"}),Object(x.jsx)(s.i,{children:Object(x.jsxs)(s.kb,{activeTab:k,onActiveTabChange:function(e){w(e)},children:[Object(x.jsx)(s.S,{variant:"pills",children:p&&p.map((function(e,t){return Object(x.jsx)(s.T,{children:Object(x.jsx)(s.U,{"data-tab":e.id,children:Object(O.a)(e.nama_struktur)})},t)}))}),Object(x.jsx)(s.ib,{children:p&&p.map((function(e,t){return Object(x.jsx)(s.jb,{"data-tab":e.id,children:Object(x.jsx)("div",{className:"mt-3",children:e.gambar?Object(x.jsx)("div",{className:"mt-3",children:Object(x.jsx)("img",{style:{width:"100%"},src:Object(l.b)(e.gambar),alt:"struktur-organisasi-img"})}):Object(x.jsx)("div",{className:"text-center mt-3",children:"Belum ada Gambar. Silahkan upload terlebih dahulu"})})},t)}))})]})})]})})})]})}},656:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(40),n=a(626),s=function(e){e({type:c.DASHBOARD_LOADING}),n.a.get("user/dashboard").then((function(t){e({type:c.DASHBOARD_SUCCESS,payload:t.data.data}),console.log(t.data)})).catch((function(t){e({type:c.DASHBOARD_ERROR,payload:t.response.data.message}),console.log(t.response.data)}))}},704:function(e,t,a){"use strict";t.a=function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}}}]);
//# sourceMappingURL=69.742fe44e.chunk.js.map